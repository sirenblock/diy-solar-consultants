import { useState } from 'react';
import { getResourceById, getRelatedResources } from '../data/resources';
import { getBlogArticleById } from '../data/blogArticles';
import ResourceCard from './ResourceCard';

export default function GuideDetail({ resourceId, onDownload, onClose }) {
  const resource = getResourceById(resourceId);
  const blogArticle = resource?.category === 'blog' ? getBlogArticleById(resourceId) : null;
  const relatedResources = getRelatedResources(resourceId);

  if (!resource) return null;

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-solar-600 to-solar-500 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {onClose && (
            <button
              onClick={onClose}
              className="mb-4 flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Resources
            </button>
          )}

          <div className="flex items-start gap-4 mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-2xl">{resource.type === 'Guide' ? '📋' : resource.type === 'Article' ? '📝' : '⚡'}</span>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  {resource.type}
                </span>
                {resource.difficulty && (
                  <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                    {resource.difficulty}
                  </span>
                )}
                {resource.readTime && (
                  <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                    {resource.readTime}
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{resource.title}</h1>
              <p className="text-xl text-solar-100 mb-4">{resource.summary || resource.description}</p>
              <div className="flex items-center gap-4 text-sm text-solar-100">
                {resource.author && (
                  <span>By {resource.author}</span>
                )}
                {resource.lastUpdated && (
                  <span>• Updated {resource.lastUpdated}</span>
                )}
              </div>
            </div>
          </div>

          {resource.downloadable && (
            <button
              onClick={() => onDownload(resource)}
              className="btn-secondary bg-white text-solar-600 hover:bg-solar-50"
            >
              <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download {resource.format?.includes('PDF') ? 'PDF' : 'Resource'}
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Table of Contents (if sections exist) */}
            {resource.sections && resource.sections.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  Table of Contents
                </h2>
                <ol className="space-y-2">
                  {resource.sections.map((section, idx) => (
                    <li key={idx} className="text-gray-700">
                      <a
                        href={`#section-${idx}`}
                        className="hover:text-solar-600 transition-colors flex items-start gap-2"
                      >
                        <span className="font-semibold text-solar-600 min-w-[2rem]">{idx + 1}.</span>
                        <span>{section}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Article Content (if blog article) */}
            {blogArticle && blogArticle.content && (
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: blogArticle.content.replace(/\n/g, '<br />') }} />
              </div>
            )}

            {/* Guide Sections */}
            {resource.sections && resource.sections.length > 0 && !blogArticle && (
              <div className="space-y-8">
                {resource.sections.map((section, idx) => (
                  <div key={idx} id={`section-${idx}`} className="border-b border-gray-200 pb-8 last:border-0">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {idx + 1}. {section}
                    </h2>
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>
                        This section would contain detailed information about {section.toLowerCase()}.
                        In a production environment, this content would be stored in a database or CMS
                        and rendered here with full formatting, images, and interactive elements.
                      </p>
                      <div className="bg-solar-50 border-l-4 border-solar-500 p-4 my-4">
                        <p className="text-sm text-gray-700">
                          <strong>Professional Tip:</strong> When implementing {section.toLowerCase()},
                          always follow local building codes and manufacturer specifications.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Default Content */}
            {!resource.sections && !blogArticle && (
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {resource.description}
                </p>
                <div className="bg-solar-50 border border-solar-200 rounded-lg p-6 my-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">What You'll Learn</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-solar-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Comprehensive coverage of {resource.title.toLowerCase()}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-solar-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Step-by-step instructions from licensed professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-solar-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Best practices and common pitfalls to avoid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-solar-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Code compliance and safety considerations</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Tags */}
            {resource.tags && resource.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">TAGS</h3>
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-solar-50 text-solar-700 text-sm px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  {resource.format && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Format:</span>
                      <span className="font-semibold text-gray-900">{resource.format.join(', ')}</span>
                    </div>
                  )}
                  {resource.difficulty && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Level:</span>
                      <span className="font-semibold text-gray-900">{resource.difficulty}</span>
                    </div>
                  )}
                  {resource.readTime && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Read Time:</span>
                      <span className="font-semibold text-gray-900">{resource.readTime}</span>
                    </div>
                  )}
                  {resource.wordCount && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Words:</span>
                      <span className="font-semibold text-gray-900">{resource.wordCount.toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Download CTA */}
              {resource.downloadable && (
                <div className="bg-gradient-to-br from-solar-500 to-solar-600 text-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">Download This Guide</h3>
                  <p className="text-solar-100 text-sm mb-4">
                    Get the PDF version to read offline or print for reference
                  </p>
                  <button
                    onClick={() => onDownload(resource)}
                    className="w-full bg-white text-solar-600 hover:bg-solar-50 px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Download PDF
                  </button>
                </div>
              )}

              {/* Related Resources */}
              {relatedResources.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Related Resources</h3>
                  <div className="space-y-3">
                    {relatedResources.map((related) => (
                      <a
                        key={related.id}
                        href={`#resource-${related.id}`}
                        className="block group"
                      >
                        <div className="text-sm font-semibold text-gray-900 group-hover:text-solar-600 transition-colors">
                          {related.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{related.type}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Get Help CTA */}
              <div className="bg-gray-900 text-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Need Professional Help?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Get a custom solar design from our licensed engineers
                </p>
                <a
                  href="/design-request"
                  className="block w-full bg-solar-500 hover:bg-solar-600 text-white text-center px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Get Design Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources Grid (Bottom) */}
      {relatedResources.length > 0 && (
        <div className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedResources.slice(0, 3).map((related) => (
                <ResourceCard
                  key={related.id}
                  resource={related}
                  onDownload={onDownload}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
