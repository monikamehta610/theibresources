import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourse, getSlide, getAdjacentSlides } from "@/data/courses";
import { SlideViewer } from "@/components/course/SlideViewer";
import Link from "next/link";

interface TopicPageProps {
  params: Promise<{ topic: string }>;
}

export async function generateStaticParams() {
  const essCourse = getCourse("ess");
  return essCourse?.slides
    .filter((s) => s.htmlFile)
    .map((slide) => ({ topic: slide.slug })) || [];
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { topic } = await params;
  const slide = getSlide("ess", topic);
  const course = getCourse("ess");

  if (!slide || !course) {
    return { title: "Topic Not Found" };
  }

  return {
    title: `${slide.title}: ${slide.subtitle}`,
    description: `IBDP ESS ${slide.unit} - ${slide.subtitle}. Interactive slides, key terms, common misconceptions, and exam tips.`,
    openGraph: {
      title: `${slide.title}: ${slide.subtitle} | ESS`,
      description: `IBDP ESS ${slide.unit} - Interactive slides and study materials`,
      type: "article",
    },
  };
}

export default async function ESSTopicPage({ params }: TopicPageProps) {
  const { topic } = await params;
  const slide = getSlide("ess", topic);
  const course = getCourse("ess");
  const adjacent = getAdjacentSlides("ess", topic);

  if (!slide || !course) {
    notFound();
  }

  const isComingSoon = slide.status === "coming-soon" || !slide.htmlFile;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-ess text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="topic-title">
        <div className="absolute inset-0 bg-gradient-to-br from-ess via-gray-900 to-gray-900" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-6 flex items-center gap-2 text-sm text-gray-300" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/courses/ess" className="hover:text-white transition-colors">ESS</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-medium">{slide.title}</span>
          </nav>

          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-medium mb-3">
                {slide.level}
              </span>
              <h1 id="topic-title" className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                {slide.title}: {slide.subtitle}
              </h1>
              <p className="text-gray-300">{slide.unit}</p>
            </div>

            {adjacent.prev && (
              <Link
                href={`/courses/ess/${adjacent.prev.slug}`}
                className="flex items-center gap-1.5 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm font-medium whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Previous</span>
              </Link>
            )}
            {adjacent.next && (
              <Link
                href={`/courses/ess/${adjacent.next.slug}`}
                className="flex items-center gap-1.5 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm font-medium whitespace-nowrap"
              >
                <span className="hidden sm:inline">Next</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="content-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Slide Viewer */}
              <section aria-labelledby="slides-heading">
                <h2 id="slides-heading" className="sr-only">Interactive Slides</h2>
                {isComingSoon ? (
                  <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 text-center">
                    <div className="mx-auto w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      This topic is being prepared. Check back soon for interactive slides, study notes, and exam tips.
                    </p>
                  </div>
                ) : (
                  <SlideViewer
                    slideUrl={slide.htmlFile!}
                    title={`${slide.title}: ${slide.subtitle}`}
                    youtubeUrl={slide.youtubeUrl}
                  />
                )}
              </section>

              {/* Study Guide Section */}
              {(slide.keyTerms?.length || slide.commonMisconceptions?.length || slide.examTips?.length) && (
                <section className="bg-gray-50 rounded-2xl p-6 sm:p-8" aria-labelledby="study-guide-heading">
                  <h2 id="study-guide-heading" className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-ess">📋</span> Study Guide
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {slide.keyTerms?.length && (
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                          <span className="w-2 h-2 bg-ess rounded-full" aria-hidden="true"></span>
                          Key Terms
                        </h3>
                        <ul className="space-y-2" role="list">
                          {slide.keyTerms.map((term) => (
                            <li key={term} className="text-sm text-gray-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-ess rounded-full flex-shrink-0" aria-hidden="true"></span>
                              <strong>{term}</strong>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {slide.commonMisconceptions?.length && (
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                          <span className="w-2 h-2 bg-red-500 rounded-full" aria-hidden="true"></span>
                          Common Misconceptions
                        </h3>
                        <ul className="space-y-2" role="list">
                          {slide.commonMisconceptions.map((misconception, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-1.5" aria-hidden="true"></span>
                              {misconception}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {slide.examTips?.length && (
                      <div className="sm:col-span-2">
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                          <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></span>
                          Exam Tips
                        </h3>
                        <ul className="space-y-2" role="list">
                          {slide.examTips.map((tip, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 mt-1.5" aria-hidden="true"></span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* YouTube Video */}
              {slide.youtubeUrl && !isComingSoon && (
                <section className="bg-gray-50 rounded-2xl p-6 sm:p-8" aria-labelledby="video-heading">
                  <h2 id="video-heading" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                      <path fill="white" d="M10.03 17.23V6.77L17.58 12l-7.55 5.23z" />
                    </svg>
                    Companion Video Lesson
                  </h2>
                  <div className="aspect-video bg-black rounded-xl overflow-hidden">
                    <iframe
                      src={slide.youtubeUrl!.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")}
                      title={`${slide.title} - Video Lesson`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6" aria-label="Topic sidebar">
              {/* Quick Facts */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <dl className="space-y-4 text-sm" role="list">
                  <div>
                    <dt className="text-gray-500">Level</dt>
                    <dd className="font-medium text-gray-900">{slide.level}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Unit</dt>
                    <dd className="font-medium text-gray-900">{slide.unit}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Status</dt>
                    <dd className="font-medium text-gray-900">
                      {isComingSoon ? "Coming Soon" : "Published"}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Navigation */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
                <nav aria-label="Topic navigation">
                  <ul className="space-y-2" role="list">
                    {adjacent.prev && (
                      <li>
                        <Link
                          href={`/courses/ess/${adjacent.prev.slug}`}
                          className="flex items-center gap-2 text-sm text-ess hover:text-gray-700 transition-colors p-2 rounded-lg hover:bg-gray-100"
                        >
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                          <span className="truncate">{adjacent.prev.title}: {adjacent.prev.subtitle}</span>
                        </Link>
                      </li>
                    )}
                    {adjacent.next && (
                      <li>
                        <Link
                          href={`/courses/ess/${adjacent.next.slug}`}
                          className="flex items-center gap-2 text-sm text-ess hover:text-gray-700 transition-colors p-2 rounded-lg hover:bg-gray-100"
                        >
                          <span className="truncate">{adjacent.next.title}: {adjacent.next.subtitle}</span>
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link
                        href="/courses/ess"
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-ess transition-colors p-2 rounded-lg hover:bg-gray-100"
                      >
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to ESS Course
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* CTA */}
              <div className="bg-ess text-white rounded-2xl p-6 text-center">
                <h3 className="font-semibold mb-2">Need Help with This Topic?</h3>
                <p className="text-gray-200 text-sm mb-4">Book a 1:1 session for personalized explanation and IA/EE guidance.</p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-ess px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
                >
                  Book a Session
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}