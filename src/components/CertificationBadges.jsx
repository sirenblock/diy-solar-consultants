import { Award, Shield, Star, Lock, Calendar } from 'lucide-react'

export default function CertificationBadges({ variant = 'full' }) {
  const certifications = [
    {
      icon: Award,
      title: 'NABCEP Certified',
      subtitle: 'Since 2015',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Shield,
      title: 'Licensed in 50 States',
      subtitle: 'Full Coverage',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Star,
      title: 'BBB A+ Rating',
      subtitle: 'Accredited Business',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: Lock,
      title: '$2M Insured',
      subtitle: 'Full Protection',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ]

  if (variant === 'compact') {
    return (
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {certifications.map((cert, index) => {
          const Icon = cert.icon
          return (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-10 h-10 ${cert.bgColor} rounded-full flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${cert.iconColor}`} />
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-900">{cert.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-2xl md:text-3xl font-bold mb-8 text-gray-900">
          Certified & Licensed Professionals
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 mx-auto mb-3 ${cert.bgColor} rounded-full flex items-center justify-center`}>
                  <Icon className={`w-10 h-10 ${cert.iconColor}`} />
                </div>
                <p className="font-semibold text-gray-900">{cert.title}</p>
                <p className="text-sm text-gray-600">{cert.subtitle}</p>
              </div>
            )
          })}
        </div>

        {/* Years in Business Badge */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-blue-900">Serving Since 2015 • 10+ Years</span>
          </div>
        </div>
      </div>
    </section>
  )
}
