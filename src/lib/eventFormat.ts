import type { ChurchEvent } from "@/lib/events";

// Event times are Eastern wall-clock strings ("YYYY-MM-DD HH:mm"); format them as UTC
// so the displayed time never shifts with the viewer's own time zone.
const asDate = (s: string) => new Date(`${s.slice(0, 10)}T${s.slice(11, 16) || "00:00"}:00Z`);

const fmt = (opts: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat("en-US", { ...opts, timeZone: "UTC" });
const timeFmt = fmt({ hour: "numeric", minute: "2-digit" });
const dayFmt = fmt({ weekday: "long", month: "long", day: "numeric" });
const shortDayFmt = fmt({ weekday: "short" });
const monthFmt = fmt({ month: "long", year: "numeric" });

export const dayKey = (e: ChurchEvent) => e.start.slice(0, 10);
export const formatDay = (key: string) => dayFmt.format(asDate(key));
export const formatWeekday = (key: string) => shortDayFmt.format(asDate(key));
export const formatMonth = (key: string) => monthFmt.format(asDate(key));
export const dayOfMonth = (key: string) => Number(key.slice(8, 10));

export function formatTime(e: ChurchEvent) {
  if (e.allDay) return "All day";
  const start = timeFmt.format(asDate(e.start));
  const end = e.end && e.end !== e.start && e.end.slice(0, 10) === e.start.slice(0, 10) ? timeFmt.format(asDate(e.end)) : "";
  return end ? `${start} – ${end}` : start;
}

const stamp = (s: string) => s.replace(/[-: ]/g, "").slice(0, 12) + "00";

export function googleCalendarUrl(e: ChurchEvent) {
  const dates = e.allDay
    ? `${e.start.slice(0, 10).replace(/-/g, "")}/${new Date(Date.parse(e.start.slice(0, 10)) + 86_400_000).toISOString().slice(0, 10).replace(/-/g, "")}`
    : `${stamp(e.start).replace(/(\d{8})/, "$1T")}/${stamp(e.end || e.start).replace(/(\d{8})/, "$1T")}`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: e.title,
    dates,
    ctz: "America/New_York",
    details: `${e.subtitle ? e.subtitle + "\n" : ""}${e.url}`,
    location: e.venue,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

export function icsHref(e: ChurchEvent) {
  const dt = (s: string) => stamp(s).replace(/(\d{8})/, "$1T");
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wayman Temple//Events//EN",
    "BEGIN:VEVENT",
    `UID:wayman-${e.id}@wayman.org`,
    e.allDay ? `DTSTART;VALUE=DATE:${e.start.slice(0, 10).replace(/-/g, "")}` : `DTSTART;TZID=America/New_York:${dt(e.start)}`,
    e.allDay ? "" : `DTEND;TZID=America/New_York:${dt(e.end || e.start)}`,
    `SUMMARY:${e.title.replace(/[,;]/g, "\\$&")}`,
    `LOCATION:${e.venue.replace(/[,;]/g, "\\$&")}`,
    `URL:${e.url}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean);
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
}

/** Ask the registration form to open with this event selected. */
export function requestRsvp(id: number) {
  window.dispatchEvent(new CustomEvent("wayman:rsvp", { detail: id }));
  document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
}
