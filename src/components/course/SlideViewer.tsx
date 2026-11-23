"use client";

import { useEffect, useRef, useState } from "react";

interface SlideViewerProps {
  slideUrl: string;
  title: string;
  youtubeUrl?: string;
}

export function SlideViewer({ slideUrl, title, youtubeUrl }: SlideViewerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => setIsLoading(false);
    const handleError = () => {
      setIsLoading(false);
      setError(true);
    };

    iframe.addEventListener("load", handleLoad);
    iframe.addEventListener("error", handleError);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      iframe.removeEventListener("error", handleError);
    };
  }, [slideUrl]);

  const retryLoad = () => {
    setError(false);
    setIsLoading(true);
    if (iframeRef.current) {
      iframeRef.current.src = slideUrl;
    }
  };

  return (
    <div className="w-full" role="region" aria-label={`${title} slide presentation`}>
      <div className="relative aspect-video w-full bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
            <div className="text-center p-4">
              <div className="animate-spin rounded-full h-10 w-10 border-3 border-gray-200 border-t-ess mx-auto mb-3" />
              <p className="text-gray-600 text-sm">Loading slide deck...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10 p-4">
            <div className="text-center max-w-md">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 className="text-gray-900 font-medium mb-1">Unable to load slides</h3>
              <p className="text-gray-500 text-sm mb-4">The slide deck could not be loaded. This may be a temporary issue.</p>
              <button
                onClick={retryLoad}
                className="bg-ess text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        <iframe
          ref={iframeRef}
          src={slideUrl}
          title={title}
          className="absolute inset-0 w-full h-full"
          allowFullScreen
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
          style={{ display: isLoading || error ? "none" : "block" }}
        />

        {youtubeUrl && !showVideo && (
          <div className="absolute bottom-4 right-4 z-20">
            <button
              onClick={() => setShowVideo(true)}
              className="bg-white/95 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white transition-all flex items-center gap-2 border border-gray-200"
              aria-label="Watch companion video on YouTube"
            >
              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                <path fill="white" d="M10.03 17.23V6.77L17.58 12l-7.55 5.23z" />
              </svg>
              Watch Video
            </button>
          </div>
        )}

        {showVideo && youtubeUrl && (
          <div className="absolute inset-0 z-30 bg-black/95 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl aspect-video">
              <iframe
                src={youtubeUrl.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")}
                title={`${title} - Video Lesson`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Close video"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="font-medium text-gray-900">{title}</span>
          {youtubeUrl && (
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-1.5 text-ess hover:text-gray-700 transition-colors"
              aria-label="Watch companion video"
            >
              <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                <path fill="white" d="M10.03 17.23V6.77L17.58 12l-7.55 5.23z" />
              </svg>
              Watch Video
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => iframeRef.current?.contentWindow?.postMessage({ type: "FULLSCREEN" }, "*")}
            className="p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle fullscreen"
            title="Fullscreen"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
          <a
            href={slideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Open slides in new tab"
            title="Open in new tab"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}