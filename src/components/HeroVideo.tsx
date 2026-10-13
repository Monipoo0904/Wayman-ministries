"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

/** Muted, looping background clip from a Wayman Temple worship service. */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    // Respect visitors who prefer reduced motion: show the still frame instead
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current?.pause();
      setPlaying(false);
    }
  }, []);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <>
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <button
        onClick={toggle}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className="absolute top-24 right-4 z-10 flex sm:top-auto sm:bottom-32 h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white/80 ring-1 ring-white/20 backdrop-blur-sm transition-colors hover:bg-black/50 hover:text-white sm:right-6 lg:bottom-36"
      >
        {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
      </button>
    </>
  );
}
