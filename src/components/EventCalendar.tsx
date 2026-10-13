"use client";

import { useMemo, useState } from "react";
import { CalendarPlus, ChevronLeft, ChevronRight, ExternalLink, List, CalendarDays, MapPin, Ticket } from "lucide-react";
import type { ChurchEvent } from "@/lib/events";
import {
  dayKey,
  dayOfMonth,
  formatDay,
  formatMonth,
  formatTime,
  formatWeekday,
  googleCalendarUrl,
  icsHref,
  requestRsvp,
} from "@/lib/eventFormat";

const locations = [
  { key: "All", label: "All locations" },
  { key: "South", label: "South Campus" },
  { key: "West", label: "West Campus" },
  { key: "Online", label: "Online" },
] as const;

type LocationKey = (typeof locations)[number]["key"];

function groupByDay(events: ChurchEvent[]) {
  const map = new Map<string, ChurchEvent[]>();
  for (const e of events) map.set(dayKey(e), [...(map.get(dayKey(e)) ?? []), e]);
  return [...map.entries()];
}

function EventRow({ e }: { e: ChurchEvent }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="rounded-2xl bg-white px-5 py-4 ring-1 ring-cream-200 transition-shadow hover:shadow-lg hover:shadow-plum-900/5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h4 className="font-serif text-xl leading-snug font-semibold text-plum-900">{e.title}</h4>
          <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="font-semibold text-berry-500">{formatTime(e)}</span>
            {e.venue && (
              <span className="flex items-center gap-1 text-ink/55">
                <MapPin size={12} /> {e.venue}
              </span>
            )}
            {e.subtitle && e.subtitle !== e.venue && <span className="text-ink/55">{e.subtitle}</span>}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            onClick={() => requestRsvp(e.id)}
            className="inline-flex items-center gap-1.5 rounded-full bg-plum-700 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-plum-800"
          >
            {e.price ? <Ticket size={13} /> : null}
            {e.price ? `Tickets · $${e.price}` : "RSVP"}
          </button>
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-plum-700 ring-1 ring-plum-200 transition-colors hover:bg-plum-50"
            >
              <CalendarPlus size={13} /> Add
            </button>
            {open && (
              <div className="absolute right-0 z-10 mt-2 w-44 rounded-xl bg-white p-1.5 text-sm shadow-xl ring-1 ring-cream-200">
                <a href={googleCalendarUrl(e)} target="_blank" rel="noopener noreferrer" className="block rounded-lg px-3 py-2 hover:bg-plum-50">
                  Google Calendar
                </a>
                <a href={icsHref(e)} download={`wayman-event-${e.id}.ics`} className="block rounded-lg px-3 py-2 hover:bg-plum-50">
                  Apple / Outlook (.ics)
                </a>
              </div>
            )}
          </div>
          <a
            href={e.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Details for ${e.title}`}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-plum-700 ring-1 ring-plum-200 transition-colors hover:bg-plum-50"
          >
            <ExternalLink size={13} /> Details
          </a>
        </div>
      </div>
    </li>
  );
}

function DayGroup({ day, events }: { day: string; events: ChurchEvent[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[150px_1fr]">
      <div className="md:sticky md:top-24 md:self-start">
        <p className="eyebrow text-[11px] text-gold-600">{formatWeekday(day)}</p>
        <p className="font-serif text-2xl font-semibold text-plum-900">{formatDay(day).split(", ")[1]}</p>
      </div>
      <ul className="space-y-2">
        {events.map((e) => (
          <EventRow key={e.id} e={e} />
        ))}
      </ul>
    </div>
  );
}

export default function EventCalendar({ events }: { events: ChurchEvent[] }) {
  const [view, setView] = useState<"agenda" | "month">("agenda");
  const [location, setLocation] = useState<LocationKey>("All");
  const [limit, setLimit] = useState(5);

  const filtered = useMemo(
    () => events.filter((e) => location === "All" || e.location === location),
    [events, location],
  );
  const days = useMemo(() => groupByDay(filtered), [filtered]);

  const months = useMemo(() => [...new Set(events.map((e) => dayKey(e).slice(0, 7)))], [events]);
  const [monthIdx, setMonthIdx] = useState(0);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  if (events.length === 0) return null;

  const month = months[Math.min(monthIdx, months.length - 1)];
  const firstWeekday = new Date(`${month}-01T00:00:00Z`).getUTCDay();
  const daysInMonth = new Date(Date.UTC(Number(month.slice(0, 4)), Number(month.slice(5, 7)), 0)).getUTCDate();
  const byDay = new Map(days);
  const cells = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => `${month}-${String(i + 1).padStart(2, "0")}`),
  ];
  const dayEvents = selectedDay ? byDay.get(selectedDay) ?? [] : [];

  return (
    <div>
      {/* Controls */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {locations.map((l) => (
            <button
              key={l.key}
              onClick={() => {
                setLocation(l.key);
                setLimit(5);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                location === l.key ? "bg-plum-700 text-white" : "bg-white text-plum-800 ring-1 ring-cream-300 hover:bg-plum-50"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
        <div className="inline-flex self-start rounded-full bg-white p-1 ring-1 ring-cream-300">
          {(["agenda", "month"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                view === v ? "bg-plum-700 text-white" : "text-plum-800 hover:bg-plum-50"
              }`}
            >
              {v === "agenda" ? <List size={15} /> : <CalendarDays size={15} />}
              {v === "agenda" ? "List" : "Month"}
            </button>
          ))}
        </div>
      </div>

      {view === "agenda" ? (
        <>
          <div className="space-y-8">
            {days.slice(0, limit).map(([day, list]) => (
              <DayGroup key={day} day={day} events={list} />
            ))}
            {days.length === 0 && <p className="text-ink/60">No upcoming events at this location.</p>}
          </div>
          {days.length > limit && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setLimit(limit + 5)}
                className="rounded-full px-6 py-3 text-sm font-semibold text-plum-800 ring-1 ring-plum-200 transition-colors hover:bg-plum-50"
              >
                Show more dates
              </button>
            </div>
          )}
        </>
      ) : (
        <div>
          <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-cream-200">
            <div className="flex items-center justify-between border-b border-cream-200 px-5 py-4">
              <button
                onClick={() => {
                  setMonthIdx(Math.max(0, monthIdx - 1));
                  setSelectedDay(null);
                }}
                disabled={monthIdx === 0}
                aria-label="Previous month"
                className="rounded-full p-2 text-plum-700 hover:bg-plum-50 disabled:opacity-30"
              >
                <ChevronLeft size={20} />
              </button>
              <p className="font-serif text-2xl font-semibold text-plum-900">{formatMonth(`${month}-01`)}</p>
              <button
                onClick={() => {
                  setMonthIdx(Math.min(months.length - 1, monthIdx + 1));
                  setSelectedDay(null);
                }}
                disabled={monthIdx >= months.length - 1}
                aria-label="Next month"
                className="rounded-full p-2 text-plum-700 hover:bg-plum-50 disabled:opacity-30"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-7 border-b border-cream-200 text-center text-[11px] font-semibold tracking-wider text-ink/50 uppercase">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d} className="py-2">
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {cells.map((day, i) => {
                const list = day ? byDay.get(day) ?? [] : [];
                return (
                  <button
                    key={day ?? `pad-${i}`}
                    disabled={!day || list.length === 0}
                    onClick={() => day && setSelectedDay(day)}
                    className={`flex min-h-16 flex-col items-stretch justify-start border-r border-b border-cream-100 p-1.5 text-left transition-colors sm:min-h-28 sm:p-2 ${
                      day && selectedDay === day ? "bg-plum-50" : list.length ? "hover:bg-cream-50" : ""
                    }`}
                  >
                    {day && (
                      <>
                        <span className={`text-sm ${list.length ? "font-semibold text-plum-900" : "text-ink/35"}`}>
                          {dayOfMonth(day)}
                        </span>
                        <span className="mt-1 hidden space-y-1 sm:block">
                          {list.slice(0, 2).map((e) => (
                            <span key={e.id} className="block truncate rounded bg-plum-50 px-1.5 py-0.5 text-[11px] text-plum-800">
                              {e.title}
                            </span>
                          ))}
                          {list.length > 2 && <span className="block text-[11px] text-ink/50">+{list.length - 2} more</span>}
                        </span>
                        {list.length > 0 && (
                          <span className="mt-1 flex gap-0.5 sm:hidden">
                            {list.slice(0, 3).map((e) => (
                              <span key={e.id} className="h-1.5 w-1.5 rounded-full bg-berry-500" />
                            ))}
                          </span>
                        )}
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-8">
            {selectedDay ? (
              <DayGroup day={selectedDay} events={dayEvents} />
            ) : (
              <p className="text-center text-sm text-ink/55">Select a date to see its events.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
