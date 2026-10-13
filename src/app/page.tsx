import Image from "next/image";
import { ArrowRight, ArrowUpRight, Clock, MapPin, Phone, Mail, Printer } from "lucide-react";
import ServiceTimes from "@/components/ServiceTimes";
import Giving from "@/components/Giving";
import EventCalendar from "@/components/EventCalendar";
import VideoLibrary from "@/components/VideoLibrary";
import Connect from "@/components/Connect";
import HeroVideo from "@/components/HeroVideo";
import { YoutubeIcon, FacebookIcon } from "@/components/icons";
import { campuses, channelId, contact, links, prayerCall, purpose, visionOfTheHouse } from "@/lib/site";
import { getVideos } from "@/lib/youtube";
import { getUpcomingEvents } from "@/lib/events";
import { dayKey, dayOfMonth, formatTime, formatWeekday } from "@/lib/eventFormat";

const resources = [
  { name: "Wayman Academy of the Arts", url: links.academy, label: "www.waymanacademy.org", img: "/images/emblem-academy.jpg" },
  { name: "Wayman Community Development Center", url: links.cdc, label: "www.waymancommunity.org", img: "/images/emblem-cdc.jpg" },
];

const socialClass =
  "flex h-10 w-10 items-center justify-center rounded-full text-white/70 ring-1 ring-white/20 transition-colors hover:bg-gold-400 hover:text-plum-950 hover:ring-gold-400";

export default async function HomePage() {
  const [videos, events] = await Promise.all([getVideos(), getUpcomingEvents()]);
  const thisWeek = events.filter((e) => !e.allDay).slice(0, 8);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-plum-950 pt-36 pb-40 text-center lg:pt-44 lg:pb-48">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-b from-plum-950/80 via-plum-900/55 to-plum-950/85" />
        <div className="bokeh absolute inset-0 opacity-40 mix-blend-multiply" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <Image
            src="/images/crest-temple.jpg"
            alt="Wayman Temple crest"
            width={266}
            height={196}
            priority
            className="mx-auto mb-8 h-32 w-auto rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/10"
          />
          <p className="eyebrow mb-5 text-gold-300">Wayman Temple AME Church · Jacksonville, FL</p>
          <h1 className="font-serif text-5xl leading-[1.05] font-semibold text-white sm:text-6xl lg:text-7xl">
            You&rsquo;re always welcome at <em className="font-medium text-gold-300">Wayman Temple!</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Thank you for visiting our Virtual Campus. Wayman Ministries is one
            of Jacksonville, Florida&rsquo;s most dynamic ministries. We have two
            worship locations, with various worship times to meet your
            demanding schedule.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#locations"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-4 font-semibold text-plum-950 shadow-lg shadow-black/20 transition-colors hover:bg-gold-300"
            >
              Our Locations <ArrowRight size={18} />
            </a>
            <a
              href="#connect"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 px-8 py-4 font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Plan a Visit
            </a>
          </div>
        </div>
      </section>

      <ServiceTimes />

      {/* ── THIS WEEK (live from the church calendar) ─────────── */}
      {thisWeek.length > 0 && (
        <section className="pt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="font-serif text-3xl font-semibold text-plum-900">Coming up at Wayman</h2>
              <a href="#events" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-plum-700 hover:text-berry-500">
                Full calendar <ArrowRight size={15} />
              </a>
            </div>
            <ul className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
              {thisWeek.map((e) => (
                <li key={e.id} className="w-64 shrink-0 snap-start">
                  <a href="#events" className="flex h-full gap-4 rounded-2xl bg-white p-4 ring-1 ring-cream-200 transition-shadow hover:shadow-lg hover:shadow-plum-900/5">
                    <span className="flex h-14 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-plum-700 text-white">
                      <span className="text-[10px] font-semibold tracking-wider uppercase">{formatWeekday(dayKey(e))}</span>
                      <span className="font-serif text-xl leading-none font-semibold">{dayOfMonth(dayKey(e))}</span>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold text-berry-500">{formatTime(e)}</span>
                      <span className="mt-0.5 line-clamp-2 block text-sm font-semibold text-plum-900">{e.title}</span>
                      {e.venue && <span className="mt-0.5 block truncate text-xs text-ink/50">{e.venue}</span>}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── PASTOR'S DESK ─────────────────────────────────────── */}
      <section id="pastor" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="relative mx-auto w-full max-w-md lg:col-span-5">
            <div className="absolute -inset-3 rounded-t-full rounded-b-[2rem] ring-1 ring-plum-300/50" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] bg-cream-100 shadow-2xl shadow-plum-900/20">
              <Image
                src="/images/pastor-griffin.jpg"
                alt="Rev. Dr. Mark L. Griffin, Pastor, Wayman Temple"
                fill
                sizes="(min-width: 1024px) 450px, 90vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow mb-4 text-berry-500">From The Pastor&rsquo;s Desk&hellip;</p>
            <h2 className="font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">
              Rev. Mark L. Griffin
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/75">
              <p>
                We want to welcome you to our Wayman Temple website. Indeed, we
                are thankful for what God has done and continues to do through
                our ministry. We are humbled by God&rsquo;s divine favor, which He has
                poured out on this ministry since its inception in 1882.
              </p>
              <p>
                Still, unto whom much is given, much is required, and we are
                diligently pursuing our mission of taking a positive Gospel of
                life and hope to a restless and hurting world.
              </p>
              <p>
                We pray that what you find here will encourage you in your own
                vision. God is no respecter of persons. What he&rsquo;s done for us,
                he&rsquo;ll do for you! For the word of God is true &ndash;
              </p>
            </div>
            <blockquote className="my-8 border-l-2 border-gold-400 pl-6 font-serif text-2xl leading-snug text-plum-800 italic">
              &ldquo;Eye hath not seen, nor ear heard, neither have entered into the
              heart of man, the things which God hath prepared for them that love
              him.&rdquo;
              <span className="mt-2 block text-base text-ink/50 not-italic">1 Corinthians 2:9</span>
            </blockquote>
            <p className="text-lg leading-relaxed text-ink/75">
              If you are ever in the Jacksonville, Florida area, please feel free
              to visit us. You&rsquo;re always welcome at Wayman Temple!
            </p>
            <p className="mt-6 font-serif text-xl font-semibold text-plum-800">
              Rev. Mark L. Griffin
              <span className="block font-sans text-sm font-normal text-ink/50">Pastor, Wayman Temple</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT: VISION OF THE HOUSE ────────────────────────── */}
      <section id="about" className="bokeh relative overflow-hidden py-24 lg:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow mb-4 text-gold-300">About Wayman Temple</p>
            <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
              The Vision of the House
            </h2>
          </div>
          <ol className="grid grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
            {visionOfTheHouse.map((v, i) => (
              <li key={v} className="flex items-baseline gap-3 border-b border-white/10 py-3">
                <span className="w-6 shrink-0 font-serif text-lg text-gold-300">{i + 1}.</span>
                <span className="text-white/85">{v}</span>
              </li>
            ))}
          </ol>

          <div className="mt-20 text-center">
            <p className="eyebrow mb-4 text-gold-300">Our Purpose&hellip;</p>
            <p className="mx-auto max-w-3xl text-lg text-white/75">
              At Wayman Ministries, we approach every day with the purpose to do
              God&rsquo;s work. In order to do this, we have written a Purpose
              Statement that keeps us focused on our goals.
            </p>
            <ul className="mt-10 flex flex-wrap justify-center gap-3">
              {purpose.map((p) => (
                <li key={p} className="rounded-full bg-white/5 px-6 py-3 font-serif text-xl text-gold-300 ring-1 ring-gold-300/30">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── NEW NAMES ─────────────────────────────────────────── */}
      <section id="locations" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow mb-4 text-berry-500">One Church, Two Locations</p>
            <h2 className="font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">
              We have a NEW NAME!
            </h2>
          </div>
          <div className="mb-8 overflow-hidden rounded-3xl shadow-xl shadow-plum-900/10">
            <Image
              src="/images/pastors-banner.png"
              alt="Wayman Temple, Jacksonville, FL — We're one church, two locations!"
              width={1380}
              height={186}
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {campuses.map((c) => (
              <article key={c.name} className="flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-cream-200">
                <div className="relative aspect-[3/2]">
                  <Image src={c.photo} alt={`${c.name} sanctuary`} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-20 w-28 shrink-0 items-center justify-center rounded-2xl bg-cream-100 p-2">
                      <Image src={c.formerlyLogo} alt={`${c.formerly} logo`} width={300} height={215} className="h-full w-auto object-contain" />
                    </div>
                    <ArrowRight className="shrink-0 text-gold-500" size={20} />
                    <div className="flex h-20 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl">
                      <Image src="/images/crest-temple.jpg" alt="Wayman Temple" width={266} height={196} className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <p className="text-sm text-ink/60">
                    {c.formerly} is now
                  </p>
                  <h3 className="mt-1 font-serif text-3xl font-semibold text-plum-900">
                    Wayman Temple AME Church, {c.short}
                  </h3>
                  <p className="mt-4 leading-relaxed text-ink/70">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS (live church calendar) ─────────────────────── */}
      <section id="events" className="bg-cream-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4 text-berry-500">Events</p>
              <h2 className="font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">Event Calendar</h2>
              <p className="mt-4 text-lg text-ink/65">JOIN US LIVE in person or online!</p>
            </div>
            <a
              href={links.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 font-semibold text-plum-700 transition-colors hover:text-berry-500"
            >
              Full calendar on wayman.org <ArrowUpRight size={16} />
            </a>
          </div>

          {events.length > 0 ? (
            <EventCalendar events={events} />
          ) : (
            <a
              href={links.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl bg-white p-10 text-center font-semibold text-plum-700 ring-1 ring-cream-200 hover:text-berry-500"
            >
              View the Event Calendar →
            </a>
          )}

          {/* Prayer call */}
          <div className="mt-16 grid grid-cols-1 overflow-hidden rounded-3xl bg-white ring-1 ring-cream-200 lg:grid-cols-2">
            <div className="relative aspect-[650/300]">
              <Image
                src="/images/prayer-call.png"
                alt="Prayer Call — Fridays at 7 AM via conference call"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <h3 className="font-serif text-3xl font-semibold text-plum-900">Friday Prayer Call</h3>
              <p className="mt-2 flex items-center gap-2 text-sm font-medium text-berry-500">
                <Clock size={15} /> {prayerCall.when}
              </p>
              <p className="mt-4 text-ink/70">Got 15 minutes? Join us in prayer via conference call.</p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                <a href={prayerCall.dialHref} className="font-semibold text-plum-700 hover:text-berry-500">
                  Dial {prayerCall.dial}
                </a>
                <span className="text-ink/60">
                  Access code <strong className="text-plum-800">{prayerCall.code}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE ──────────────────────────────────────────────── */}
      <section id="live" className="bg-plum-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow mb-4 text-gold-300">&bull; Live &bull;</p>
            <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
              Welcome to the Wayman Interactive Network (W.I.N.)
            </h2>
            <p className="mt-4 text-lg text-white/65">
              You WIN by tuning in to our live services! Please join us every
              Sunday and Wednesday for our broadcasts.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-4 text-white">
              <p>
                <span className="block font-serif text-3xl text-gold-300">10:00 AM &amp; 12:00 PM</span>
                <span className="text-sm text-white/60">EST Sunday</span>
              </p>
              <p>
                <span className="block font-serif text-3xl text-gold-300">6:30 PM</span>
                <span className="text-sm text-white/60">EST Wednesday</span>
              </p>
            </div>
          </div>

          {videos.length > 0 ? (
            <VideoLibrary videos={videos} />
          ) : (
            <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-3xl shadow-2xl shadow-black/40">
              <iframe
                src={`https://www.youtube-nocookie.com/embed?listType=playlist&list=UU${channelId.slice(2)}`}
                title="Wayman Ministries on YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          )}

          <div className="mt-12 flex justify-center">
            <a
              href={links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-plum-950 transition-colors hover:bg-gold-300"
            >
              <YoutubeIcon /> View Archived Videos on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ── CONNECT / REGISTRATION ────────────────────────────── */}
      <section id="connect" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4 text-berry-500">Connect</p>
            <h2 className="font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">
              You&rsquo;re always welcome at Wayman Temple!
            </h2>
            <p className="mt-5 text-lg text-ink/65">
              Plan your visit, register for an upcoming event, or let us know
              where you&rsquo;d like to serve. We&rsquo;ll be in touch.
            </p>
            <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-3xl lg:block">
              <Image src="/images/sanctuary-west.jpg" alt="Wayman Temple West sanctuary" fill sizes="400px" className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-8">
            <Connect events={events} />
          </div>
        </div>
      </section>

      {/* ── RESOURCES ─────────────────────────────────────────── */}
      <section id="resources" className="bg-cream-100 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow mb-4 text-berry-500">Resources</p>
            <h2 className="font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">Resources</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {resources.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-3xl bg-white p-5 ring-1 ring-cream-200 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-plum-900/5"
              >
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl">
                  <Image src={r.img} alt={`${r.name} logo`} fill sizes="112px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-semibold text-plum-900">{r.name}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-plum-600">
                    {r.label} <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────── */}
      <section id="contact" className="px-4 sm:px-6 lg:px-8">
        <div className="bokeh mx-auto max-w-7xl overflow-hidden rounded-[2rem] p-8 text-white shadow-2xl shadow-plum-900/30 lg:p-14">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow mb-4 text-gold-300">Contact Us</p>
              <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Wayman Temple AME Church</h2>
              <p className="mt-4 max-w-xl text-white/70">
                Thank you for your interest in Wayman Temple AME Church. Please
                contact us using the information below.
              </p>
            </div>
            <div className="flex gap-3">
              <a href={links.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={socialClass}>
                <YoutubeIcon />
              </a>
              <a href={links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={socialClass}>
                <FacebookIcon />
              </a>
              <a href={`mailto:${contact.email}`} aria-label="Email" className={socialClass}>
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {campuses.map((c) => (
              <div key={c.name} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <p className="font-serif text-2xl font-semibold">{c.name}</p>
                <p className="text-xs text-white/50">formerly known as {c.formerly}</p>
                <p className="mt-2 text-sm text-gold-300">{c.time}</p>
                <div className="mt-5 space-y-2 text-sm text-white/80">
                  <a href={c.map} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-gold-300">
                    <MapPin size={15} className="mt-0.5 shrink-0" />
                    <span>
                      {c.street}, {c.city}
                    </span>
                  </a>
                  <a href={c.phoneHref} className="flex items-center gap-3 hover:text-gold-300">
                    <Phone size={15} className="shrink-0" /> Phone: {c.phone}
                  </a>
                  <p className="flex items-center gap-3">
                    <Printer size={15} className="shrink-0" /> Fax: {c.fax}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-plum-950 transition-colors hover:bg-gold-300"
          >
            <Mail size={16} /> {contact.email}
          </a>
        </div>
      </section>

      <Giving />
    </>
  );
}
