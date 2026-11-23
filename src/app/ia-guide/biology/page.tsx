import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biology Internal Assessment Guide",
  description: "Complete Biology IA guide: criterion breakdown, 10+ lab investigation ideas, apparatus lists, statistical tests, timeline planner, and examiner tips.",
  openGraph: {
    title: "Biology IA Guide - The IB Resources",
    description: "Complete Biology Internal Assessment guide with lab methods and examiner tips",
  },
};

const bioIACriteria = [
  {
    id: "personal-engagement",
    title: "Personal Engagement",
    marks: 2,
    description: "Evidence of independent thinking, initiative, and personal significance.",
    details: [
      "Research question stems from personal interest/curiosity",
      "Creative approach to methodology or topic selection",
      "Evidence of independent design decisions (not just following a protocol)",
      "Personal connection explained in introduction",
      "Innovative use of apparatus or novel variable combinations",
    ],
    examples: [
      "✅ Investigating vitamin C degradation because grandmother makes homemade juice",
      "❌ Standard catalase lab from textbook with no personal connection",
      "✅ Modified respirometer design to measure yeast in microgravity simulation",
      "❌ Exact copy of IB specimen paper investigation",
    ],
  },
  {
    id: "exploration",
    title: "Exploration",
    marks: 6,
    description: "Research question, background, hypothesis, variables, methodology.",
    details: [
      "Focused, testable RQ with independent & dependent variables named",
      "Background theory: relevant, cited, explains biological basis",
      "Hypothesis: quantitative prediction with scientific justification",
      "Variables table: IV, DV, CVs with control methods & units",
      "Methodology: detailed, replicable, step-by-step with apparatus list",
      "Safety: risk assessment (biological, chemical, physical hazards)",
      "Ethics: no vertebrate animals, informed consent for human subjects",
      "Minimum 5 data points for IV, 5 replicates per point",
      "Pilot study evidence to refine methodology",
    ],
    examples: [
      "RQ: How does [IV: light intensity 0-1000 lux] affect [DV: O2 production rate μmol/m²/s] in Elodea canadensis?",
      "Hypothesis: As light intensity increases, photosynthetic rate will increase linearly until light saturation at ~600 lux, based on Blackman's limiting factor principle.",
    ],
  },
  {
    id: "analysis",
    title: "Analysis",
    marks: 6,
    description: "Data processing, presentation, statistical tests, uncertainty.",
    details: [
      "Raw data table: trials, replicates, units, qualitative observations",
      "Processed data: means, SD, SE, rates, % change with sample calculations",
      "Graphs: appropriate type, labeled axes with units, error bars (SD/SE), descriptive title",
      "Statistical test with justification (see table below)",
      "  • t-test: 2 groups, continuous DV, normal distribution",
      "  • ANOVA: 3+ groups, continuous DV, normal",
      "  • Chi-squared: categorical data (counts/frequencies)",
      "  • Spearman's: correlation, ordinal or non-normal data",
      "  • Pearson's: linear correlation, normal continuous data",
      "  • Linear regression: dose-response relationships",
      "Uncertainty: instrument precision + biological variability combined",
      "Qualitative data supports quantitative findings",
    ],
    examples: [
      "t-test comparing mean O2 production at 200 vs 800 lux",
      "Linear regression: light intensity vs photosynthetic rate (R² value)",
      "Chi-squared: germination success counts across pH treatments",
    ],
  },
  {
    id: "evaluation",
    title: "Evaluation",
    marks: 6,
    description: "Conclusion, strengths, limitations, improvements, extensions.",
    details: [
      "Conclusion: answers RQ directly using processed data & statistics",
      "Strengths: specific methodological strengths (min 2)",
      "Limitations: specific, categorized, with impact assessment (min 3):",
      "  • Systematic: calibration drift, observer bias, apparatus limitations",
      "  • Random: biological variation, environmental fluctuations",
      "  • Scope: time constraints, sample size, single species/condition",
      "Improvements: realistic, specific, address each limitation",
      "Extensions: new variables, different organisms, field applications",
      "No new data/analysis in evaluation — only interpretation",
    ],
    examples: [
      "Limitation: Single Elodea species → Improvement: Test 3 aquatic plant species",
      "Limitation: Lab conditions only → Extension: Field study in local pond",
      "Limitation: 3 replicates due to time → Improvement: 10 replicates",
    ],
  },
  {
    id: "communication",
    title: "Communication",
    marks: 4,
    description: "Structure, terminology, referencing, formatting (6-12 pages).",
    details: [
      "Report structure: Title, Introduction, Methodology, Results, Discussion, Conclusion, References",
      "Correct biological terminology throughout",
      "In-text citations (author, year) + reference list (APA/Chicago)",
      "Figures/tables numbered, captioned, referenced in text",
      "Page limit: 6-12 pages (examiners stop reading after 12)",
      "Appendices allowed for raw data/calculations (not counted in page limit)",
      "Clear, concise scientific writing — passive voice acceptable",
    ],
  },
];

const bioInvestigations = [
  {
    category: "Cell Biology & Biochemistry",
    investigations: [
      "Effect of substrate concentration on catalase reaction rate (H2O2 → O2 + H2O)",
      "Temperature coefficient (Q10) of yeast respiration using respirometer",
      "Vitamin C content: titration (DCPIP) in fresh vs cooked vs stored fruits",
      "Enzyme inhibition: competitive vs non-competitive with varying inhibitor concentrations",
      "Osmosis: water potential of potato/tissue cores across sucrose gradients",
    ],
  },
  {
    category: "Plant Physiology",
    investigations: [
      "Photosynthetic rate vs light intensity (Elodea: O2 bubbles or dissolved O2 probe)",
      "Transpiration rate under varying humidity/wind/light (potometer)",
      "Seed germination % across salinity/pH/temperature gradients",
      "Stomatal density comparison: sun vs shade leaves (nail varnish imprint)",
      "Phototropism: auxin distribution via agar block bioassay",
    ],
  },
  {
    category: "Human/Animal Physiology",
    investigations: [
      "Daphnia heart rate response to caffeine/ethanol/temperature",
      "Effect of exercise intensity on human heart rate recovery time",
      "Lung capacity (spirometry) vs fitness level/age/gender",
      "Reaction time vs sleep deprivation/caffeine/sugar",
      "Skin conductivity (GSR) response to stressors",
    ],
  },
  {
    category: "Ecology & Microbiology",
    investigations: [
      "Yeast population growth in different carbon/nitrogen sources",
      "Antimicrobial zones of inhibition: plant extracts vs E. coli/S. aureus",
      "Biodiversity index (Simpson's) in compost vs soil vs leaf litter",
      "Decomposition rate: litter bags in different moisture/temperature conditions",
      "Algal growth (chlorophyll absorbance) across nutrient (N/P) gradients",
    ],
  },
];

const apparatusGuide = [
  { investigation: "Photosynthesis (Elodea)", apparatus: ["Elodea canadensis", "Light source (variable intensity)", "Dissolved O2 probe or gas syringe", "NaHCO3 solution (carbon source)", "Water bath (temperature control)", "Ruler/lux meter"] },
  { investigation: "Enzyme Kinetics (Catalase)", apparatus: ["Fresh liver/potato extract", "H2O2 solutions (1-6%)", "Gas syringe or manometer", "Water bath (20-60°C)", "pH buffers (4-9)", "Stopwatch, thermometer"] },
  { investigation: "Respiration (Yeast)", apparatus: ["Baker's yeast suspension", "Glucose/sucrose/fructose solutions", "Respirometer or CO2 sensor", "Water bath (30-40°C)", "Methylene blue (viability)", "Spectrophotometer (optional)"] },
  { investigation: "Osmosis (Potato)", apparatus: ["Potato cylinders (cork borer)", "Sucrose solutions (0-1M)", "Digital balance (0.01g)", "Beakers, forceps, blotting paper", "Ruler/callipers", "Water bath (optional)"] },
  { investigation: "Daphnia Heart Rate", apparatus: ["Live Daphnia magna", "Caffeine/ethanol solutions", "Cavity slides, cover slips", "Microscope (40-100x)", "Stopwatch", "Petri dishes, pipettes", "Temperature-controlled stage"] },
];

const statisticalTestsBio = [
  { name: "t-test (unpaired)", use: "Compare means of 2 independent groups", example: "O2 production: 200 lux vs 800 lux" },
  { name: "t-test (paired)", use: "Compare means of same group before/after", example: "Heart rate: before vs after caffeine" },
  { name: "One-way ANOVA", use: "Compare means of 3+ independent groups", example: "Germination % across 5 pH levels" },
  { name: "Repeated measures ANOVA", use: "Same subjects across 3+ conditions", example: "Transpiration rate at 3 humidity levels" },
  { name: "Chi-squared (χ²)", use: "Categorical counts / frequencies", example: "Germination success: yes/no across treatments" },
  { name: "Spearman's rank", use: "Monotonic correlation (ordinal/non-normal)", example: "Light intensity vs photosynthetic rate" },
  { name: "Pearson's r", use: "Linear correlation (normal continuous)", example: "Substrate concentration vs initial rate" },
  { name: "Linear regression", use: "Dose-response, predictive modeling", example: "Caffeine concentration vs heart rate" },
  { name: "Standard error / 95% CI", use: "Error bars on graphs, confidence intervals", example: "Mean ± 1.96×SE for each treatment" },
];

const bioTimeline = [
  { phase: "Months 1-2 (DP1)", tasks: ["Brainstorm topics + personal engagement", "Literature review (8-15 sources)", "Draft RQ, hypothesis, variables", "Teacher approval of proposal"] },
  { phase: "Months 3-4", tasks: ["Finalize methodology + apparatus list", "Risk assessment + ethics form", "Pilot study (2-3 trials)", "Refine based on pilot results"] },
  { phase: "Months 5-7", tasks: ["Full data collection (min 5×5)", "Organize raw data in spreadsheets", "Statistical analysis + graphs", "Draft analysis section"] },
  { phase: "Months 8-9", tasks: ["Write evaluation + conclusion", "Full draft to teacher", "Incorporate feedback", "Format: 6-12 pages, references"] },
  { phase: "Month 10 (DP2)", tasks: ["Final proofread", "Check page count & formatting", "Submit final IA"] },
];

export default function BiologyIAGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-bio text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="guide-title">
        <div className="absolute inset-0 bg-gradient-to-br from-bio via-blue-800 to-bio" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-medium mb-4">
            🧬 Biology Internal Assessment
          </span>
          <h1 id="guide-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Complete Biology IA Guide
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            20% of your final grade. Master lab investigations, statistical analysis, and examiner expectations with this comprehensive framework.
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
            <p className="text-gray-600 max-w-2xl mx-auto">5 criteria totaling 24 marks = 20% of final grade. Personal Engagement (2) + Exploration (6) + Analysis (6) + Evaluation (6) + Communication (4).</p>
          </div>

          <div className="space-y-8">
            {bioIACriteria.map((criterion) => (
              <article key={criterion.id} className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{criterion.title}</h3>
                  <span className="bg-bio text-white text-lg font-bold px-4 py-1 rounded-full">{criterion.marks} marks</span>
                </div>
                <p className="text-gray-600 mb-6">{criterion.description}</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Requirements</h4>
                    <ul className="space-y-2 text-sm text-gray-700" role="list">
                      {criterion.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-bio rounded-full flex-shrink-0 mt-1.5" aria-hidden="true"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {criterion.examples && (
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
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Investigation Ideas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="investigations-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="investigations-heading" className="text-3xl font-bold text-gray-900 mb-4">Investigation Ideas by Topic Area</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose a topic that genuinely interests you — personal engagement marks depend on it.</p>
          </div>

          <div className="space-y-8">
            {bioInvestigations.map((category, idx) => (
              <article key={idx} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{category.category}</h3>
                <ul className="grid sm:grid-cols-2 gap-3" role="list">
                  {category.investigations.map((inv, iIdx) => (
                    <li key={iIdx} className="text-sm text-gray-700 flex items-start gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="w-1.5 h-1.5 bg-bio rounded-full flex-shrink-0 mt-1.5" aria-hidden="true"></span>
                      {inv}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Apparatus Guide */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="apparatus-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="apparatus-heading" className="text-3xl font-bold text-gray-900 mb-4">Apparatus Lists for Common Investigations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Ensure your school has the equipment before committing to a topic.</p>
          </div>

          <div className="space-y-4">
            {apparatusGuide.map((item, idx) => (
              <details key={idx} className="bg-gray-50 rounded-2xl border border-gray-100 group">
                <summary className="p-4 sm:p-6 cursor-pointer list-none flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{item.investigation}</span>
                  <span className="text-bio group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 sm:px-6 pb-6">
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700" role="list">
                    {item.apparatus.map((app, aIdx) => (
                      <li key={aIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-bio rounded-full flex-shrink-0" aria-hidden="true"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Statistical Tests */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="stats-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="stats-heading" className="text-3xl font-bold text-gray-900 mb-4">Statistical Tests for Biology IAs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Match the test to your data type and experimental design.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm" role="table">
              <thead>
                <tr className="bg-bio text-white">
                  <th className="px-4 py-3 text-left">Test</th>
                  <th className="px-4 py-3 text-left">When to Use</th>
                  <th className="px-4 py-3 text-left">Biology IA Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {statisticalTestsBio.map((test, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 font-mono font-medium text-gray-900">{test.name}</td>
                    <td className="px-4 py-3 text-gray-700">{test.use}</td>
                    <td className="px-4 py-3 text-gray-600">{test.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="timeline-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="timeline-heading" className="text-3xl font-bold text-gray-900 mb-4">Recommended Timeline</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Lab work takes 2-3x longer than planned. Start data collection by Month 5 of DP1.</p>
          </div>

          <div className="space-y-4">
            {bioTimeline.map((phase, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="bg-bio text-white px-4 py-2 rounded-xl font-semibold text-center sm:w-48">
                  {phase.phase}
                </div>
                <ul className="space-y-1 text-sm text-gray-700 flex-1" role="list">
                  {phase.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-bio rounded-full flex-shrink-0" aria-hidden="true"></span>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="pitfalls-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="pitfalls-heading" className="text-3xl font-bold text-gray-900 mb-4">Common Pitfalls to Avoid</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "RQ not focused (multiple IVs or vague DV)",
              "No personal engagement — generic topic",
              "Hypothesis not quantitative or unjustified",
              "Variables table missing control methods",
              "Methodology not replicable (missing steps)",
              "n < 5 replicates per data point",
              "Wrong statistical test for design",
              "Graphs missing error bars or units",
              "Raw data not presented in appendix",
              "Exceeding 12-page limit",
              "Evaluation introduces new data/analysis",
              "Improvements are vague ('more trials')",
              "No uncertainty analysis",
              "References missing or incorrect format",
              "Communication: unclear structure/terminology",
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bio text-white" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">Get Your Biology IA Reviewed</h2>
          <p className="text-blue-100 mb-8">Submit your draft for expert feedback on methodology, analysis, and evaluation.</p>
          <a href="/contact" className="inline-block bg-white text-bio px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Book IA Review Session
          </a>
        </div>
      </section>
    </div>
  );
}