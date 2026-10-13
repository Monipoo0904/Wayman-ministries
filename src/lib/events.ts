// Live events from the church's existing WordPress calendar (The Events Calendar REST API).

const API = "https://wayman.org/ministries/index.php?rest_route=/tribe/events/v1/events";

export type ChurchEvent = {
  id: number;
  title: string;
  subtitle: string;
  /** Local (Eastern) wall time, "YYYY-MM-DD HH:mm" */
  start: string;
  end: string;
  allDay: boolean;
  venue: string;
  location: "South" | "West" | "Online" | "Other";
  excerpt: string;
  url: string;
  /** Ticket price in dollars when the calendar lists a cost */
  price: number | null;
};

type ApiEvent = {
  id: number;
  title: string;
  start_date: string;
  end_date: string;
  all_day: boolean;
  url: string;
  description?: string;
  hide_from_listings?: boolean;
  venue?: { venue?: string } | [];
  cost_details?: { values?: string[] };
};

function decode(s: string) {
  return s
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function clean(part: string) {
  return part
    .replace(/\(?click (here|below)[^|)]*\)?/gi, "")
    .replace(/\s+(or|and)\s*$/i, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function locationOf(text: string): ChurchEvent["location"] {
  if (/south/i.test(text)) return "South";
  if (/west/i.test(text)) return "West";
  if (/zoom|dial-in|virtual|facebook/i.test(text)) return "Online";
  return "Other";
}

function normalize(e: ApiEvent): ChurchEvent {
  const [title, ...rest] = decode(e.title).split("|").map((p) => p.trim()).filter(Boolean);
  const subtitle = rest.map(clean).filter(Boolean).join(" · ");
  const venue = (!Array.isArray(e.venue) && e.venue?.venue) || "";
  const price = Number(e.cost_details?.values?.find((v) => Number(v) > 0) ?? NaN);
  return {
    id: e.id,
    title: clean(title ?? ""),
    subtitle,
    start: e.start_date.slice(0, 16),
    end: e.end_date.slice(0, 16),
    allDay: e.all_day,
    venue: decode(venue),
    location: locationOf(`${venue} ${e.title}`),
    excerpt: decode(e.description ?? "").slice(0, 240),
    url: e.url,
    price: Number.isFinite(price) ? price : null,
  };
}

function easternToday() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(new Date());
}

/** Upcoming events for the next `days` days, refreshed every 15 minutes. */
export async function getUpcomingEvents(days = 120): Promise<ChurchEvent[]> {
  const today = easternToday();
  const endDate = new Date(Date.parse(today) + days * 86_400_000).toISOString().slice(0, 10);
  const events: ChurchEvent[] = [];
  try {
    for (let page = 1; page <= 6; page++) {
      const res = await fetch(
        `${API}&per_page=50&page=${page}&start_date=${today}&end_date=${endDate}`,
        { next: { revalidate: 900 }, headers: { Accept: "application/json" } },
      );
      if (!res.ok) break;
      const data: { events?: ApiEvent[]; total_pages?: number } = await res.json();
      events.push(...(data.events ?? []).filter((e) => !e.hide_from_listings).map(normalize));
      if (!data.total_pages || page >= data.total_pages) break;
    }
  } catch {
    // Calendar unavailable — the section falls back to a link to the full calendar
  }
  return events;
}

export async function getEventById(id: number) {
  return (await getUpcomingEvents()).find((e) => e.id === id) ?? null;
}
