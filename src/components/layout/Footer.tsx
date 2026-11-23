import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    courses: [
      { href: "/courses/ess", label: "Environmental Systems & Societies" },
      { href: "/courses/biology", label: "Biology" },
    ],
    guides: [
      { href: "/ia-guide", label: "Internal Assessment Guide" },
      { href: "/ee-guide", label: "Extended Essay Guide" },
      { href: "/resources", label: "Free Resources" },
    ],
    support: [
      { href: "/about", label: "About Monika" },
      { href: "/contact", label: "Book a Session" },
      { href: "/blog", label: "Blog & Tips" },
    ],
    legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
      { href: "/disclaimer", label: "Legal Disclaimer" },
    ],
  };

  const socialLinks = [
    { href: "https://linkedin.com/in/monikamehta", label: "LinkedIn", icon: "in" },
    { href: "https://youtube.com/@monikamehta", label: "YouTube", icon: "▶" },
    { href: "mailto:hello@theibresources.com", label: "Email", icon: "✉" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900" aria-label="The IB Resources - Home">
              <span className="text-2xl">📚</span>
              <span>The IB Resources</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Independent IBDP Biology & Environmental Systems and Societies resources. Expert-crafted slides, study guides, IA/EE frameworks, and personalized tutoring.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium flex items-center gap-1"
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span className="text-lg">{social.icon}</span>
                  <span className="hidden sm:inline">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Courses</h3>
                <ul className="mt-4 space-y-3" role="list">
                  {footerLinks.courses.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Guides</h3>
                <ul className="mt-4 space-y-3" role="list">
                  {footerLinks.guides.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Support</h3>
                <ul className="mt-4 space-y-3" role="list">
                  {footerLinks.support.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Legal</h3>
                <ul className="mt-4 space-y-3" role="list">
                  {footerLinks.legal.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} The IB Resources. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 max-w-2xl">
              <strong>Disclaimer:</strong> This website is an independent educational resource and is not affiliated with, endorsed by, or connected to the International Baccalaureate Organization (IBO). IB, International Baccalaureate, and IB DP are registered trademarks of the IBO. All content is original work by Monika Mehta unless otherwise noted.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}