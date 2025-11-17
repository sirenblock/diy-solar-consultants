import Link from 'next/link'

export default function InlineCTA({
  variant = 'default',
  title = 'Ready to Get Started?',
  description = 'Get your custom solar design from licensed PE engineers',
  primaryButtonText = 'Get Free Quote',
  primaryButtonLink = '/design-request',
  secondaryButtonText = null,
  secondaryButtonLink = null,
  showTrustSignals = true,
  compact = false
}) {
  const variants = {
    default: {
      bg: 'bg-gradient-to-br from-solar-50 to-energy-50',
      border: 'border-2 border-solar-200',
      titleColor: 'text-gray-900',
      descColor: 'text-gray-700'
    },
    highlighted: {
      bg: 'bg-gradient-to-br from-solar-600 to-energy-600',
      border: 'border-0',
      titleColor: 'text-white',
      descColor: 'text-white/90'
    },
    subtle: {
      bg: 'bg-gray-50',
      border: 'border border-gray-200',
      titleColor: 'text-gray-900',
      descColor: 'text-gray-600'
    },
    urgent: {
      bg: 'bg-gradient-to-r from-orange-500 to-red-500',
      border: 'border-0',
      titleColor: 'text-white',
      descColor: 'text-white/90'
    }
  }

  const selectedVariant = variants[variant] || variants.default

  const trustSignals = [
    { icon: '✓', text: 'Free consultation' },
    { icon: '✓', text: 'No obligation' },
    { icon: '✓', text: '5-7 day turnaround' }
  ]

  return (
    <div
      className={`${selectedVariant.bg} ${selectedVariant.border} rounded-xl ${
        compact ? 'p-4 sm:p-6' : 'p-6 sm:p-8'
      } shadow-md hover:shadow-lg transition-shadow my-8`}
    >
      <div className="text-center max-w-2xl mx-auto">
        {/* Title */}
        <h3
          className={`${selectedVariant.titleColor} ${
            compact ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
          } font-bold mb-3`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`${selectedVariant.descColor} ${
            compact ? 'text-sm sm:text-base mb-4' : 'text-base sm:text-lg mb-6'
          }`}
        >
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <Link
            href={primaryButtonLink}
            className={`${
              variant === 'highlighted' || variant === 'urgent'
                ? 'bg-white text-solar-600 hover:bg-gray-50'
                : 'bg-solar-600 text-white hover:bg-solar-700'
            } px-6 py-3 font-bold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg ${
              compact ? 'text-sm' : 'text-base'
            }`}
          >
            {primaryButtonText}
          </Link>

          {secondaryButtonText && secondaryButtonLink && (
            <Link
              href={secondaryButtonLink}
              className={`${
                variant === 'highlighted' || variant === 'urgent'
                  ? 'bg-transparent text-white border-2 border-white hover:bg-white/10'
                  : 'bg-white text-solar-600 border-2 border-solar-600 hover:bg-gray-50'
              } px-6 py-3 font-semibold rounded-lg transition-colors duration-200 ${
                compact ? 'text-sm' : 'text-base'
              }`}
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>

        {/* Trust Signals */}
        {showTrustSignals && (
          <div
            className={`flex flex-wrap justify-center gap-4 ${
              compact ? 'text-xs' : 'text-sm'
            } ${
              variant === 'highlighted' || variant === 'urgent'
                ? 'text-white/80'
                : 'text-gray-600'
            }`}
          >
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center gap-1">
                <span
                  className={`${
                    variant === 'highlighted' || variant === 'urgent'
                      ? 'text-white'
                      : 'text-green-600'
                  } font-bold`}
                >
                  {signal.icon}
                </span>
                <span>{signal.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
