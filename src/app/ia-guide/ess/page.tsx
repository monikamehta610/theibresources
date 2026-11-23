import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESS Internal Assessment Guide",
  description: "Complete ESS IA guide: criterion breakdown, 10+ topic ideas, fieldwork methods, statistical tests, timeline planner, and examiner tips.",
  openGraph: {
    title: "ESS IA Guide - The IB Resources",
    description: "Complete ESS Internal Assessment guide with fieldwork methods and examiner tips",
  },
};

const essIACriteria = [
  {
    id: "identifying-context",
    title: "Identifying the Context",
    marks: 6,
    description: "Clear environmental issue, focused research question, and local/global context.",
    details: [
      "Identify a genuine environmental issue — must be real and observable",
      "Connect to ESS concepts (systems, sustainability, equity, etc.)",
      "Research question must be specific, measurable, and locally relevant",
      "Provide geographic and temporal context (where/when)",
      "Explain significance: why does this issue matter?",
      "Maximum 600 words for this criterion",
    ],
    examples: [
      "✅ How does urban runoff affect water quality in Mill Creek, comparing upstream vs downstream sites?",
      "❌ How does pollution affect rivers? (too broad, no location)",
      "✅ What is the carbon sequestration potential of street trees in Downtown Springfield?",
      "❌ How do trees help climate change? (no measurable outcome)",
    ],
  },
  {
    id: "planning",
    title: "Planning",
    marks: 6,
    description: "Methodology, variable control, safety & ethics, sampling strategy.",
    details: [
      "Step-by-step methodology (replicable by another student)",
      "Variables table: independent, dependent, controlled + control methods",
      "Sampling strategy: random, systematic, stratified — justify choice",
      "Sample size justification (minimum 5 replicates per condition)",
      "Safety risk assessment (field hazards, chemicals, equipment)",
      "Ethical considerations: permissions, wildlife disturbance, human subjects",
      "Equipment list with precision/uncertainty noted",
      "Pilot study recommended to refine methods",
    ],
    examples: [
      "Water quality: test pH, DO, BOD, nitrates, phosphates at 5 sites × 3 replicates",
      "Biodiversity: 10×10m quadrats along 100m transect, Simpson's Index calculation",
      "Carbon: DBH measurements of 30 trees per species, allometric equations",
    ],
  },
  {
    id: "analysis",
    title: "Analysis",
    marks: 6,
    description: "Data processing, statistical tests, uncertainty, graphical representation.",
    details: [
      "Raw data tables with units and uncertainties",
      "Processed data: means, standard deviations, rates, indices",
      "Appropriate statistical test with justification:",
      "  • t-test / Mann-Whitney: comparing 2 groups",
      "  • ANOVA / Kruskal-Wallis: comparing 3+ groups",
      "  • Chi-squared: categorical data (species presence/absence)",
      "  • Spearman's/Pearson: correlations",
      "  • Simpson's/Shannon: diversity indices",
      "Graphs: labeled axes, units, error bars, descriptive titles",
      "Uncertainty propagation through calculations",
    ],
    examples: [
      "t-test comparing upstream vs downstream DO levels",
      "Spearman's correlation: tree DBH vs estimated carbon storage",
      "Simpson's Index for quadrat biodiversity comparison",
    ],
  },
  {
    id: "evaluation",
    title: "Evaluation",
    marks: 6,
    description: "Conclusion linked to RQ, strengths, limitations, improvements.",
    details: [
      "Direct answer to RQ using processed data as evidence",
      "Strengths: what worked well in methodology (minimum 2)",
      "Limitations: specific, with impact on validity/reliability (minimum 3)",
      "  • Systematic errors (equipment bias, observer bias)",
      "  • Random errors (environmental variability, measurement precision)",
      "  • Scope limitations (time, sample size, spatial coverage)",
      "Improvements: realistic, specific, addressing each limitation",
      "Extensions: future research directions",
      "Broader context: link findings to environmental issue from Criterion 1",
    ],
    examples: [
      "Limitation: Only 3 replicates per site due to time → Improvement: 10 replicates across seasons",
      "Limitation: Single sampling event → Improvement: Monthly monitoring for 6 months",
    ],
  },
];

const fieldworkMethods = [
  {
    category: "Aquatic Systems",
    methods: [
      "Kick sampling for macroinvertebrates (BMWP/ASPT scores)",
      "Water chemistry: multiparameter probes, titration kits",
      "Flow measurement: flow meter, float method, ADCP",
      "Sediment analysis: core sampling, particle size distribution",
    ],
  },
  {
    category: "Terrestrial Systems",
    methods: [
      "Quadrat sampling (random, systematic, stratified)",
      "Transect lines: belt, line-intercept, point-centered quarter",
      "Tree measurements: DBH, height (clinometer), canopy cover",
      "Soil tests: pH, texture, organic matter, infiltration rate",
    ],
  },
  {
    category: "Atmospheric / Human Systems",
    methods: [
      "Air quality: diffusion tubes, portable monitors (PM2.5, NO2)",
      "Energy audits: thermal imaging, appliance metering",
      "Surveys/questionnaires: Likert scales, validated instruments",
      "Ecological footprint calculators (GFN methodology)",
    ],
  },
];

const statisticalTests = [
  { name: "t-test", use: "Compare means of 2 groups (parametric)", assumption: "Normal distribution, equal variance" },
  { name: "Mann-Whitney U", use: "Compare medians of 2 groups (non-parametric)", assumption: "Ordinal/interval data, similar shape" },
  { name: "ANOVA", use: "Compare means of 3+ groups", assumption: "Normal, equal variance, independence" },
  { name: "Kruskal-Wallis", use: "Compare medians of 3+ groups (non-parametric)", assumption: "Ordinal/interval data" },
  { name: "Chi-squared", use: "Association between categorical variables", assumption: "Expected frequencies > 5" },
  { name: "Spearman's rho", use: "Monotonic correlation (ordinal/non-normal)", assumption: "Monotonic relationship" },
  { name: "Pearson's r", use: "Linear correlation (interval/ratio, normal)", assumption: "Linear, normal, homoscedastic" },
  { name: "Simpson's Index", use: "Species diversity (richness + evenness)", assumption: "Random sampling" },
  { name: "Shannon-Wiener", use: "Species diversity (information theory)", assumption: "Random sampling, all species represented" },
];

const timeline = [
  { phase: "Months 1-2 (DP1)", tasks: ["Select topic & draft RQ", "Literature review (5-10 sources)", "Submit proposal to teacher"] },
  { phase: "Months 3-4", tasks: ["Finalize methodology", "Conduct pilot study", "Obtain permissions/ethics approval"] },
  { phase: "Months 5-6", tasks: ["Primary data collection", "Organize raw data", "Begin statistical analysis"] },
  { phase: "Months 7-8", tasks: ["Complete analysis & graphs", "Draft evaluation", "First full draft to teacher"] },
  { phase: "Months 9-10 (DP2)", tasks: ["Incorporate feedback", "Final formatting & word count", "Final submission"] },
];

export default function ESSIAGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-ess text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="guide-title">
        <div className="absolute inset-0 bg-gradient-to-br from-ess via-gray-900 to-ess" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-medium mb-4">
            🌍 ESS Internal Assessment
          </span>
          <h1 id="guide-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Complete ESS IA Guide
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            25% of your final grade. Master fieldwork methods, statistical analysis, and examiner expectations with this comprehensive framework.
          </p>
          <a href="/ia-guide" className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
            ← Back to IA Hub
          </a>
        </div>
      </section>

      {/* Criteria Breakdown */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="criteria-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="criteria-heading" className="text-3xl font-bold text-gray-900 mb-4">Criterion-by-Criterion Breakdown</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Each criterion is worth 6 marks. Total: 24 marks = 25% of final grade.</p>
          </div>

          <div className="space-y-8">
            {essIACriteria.map((criterion) => (
              <article key={criterion.id} className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{criterion.title}</h3>
                  <span className="bg-ess text-white text-lg font-bold px-4 py-1 rounded-full">{criterion.marks}/6 marks</span>
                </div>
                <p className="text-gray-600 mb-6">{criterion.description}</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Requirements</h4>
                    <ul className="space-y-2 text-sm text-gray-700" role="list">
                      {criterion.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-ess rounded-full flex-shrink-0 mt-1.5" aria-hidden="true"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Examples</h4>
                    <div className="space-y-2 text-sm">
                      {criterion.examples.map((ex, idx) => (
                        <p key={idx} className={`px-3 py-2 rounded-lg ${ex.startsWith("✅") ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                          {ex}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fieldwork Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="fieldwork-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="fieldwork-heading" className="text-3xl font-bold text-gray-900 mb-4">Fieldwork Methods by System</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose methods appropriate for your RQ and local context.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fieldworkMethods.map((system, idx) => (
              <article key={idx} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{system.category}</h3>
                <ul className="space-y-2" role="list">
                  {system.methods.map((method, mIdx) => (
                    <li key={mIdx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-ess rounded-full flex-shrink-0 mt-1.5" aria-hidden="true"></span>
                      {method}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Statistical Tests */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="stats-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="stats-heading" className="text-3xl font-bold text-gray-900 mb-4">Choosing the Right Statistical Test</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Match your test to your data type and research question.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm" role="table">
              <thead>
                <tr className="bg-ess text-white">
                  <th className="px-4 py-3 text-left">Test</th>
                  <th className="px-4 py-3 text-left">When to Use</th>
                  <th className="px-4 py-3 text-left">Key Assumptions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {statisticalTests.map((test, idx) => (
                  <tr key={idx} className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}>
                    <td className="px-4 py-3 font-mono font-medium text-gray-900">{test.name}</td>
                    <td className="px-4 py-3 text-gray-700">{test.use}</td>
                    <td className="px-4 py-3 text-gray-600">{test.assumption}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="timeline-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="timeline-heading" className="text-3xl font-bold text-gray-900 mb-4">Recommended Timeline</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Start early — data collection always takes longer than planned.</p>
          </div>

          <div className="space-y-4">
            {timeline.map((phase, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="bg-ess text-white px-4 py-2 rounded-xl font-semibold text-center sm:w-48">
                  {phase.phase}
                </div>
                <ul className="space-y-1 text-sm text-gray-700 flex-1" role="list">
                  {phase.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-ess rounded-full flex-shrink-0" aria-hidden="true"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pitfalls */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="pitfalls-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="pitfalls-heading" className="text-3xl font-bold text-gray-900 mb-4">Common Pitfalls to Avoid</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "RQ too broad or not measurable",
              "No local context — generic global issue",
              "Methodology not replicable (missing steps)",
              "Variables table missing or incomplete",
              "Insufficient replicates (n < 5 per group)",
              "Wrong statistical test for data type",
              "Graphs without error bars or units",
              "Claiming 'no limitations' in evaluation",
              "Exceeding word count (2,250 max)",
              "Not linking conclusion back to RQ",
              "Improvements are vague ('do more trials')",
              "Missing uncertainty analysis",
            ].map((pitfall, idx) => (
              <div key={idx} className="bg-red-50 border border-red-100 rounded-2xl p-4">
                <p className="text-red-800 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-1.5" aria-hidden="true"></span>
                  {pitfall}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ess text-white" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">Get Your IA Reviewed</h2>
          <p className="text-gray-200 mb-8">Submit your draft for expert feedback on methodology, analysis, and evaluation.</p>
          <a href="/contact" className="inline-block bg-white text-ess px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Book IA Review Session
          </a>
        </div>
      </section>
    </div>
  );
}