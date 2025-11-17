import { useState } from 'react';

export default function ResourceCard({ resource, onDownload }) {
  const difficultyColors = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-yellow-100 text-yellow-800',
    'Advanced': 'bg-red-100 text-red-800'
  };

  const typeIcons = {
    'Guide': '📋',
    'Article': '📝',
    'Calculator': '🧮',
    'Video': '🎥',
    'Template': '📥',
    'Checklist': '✓',
    'State Guide': '📍',
    'Buying Guide': '⚡'
  };

  const handleClick = () => {
    if (resource.downloadable) {
      onDownload(resource);
    } else if (resource.category === 'calculators') {
      // Navigate to calculator
      window.location.href = `#calculator-${resource.id}`;
    } else if (resource.category === 'blog') {
      // Navigate to blog post
      window.location.href = `#blog-${resource.id}`;
    } else {
      // Navigate to full resource
      window.location.href = `#resource-${resource.id}`;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 flex flex-col h-full">
      {/* Resource Type Badge */}
      <div className="bg-gradient-to-r from-solar-500 to-solar-600 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{typeIcons[resource.type] || '📄'}</span>
          <span className="text-white font-semibold text-sm">{resource.type}</span>
        </div>
        {resource.featured && (
          <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
            FEATURED
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {resource.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {resource.description}
        </p>

        {/* Meta Information */}
        <div className="space-y-3 mb-4">
          {/* Difficulty & Format */}
          <div className="flex flex-wrap gap-2 items-center">
            {resource.difficulty && (
              <span className={`text-xs font-semibold px-2 py-1 rounded ${difficultyColors[resource.difficulty]}`}>
                {resource.difficulty}
              </span>
            )}
            {resource.format && resource.format.map((fmt, idx) => (
              <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                {fmt}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {resource.readTime && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{resource.readTime}</span>
              </div>
            )}
            {resource.duration && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>{resource.duration}</span>
              </div>
            )}
            {resource.wordCount && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{resource.wordCount.toLocaleString()} words</span>
              </div>
            )}
          </div>

          {/* Author & Date */}
          {resource.author && (
            <div className="text-xs text-gray-500">
              By {resource.author}
              {resource.lastUpdated && ` • Updated ${resource.lastUpdated}`}
            </div>
          )}
        </div>

        {/* Tags */}
        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {resource.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-xs bg-solar-50 text-solar-700 px-2 py-1 rounded">
                #{tag}
              </span>
            ))}
            {resource.tags.length > 3 && (
              <span className="text-xs text-gray-400">+{resource.tags.length - 3}</span>
            )}
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={handleClick}
          className="w-full mt-auto btn-primary flex items-center justify-center gap-2"
        >
          {resource.downloadable && (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download {resource.type}
            </>
          )}
          {resource.category === 'calculators' && !resource.downloadable && (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Use Calculator
            </>
          )}
          {resource.category === 'videos' && (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Video
            </>
          )}
          {resource.category === 'blog' && (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Read Article
            </>
          )}
          {!resource.downloadable && resource.category !== 'calculators' && resource.category !== 'videos' && resource.category !== 'blog' && (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              View Resource
            </>
          )}
        </button>
      </div>
    </div>
  );
}
