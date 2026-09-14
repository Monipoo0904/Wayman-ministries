import Link from "next/link";
import { ArrowRight, BookOpen, Heart, GraduationCap, Users, ChevronDown } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#2d0e48]">
        {/* Background gradient rings */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#f0c040]/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#f0c040]/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#f0c040]/5" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f0c040]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#f0c040]/40 text-[#f0c040] text-xs font-semibold tracking-[0.2em] uppercase">
            Jacksonville, Florida
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight mb-6">
            The Ministry That Is<br />
            <span className="text-[#f0c040]">Making a Difference</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Wayman Ministries has been serving Jacksonville and beyond — through
            vibrant worship, exceptional education, and community transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ministries"
              className="inline-flex items-center justify-center gap-2 bg-[#f0c040] text-[#2d0e48] font-bold px-8 py-4 rounded-full text-base hover:bg-[#d9a81a] transition-colors shadow-lg shadow-[#f0c040]/20"
            >
              Visit Wayman Temple <ArrowRight size={18} />
            </Link>
            <Link
              href="https://wayman.org/ministries/?page_id=175"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/10 transition-colors"
            >
              Give Online
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 gap-1 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <ChevronDown size={16} />
        </div>
      </section>

      {/* ── SERVICE TIMES BANNER ──────────────────────────────── */}
      <section className="bg-[#f0c040] text-[#2d0e48]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { day: "Sunday", detail: "Early Morning & Morning Worship" },
              { day: "Wednesday", detail: "Mid-Week Bible Study" },
              { day: "Online", detail: "Live Stream Every Sunday" },
            ].map((s) => (
              <div key={s.day} className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <span className="font-black text-xl">{s.day}</span>
                <span className="hidden sm:block w-px h-8 bg-[#2d0e48]/20" />
                <span className="text-sm font-medium opacity-80">{s.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR NETWORK (Three Sites) ─────────────────────────── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#f0c040] font-semibold tracking-widest uppercase text-sm mb-3">
              Our Network
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2d0e48] mb-4">
              One Vision. Three Pillars.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Through worship, education, and community investment, Wayman Ministries
              touches every dimension of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wayman Temple */}
            <div className="group relative rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow bg-white flex flex-col">
              <div className="h-3 bg-[#2d0e48]" />
              <div className="p-8 flex flex-col flex-1">
                <div className="w-14 h-14 rounded-2xl bg-[#2d0e48]/5 flex items-center justify-center mb-5">
                  <BookOpen size={28} className="text-[#2d0e48]" />
                </div>
                <h3 className="text-xl font-bold text-[#2d0e48] mb-3">Wayman Temple</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  Our dynamic worship ministry with two Jacksonville campuses
                  offering multiple services to fit your schedule. Experience
                  powerful preaching, vibrant praise, and authentic community.
                </p>
                <Link
                  href="/ministries"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#2d0e48] hover:text-[#f0c040] transition-colors group-hover:gap-3"
                >
                  Visit Wayman Temple <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Wayman Academy */}
            <div className="group relative rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow bg-white flex flex-col">
              <div className="h-3 bg-[#f0c040]" />
              <div className="p-8 flex flex-col flex-1">
                <div className="w-14 h-14 rounded-2xl bg-[#f0c040]/10 flex items-center justify-center mb-5">
                  <GraduationCap size={28} className="text-[#b88a0d]" />
                </div>
                <h3 className="text-xl font-bold text-[#2d0e48] mb-3">Wayman Academy of the Arts</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  A premier charter school (K–5) providing an arts-integrated
                  curriculum that develops the whole child — academically,
                  creatively, and spiritually.
                </p>
                <a
                  href="http://www.waymanacademy.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#2d0e48] hover:text-[#f0c040] transition-colors group-hover:gap-3"
                >
                  Visit the Academy <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Wayman CDC */}
            <div className="group relative rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow bg-white flex flex-col">
              <div className="h-3 bg-[#521c7a]" />
              <div className="p-8 flex flex-col flex-1">
                <div className="w-14 h-14 rounded-2xl bg-[#521c7a]/5 flex items-center justify-center mb-5">
                  <Heart size={28} className="text-[#521c7a]" />
                </div>
                <h3 className="text-xl font-bold text-[#2d0e48] mb-3">Wayman Community Development</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  Serving Jacksonville with early learning programs, pre-school
                  education, and vital community services that uplift families
                  and transform neighborhoods.
                </p>
                <a
                  href="http://www.waymancommunity.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#2d0e48] hover:text-[#521c7a] transition-colors group-hover:gap-3"
                >
                  Visit Wayman CDC <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION STATEMENT ──────────────────────────────────── */}
      <section id="vision" className="py-24 bg-[#2d0e48] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#f0c040]/5 rounded-full blur-3xl" />
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#521c7a]/50 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#f0c040] font-semibold tracking-widest uppercase text-sm mb-6">
            Our Vision
          </p>
          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug mb-8">
            "We exist to glorify God by{" "}
            <span className="text-[#f0c040]">serving people</span>, building
            community, and{" "}
            <span className="text-[#f0c040]">transforming lives</span>."
          </blockquote>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            No matter who you are or where you&apos;ve been, you are welcome here.
            Wayman Ministries is a place of grace, growth, and genuine
            community.
          </p>
          <Link
            href="/ministries"
            className="inline-flex items-center gap-2 border border-[#f0c040] text-[#f0c040] font-semibold px-8 py-4 rounded-full hover:bg-[#f0c040] hover:text-[#2d0e48] transition-colors"
          >
            Plan Your Visit <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── COMMUNITY IMPACT ──────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#f0c040] font-semibold tracking-widest uppercase text-sm mb-3">
                Community Impact
              </p>
              <h2 className="text-4xl font-bold text-[#2d0e48] mb-6 leading-tight">
                Serving Jacksonville<br />Since Our Founding
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From Sunday morning worship to weekday community services,
                Wayman Ministries is committed to meeting real needs in
                Jacksonville. We believe a church should be the heartbeat of
                its neighborhood.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { stat: "2", label: "Worship Locations" },
                  { stat: "K–5", label: "Charter School" },
                  { stat: "7 Days", label: "Community Service" },
                  { stat: "Jax", label: "Rooted in Florida" },
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-3xl font-black text-[#2d0e48] mb-1">{item.stat}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/ministries#contact"
                className="inline-flex items-center gap-2 bg-[#2d0e48] text-white font-bold px-8 py-4 rounded-full hover:bg-[#521c7a] transition-colors"
              >
                Get Involved <Users size={18} />
              </Link>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Worship", desc: "Two campuses, multiple services, one community", icon: "🙏" },
                  { title: "Education", desc: "Award-winning arts-integrated charter school", icon: "🎓" },
                  { title: "Pre-School", desc: "Early learning programs building bright futures", icon: "🌱" },
                  { title: "Outreach", desc: "Community services transforming neighborhoods", icon: "❤️" },
                ].map((card) => (
                  <div key={card.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-3">{card.icon}</div>
                    <h4 className="font-bold text-[#2d0e48] mb-2">{card.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST MESSAGE ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#f0c040] font-semibold tracking-widest uppercase text-sm mb-3">
              Latest Message
            </p>
            <h2 className="text-4xl font-bold text-[#2d0e48]">Watch &amp; Be Inspired</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-[#2d0e48]">
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UU88lMrs-898tVFWKxs_9LSA"
                title="Latest Wayman Ministries Sermon"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="text-center mt-8">
              <a
                href="https://www.youtube.com/channel/UC88lMrs-898tVFWKxs_9LSA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2d0e48] font-bold border-b-2 border-[#f0c040] pb-0.5 hover:text-[#f0c040] transition-colors"
              >
                View All Messages on YouTube <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section className="bg-[#f0c040] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-[#2d0e48] mb-4">
            Ready to Belong?
          </h2>
          <p className="text-[#2d0e48]/70 text-lg mb-10">
            Join thousands in Jacksonville who call Wayman Ministries home.
            We&apos;d love to see you this Sunday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ministries#plan-visit"
              className="inline-flex items-center justify-center gap-2 bg-[#2d0e48] text-white font-bold px-8 py-4 rounded-full hover:bg-[#521c7a] transition-colors shadow-lg"
            >
              Plan My Visit <ArrowRight size={18} />
            </Link>
            <a
              href="https://wayman.org/ministries/?page_id=139"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#2d0e48] text-[#2d0e48] font-bold px-8 py-4 rounded-full hover:bg-[#2d0e48] hover:text-white transition-colors"
            >
              <span className="w-2 h-2 bg-[#2d0e48] rounded-full animate-pulse" />
              Watch Live Now
            </a>
          </div>
        </div>
      </section>

      {/* ── STAY CONNECTED ────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-[#200835]">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#f0c040] font-semibold tracking-widest uppercase text-sm mb-3">
            Stay Connected
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Join Our Mailing List
          </h2>
          <p className="text-gray-400 mb-8">
            Get the latest news, events, and announcements delivered straight
            to your inbox.
          </p>
          <NewsletterForm />
          <p className="text-gray-600 text-xs mt-4">
            Or text <strong className="text-gray-400">WAYMAN</strong> to stay updated.
          </p>
        </div>
      </section>
    </>
  );
}
