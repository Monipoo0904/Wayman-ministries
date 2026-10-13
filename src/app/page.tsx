import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin, Clock, PlayCircle, Phone } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import { campuses, links, prayerCall, serviceTimes } from "@/lib/site";

const network = [
  {
    name: "Wayman Temple",
    tagline: "Worship",
    img: "/images/emblem-temple.jpg",
    desc: "Our worship ministry — one church, two Jacksonville campuses, with powerful preaching, vibrant praise, and authentic community.",
    href: "/ministries",
    cta: "Visit Wayman Temple",
    external: false,
  },
  {
    name: "Wayman Academy of the Arts",
    tagline: "Education",
    img: "/images/emblem-academy.jpg",
    desc: "Our K–5 charter school, offering an arts-integrated curriculum that develops the whole child — academically, creatively, and spiritually.",
    href: links.academy,
    cta: "Visit the Academy",
    external: true,
  },
  {
    name: "Wayman Community Development",
    tagline: "Community",
    img: "/images/emblem-cdc.jpg",
    desc: "Pre-school early learning programs and community services that uplift families and strengthen Jacksonville neighborhoods.",
    href: links.cdc,
    cta: "Visit Wayman CDC",
    external: true,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="bokeh relative overflow-hidden pt-28 pb-40 lg:pt-36 lg:pb-48">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="text-center lg:col-span-7 lg:text-left">
            <p className="eyebrow mb-6 text-gold-300">Wayman Temple AME · Jacksonville, Florida</p>
            <h1 className="font-serif text-5xl leading-[1.05] font-semibold text-white sm:text-6xl lg:text-7xl">
              The ministry that is{" "}
              <em className="font-medium text-gold-300">making a difference.</em>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75 lg:mx-0">
              One church, two locations. Through vibrant worship, exceptional
              education, and community transformation, there&apos;s a place for
              you here.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/ministries#plan-visit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-4 font-semibold text-plum-950 shadow-lg shadow-black/20 transition-colors hover:bg-gold-300"
              >
                Plan Your Visit <ArrowRight size={18} />
              </Link>
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
              >
                <PlayCircle size={18} /> Watch Live
              </a>
            </div>
          </div>

          {/* Arched pastor portrait */}
          <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
            <div className="absolute -inset-3 rounded-t-full rounded-b-[2rem] ring-1 ring-gold-300/30" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] bg-cream-200 shadow-2xl shadow-black/40">
              <Image
                src="/images/pastor-griffin.png"
                alt="Dr. Mark L. Griffin, Senior Pastor"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 w-max -translate-x-1/2 rounded-2xl bg-cream-50 px-6 py-3 text-center shadow-xl lg:left-auto lg:-right-4 lg:translate-x-0">
              <p className="font-serif text-lg font-semibold text-plum-800">Dr. Mark L. Griffin</p>
              <p className="eyebrow text-[10px] text-gold-600">Senior Pastor</p>
            </div>
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

      {/* ── ONE CHURCH, TWO LOCATIONS ─────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow mb-4 text-berry-500">Join Us In Person</p>
            <h2 className="font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">
              One church, two locations
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl shadow-plum-900/10">
            <Image
              src="/images/pastors-banner.png"
              alt="Wayman Temple, Jacksonville FL — pastoral leadership"
              width={1380}
              height={186}
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="h-auto w-full"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {campuses.map((c) => (
              <div
                key={c.name}
                className="group flex flex-col justify-between gap-6 rounded-3xl bg-white p-8 ring-1 ring-cream-200 transition-shadow hover:shadow-xl hover:shadow-plum-900/5 sm:flex-row sm:items-end"
              >
                <div>
                  <h3 className="font-serif text-3xl font-semibold text-plum-800">{c.name}</h3>
                  <p className="mt-3 flex items-center gap-2 text-sm font-medium text-berry-500">
                    <Clock size={15} /> {c.time}
                  </p>
                  <p className="mt-2 flex items-start gap-2 text-sm text-ink/70">
                    <MapPin size={15} className="mt-0.5 shrink-0" />
                    <span>
                      {c.street}
                      <br />
                      {c.city}
                    </span>
                  </p>
                </div>
                <a
                  href={c.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-plum-50 px-5 py-2.5 text-sm font-semibold text-plum-700 transition-colors group-hover:bg-plum-700 group-hover:text-white sm:self-auto"
                >
                  Directions <ArrowUpRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR NETWORK ───────────────────────────────────────── */}
      <section id="about" className="bg-cream-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4 text-berry-500">Our Network</p>
              <h2 className="font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">
                One vision. Three pillars.
              </h2>
            </div>
            <p className="max-w-md text-lg text-ink/65">
              Through worship, education, and community investment, Wayman
              Ministries touches every dimension of life.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {network.map((n) => (
              <a
                key={n.name}
                href={n.href}
                target={n.external ? "_blank" : undefined}
                rel={n.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-cream-200 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-plum-900/10"
              >
                <div className="relative aspect-[267/168] overflow-hidden">
                  <Image
                    src={n.img}
                    alt={`${n.name} logo`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <p className="eyebrow mb-2 text-[11px] text-gold-600">{n.tagline}</p>
                  <h3 className="font-serif text-2xl font-semibold text-plum-900">{n.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{n.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-plum-700 transition-all group-hover:gap-3">
                    {n.cta} <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION STATEMENT ──────────────────────────────────── */}
      <section id="vision" className="bokeh relative overflow-hidden py-24 lg:py-32">
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Image
            src="/images/crest-temple.jpg"
            alt=""
            width={266}
            height={196}
            className="mx-auto mb-10 h-28 w-auto rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/10"
          />
          <p className="eyebrow mb-6 text-gold-300">Our Vision</p>
          <blockquote className="font-serif text-3xl leading-snug font-medium text-white sm:text-4xl lg:text-5xl">
            &ldquo;We exist to glorify God by{" "}
            <em className="text-gold-300">serving people</em>, building community,
            and <em className="text-gold-300">transforming lives</em>.&rdquo;
          </blockquote>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
            No matter who you are or where you&apos;ve been, you are welcome here.
            Wayman Ministries is a place of grace, growth, and genuine community.
          </p>
        </div>
      </section>

      {/* ── LATEST MESSAGE + PRAYER CALL ──────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-4 text-berry-500">Latest Message</p>
              <h2 className="font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">
                Watch &amp; be inspired
              </h2>
            </div>
            <a
              href={links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-plum-700 transition-colors hover:text-berry-500"
            >
              All messages on YouTube <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="relative aspect-video overflow-hidden rounded-3xl bg-plum-900 shadow-2xl shadow-plum-900/20 lg:col-span-2">
              <iframe
                src={links.youtubeEmbed}
                title="Latest Wayman Ministries Sermon"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>

            <div className="flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-cream-200">
              <div className="relative aspect-[650/300]">
                <Image
                  src="/images/prayer-call.png"
                  alt="Wayman Temple prayer call"
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="eyebrow mb-2 text-[11px] text-gold-600">{prayerCall.when}</p>
                <h3 className="font-serif text-2xl font-semibold text-plum-900">
                  Got 15 minutes? Join us in prayer.
                </h3>
                <p className="mt-3 text-sm text-ink/65">
                  Dial in from anywhere — access code{" "}
                  <strong className="text-plum-800">{prayerCall.code}</strong>.
                </p>
                <a
                  href={prayerCall.dialHref}
                  className="mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm font-semibold text-plum-700 transition-colors hover:text-berry-500"
                >
                  <Phone size={16} /> {prayerCall.dial}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GIVING ────────────────────────────────────────────── */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
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
              Sow into what God is doing
            </h2>
            <p className="mt-5 max-w-lg text-lg text-ink/70">
              Your giving fuels Sunday worship, community outreach, and the next
              generation of leaders in Jacksonville.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={links.give}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-plum-700 px-8 py-4 font-semibold text-white transition-colors hover:bg-plum-800"
              >
                Give Online <ArrowRight size={18} />
              </a>
              <Link
                href="/ministries#plan-visit"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-plum-800 ring-1 ring-plum-800/20 transition-colors hover:bg-white/60"
              >
                Plan a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAY CONNECTED ────────────────────────────────────── */}
      <section id="contact" className="bg-plum-900 py-24">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
          <p className="eyebrow mb-4 text-gold-300">Stay Connected</p>
          <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
            Join our mailing list
          </h2>
          <p className="mt-4 mb-10 text-white/65">
            Get the latest news, events, and announcements delivered straight to
            your inbox.
          </p>
          <NewsletterForm />
          <p className="mt-5 text-xs text-white/45">
            Or text <strong className="text-white/70">WAYMAN</strong> to stay updated.
          </p>
        </div>
      </section>
    </>
  );
}
