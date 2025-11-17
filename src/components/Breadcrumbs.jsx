import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Breadcrumbs() {
  const router = useRouter()
  const pathname = router.pathname

  // Don't show breadcrumbs on homepage
  if (pathname === '/') {
    return null
  }

  // Generate breadcrumb items from path
  const paths = pathname.split('/').filter(Boolean)

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    ...paths.map((path, index) => {
      const href = '/' + paths.slice(0, index + 1).join('/')
      // Convert path to readable name (handle both - and common words)
      const name = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      return { name, href }
    })
  ]

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 mx-2 text-gray-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-700 font-medium" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-solar-600 hover:text-solar-700 hover:underline transition-colors"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
