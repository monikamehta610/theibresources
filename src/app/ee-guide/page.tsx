import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extended Essay (EE) Guide",
  description: "Complete IBDP Extended Essay guide for ESS and Biology. Topic selection, research question, structure, assessment criteria, timeline, and supervisor tips.",
  openGraph: {
    title: "EE Guide - The IB Resources",
    description: "Complete IBDP Extended Essay guide for ESS and Biology",
  },
};

const eecriteria = [
  {
    letter: "A",
    title: "Focus and Method",
    marks: 6,
    description: "Topic, research question, methodology, and source selection.",
    details: [
      "Topic clearly communicated and sharply focused",
      "Research question: specific, measurable, achievable, relevant to subject",
      "Methodology explained and appropriate for the RQ",
      "Sources selected are relevant, sufficient, and varied",
      "ESS: primary data (fieldwork) + secondary sources expected",
      "Biology: primary data (lab) + secondary literature expected",
    ],
    tips: [
      "RQ must be a question, not a statement or title",
      "Avoid 'To what extent...' unless you can measure 'extent'",
      "Methodology section should let someone replicate your approach",
    ],
  },
  {
    letter: "B",
    title: "Knowledge and Understanding",
    marks: 6,
    description: "Subject-specific terminology, concepts, and context.",
    details: [
      "Accurate use of subject-specific terminology throughout",
      "Demonstrates understanding of relevant concepts/theories",
      "Contextualizes topic within broader subject framework",
      "ESS: systems thinking, sustainability, perspectives",
      "Biology: biological mechanisms, molecular/cellular/organismal levels",
      "Knowledge applied to RQ, not just listed",
    ],
    tips: [
      "Define key terms on first use",
      "Don't assume examiner knows your specific case study",
      "Connect theory to your specific investigation",
    ],
  },
  {
    letter: "C",
    title: "Critical Thinking",
    marks: 12,
    description: "Analysis, evaluation, synthesis, and argument development.",
    details: [
      "Research analyzed, not just described",
      "Arguments supported by evidence from sources/data",
      "Critical evaluation of sources (reliability, bias, limitations)",
      "Synthesis: connections between different sources/perspectives",
      "Unexpected results discussed, not ignored",
      "Conclusions follow logically from analysis",
      "Implications and limitations acknowledged",
    ],
    tips: [
      "This is the highest-weighted criterion — invest time here",
      "Every claim needs evidence; every evidence needs interpretation",
      "Compare & contrast sources, don't just summarize them",
      "Discuss conflicting evidence honestly",
    ],
  },
  {
    letter: "D",
    title: "Presentation",
    marks: 4,
    description: "Structure, formatting, referencing, and word count.",
    details: [
      "Required structure: Title page, Contents, Introduction, Body, Conclusion, References, Appendices",
      "Consistent formatting: font, spacing, margins, page numbers",
      "Figures/tables numbered, captioned, referenced in text",
      "Referencing: consistent style (APA, Chicago, MLA) throughout",
      "Word count: max 4,000 words (excludes abstract, contents, refs, appendices)",
      "Abstract no longer required (since 2018)",
    ],
    tips: [
      "Use reference manager (Zotero, Mendeley) from day 1",
      "Check word count early — cutting later is painful",
      "Figures must be readable when printed B&W",
    ],
  },
  {
    letter: "E",
    title: "Engagement",
    marks: 6,
    description: "Reflections on planning, process, and personal learning (RPPF).",
    details: [
      "Three formal reflection sessions (RPPF form)",
      "First: topic selection, RQ development, initial planning",
      "Interim: progress, challenges, methodology adjustments",
      "Final: findings, limitations, learning, advice for future",
      "Authentic voice — not what you think examiner wants to hear",
      "Specific examples of decisions and reasoning",
    ],
    tips: [
      "Write reflections immediately after each session",
      "Include specific examples: 'I changed my RQ because...'",
      "Show intellectual growth, not just task completion",
    ],
  },
];

const essEETopics = [
  "Comparing carbon sequestration in native vs exotic urban tree species",
  "Effectiveness of constructed wetlands for urban wastewater treatment",
  "Ecological footprint analysis of international vs local school food systems",
  "Microplastic abundance in freshwater vs marine sediments in [local region]",
  "Traditional ecological knowledge in [local indigenous community] resource management",
  "Urban heat island mitigation: green roofs vs reflective surfaces",
  "Biodiversity corridors: effectiveness in fragmented [local] landscapes",
  "Renewable energy transition feasibility for [local community/school]",
  "Soil health regeneration: comparing composting methods in school gardens",
  "Environmental justice: pollution burden distribution in [local city]",
];

const bioEETopics = [
  "Antimicrobial efficacy of [local plant] extracts against resistant bacteria",
  "Gene expression analysis of heat shock proteins in [organism] under thermal stress",
  "CRISPR-Cas9 efficiency comparison in [model organism] gene knockout",
  "Microbiome diversity in [condition] vs healthy controls (16S rRNA sequencing)",
  "Enzyme kinetics of [enzyme] from extremophile vs mesophilic organisms",
  "Epigenetic modifications in [plant] response to drought/salinity stress",
  "Phytoremediation potential of [species] for heavy metal contaminated soils",
  "Circadian rhythm gene expression under artificial light pollution",
  "Symbiotic efficiency: nitrogen fixation in legume-rhizobium strains",
  "Bioinformatics analysis of [gene family] evolution across [taxa]",
];

const eeStructure = [
  { section: "Title Page", words: "~0", details: "Title, subject, RQ, candidate number, word count" },
  { section: "Contents Page", words: "~0", details: "All headings with page numbers" },
  { section: "Introduction", words: "~500", details: "Context, RQ significance, scope, methodology overview" },
  { section: "Body (Main Argument)", words: "~2,500", details: "Thematic sections with evidence, analysis, evaluation" },
  { section: "Conclusion", words: "~500", details: "Direct answer to RQ, synthesis, implications, limitations" },
  { section: "References", words: "~0", details: "All cited sources in consistent format" },
  { section: "Appendices", words: "~0", details: "Raw data, calculations, extra figures (not in word count)" },
];

const eeTimeline = [
  { phase: "DP1: Sep-Oct", tasks: ["Choose subject & broad topic", "Preliminary reading (10-15 sources)", "Draft 3-5 potential RQs", "Meet supervisor: select final RQ"] },
  { phase: "DP1: Nov-Dec", tasks: ["Detailed literature review (30+ sources)", "Finalize methodology", "RPPF Session 1: planning reflection", "Submit detailed outline to supervisor"] },
  { phase: "DP1: Jan-Mar", tasks: ["Primary data collection (lab/fieldwork)", "Organize & analyze data", "Draft Body sections", "RPPF Session 2: interim reflection"] },
  { phase: "DP1: Apr-Jun", tasks: ["Complete first full draft (3,500+ words)", "Supervisor feedback (one round only)", "Revise based on feedback", "Check word count & formatting"] },
  { phase: "DP2: Sep-Oct", tasks: ["Final polishing", "RPPF Session 3: final reflection", "Submit final EE (4,000 words max)", "Viva voce with supervisor"] },
];

const supervisorTips = [
  "Supervisor provides ONE round of written feedback on a complete draft",
  "Supervisor cannot edit, write, or direct your research",
  "Meet early and often — 3-5 formal meetings recommended",
  "Come prepared: specific questions, not 'what should I do?'",
  "Document all meetings (dates, discussion points) for RPPF",
  "Supervisor authenticates work — academic honesty is essential",
  "Choose supervisor with subject expertise, not just availability",
];

export default function EEGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="guide-title">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-ess/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-bio/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-medium mb-4">
            📖 Extended Essay Guide
          </span>
          <h1 id="guide-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Master Your IBDP Extended Essay
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            4,000 words. One research question. Complete framework for ESS and Biology EEs — from topic selection to final submission, with examiner insights.
          </p>
        </div>
      </section>

      {/* Criteria Breakdown */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="criteria-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="criteria-heading" className="text-3xl font-bold text-gray-900 mb-4">Assessment Criteria (34 marks total)</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A: Focus & Method (6) | B: Knowledge (6) | C: Critical Thinking (12) | D: Presentation (4) | E: Engagement (6)</p>
          </div>

          <div className="space-y-8">
            {eecriteria.map((criterion) => (
              <article key={criterion.letter} className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-purple-600 text-white text-xl font-bold w-12 h-12 rounded-xl flex items-center justify-center">{criterion.letter}</span>
                    <h3 className="text-xl font-bold text-gray-900">{criterion.title}</h3>
                  </div>
                  <span className="bg-purple-600 text-white text-lg font-bold px-4 py-1 rounded-full">{criterion.marks} marks</span>
                </div>
                <p className="text-gray-600 mb-6">{criterion.description}</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Requirements</h4>
                    <ul className="space-y-2 text-sm text-gray-700" role="list">
                      {criterion.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-1.5" aria-hidden="true"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Pro Tips</h4>
                    <ul className="space-y-2 text-sm text-gray-700" role="list">
                      {criterion.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-1.5" aria-hidden="true"></span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subject-Specific Topic Ideas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="topics-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="topics-heading" className="text-3xl font-bold text-gray-900 mb-4">EE Topic Ideas by Subject</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose a topic that allows primary data collection AND connects to broader subject concepts.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* ESS EE */}
            <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden" aria-labelledby="ess-ee-heading">
              <div className="bg-ess text-white p-6">
                <h3 id="ess-ee-heading" className="text-2xl font-bold mb-2">ESS Extended Essay</h3>
                <p className="text-gray-200">Interdisciplinary • Systems thinking • Local context essential</p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2" role="list">
                  {essEETopics.map((topic, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="w-1.5 h-1.5 bg-ess rounded-full flex-shrink-0 mt-1.5" aria-hidden="true"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 rounded-xl p-4 mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">ESS EE Requirements</h4>
                  <ul className="text-sm text-gray-600 space-y-1" role="list">
                    <li>• Primary data (fieldwork, surveys, measurements) REQUIRED</li>
                    <li>• Systems approach: connections between environmental & human systems</li>
                    <li>• Local case study with global relevance</li>
                    <li>• Multiple perspectives (stakeholders, cultural, economic)</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Biology EE */}
            <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden" aria-labelledby="bio-ee-heading">
              <div className="bg-bio text-white p-6">
                <h3 id="bio-ee-heading" className="text-2xl font-bold mb-2">Biology Extended Essay</h3>
                <p className="text-blue-100">Experimental • Molecular to ecosystem level • Quantitative analysis</p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2" role="list">
                  {bioEETopics.map((topic, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="w-1.5 h-1.5 bg-bio rounded-full flex-shrink-0 mt-1.5" aria-hidden="true"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 rounded-xl p-4 mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Biology EE Requirements</h4>
                  <ul className="text-sm text-gray-600 space-y-1" role="list">
                    <li>• Primary data (lab experiment) REQUIRED — no literature-only EEs</li>
                    <li>• Hypothesis-driven with quantitative analysis</li>
                    <li>• Appropriate statistical tests with justification</li>
                    <li>• Biological mechanism explained at molecular/cellular level</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="structure-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="structure-heading" className="text-3xl font-bold text-gray-900 mb-4">EE Structure & Word Count Allocation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Target ~4,000 words total. Plan your word budget before writing.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm" role="table">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Section</th>
                  <th className="px-4 py-3 text-center">Target Words</th>
                  <th className="px-4 py-3 text-left">Key Content</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {eeStructure.map((section, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{section.section}</td>
                    <td className="px-4 py-3 text-center font-mono text-gray-700">{section.words}</td>
                    <td className="px-4 py-3 text-gray-600">{section.details}</td>
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
            <h2 id="timeline-heading" className="text-3xl font-bold text-gray-900 mb-4">18-Month EE Timeline</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Start early. The EE cannot be rushed — primary data collection takes months.</p>
          </div>

          <div className="space-y-4">
            {eeTimeline.map((phase, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold text-center sm:w-48">
                  {phase.phase}
                </div>
                <ul className="space-y-1 text-sm text-gray-700 flex-1" role="list">
                  {phase.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0" aria-hidden="true"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supervisor Tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="supervisor-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="supervisor-heading" className="text-3xl font-bold text-gray-900 mb-4">Working with Your Supervisor</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Your supervisor is a guide, not a co-author. Know the boundaries.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supervisorTips.map((tip, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <p className="text-gray-700 text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="mistakes-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="mistakes-heading" className="text-3xl font-bold text-gray-900 mb-4">Common EE Mistakes</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "RQ too broad for 4,000 words",
              "Literature-only EE (no primary data)",
              "Descriptive not analytical (Criterion C)",
              "Inconsistent referencing style",
              "Exceeding 4,000 word limit",
              "RPPF reflections written at the end",
              "No statistical analysis (Biology)",
              "No systems perspective (ESS)",
              "Supervisor writes/edits the EE",
              "Data collection starts too late",
              "Figures not referenced in text",
              "Appendices used to hide word count",
              "Vague RQ: 'Investigating X...'",
              "No evaluation of source reliability",
              "Conclusion doesn't answer RQ",
            ].map((mistake, idx) => (
              <div key={idx} className="bg-red-50 border border-red-100 rounded-2xl p-4">
                <p className="text-red-800 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-1.5" aria-hidden="true"></span>
                  {mistake}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">Need EE Guidance?</h2>
          <p className="text-gray-300 mb-8">Book a consultation for topic refinement, structure review, or RPPF preparation.</p>
          <a href="/contact" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Book EE Consultation
          </a>
        </div>
      </section>
    </div>
  );
}