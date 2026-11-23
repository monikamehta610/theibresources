import Link from "next/link";
import { COURSES } from "@/data/courses";
import { CourseCard } from "@/components/course/CourseCard";

export default function Home() {
  const stats = [
    { value: "70+", label: "Topics Covered" },
    { value: "2", label: "IBDP Courses" },
    { value: "9+", label: "Years Experience" },
    { value: "100s", label: "Students Mentored" },
  ];

  const features = [
    {
      icon: "📊",
      title: "Interactive Slide Decks",
      description: "Self-hosted, interactive presentations for every IBDP Biology & ESS topic with embedded diagrams and practice questions.",
    },
    {
      icon: "🎯",
      title: "IA & EE Frameworks",
      description: "Step-by-step guides for Internal Assessments and Extended Essays with marking criteria breakdowns and topic ideas.",
    },
    {
      icon: "📚",
      title: "Study Guides & Key Terms",
      description: "Curated key vocabulary, common misconceptions, and exam tips for every topic aligned to the latest IB guides.",
    },
    {
      icon: "👩‍🏫",
      title: "Expert Tutoring",
      description: "Book 1:1 sessions with an IBDP examiner and 9+ year veteran educator for personalized IA/EE guidance.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-white" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-ess/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-bio/5 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ess/10 text-ess text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ess opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ess" />
              </span>
              Updated for IB DP 2025/2026 Guides
            </span>
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
              Independent IBDP Science Resources
              <br />
              <span className="text-ess">Built by an IB Examiner</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              70+ interactive topic slides, comprehensive IA/EE frameworks, and expert tutoring for Environmental Systems & Societies and Biology. No affiliation with the IBO — just proven results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/courses/ess"
                className="bg-ess text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-gray-800 transition-colors shadow-lg shadow-ess/25"
              >
                Explore ESS Course →
              </Link>
              <Link
                href="/courses/biology"
                className="bg-bio text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-bio/25"
              >
                Explore Biology Course →
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-ess mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="courses-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="courses-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Course Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every topic from the official IB DP guides, organized by unit with interactive slides, study notes, and exam tips.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-ess font-medium hover:text-gray-700 transition-colors"
            >
              View All Free Resources →
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="features-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Students Choose The IB Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Independent, expert-crafted materials designed for actual IBDP success — not generic textbook summaries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="text-4xl mb-4" aria-hidden="true">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <div className="bg-ess rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ess/90 to-gray-900" aria-hidden="true" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />
            <div className="relative">
              <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Boost Your IB Scores?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                Book a free 15-minute consultation to discuss your IBDP Biology or ESS goals, IA/EE guidance, or tutoring needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-ess px-8 py-4 rounded-xl text-base font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Disclaimer Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100 bg-gray-50" aria-labelledby="disclaimer-heading">
        <div className="mx-auto max-w-7xl text-center">
          <h3 id="disclaimer-heading" className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Important Notice
          </h3>
          <p className="text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> This website is an independent educational resource and is not affiliated with, endorsed by, or connected to the International Baccalaureate Organization (IBO). IB, International Baccalaureate, and IB DP are registered trademarks of the IBO. All content is original work by Monika Mehta unless otherwise noted. Past papers and official mark schemes are not hosted on this site.
          </p>
        </div>
      </section>
    </div>
  );
}
