import Link from "next/link";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const publishedSlides = course.slides.filter((s) => s.status !== "coming-soon").length;
  const totalSlides = course.slides.length;

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group relative block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      aria-label={`View ${course.title} course`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-ess/10 text-3xl" aria-hidden="true">
              {course.icon}
            </span>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 uppercase tracking-wider">
            {publishedSlides}/{totalSlides} Topics
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-ess transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {course.slides
            .filter((s) => s.level.includes("HL"))
            .slice(0, 2)
            .map((slide) => (
              <span key={slide.slug} className="px-2 py-1 text-xs font-medium bg-amber-50 text-amber-700 rounded-full">
                {slide.level}
              </span>
            ))}
        </div>
      </div>

      <div className="border-t border-gray-100 px-6 py-4 bg-gray-50/50">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">Explore Course</span>
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-ess transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}