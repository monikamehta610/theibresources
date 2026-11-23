import { Metadata } from "next";
import { getCourse, getSlidesByUnit } from "@/data/courses";
import { TopicCard } from "@/components/course/TopicCard";

export const metadata: Metadata = {
  title: "Biology",
  description: "Complete IBDP Biology course materials — 40 topics across 4 themes with interactive slides, study guides, key terms, and exam tips. Aligned to the 2025 guide.",
  openGraph: {
    title: "Biology Course - The IB Resources",
    description: "Complete IBDP Biology materials",
    images: ["/og-bio.png"],
  },
};

export default function BiologyCoursePage() {
  const course = getCourse("biology");
  const units = getSlidesByUnit("biology");

  if (!course) {
    return <div className="text-center py-20">Course not found</div>;
  }

  const unitOrder = [
    "Theme A: Form and Function",
    "Theme A: Unity & Diversity",
    "Theme B: Form & Function",
    "Theme C: Interaction & Interdependence",
    "Theme D: Continuity & Change",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-bio text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="course-title">
        <div className="absolute inset-0 bg-gradient-to-br from-bio via-blue-900 to-blue-900" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-medium mb-4">
              🧬 Biology
            </span>
            <h1 id="course-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Complete Biology Course Materials
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl">
              40 topics across 4 themes. Interactive slides, study guides, key vocabulary, common misconceptions, and exam tips — all aligned to the IB DP 2025 guide.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-100">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full">40 Topics</span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full">SL & HL</span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full">2025 Guide</span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full">Self-Hosted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="units-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 id="units-heading" className="text-3xl font-bold text-gray-900 mb-2">Course Themes</h2>
            <p className="text-gray-600">Click any topic to view interactive slides, study notes, and companion videos.</p>
          </div>

          <div className="space-y-12">
            {unitOrder.map((unitName) => {
              const slides = units[unitName];
              if (!slides || slides.length === 0) return null;

              const publishedSlides = slides.filter((s) => s.status !== "coming-soon" && s.htmlFile);
              const comingSoonSlides = slides.filter((s) => s.status === "coming-soon" || !s.htmlFile);

              return (
                <section key={unitName} className="space-y-6" aria-labelledby={`unit-${unitName.replace(/\s+/g, "-").toLowerCase()}`}>
                  <div className="flex items-center justify-between">
                    <h3 id={`unit-${unitName.replace(/\s+/g, "-").toLowerCase()}`} className="text-2xl font-bold text-gray-900">
                      {unitName}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {publishedSlides.length} of {slides.length} topics available
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {slides.map((slide) => (
                      <TopicCard
                        key={slide.slug}
                        slide={slide}
                        courseSlug="biology"
                        courseAccentColor={course.accentColor}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Resources</h3>
            <div className="flex flex-wrap gap-4">
              <a href="/ia-guide/biology" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                Biology IA Guide
              </a>
              <a href="/ee-guide" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                Biology Extended Essay Guide
              </a>
              <a href="/resources" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                Free Downloads
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}