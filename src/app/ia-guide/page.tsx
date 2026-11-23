import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internal Assessment (IA) Guide",
  description: "Complete IBDP Internal Assessment guide for ESS and Biology. Criterion breakdown, topic ideas, timeline, and expert tips from an IB examiner.",
  openGraph: {
    title: "IA Guide - The IB Resources",
    description: "Complete IBDP Internal Assessment guide for ESS and Biology",
  },
};

const iaCriteria = [
  {
    id: "identifying-context",
    title: "Identifying the Context",
    marks: 6,
    description: "Clear environmental issue, focused research question, and local/global context.",
    keyPoints: [
      "Identify a genuine environmental issue (local or global)",
      "Formulate a focused, testable research question",
      "Provide relevant background context and significance",
      "Connect to environmental systems and societies concepts",
    ],
    tips: [
      "Choose a topic you can actually investigate locally",
      "RQ must be specific, measurable, and achievable",
      "Show why this issue matters in your context",
    ],
  },
  {
    id: "planning",
    title: "Planning",
    marks: 6,
    description: "Methodology, variable control, safety & ethics.",
    keyPoints: [
      "Detailed, replicable methodology with step-by-step procedures",
      "Identify and control relevant variables (independent, dependent, controlled)",
      "Address safety considerations and risk assessment",
      "Consider ethical implications (especially for human/animal subjects)",
      "Justify sampling strategy and sample size",
    ],
    tips: [
      "Write methodology so someone else could replicate it",
      "Use a table for variables with clear control methods",
      "Don't forget ethical consent forms if needed",
    ],
  },
  {
    id: "analysis",
    title: "Analysis",
    marks: 6,
    description: "Raw data processing, statistical tests, uncertainty analysis.",
    keyPoints: [
      "Present raw data in well-organized tables",
      "Process data correctly (calculations, graphs, statistical tests)",
      "Include uncertainty/error analysis for measurements",
      "Use appropriate statistical tests (t-test, chi-squared, correlation, etc.)",
      "Graphs must be properly labeled with units and error bars",
    ],
    tips: [
      "Show sample calculations for processed data",
      "Choose statistical tests that match your data type",
      "Discuss what your statistical results actually mean",
    ],
  },
  {
    id: "evaluation",
    title: "Evaluation",
    marks: 6,
    description: "Conclusion linked to RQ, strengths, limitations & solutions.",
    keyPoints: [
      "Answer your research question directly using your data",
      "Evaluate strengths of your methodology",
      "Identify specific limitations with impact on results",
      "Propose realistic improvements/extensions",
      "Connect findings to broader environmental context",
    ],
    tips: [
      "Don't just list limitations — explain their impact",
      "Improvements should be specific and feasible",
      "Link back to the environmental issue from Criterion 1",
    ],
  },
];

const essIATopics = [
  "Measuring biodiversity in a local ecosystem using Simpson's Index",
  "Investigating water quality parameters along a river gradient",
  "Carbon sequestration comparison in different tree species",
  "Microplastic contamination in local beach sand samples",
  "Energy efficiency audit of school/home buildings",
  "Soil health comparison: organic vs conventional farmland",
  "Air quality monitoring near traffic vs green spaces",
  "Ecological footprint analysis of school community",
  "Invasive species impact on native plant diversity",
  "Rainwater harvesting potential for school irrigation",
];

const bioIATopics = [
  "Effect of light intensity on photosynthetic rate in aquatic plants",
  "Enzyme activity (catalase) under varying pH/temperature conditions",
  "Osmosis rate in potato cores across sucrose concentrations",
  "Yeast respiration rate with different sugar substrates",
  "Antimicrobial properties of plant extracts on bacterial growth",
  "Seed germination rates under different salinity levels",
  "Transpiration rate under varying humidity/wind conditions",
  "Vitamin C content in fruits: fresh vs stored vs cooked",
  "Daphnia heart rate response to caffeine/ethanol concentrations",
  "Population growth of yeast in different nutrient conditions",
];

export default function IAGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="guide-title">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-ess/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-bio/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-medium mb-4">
            📝 Internal Assessment Guide
          </span>
          <h1 id="guide-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Master Your IBDP Internal Assessment
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Step-by-step frameworks for ESS and Biology IAs. Criterion-by-criterion breakdown, topic ideas, timeline planners, and examiner insights — all from 9+ years of IA moderation experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/ia-guide/ess" className="bg-ess text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              ESS IA Guide
            </Link>
            <Link href="/ia-guide/biology" className="bg-bio text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              Biology IA Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="overview-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="overview-heading" className="text-3xl font-bold text-gray-900 mb-4">IA Structure Overview</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Both ESS and Biology IAs are assessed on four criteria worth 6 marks each (24 total).</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {iaCriteria.map((criterion) => (
              <article key={criterion.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{criterion.title}</h3>
                  <span className="bg-ess text-white text-sm font-bold px-3 py-1 rounded-full">{criterion.marks} marks</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{criterion.description}</p>
                <ul className="space-y-2 text-sm text-gray-700" role="list">
                  {criterion.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-ess rounded-full flex-shrink-0 mt-1.5" aria-hidden="true"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subject-Specific Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="subject-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* ESS IA */}
            <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden" aria-labelledby="ess-ia-heading">
              <div className="bg-ess text-white p-6">
                <h3 id="ess-ia-heading" className="text-2xl font-bold mb-2">ESS Internal Assessment</h3>
                <p className="text-gray-200">25% of final grade • 1,500–2,250 words</p>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Popular ESS IA Topics</h4>
                  <ul className="space-y-2" role="list">
                    {essIATopics.map((topic, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="w-1.5 h-1.5 bg-ess rounded-full flex-shrink-0 mt-1.5" aria-hidden="true"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/ia-guide/ess" className="inline-flex items-center gap-2 text-ess font-medium hover:text-gray-700 transition-colors">
                  View Full ESS IA Guide →
                </Link>
              </div>
            </article>

            {/* Biology IA */}
            <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden" aria-labelledby="bio-ia-heading">
              <div className="bg-bio text-white p-6">
                <h3 id="bio-ia-heading" className="text-2xl font-bold mb-2">Biology Internal Assessment</h3>
                <p className="text-blue-100">20% of final grade • 6–12 pages</p>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Popular Biology IA Topics</h4>
                  <ul className="space-y-2" role="list">
                    {bioIATopics.map((topic, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="w-1.5 h-1.5 bg-bio rounded-full flex-shrink-0 mt-1.5" aria-hidden="true"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/ia-guide/biology" className="inline-flex items-center gap-2 text-bio font-medium hover:text-gray-700 transition-colors">
                  View Full Biology IA Guide →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Examiner Tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="tips-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="tips-heading" className="text-3xl font-bold text-gray-900 mb-4">Examiner Insights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Common pitfalls and pro tips from 9+ years of IBDP teaching and IA moderation.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Start Early", desc: "Begin topic selection in DP Year 1. Data collection takes longer than you think — especially for fieldwork." },
              { title: "Local Context Wins", desc: "IAs grounded in your local environment score higher on personal engagement and relevance." },
              { title: "Variables Table", desc: "Always include a clear variables table. It's an easy 1-2 marks in Planning that many students miss." },
              { title: "Statistical Justification", desc: "Don't just run a t-test. Explain WHY it's appropriate for your data type and research question." },
              { title: "Limitations = Marks", desc: "Honest, specific limitations with proposed improvements score better than claiming 'no limitations'." },
              { title: "Word Count Discipline", desc: "ESS: 1,500–2,250 words. Biology: 6–12 pages. Examiners stop reading after the limit." },
            ].map((tip, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">Need Personalized IA Guidance?</h2>
          <p className="text-gray-300 mb-8">Book a 1:1 session for topic selection, methodology review, or draft feedback.</p>
          <Link href="/contact" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Book IA Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}