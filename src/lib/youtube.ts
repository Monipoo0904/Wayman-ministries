import { channelId } from "@/lib/site";

export type VideoCategory = "Sunday" | "Midweek" | "Special";

export type Video = {
  id: string;
  title: string;
  published: string;
  views: number;
  category: VideoCategory;
};

const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

function decode(s: string) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function categorize(title: string): VideoCategory {
  if (/sunday/i.test(title)) return "Sunday";
  if (/midweek|wednesday/i.test(title)) return "Midweek";
  return "Special";
}

/** Latest uploads from the church's YouTube channel (public RSS feed, refreshed every 30 minutes). */
export async function getVideos(): Promise<Video[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 1800 } });
    if (!res.ok) return [];
    const xml = await res.text();
    return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].flatMap(([, entry]) => {
      const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
      const title = entry.match(/<title>([^<]*)<\/title>/)?.[1];
      const published = entry.match(/<published>([^<]+)<\/published>/)?.[1];
      if (!id || !title || !published) return [];
      const views = Number(entry.match(/<media:statistics views="(\d+)"/)?.[1] ?? 0);
      const t = decode(title);
      return [{ id, title: t, published, views, category: categorize(t) }];
    });
  } catch {
    return [];
  }
}
