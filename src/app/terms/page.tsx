import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | The IB Resources',
  description: 'Terms of service for theibresources.com - intellectual property, permitted use, disclaimers, and liability.',
};

export default function TermsPage() {
  const jurisdiction = 'England and Wales'; // TODO: Update to your actual jurisdiction

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 py-12 px-4">
      <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">
        <h1>Terms of Service</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          <strong>Effective Date:</strong> December 2024<br />
          <strong>Last Updated:</strong> December 2024
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing theibresources.com (&ldquo;the Site&rdquo;), you agree to these Terms. If you disagree, do not use the Site.</p>

        <h2>2. Intellectual Property</h2>

        <h3>My Content</h3>
        <p>All original content (explanations, study guides, IA/EE frameworks, slide designs, code) &copy; Monika Mehta. Licensed for <strong>personal, non-commercial educational use only</strong>.</p>

        <h3>IB Content Disclaimer</h3>
        <p>This site is <strong>independent</strong> and <strong>not endorsed by</strong> the International Baccalaureate Organization (IBO).</p>
        <ul>
          <li>IB syllabus references are <strong>nominative fair use</strong> &mdash; identifying the curriculum my materials address</li>
          <li>No IB copyrighted materials (exam papers, markschemes, subject guides) are reproduced</li>
          <li>All topic coverage is original educational content aligned to public syllabus outlines</li>
        </ul>

        <h3>Third-Party Content</h3>
        <ul>
          <li>YouTube videos embedded via YouTube API (subject to YouTube Terms)</li>
          <li>Slide HTML/CSS/JS: original or adapted from open educational resources with attribution</li>
        </ul>

        <h2>3. Permitted Use</h2>
        <p>You may:</p>
        <ul>
          <li>View, read, study materials for personal IBDP preparation</li>
          <li>Download PDFs marked &ldquo;Download&rdquo; for personal use</li>
          <li>Share links to pages (not direct file hotlinking)</li>
          <li>Print pages for personal study</li>
        </ul>
        <p>You may <strong>NOT</strong>:</p>
        <ul>
          <li>Republish, redistribute, or sell content</li>
          <li>Use content for commercial tutoring/courses without license</li>
          <li>Scrape, crawl, or automate access</li>
          <li>Remove copyright notices or attributions</li>
          <li>Frame the Site or embed slides in other sites</li>
        </ul>

        <h2>4. Educational Disclaimer</h2>
        <p><strong>This site is supplementary, not a replacement for:</strong></p>
        <ul>
          <li>Official IB subject guides and teacher instruction</li>
          <li>School-assigned coursework and internal assessments</li>
          <li>Authorized IB workshops and professional development</li>
        </ul>
        <p>Content accuracy is prioritized but <strong>not guaranteed</strong>. Cross-reference with official IB publications. No liability for exam outcomes.</p>

        <h2>5. User Submissions (Contact Form)</h2>
        <p>By submitting, you grant me a <strong>non-exclusive, royalty-free license</strong> to:</p>
        <ul>
          <li>Read, process, and respond to your message</li>
          <li>Anonymize and aggregate feedback for site improvement</li>
          <li>You retain ownership of your submission</li>
        </ul>

        <h2>6. No Professional Advice</h2>
        <p>Content is <strong>general educational information</strong>, not:</p>
        <ul>
          <li>Legal, medical, or psychological advice</li>
          <li>Official IB guidance</li>
          <li>Guaranteed exam preparation</li>
        </ul>
        <p>Consult qualified professionals for specific needs.</p>

        <h2>7. Links to Third Parties</h2>
        <p>Links to monikamehta.pages.dev, YouTube, IB resources, etc. are provided for convenience. I don&rsquo;t control or endorse linked content.</p>

        <h2>8. Disclaimer of Warranties</h2>
        <p>THE SITE IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND:</p>
        <ul>
          <li>No warranty of accuracy, completeness, or currency</li>
          <li>No warranty of uninterrupted or error-free access</li>
          <li>No warranty of suitability for any purpose</li>
        </ul>

        <h2>9. Limitation of Liability</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
        <ul>
          <li>No liability for indirect, incidental, special, consequential damages</li>
          <li>No liability for lost data, profits, opportunities</li>
          <li>Total liability capped at $100 USD (or amount paid, if any)</li>
        </ul>

        <h2>10. Indemnification</h2>
        <p>You agree to indemnify me from claims arising from:</p>
        <ul>
          <li>Your misuse of the Site</li>
          <li>Your violation of these Terms</li>
          <li>Your submissions violating third-party rights</li>
        </ul>

        <h2>11. Termination</h2>
        <p>I may restrict access for Terms violations. You may stop using the Site anytime. Survival: IP, Disclaimers, Liability, Indemnification.</p>

        <h2>12. Governing Law</h2>
        <p>Governed by laws of {jurisdiction}, without conflict-of-law principles. Disputes resolved in {jurisdiction} courts.</p>

        <h2>13. Changes</h2>
        <p>Updated Terms posted here with new &ldquo;Last Updated&rdquo; date. Continued use = acceptance.</p>

        <h2>14. Contact</h2>
        <p>Questions: <Link href="/contact" className="underline">Contact form</Link> with &ldquo;Legal&rdquo; subject.</p>

        <hr className="my-8" />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <strong>Note:</strong> Replace <code>[Your Jurisdiction]</code> with your actual jurisdiction (e.g., &ldquo;England and Wales&rdquo;, &ldquo;State of California, USA&rdquo;) before publishing.
        </p>
      </div>
    </main>
  );
}