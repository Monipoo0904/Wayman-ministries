import Link from "next/link";
import {
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Mail,
  Calendar,
  BookOpen,
  Heart,
  Users,
  Gift,
} from "lucide-react";

function YoutubeSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.6 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.3.6 9.3.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
    </svg>
  );
}

function FacebookSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.5h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

const announcements = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    desc: "Join us for powerful worship, anointed preaching, and genuine fellowship. In person and online.",
    tag: "Weekly",
  },
  {
    title: "Mid-Week Bible Study",
    date: "Every Wednesday",
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

function GradIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

const ministries = [
  { icon: BookOpen, title: "Worship & Praise", desc: "Dynamic worship experiences that usher you into the presence of God every Sunday." },
  { icon: Users, title: "Small Groups", desc: "Intentional community in intimate settings where you can be known, encouraged, and challenged." },
  { icon: Heart, title: "Prayer Ministry", desc: "Intercession is our foundation. Join our dedicated prayer warriors and watch God move." },
  { icon: Gift, title: "Outreach & Service", desc: "We exist to serve our city through partnerships with Wayman CDC and local organizations." },
  { icon: GradIcon, title: "Men's & Women's Ministry", desc: "Gender-specific fellowship, accountability, and discipleship for men and women of all ages." },
  { icon: Calendar, title: "Youth & Children", desc: "Safe, creative, faith-building environments for every child and teenager in our church family." },
];

export default function MinistriesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#2d0e48] pt-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#f0c040]/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#521c7a]/60 blur-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f5c842%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-block mb-5 px-4 py-1.5 rounded-full border border-[#f0c040]/40 text-[#f0c040] text-xs font-semibold tracking-[0.2em] uppercase">
            Wayman Temple · Jacksonville, FL
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Welcome to<br />
            <span className="text-[#f0c040]">Wayman Temple</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            One of Jacksonville&apos;s most dynamic ministries. Two worship locations.
            One family. Come as you are — you belong here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#plan-visit"
              className="inline-flex items-center justify-center gap-2 bg-[#f0c040] text-[#2d0e48] font-bold px-8 py-4 rounded-full hover:bg-[#d9a81a] transition-colors shadow-lg shadow-[#f0c040]/20"
            >
              Plan Your Visit <ArrowRight size={18} />
            </a>
            <a
              href="https://wayman.org/ministries/?page_id=139"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              <span className="w-2 h-2 bg-[#f0c040] rounded-full animate-pulse" />
              Watch Live
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICE TIMES ─────────────────────────────────────── */}
      <section className="bg-[#f0c040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { day: "Sunday", times: "Early Morning & Morning Worship", icon: "🙏" },
              { day: "Wednesday", times: "Bible Study", icon: "📖" },
              { day: "Online", times: "Live Stream Every Service", icon: "📺" },
            ].map((s) => (
              <div key={s.day} className="flex items-center gap-4 bg-[#2d0e48]/10 rounded-2xl px-6 py-4">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-black text-[#2d0e48] text-lg">{s.day}</p>
                  <p className="text-[#2d0e48]/70 text-sm">{s.times}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WELCOME MESSAGE ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#f0c040] font-semibold tracking-widest uppercase text-sm mb-3">
                Welcome
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#2d0e48] mb-6 leading-tight">
                The Ministry That Is<br />
                <span className="text-[#521c7a]">Making a Difference</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Wayman Ministries is one of Jacksonville, Florida&apos;s most dynamic
                ministries. We have two worship locations, with various worship
                times to meet your demanding schedule.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Whether you&apos;re new to faith, returning after time away, or deeply
                rooted in your walk with God — there is a place for you at
                Wayman Temple. We are a community built on the Word, driven by
                love, and committed to serving Jacksonville and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We welcome your online presence and participation. If you are ever
                in the area, we would love to have you worship with us in person.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#plan-visit"
                  className="inline-flex items-center gap-2 bg-[#2d0e48] text-white font-bold px-6 py-3 rounded-full hover:bg-[#521c7a] transition-colors text-sm"
                >
                  Plan Your Visit
                </a>
                <a
                  href="https://wayman.org/ministries/?page_id=175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#f0c040] text-[#2d0e48] font-bold px-6 py-3 rounded-full hover:bg-[#f0c040] transition-colors text-sm"
                >
                  Give Online
                </a>
              </div>
            </div>

            <div className="bg-[#2d0e48] rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#f0c040]/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#f0c040]/10 flex items-center justify-center mb-6">
                  <BookOpen size={32} className="text-[#f0c040]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#f0c040]">A Word From Pastor&apos;s Desk</h3>
                <p className="text-gray-300 leading-relaxed mb-6 italic text-lg">
                  &ldquo;God has called us to be more than a church that meets on
                  Sundays. We are called to be a movement — one that transforms
                  families, communities, and the city of Jacksonville for the
                  glory of God.&rdquo;
                </p>
                <p className="text-gray-400 text-sm">— Wayman Temple Leadership</p>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    href="/ministries#pastor"
                    className="inline-flex items-center gap-2 text-[#f0c040] text-sm font-semibold hover:gap-3 transition-all"
                  >
                    Read Full Message <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANNOUNCEMENTS ─────────────────────────────────────── */}
      <section id="events" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#f0c040] font-semibold tracking-widest uppercase text-sm mb-3">
              What&apos;s Happening
            </p>
            <h2 className="text-4xl font-bold text-[#2d0e48]">Events &amp; Announcements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {announcements.map((a) => (
              <div
                key={a.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#f0c040]/15 text-[#b88a0d] uppercase tracking-wider">
                    {a.tag}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock size={12} />
                    {a.date}
                  </span>
                </div>
                <h3 className="font-bold text-[#2d0e48] text-lg mb-2 group-hover:text-[#521c7a] transition-colors">
                  {a.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://wayman.org/ministries/?page_id=157"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2d0e48] font-bold border-b-2 border-[#f0c040] pb-0.5 hover:text-[#f0c040] transition-colors"
            >
              View Full Event Calendar <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── LATEST SERMON ─────────────────────────────────────── */}
      <section id="sermons" className="py-24 bg-[#2d0e48]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#f0c040] font-semibold tracking-widest uppercase text-sm mb-3">
              Latest Message
            </p>
            <h2 className="text-4xl font-bold text-white">
              Watch This Week&apos;s Sermon
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UU88lMrs-898tVFWKxs_9LSA"
                title="Latest Wayman Ministries Sermon"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.youtube.com/channel/UC88lMrs-898tVFWKxs_9LSA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#f0c040] text-[#2d0e48] font-bold px-6 py-3 rounded-full hover:bg-[#d9a81a] transition-colors text-sm"
              >
                <YoutubeSvg />
                All Messages on YouTube
              </a>
              <a
                href="https://wayman.org/ministries/?page_id=160"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm"
              >
                <BookOpen size={16} />
                Other Resources
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MINISTRIES GRID ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#f0c040] font-semibold tracking-widest uppercase text-sm mb-3">
              Get Involved
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2d0e48] mb-4">
              Find Your Ministry
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              There&apos;s a place for everyone at Wayman Temple. Discover where you
              can connect, grow, and serve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((m) => (
              <div
                key={m.title}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-[#f0c040]/40 hover:shadow-lg transition-all bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2d0e48]/5 group-hover:bg-[#f0c040]/15 flex items-center justify-center mb-4 transition-colors">
                  <m.icon size={22} className="text-[#2d0e48] group-hover:text-[#b88a0d] transition-colors" />
                </div>
                <h3 className="font-bold text-[#2d0e48] mb-2">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLAN YOUR VISIT ───────────────────────────────────── */}
      <section id="plan-visit" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#f0c040] font-semibold tracking-widest uppercase text-sm mb-3">
                Plan Your Visit
              </p>
              <h2 className="text-4xl font-bold text-[#2d0e48] mb-6">
                What to Expect
              </h2>
              <div className="space-y-6">
                {[
                  { q: "When do services start?", a: "We offer Early Morning and Morning Worship services every Sunday. Check our events page for current times at each campus." },
                  { q: "Where are you located?", a: "Wayman Temple has two worship locations in Jacksonville, FL. Contact us for specific campus addresses and directions." },
                  { q: "Can I attend online?", a: "Absolutely! We live-stream every service on YouTube. Click 'Watch Live' to join us from anywhere in the world." },
                  { q: "What should I wear?", a: "Come as you are. We want you to feel comfortable. Many members dress in business casual or Sunday best, but there's no dress code." },
                  { q: "Are children welcome?", a: "Children are a vital part of our church family. We have engaging ministries for kids and teens of all ages." },
                ].map((faq) => (
                  <div key={faq.q} className="border-l-2 border-[#f0c040] pl-5">
                    <h4 className="font-bold text-[#2d0e48] mb-1">{faq.q}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div id="contact" className="bg-[#2d0e48] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2 text-[#f0c040]">Contact Us</h3>
              <p className="text-gray-400 text-sm mb-8">
                We&apos;d love to hear from you. Reach out and our team will get back
                to you promptly.
              </p>
              <div className="space-y-5 mb-8">
                <a
                  href="tel:+19046931503"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f0c040]/10 flex items-center justify-center shrink-0 group-hover:bg-[#f0c040]/20 transition-colors">
                    <Phone size={16} className="text-[#f0c040]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                    <p className="text-white font-medium group-hover:text-[#f0c040] transition-colors">(904) 693-1503</p>
                  </div>
                </a>
                <a
                  href="mailto:temple@wayman.org"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f0c040]/10 flex items-center justify-center shrink-0 group-hover:bg-[#f0c040]/20 transition-colors">
                    <Mail size={16} className="text-[#f0c040]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                    <p className="text-white font-medium group-hover:text-[#f0c040] transition-colors">temple@wayman.org</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f0c040]/10 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[#f0c040]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                    <p className="text-white font-medium">Jacksonville, Florida</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-gray-400 mb-4">Follow us online</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.youtube.com/channel/UC88lMrs-898tVFWKxs_9LSA"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#f0c040] hover:border-[#f0c040] hover:text-[#2d0e48] text-gray-400 transition-colors"
                  >
                    <YoutubeSvg />
                  </a>
                  <a
                    href="https://www.facebook.com/WaymanMinistries/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#f0c040] hover:border-[#f0c040] hover:text-[#2d0e48] text-gray-400 transition-colors"
                  >
                    <FacebookSvg />
                  </a>
                  <a
                    href="mailto:temple@wayman.org"
                    aria-label="Email"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#f0c040] hover:border-[#f0c040] hover:text-[#2d0e48] text-gray-400 transition-colors"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://wayman.org/ministries/?page_id=162"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-[#f0c040] text-[#2d0e48] font-bold py-3 rounded-full hover:bg-[#d9a81a] transition-colors text-sm"
                >
                  Send Us a Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ONLINE GIVING CTA ─────────────────────────────────── */}
      <section className="py-20 bg-[#f0c040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-[#2d0e48] mb-4">
            Support the Ministry
          </h2>
          <p className="text-[#2d0e48]/70 text-lg mb-10 max-w-xl mx-auto">
            Your generosity fuels everything we do — from Sunday services to
            community outreach to the next generation. Give today and be part of
            what God is doing through Wayman Ministries.
          </p>
          <a
            href="https://wayman.org/ministries/?page_id=175"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2d0e48] text-white font-bold px-10 py-4 rounded-full hover:bg-[#521c7a] transition-colors shadow-lg text-lg"
          >
            <Gift size={20} />
            Give Online Now
          </a>
        </div>
      </section>
    </>
  );
}
