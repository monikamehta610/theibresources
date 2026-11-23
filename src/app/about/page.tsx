import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Monika Mehta — IBDP Biology & ESS educator, IA/EE moderator, curriculum designer. 9+ years experience. Learn about my teaching philosophy and background.",
  openGraph: {
    title: "About Monika Mehta - The IB Resources",
    description: "IBDP Biology & ESS educator with 9+ years experience",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="about-title">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-ess/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-bio/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl text-center">
          <h1 id="about-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            About Monika Mehta
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            IBDP Biology & ESS educator. IA/EE moderator. Curriculum designer. Building resources that actually help students succeed.
          </p>
          <a href="https://monikamehta.pages.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
            View Full Portfolio →
          </a>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="bio-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <article aria-labelledby="bio-heading">
                <h2 id="bio-heading" className="text-3xl font-bold text-gray-900 mb-4">Educator • Moderator • Entrepreneur</h2>
                <div className="prose prose-gray max-w-none text-gray-700">
                  <p className="text-lg leading-relaxed mb-6">
                    I'm Monika Mehta — an IBDP Biology and Environmental Systems & Societies (ESS) educator with over 9 years of classroom experience across international schools. I've guided hundreds of students through Internal Assessments, Extended Essays, and final examinations.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    As an IB examiner and IA moderator, I've seen the full spectrum of student work — from exemplary investigations that push boundaries to common pitfalls that cost easy marks. This insider perspective shapes every resource I create.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Beyond the classroom, I'm a veteran entrepreneur who has built and scaled ed-tech products. I understand both the pedagogical needs of IB students and the technical realities of delivering quality resources at scale. The IB Resources is my independent project — no institutional affiliation, no corporate agenda, just practical support for IBDP science students and teachers.
                  </p>
                  <p className="text-lg leading-relaxed">
                    My teaching philosophy: <strong>Clarity over complexity. Application over memorization. Local context over generic theory.</strong> The best IB science happens when students investigate real issues in their own communities using rigorous scientific methods.
                  </p>
                </div>
              </article>

              <article aria-labelledby="credentials-heading">
                <h2 id="credentials-heading" className="text-2xl font-bold text-gray-900 mb-4">Credentials & Experience</h2>
                <div className="space-y-4">
                  {[
                    { icon: "🎓", title: "IBDP Biology & ESS Teacher", detail: "9+ years across international schools (IB World Schools)" },
                    { icon: "✍️", title: "IB Examiner & IA Moderator", detail: "Biology Paper 2/3, ESS Paper 1/2, IA moderation" },
                    { icon: "📚", title: "Curriculum Designer", detail: "Developed school-wide IBDP science curricula & assessment frameworks" },
                    { icon: "🏢", title: "Ed-Tech Entrepreneur", detail: "Founded & scaled educational technology products" },
                    { icon: "🎯", title: "IA/EE Supervisor", detail: "Guided 100+ successful Internal Assessments & Extended Essays" },
                    { icon: "🌍", title: "Workshop Leader", detail: "IB Category 1/2 workshops for Biology & ESS teachers" },
                  ].map((cred, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <span className="text-2xl flex-shrink-0">{cred.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">{cred.title}</h3>
                        <p className="text-sm text-gray-600">{cred.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article aria-labelledby="philosophy-heading">
                <h2 id="philosophy-heading" className="text-2xl font-bold text-gray-900 mb-4">Teaching Philosophy</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Local First", desc: "Ground investigations in students' own environments — school grounds, local waterways, community issues." },
                    { title: "Data-Driven", desc: "Every claim backed by evidence. Statistical literacy built into every topic, not taught in isolation." },
                    { title: "Systems Thinking", desc: "ESS especially: connections between environmental, social, economic, and political systems." },
                    { title: "Examiner Lens", desc: "Resources designed from the marker's perspective — what earns marks, what loses them." },
                    { title: "Accessible Rigor", desc: "High expectations with scaffolded support. Differentiation built into every resource." },
                    { title: "Independent Learning", desc: "Students who can self-direct their IA/EE are students who succeed at university." },
                  ].map((phil, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-ess hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-gray-900 mb-2">{phil.title}</h3>
                      <p className="text-sm text-gray-600">{phil.desc}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <aside className="lg:col-span-1" aria-labelledby="connect-heading">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 sticky top-24">
                <h2 id="connect-heading" className="text-xl font-bold text-gray-900 mb-4">Connect</h2>
                <div className="space-y-3">
                  <a href="https://monikamehta.pages.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-bio hover:shadow-md transition-all">
                    <span className="text-2xl">🌐</span>
                    <div>
                      <p className="font-medium text-gray-900">Full Portfolio</p>
                      <p className="text-xs text-gray-500">monikamehta.pages.dev</p>
                    </div>
                  </a>
                  <a href="/contact" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-ess hover:shadow-md transition-all">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="font-medium text-gray-900">Book a Session</p>
                      <p className="text-xs text-gray-500">IA/EE consultation</p>
                    </div>
                  </a>
                  <a href="/courses/ess" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-ess hover:shadow-md transition-all">
                    <span className="text-2xl">🌍</span>
                    <div>
                      <p className="font-medium text-gray-900">ESS Resources</p>
                      <p className="text-xs text-gray-500">30+ topics</p>
                    </div>
                  </a>
                  <a href="/courses/biology" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-bio hover:shadow-md transition-all">
                    <span className="text-2xl">🧬</span>
                    <div>
                      <p className="font-medium text-gray-900">Biology Resources</p>
                      <p className="text-xs text-gray-500">40+ topics</p>
                    </div>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Legal Notice</h3>
                  <p className="text-xs text-gray-500">
                    This website is an independent educational resource and is not endorsed by, affiliated with, or connected to the International Baccalaureate Organization (IBO). IB, IBDP, and related marks are trademarks of the IBO. Resources here are created for nominative fair use educational purposes.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white" aria-labelledby="stats-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: "9+", label: "Years IBDP Teaching" },
              { num: "500+", label: "Students Guided" },
              { num: "100+", label: "IA/EE Supervised" },
              { num: "70", label: "Topics Published" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.num}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-heading" className="text-3xl font-bold text-gray-900 mb-4">Ready to Improve Your IB Science Grades?</h2>
          <p className="text-gray-600 mb-8">Explore free resources, book a consultation, or start with the IA/EE guides.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/courses" className="bg-ess text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              Browse Courses
            </Link>
            <Link href="/ia-guide" className="bg-bio text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              IA Guides
            </Link>
            <Link href="/ee-guide" className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors">
              EE Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}