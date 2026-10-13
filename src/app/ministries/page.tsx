import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  MapPin,
  Phone,
  Mail,
  Calendar,
  BookOpen,
  Heart,
  Users,
  Gift,
  GraduationCap,
  PlayCircle,
} from "lucide-react";
import { YoutubeIcon, FacebookIcon } from "@/components/icons";
import { campuses, contact, links, prayerCall, serviceTimes } from "@/lib/site";

const announcements = [
  {
    title: "Sunday Worship",
    date: "Sundays · 10 AM South · 12 PM West",
    desc: "Join us for powerful worship, anointed preaching, and genuine fellowship — in person at either campus or online.",
    tag: "Weekly",
  },
  {
    title: "Mid-Week Bible Study",
    date: "Wednesdays · 6:30 PM",
    desc: "Deepen your understanding of the Word in our interactive, Spirit-filled Bible study sessions.",
    tag: "Weekly",
  },
  {
    title: "Community Outreach",
    date: "Monthly",
    desc: "We partner with Wayman CDC to serve Jacksonville's most vulnerable families every month.",
    tag: "Outreach",
  },
  {
    title: "Youth & Young Adults Ministry",
    date: "Ongoing",
    desc: "A vibrant space for the next generation to encounter God, build friendships, and grow in purpose.",
    tag: "Youth",
  },
];

const ministries = [
  { icon: BookOpen, title: "Worship & Praise", desc: "Dynamic worship experiences that usher you into the presence of God every Sunday." },
  { icon: Users, title: "Small Groups", desc: "Intentional community in intimate settings where you can be known, encouraged, and challenged." },
  { icon: Heart, title: "Prayer Ministry", desc: "Intercession is our foundation. Join our dedicated prayer warriors and watch God move." },
  { icon: Gift, title: "Outreach & Service", desc: "We exist to serve our city through partnerships with Wayman CDC and local organizations." },
  { icon: GraduationCap, title: "Men's & Women's Ministry", desc: "Fellowship, accountability, and discipleship for men and women of all ages." },
  { icon: Calendar, title: "Youth & Children", desc: "Safe, creative, faith-building environments for every child and teenager in our church family." },
];

const faqs = [
  { q: "When do services start?", a: "Sunday worship is at 10:00 AM at our South Campus and 12:00 PM at our West Campus. Wednesday Bible Study begins at 6:30 PM." },
  { q: "Where are you located?", a: "South Campus is at 8855 Sanchez Road (32217) and West Campus is at 1176 Labelle Street (32205), both in Jacksonville, FL." },
  { q: "Can I attend online?", a: "Absolutely! We live-stream on Sundays and Wednesdays. Click “Watch Live” to join us from anywhere in the world." },
  { q: "What should I wear?", a: "Come as you are. Many members dress in business casual or Sunday best, but there's no dress code." },
  { q: "Are children welcome?", a: "Children are a vital part of our church family. We have engaging ministries for kids and teens of all ages." },
];

const socialClass =
  "flex h-10 w-10 items-center justify-center rounded-full text-white/70 ring-1 ring-white/20 transition-colors hover:bg-gold-400 hover:text-plum-950 hover:ring-gold-400";

export default function MinistriesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bokeh relative overflow-hidden pt-36 pb-40 text-center lg:pt-44 lg:pb-48">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <Image
            src="/images/crest-temple.jpg"
            alt="Wayman Temple crest"
            width={266}
            height={196}
            priority
            className="mx-auto mb-8 h-32 w-auto rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/10"
          />
          <p className="eyebrow mb-5 text-gold-300">Wayman Temple AME · Jacksonville, FL</p>
          <h1 className="font-serif text-5xl leading-[1.05] font-semibold text-white sm:text-6xl lg:text-7xl">
            Welcome to <em className="font-medium text-gold-300">Wayman Temple</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            One of Jacksonville&apos;s most dynamic ministries. Two worship
            locations. One family. Come as you are — you belong here.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#plan-visit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-4 font-semibold text-plum-950 shadow-lg shadow-black/20 transition-colors hover:bg-gold-300"
            >
              Plan Your Visit <ArrowRight size={18} />
            </a>
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-berry-400" />
              Watch Live
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICE TIMES (floating card) ─────────────────────── */}
      <section className="relative z-10 -mt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-cream-200 rounded-3xl bg-cream-50 shadow-[0_30px_60px_-30px_rgb(28_12_27/0.45)] ring-1 ring-plum-900/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {serviceTimes.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 px-6 py-7 text-center">
              <p className="eyebrow text-[11px] text-gold-600">{s.label}</p>
              <p className="font-serif text-3xl font-semibold text-plum-800">{s.time}</p>
              <p className="text-sm text-ink/60">{s.day}s</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WELCOME + PASTOR'S DESK ───────────────────────────── */}
      <section id="pastor" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow mb-4 text-berry-500">Welcome</p>
            <h2 className="font-serif text-4xl leading-tight font-semibold text-plum-900 sm:text-5xl">
              The ministry that is{" "}
              <em className="text-plum-500">making a difference</em>
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/70">
              <p>
                Thank you for visiting our virtual campus. Wayman Ministries is
                one of Jacksonville, Florida&apos;s most dynamic ministries, with
                two worship locations and various worship times to meet your
                demanding schedule.
              </p>
              <p>
                Whether you&apos;re new to faith, returning after time away, or
                deeply rooted in your walk with God — there is a place for you at
                Wayman Temple.
              </p>
              <p>
                If you are ever in the area, we would love to have you worship
                with us in person. In the meantime, we welcome your online
                presence and participation.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#plan-visit"
                className="inline-flex items-center gap-2 rounded-full bg-plum-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-plum-800"
              >
                Plan Your Visit
              </a>
              <a
                href={links.give}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-plum-800 ring-1 ring-plum-800/20 transition-colors hover:bg-plum-50"
              >
                Give Online
              </a>
            </div>
          </div>

          <figure className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-cream-200">
              <Image
                src="/images/welcome-head.png"
                alt="Welcome to Wayman Ministries, Jacksonville FL — Pastor Mark L. Griffin"
                width={900}
                height={299}
                sizes="(min-width: 1024px) 600px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="relative mx-6 -mt-10 rounded-3xl bg-plum-900 p-8 text-white shadow-2xl shadow-plum-900/30">
              <p className="eyebrow mb-4 text-gold-300">From the Pastor&apos;s Desk</p>
              <p className="font-serif text-2xl leading-snug italic">
                &ldquo;God has called us to be more than a church that meets on
                Sundays. We are called to be a movement — one that transforms
                families, communities, and the city of Jacksonville for the
                glory of God.&rdquo;
              </p>
              <p className="mt-5 text-sm text-white/60">— Wayman Temple Leadership</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── EVENTS ────────────────────────────────────────────── */}
      <section id="events" className="bg-cream-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-4 text-berry-500">What&apos;s Happening</p>
              <h2 className="font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">
                Events &amp; announcements
              </h2>
            </div>
            <a
              href={links.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-plum-700 transition-colors hover:text-berry-500"
            >
              Full event calendar <ArrowRight size={16} />
            </a>
          </div>

          {/* Featured: prayer call */}
          <div className="mb-6 grid grid-cols-1 overflow-hidden rounded-3xl bg-white ring-1 ring-cream-200 lg:grid-cols-2">
            <div className="relative aspect-[650/300] lg:aspect-auto lg:min-h-80">
              <Image
                src="/images/prayer-call.png"
                alt="Wayman Temple prayer call — Fridays at 7 AM"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="eyebrow mb-4 self-start rounded-full bg-gold-300/40 px-3 py-1 text-[10px] text-gold-600">
                Featured · Weekly
              </span>
              <h3 className="font-serif text-3xl font-semibold text-plum-900">Friday Prayer Call</h3>
              <p className="mt-2 flex items-center gap-2 text-sm font-medium text-berry-500">
                <Clock size={15} /> {prayerCall.when}
              </p>
              <p className="mt-4 text-ink/70">
                Got 15 minutes? Start your Friday in prayer with the Wayman
                family by conference call.
              </p>
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {announcements.map((a) => (
              <div
                key={a.title}
                className="rounded-3xl bg-white p-8 ring-1 ring-cream-200 transition-shadow hover:shadow-xl hover:shadow-plum-900/5"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="eyebrow rounded-full bg-plum-50 px-3 py-1 text-[10px] text-plum-600">
                    {a.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-right text-xs text-ink/50">
                    <Clock size={12} className="shrink-0" />
                    {a.date}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-plum-900">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST SERMON ─────────────────────────────────────── */}
      <section id="sermons" className="bg-plum-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow mb-4 text-gold-300">Latest Message</p>
            <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
              Watch this week&apos;s sermon
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_220px]">
            <div className="relative aspect-video overflow-hidden rounded-3xl shadow-2xl shadow-black/40">
              <iframe
                src={links.youtubeEmbed}
                title="Latest Wayman Ministries Sermon"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto hidden w-full max-w-[220px] overflow-hidden rounded-3xl ring-1 ring-white/10 transition-transform hover:-translate-y-1 lg:block"
            >
              <Image
                src="/images/live-streaming.png"
                alt="Wayman Temple live streaming — Sundays at 10 AM and noon, Wednesdays at 6:30 PM"
                width={145}
                height={300}
                sizes="220px"
                className="h-auto w-full"
              />
            </a>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-plum-950 transition-colors hover:bg-gold-300"
            >
              <YoutubeIcon /> All Messages on YouTube
            </a>
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/10"
            >
              <PlayCircle size={16} /> Watch Live
            </a>
            <a
              href={links.resources}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/10"
            >
              <BookOpen size={16} /> Other Resources
            </a>
          </div>
        </div>
      </section>

      {/* ── MINISTRIES GRID ───────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow mb-4 text-berry-500">Get Involved</p>
            <h2 className="font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">
              Find your ministry
            </h2>
            <p className="mt-4 text-lg text-ink/65">
              There&apos;s a place for everyone at Wayman Temple. Discover where
              you can connect, grow, and serve.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((m) => (
              <div
                key={m.title}
                className="group rounded-3xl bg-white p-8 ring-1 ring-cream-200 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-plum-900/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-plum-50 transition-colors group-hover:bg-plum-700">
                  <m.icon size={22} className="text-plum-600 transition-colors group-hover:text-gold-300" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-plum-900">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLAN YOUR VISIT ───────────────────────────────────── */}
      <section id="plan-visit" className="bg-cream-100 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow mb-4 text-berry-500">Plan Your Visit</p>
            <h2 className="font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">
              What to expect
            </h2>
            <div className="mt-10 divide-y divide-cream-300">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-5" open={faq === faqs[0]}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl font-semibold text-plum-900">
                    {faq.q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-plum-600 ring-1 ring-cream-300 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pr-12 leading-relaxed text-ink/65">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div id="contact" className="bokeh overflow-hidden rounded-[2rem] p-8 text-white shadow-2xl shadow-plum-900/30 lg:p-10">
            <h3 className="font-serif text-3xl font-semibold">Contact us</h3>
            <p className="mt-2 mb-8 text-sm text-white/65">
              We&apos;d love to hear from you. Reach out and our team will get
              back to you promptly.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {campuses.map((c) => (
                <a
                  key={c.name}
                  href={c.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition-colors hover:bg-white/10"
                >
                  <p className="flex items-center justify-between font-semibold">
                    {c.name}
                    <ArrowUpRight size={16} className="text-gold-300 opacity-0 transition-opacity group-hover:opacity-100" />
                  </p>
                  <p className="mt-1 text-xs text-gold-300">{c.time}</p>
                  <p className="mt-3 flex items-start gap-2 text-sm text-white/70">
                    <MapPin size={14} className="mt-0.5 shrink-0" />
                    <span>
                      {c.street}
                      <br />
                      {c.city}
                    </span>
                  </p>
                </a>
              ))}
            </div>

            <div className="space-y-4">
              <a href={contact.phoneHref} className="group flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Phone size={16} className="text-gold-300" />
                </span>
                <span>
                  <span className="eyebrow block text-[10px] text-white/50">Phone</span>
                  <span className="font-medium transition-colors group-hover:text-gold-300">{contact.phone}</span>
                </span>
              </a>
              <a href={`mailto:${contact.email}`} className="group flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Mail size={16} className="text-gold-300" />
                </span>
                <span>
                  <span className="eyebrow block text-[10px] text-white/50">Email</span>
                  <span className="font-medium transition-colors group-hover:text-gold-300">{contact.email}</span>
                </span>
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
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
              <a
                href={links.contactForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-plum-950 transition-colors hover:bg-gold-300"
              >
                Send Us a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ONLINE GIVING CTA ─────────────────────────────────── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch overflow-hidden rounded-[2rem] bg-cream-200 md:grid-cols-5">
          <div className="relative min-h-72 md:col-span-2">
            <Image
              src="/images/online-giving.jpg"
              alt="Wayman Ministries online giving"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[50%_35%]"
            />
          </div>
          <div className="flex flex-col justify-center p-10 md:col-span-3 lg:p-16">
            <p className="eyebrow mb-4 text-berry-500">Generosity</p>
            <h2 className="font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">
              Support the ministry
            </h2>
            <p className="mt-5 max-w-lg text-lg text-ink/70">
              Your generosity fuels everything we do — from Sunday services to
              community outreach to the next generation. Give today and be part
              of what God is doing through Wayman Ministries.
            </p>
            <a
              href={links.give}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-plum-700 px-8 py-4 font-semibold text-white transition-colors hover:bg-plum-800"
            >
              <Gift size={18} /> Give Online Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
