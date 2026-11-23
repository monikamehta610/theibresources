import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources & Downloads",
  description: "Free downloadable PDFs: IA/EE checklists, statistical test guides, command term glossaries, topic trackers, and revision planners for IBDP ESS and Biology.",
  openGraph: {
    title: "Resources & Downloads - The IB Resources",
    description: "Free PDF downloads for IBDP ESS and Biology students",
  },
};

const resources = [
  {
    category: "IA & EE Essentials",
    items: [
      {
        title: "IA Criterion Checklist (ESS)",
        desc: "Criterion-by-criterion checklist with mark-band descriptors. Print and tick off as you write.",
        format: "PDF",
        pages: 2,
        tags: ["ESS", "IA", "Checklist"],
        comingSoon: true,
      },
      {
        title: "IA Criterion Checklist (Biology)",
        desc: "All 5 criteria with descriptors. Includes Personal Engagement, Exploration, Analysis, Evaluation, Communication.",
        format: "PDF",
        pages: 2,
        tags: ["Biology", "IA", "Checklist"],
        comingSoon: true,
      },
      {
        title: "EE Assessment Criteria Tracker",
        desc: "Track your progress against all 5 criteria (A-E). Includes RPPF reflection prompts.",
        format: "PDF",
        pages: 3,
        tags: ["EE", "Tracker", "RPPF"],
        comingSoon: true,
      },
      {
        title: "RPPF Reflection Template",
        desc: "Structured templates for all 3 mandatory reflection sessions with guiding questions.",
        format: "PDF",
        pages: 2,
        tags: ["EE", "RPPF", "Template"],
        comingSoon: true,
      },
    ],
  },
  {
    category: "Statistical Analysis",
    items: [
      {
        title: "Statistical Test Selection Flowchart",
        desc: "Decision tree: choose the right test based on data type, groups, and research question.",
        format: "PDF",
        pages: 1,
        tags: ["Statistics", "Flowchart", "Both"],
        comingSoon: true,
      },
      {
        title: "t-Test & ANOVA Guide",
        desc: "When to use each, assumptions, how to interpret output, reporting in IA/EE.",
        format: "PDF",
        pages: 3,
        tags: ["Statistics", "t-test", "ANOVA"],
        comingSoon: true,
      },
      {
        title: "Chi-Squared & Correlation Guide",
        desc: "Chi-squared for categorical, Spearman's/Pearson for correlations. Worked examples.",
        format: "PDF",
        pages: 3,
        tags: ["Statistics", "Chi-squared", "Correlation"],
        comingSoon: true,
      },
      {
        title: "Diversity Indices Cheat Sheet",
        desc: "Simpson's, Shannon-Wiener, Berger-Parker. Formulas, interpretation, when to use each.",
        format: "PDF",
        pages: 2,
        tags: ["ESS", "Ecology", "Statistics"],
        comingSoon: true,
      },
      {
        title: "Uncertainty & Error Analysis Guide",
        desc: "Instrument precision, propagation, percentage uncertainty, error bars on graphs.",
        format: "PDF",
        pages: 3,
        tags: ["Both", "Analysis", "Errors"],
        comingSoon: true,
      },
    ],
  },
  {
    category: "Command Terms & Glossaries",
    items: [
      {
        title: "IB Command Terms Glossary",
        desc: "All IB command terms with definitions, examples, and what examiners expect.",
        format: "PDF",
        pages: 4,
        tags: ["Both", "Glossary", "Exam Prep"],
        comingSoon: true,
      },
      {
        title: "ESS Key Terms by Unit",
        desc: "Unit-organized glossary with definitions, related concepts, and common misconceptions.",
        format: "PDF",
        pages: 6,
        tags: ["ESS", "Glossary", "Revision"],
        comingSoon: true,
      },
      {
        title: "Biology Key Terms by Theme",
        desc: "Theme-organized glossary (Unity & Diversity, Form & Function, Interaction, Continuity).",
        format: "PDF",
        pages: 6,
        tags: ["Biology", "Glossary", "Revision"],
        comingSoon: true,
      },
    ],
  },
  {
    category: "Planning & Tracking",
    items: [
      {
        title: "IA Timeline Planner (18-week)",
        desc: "Week-by-week planner with milestones, teacher check-ins, and buffer time built in.",
        format: "PDF",
        pages: 2,
        tags: ["Both", "IA", "Planner"],
        comingSoon: true,
      },
      {
        title: "EE Timeline Planner (18-month)",
        desc: "Monthly milestones from topic selection to final submission + RPPF sessions.",
        format: "PDF",
        pages: 2,
        tags: ["EE", "Planner", "Timeline"],
        comingSoon: true,
      },
      {
        title: "Topic Mastery Tracker (ESS)",
        desc: "Track confidence level for all 30 ESS topics. Traffic light system: Red/Amber/Green.",
        format: "PDF",
        pages: 2,
        tags: ["ESS", "Tracker", "Revision"],
        comingSoon: true,
      },
      {
        title: "Topic Mastery Tracker (Biology)",
        desc: "Track confidence for all 40 Biology topics across 4 themes.",
        format: "PDF",
        pages: 2,
        tags: ["Biology", "Tracker", "Revision"],
        comingSoon: true,
      },
      {
        title: "Revision Countdown Calendar",
        desc: "8-week pre-exam calendar with daily focus topics, past paper practice, and active recall.",
        format: "PDF",
        pages: 3,
        tags: ["Both", "Revision", "Calendar"],
        comingSoon: true,
      },
    ],
  },
  {
    category: "Fieldwork & Lab Guides",
    items: [
      {
        title: "ESS Fieldwork Methods Handbook",
        desc: "Step-by-step protocols for aquatic, terrestrial, and atmospheric fieldwork techniques.",
        format: "PDF",
        pages: 12,
        tags: ["ESS", "Fieldwork", "Methods"],
        comingSoon: true,
      },
      {
        title: "Biology Lab Apparatus Checklist",
        desc: "Complete apparatus lists for 20+ common IA investigations with alternatives.",
        format: "PDF",
        pages: 4,
        tags: ["Biology", "Lab", "Apparatus"],
        comingSoon: true,
      },
      {
        title: "Risk Assessment Template",
        desc: "IB-compliant risk assessment form for IA fieldwork and lab work.",
        format: "PDF",
        pages: 2,
        tags: ["Both", "Safety", "Template"],
        comingSoon: true,
      },
      {
        title: "Ethics Approval Form Template",
        desc: "Human participant consent, animal welfare considerations, data privacy.",
        format: "PDF",
        pages: 2,
        tags: ["Both", "Ethics", "Template"],
        comingSoon: true,
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="resources-title">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-ess/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-bio/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl text-center">
          <h1 id="resources-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Resources & Downloads
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Free PDF downloads for IBDP ESS & Biology. Checklists, statistical guides, planners, glossaries — everything you need to stay organized and exam-ready.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="categories-heading">
        <div className="mx-auto max-w-7xl">
          {resources.map((category, catIdx) => (
            <article key={catIdx} className="mb-16" aria-labelledby={`cat-${catIdx}`}>
              <header className="mb-8">
                <h2 id={`cat-${catIdx}`} className="text-2xl font-bold text-gray-900 mb-2">{category.category}</h2>
                <div className="w-16 h-1 bg-ess" aria-hidden="true"></div>
              </header>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIdx) => (
                  <article
                    key={itemIdx}
                    className={`bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-ess hover:shadow-lg transition-all relative ${item.comingSoon ? 'opacity-75' : ''}`}
                  >
                    {item.comingSoon && (
                      <span className="absolute top-3 right-3 bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}

                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded">{item.format}</span>
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded">{item.pages} pp</span>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{item.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Tags">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-1 text-xs bg-white border border-gray-200 rounded text-gray-600">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      disabled={item.comingSoon}
                      className={`w-full px-4 py-2 rounded-xl font-medium text-sm transition-colors ${item.comingSoon
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-ess text-white hover:bg-gray-800'}`}
                    >
                      {item.comingSoon ? 'Notify Me When Ready' : 'Download PDF'}
                    </button>
                  </article>
                ))}
              </div>
            </article>
          ))}

          {/* Newsletter Signup */}
          <div className="bg-gray-900 text-white rounded-3xl p-8 sm:p-12 text-center mt-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get Notified When Resources Launch</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Join 1,000+ IB students and teachers. No spam. Unsubscribe anytime. Powered by Cloudflare Workers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" aria-label="Newsletter signup">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-bio focus:border-bio outline-none"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="bg-bio text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">By subscribing, you agree to our <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>.</p>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="howto-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="howto-heading" className="text-3xl font-bold text-gray-900 mb-4">How to Use These Resources</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📥", title: "Download", desc: "Click any resource to download the PDF. No account required." },
              { icon: "🖨️", title: "Print", desc: "Designed for A4/Letter printing. Checklists work best printed." },
              { icon: "✏️", title: "Annotate", desc: "Use PDF annotation tools or print and write by hand." },
              { icon: "🔄", title: "Iterate", desc: "Update your trackers weekly. Revision is a cycle, not a one-off." },
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">Want a Custom Resource?</h2>
          <p className="text-gray-300 mb-8">Need a specific checklist, template, or guide not listed here? Let me know.</p>
          <a href="/contact" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Request a Resource
          </a>
        </div>
      </section>
    </div>
  );
}