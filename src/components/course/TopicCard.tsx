import Link from "next/link";
import { Slide } from "@/data/courses";

interface TopicCardProps {
  slide: Slide;
  courseSlug: string;
  courseAccentColor: string;
}

export function TopicCard({ slide, courseSlug, courseAccentColor }: TopicCardProps) {
  const isComingSoon = slide.status === "coming-soon" || !slide.htmlFile;

  return (
    <article className="group relative bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">{slide.title}</span>
            {slide.level.includes("HL") && (
              <span className="px-2 py-0.5 text-xs font-semibold bg-amber-50 text-amber-700 rounded-full">
                HL Only
              </span>
            )}
          </div>
          {isComingSoon && (
            <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-500 rounded-full flex-shrink-0">
              Coming Soon
            </span>
          )}
        </div>

        <h4 className="text-base font-semibold text-gray-900 mb-2 line-clamp-1">{slide.subtitle}</h4>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{slide.unit}</p>

        {(slide.keyTerms?.length || slide.examTips?.length) && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {slide.keyTerms?.slice(0, 3).map((term) => (
              <span key={term} className="px-2 py-0.5 text-xs bg-gray-50 text-gray-600 rounded border border-gray-100">
                {term}
              </span>
            ))}
            {slide.keyTerms && slide.keyTerms.length > 3 && (
              <span className="px-2 py-0.5 text-xs text-gray-400">+{slide.keyTerms.length - 3} more</span>
            )}
          </div>
        )}
      </div>

      <div className="border-t border-gray-100 px-5 py-3 bg-gray-50/50">
        <Link
          href={`/courses/${courseSlug}/${slide.slug}`}
          className={`
            flex items-center justify-between w-full text-sm font-medium transition-colors
            ${isComingSoon ? "text-gray-400 cursor-not-allowed" : `text-${courseAccentColor.replace("#", "")} hover:text-${courseAccentColor.replace("#", "")}/80`}
          `}
          aria-label={isComingSoon ? `${slide.title} - Coming Soon` : `View ${slide.title} - ${slide.subtitle}`}
        >
          <span>{isComingSoon ? "Coming Soon" : "View Topic"}</span>
          {!isComingSoon && (
            <svg className="w-4 h-4 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </Link>
      </div>
    </article>
  );
}