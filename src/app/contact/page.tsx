import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book an IA/EE consultation, ask about resources, or get in touch. Cloudflare Workers powered form — no third-party dependencies.",
  openGraph: {
    title: "Contact - The IB Resources",
    description: "Book IA/EE consultation or get in touch",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="contact-title">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-ess/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-bio/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl text-center">
          <h1 id="contact-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Book a consultation, report an issue, or suggest a resource. Powered by Cloudflare Workers — no third-party tracking.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="form-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 id="form-heading" className="text-3xl font-bold text-gray-900 mb-4">Send a Message</h2>
              <p className="text-gray-600 mb-8">I typically respond within 24-48 hours. For urgent IA/EE deadlines, please mention the timeline.</p>

              <form id="contact-form" className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ess focus:border-ess transition-all"
                    placeholder="Your name"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ess focus:border-ess transition-all"
                    placeholder="you@example.com"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ess focus:border-ess transition-all"
                    aria-required="true"
                  >
                    <option value="">Select a topic</option>
                    <option value="ia-consultation">IA Consultation (ESS or Biology)</option>
                    <option value="ee-consultation">EE Consultation (ESS or Biology)</option>
                    <option value="resource-request">Resource Request / Suggestion</option>
                    <option value="error-report">Error / Bug Report</option>
                    <option value="partnership">Partnership / Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Related Course (if applicable)
                  </label>
                  <select
                    id="course"
                    name="course"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ess focus:border-ess transition-all"
                  >
                    <option value="">Not specific to a course</option>
                    <option value="ess">Environmental Systems & Societies</option>
                    <option value="biology">Biology</option>
                    <option value="both">Both ESS & Biology</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ess focus:border-ess transition-all resize-none"
                    placeholder="Describe your needs, timeline, and any specific questions..."
                    aria-required="true"
                  ></textarea>
                </div>

                {/* Honeypot for spam prevention */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <button
                  type="submit"
                  id="submit-btn"
                  className="w-full sm:w-auto bg-ess text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 focus:ring-2 focus:ring-ess focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
                </button>

                <p id="form-status" className="text-sm text-center" aria-live="polite"></p>
              </form>

              <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Privacy Note</h3>
                <p className="text-sm text-gray-600">
                  This form submits directly to a Cloudflare Worker. No third-party services (Formspree, Netlify Forms, etc.) receive your data.
                  Your message is emailed to me and not stored in any database. See <a href="/privacy" className="text-ess hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </div>

            <aside aria-labelledby="services-heading">
              <h2 id="services-heading" className="text-2xl font-bold text-gray-900 mb-6">Consultation Services</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "IA Review Session",
                    duration: "60 min",
                    price: "$120",
                    desc: "Methodology review, statistical test selection, data analysis guidance, evaluation feedback",
                    features: ["RQ refinement", "Variables table check", "Statistical test justification", "Evaluation strengthening"],
                  },
                  {
                    title: "EE Guidance Session",
                    duration: "60 min",
                    price: "$150",
                    desc: "Topic selection, RQ formulation, structure planning, RPPF preparation, supervisor meeting prep",
                    features: ["RQ scoping & feasibility", "Literature search strategy", "Outline & structure review", "RPPF reflection guidance"],
                  },
                  {
                    title: "Topic Selection Workshop",
                    duration: "45 min",
                    price: "$90",
                    desc: "Brainstorming session to find a viable, personally engaging IA or EE topic with local context",
                    features: ["Interest & context mapping", "Feasibility assessment", "RQ drafting", "Timeline planning"],
                  },
                  {
                    title: "Draft Feedback (Async)",
                    duration: "—",
                    price: "$80",
                    desc: "Written feedback on a complete IA/EE draft returned within 48 hours with criterion-specific comments",
                    features: ["Criterion-by-criterion marks estimate", "Specific improvement suggestions", "Formatting & referencing check", "Follow-up clarification email"],
                  },
                ].map((service, idx) => (
                  <article key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-ess hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                          <span>⏱️ {service.duration}</span>
                          <span className="font-semibold text-ess">{service.price}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{service.desc}</p>
                    <ul className="space-y-1 text-sm text-gray-700" role="list">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-ess rounded-full flex-shrink-0" aria-hidden="true"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="mt-4 w-full block bg-white border border-ess text-ess px-4 py-2 rounded-xl font-medium hover:bg-gray-50 transition-colors text-center"
                    >
                      Book This Service
                    </a>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How quickly do you respond to inquiries?",
                a: "Typically within 24-48 hours during weekdays. During peak IB submission periods (March/April, September/October), it may take up to 72 hours."
              },
              {
                q: "Do you write IAs or EEs for students?",
                a: "Absolutely not. That would violate IB academic honesty policy. I provide guidance, feedback, and teaching — you do the work. My role is to help you produce your own best work."
              },
              {
                q: "What's the difference between a review session and draft feedback?",
                a: "Review session: live 60-min video call where we discuss your work in real-time. Draft feedback: you send me a complete draft, I return written criterion-by-criterion comments within 48 hours. Both are valuable at different stages."
              },
              {
                q: "Can you guarantee a specific grade?",
                a: "No ethical educator can guarantee grades. I can help you understand the criteria, avoid common pitfalls, and produce work that meets the descriptors. The final grade depends on your execution and the examiner's judgment."
              },
              {
                q: "Do you offer group discounts for schools?",
                a: "Yes. For 5+ students from the same school, I offer 20% off. For whole-cohort packages, we can discuss custom arrangements. Email me with details."
              },
              {
                q: "What time zones do you work with?",
                a: "I'm based in UTC+5:30 (IST) but regularly work with students across Americas, Europe, Asia, and Oceania. We'll find a mutually reasonable time."
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-xl border border-gray-100 group">
                <summary className="p-4 sm:p-5 cursor-pointer list-none flex items-center justify-between">
                  <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                  <span className="text-ess group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 sm:px-5 pb-5 text-gray-600 text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-gray-300 mb-8">Fill out the form above or book directly by selecting a service.</p>
          <a href="#contact-form" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Go to Contact Form
          </a>
        </div>
      </section>
    </div>
  );
}