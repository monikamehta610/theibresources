import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | The IB Resources',
  description: 'Privacy policy for theibresources.com - how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 py-12 px-4">
      <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          <strong>Effective Date:</strong> December 2024<br />
          <strong>Last Updated:</strong> December 2024
        </p>

        <h2>1. Data Controller</h2>
        <p>
          Monika Mehta (&ldquo;I&rdquo;, &ldquo;me&rdquo;, &ldquo;my&rdquo;) operates theibresources.com.
          Contact: <Link href="/contact" className="underline">via contact form</Link>.
        </p>

        <h2>2. Data Collected</h2>

        <h3>Contact Form</h3>
        <p>When you submit the contact form, I collect:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Subject category</li>
          <li>Course selection (optional)</li>
          <li>Message content</li>
          <li>IP address (for spam prevention)</li>
          <li>Timestamp</li>
        </ul>

        <h3>Analytics (Cloudflare Web Analytics)</h3>
        <ul>
          <li>Page views, unique visitors, referrers</li>
          <li>Country-level geolocation (no IP storage)</li>
          <li>Device/browser type</li>
          <li><strong>No cookies, no personal identifiers, no tracking across sites</strong></li>
        </ul>

        <h3>Technical Logs</h3>
        <ul>
          <li>Cloudflare Workers logs (request metadata, errors)</li>
          <li>Build/deployment logs (GitHub Actions, Wrangler)</li>
        </ul>

        <h2>3. Legal Basis (GDPR Art. 6)</h2>
        <ul>
          <li><strong>Contact form:</strong> Legitimate interest (responding to inquiries) + Consent (explicit submission)</li>
          <li><strong>Analytics:</strong> Legitimate interest (site improvement, security)</li>
          <li><strong>Legal obligation:</strong> Data retention for tax/compliance if applicable</li>
        </ul>

        <h2>4. Purpose of Processing</h2>
        <ul>
          <li>Respond to your inquiries (IA/EE consultations, resource requests, etc.)</li>
          <li>Improve website content and user experience</li>
          <li>Prevent spam and abuse (Turnstile, honeypot)</li>
          <li>Security monitoring</li>
        </ul>

        <h2>5. Data Sharing</h2>
        <p><strong>No third-party data sharing</strong> except:</p>
        <ul>
          <li><strong>Email provider</strong> (SendGrid/Mailgun/Resend) &mdash; processes email delivery only</li>
          <li><strong>Cloudflare</strong> &mdash; hosting, Workers, Analytics, DDoS protection</li>
          <li><strong>GitHub</strong> &mdash; source code hosting, CI/CD</li>
          <li><strong>Legal authorities</strong> &mdash; if required by law</li>
        </ul>

        <h2>6. Data Retention</h2>
        <ul>
          <li>Contact form submissions: 12 months (then deleted)</li>
          <li>Analytics data: Per Cloudflare retention (aggregate, anonymized)</li>
          <li>Worker logs: 7 days (Cloudflare default)</li>
          <li>No automated profiling or decision-making</li>
        </ul>

        <h2>7. Your Rights (GDPR/CCPA)</h2>
        <p>You may request:</p>
        <ul>
          <li><strong>Access</strong> &mdash; copy of your data</li>
          <li><strong>Rectification</strong> &mdash; correct inaccurate data</li>
          <li><strong>Erasure</strong> &mdash; delete your data (&ldquo;right to be forgotten&rdquo;)</li>
          <li><strong>Restriction</strong> &mdash; limit processing</li>
          <li><strong>Portability</strong> &mdash; receive data in structured format</li>
          <li><strong>Objection</strong> &mdash; object to legitimate interest processing</li>
        </ul>
        <p>Submit requests via <Link href="/contact" className="underline">contact form</Link> with &ldquo;Privacy Request&rdquo; subject.</p>

        <h2>8. International Transfers</h2>
        <p>Data processed in: United States (Cloudflare, email provider), EU (Cloudflare edge). Adequacy decisions / Standard Contractual Clauses apply.</p>

        <h2>9. Children&rsquo;s Privacy</h2>
        <p>Site not directed at children under 13. No knowingly collected data from minors.</p>

        <h2>10. Security</h2>
        <ul>
          <li>HTTPS everywhere (TLS 1.3)</li>
          <li>Cloudflare WAF + DDoS protection</li>
          <li>Worker sandboxed execution</li>
          <li>No database &mdash; contact data only in email</li>
          <li>Honeypot + optional Turnstile for spam prevention</li>
        </ul>

        <h2>11. Cookies</h2>
        <p><strong>No cookies set by this site.</strong> Cloudflare may set <code>__cf_bm</code> (bot management, 30 min, essential).</p>

        <h2>12. Changes to This Policy</h2>
        <p>Posted on this page with updated &ldquo;Last Updated&rdquo; date. Material changes notified via site banner.</p>

        <h2>13. Contact</h2>
        <p>Privacy questions: <Link href="/contact" className="underline">Contact form</Link> with &ldquo;Privacy&rdquo; subject.</p>
      </div>
    </main>
  );
}