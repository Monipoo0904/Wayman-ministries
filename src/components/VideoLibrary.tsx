"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import type { Video, VideoCategory } from "@/lib/youtube";

const filters: ("All" | VideoCategory)[] = ["All", "Sunday", "Midweek", "Special"];
const filterLabels: Record<(typeof filters)[number], string> = {
  All: "All",
  Sunday: "Sunday Service",
  Midweek: "Midweek Service",
  Special: "Special Services",
};

const dateFmt = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "America/New_York" });

function thumb(id: string, size: "maxresdefault" | "hqdefault" = "hqdefault") {
  return `https://i.ytimg.com/vi/${id}/${size}.jpg`;
}

export default function VideoLibrary({ videos }: { videos: Video[] }) {
  const [current, setCurrent] = useState(videos[0]);
  const [playing, setPlaying] = useState(false);
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [showAll, setShowAll] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  const available = filters.filter((f) => f === "All" || videos.some((v) => v.category === f));
  const list = videos.filter((v) => filter === "All" || v.category === filter);
  const visible = showAll ? list : list.slice(0, 6);

  function select(v: Video) {
    setCurrent(v);
    setPlaying(true);
    playerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div>
      {/* Featured player */}
      <div ref={playerRef} className="grid grid-cols-1 items-end gap-8 lg:grid-cols-3">
        <div className="relative aspect-video overflow-hidden rounded-3xl bg-black shadow-2xl shadow-black/40 lg:col-span-2">
          {playing ? (
            <iframe
              key={current.id}
              src={`https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1&rel=0`}
              title={current.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full"
              aria-label={`Play ${current.title}`}
            >
              <img src={thumb(current.id, "maxresdefault")} alt="" className="h-full w-full object-cover" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <span className="absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-400 text-plum-950 shadow-2xl transition-transform group-hover:scale-110">
                <Play size={30} fill="currentColor" className="ml-1" />
              </span>
            </button>
          )}
        </div>
        <div className="text-white">
          <p className="eyebrow mb-3 text-gold-300">
            {current === videos[0] ? "Latest Service" : filterLabels[current.category]}
          </p>
          <h3 className="font-serif text-3xl leading-tight font-semibold sm:text-4xl">{current.title}</h3>
          <p className="mt-3 text-white/60">{dateFmt.format(new Date(current.published))}</p>
          <a
            href={`https://www.youtube.com/watch?v=${current.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex text-sm font-semibold text-gold-300 hover:text-gold-400"
          >
            Watch on YouTube →
          </a>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-14 mb-6 flex flex-wrap gap-2">
        {available.map((f) => (
          <button
            key={f}
            onClick={() => {
              setFilter(f);
              setShowAll(false);
            }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === f ? "bg-gold-400 text-plum-950" : "text-white/75 ring-1 ring-white/20 hover:bg-white/10"
            }`}
          >
            {filterLabels[f]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((v) => (
          <li key={v.id}>
            <button onClick={() => select(v)} className="group w-full text-left">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-plum-900 ring-1 ring-white/10">
                <img
                  src={thumb(v.id)}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                  <span className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-gold-400 text-plum-950 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  </span>
                </span>
                {current.id === v.id && (
                  <span className="eyebrow absolute top-3 left-3 rounded-full bg-gold-400 px-2.5 py-1 text-[9px] text-plum-950">
                    {playing ? "Now Playing" : "Featured"}
                  </span>
                )}
              </div>
              <p className="mt-3 font-medium text-white transition-colors group-hover:text-gold-300">{v.title}</p>
              <p className="text-sm text-white/50">{dateFmt.format(new Date(v.published))}</p>
            </button>
          </li>
        ))}
      </ul>

      {list.length > 6 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-full px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/10"
          >
            {showAll ? "Show fewer" : `Show all ${list.length} videos`}
          </button>
        </div>
      )}
    </div>
  );
}
