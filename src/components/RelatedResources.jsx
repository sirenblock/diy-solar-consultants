import Link from 'next/link'

/**
 * RelatedResources Component
 *
 * Displays a grid of related pages/resources to improve internal linking
 * and help users discover relevant content.
 *
 * @param {Array} resources - Array of resource objects with structure:
 *   {
 *     title: string,
 *     description: string,
 *     href: string,
 *     icon: JSX Element (optional)
 *   }
 */
export default function RelatedResources({ resources, title = 'Related Resources' }) {
  if (!resources || resources.length === 0) {
    return null
  }

  return (
    <section className="mt-16 py-12 bg-gray-50 rounded-lg border border-gray-200">
      <div className="px-6 sm:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        <div className={`grid gap-6 ${
          resources.length === 2 ? 'md:grid-cols-2' :
          resources.length >= 3 ? 'md:grid-cols-3' :
          'md:grid-cols-1'
        }`}>
          {resources.map((resource, index) => (
            <Link
              key={resource.href || index}
              href={resource.href}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group border border-gray-100"
            >
              {resource.icon && (
                <div className="text-solar-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {resource.icon}
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-solar-600 transition-colors">
                {resource.title}
                <svg
                  className="inline-block w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {resource.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
