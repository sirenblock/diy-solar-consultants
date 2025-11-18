import { Shield, CheckCircle } from 'lucide-react'

export default function MoneyBackGuarantee({ variant = 'default' }) {
  if (variant === 'compact') {
    return (
      <div className="inline-flex items-center gap-2 bg-green-50 border border-green-300 rounded-lg px-4 py-2">
        <Shield className="w-5 h-5 text-green-600" />
        <span className="font-semibold text-green-900 text-sm">30-Day Money-Back Guarantee</span>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-600 rounded-xl p-8 text-center max-w-2xl mx-auto">
      <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
      <h3 className="text-2xl font-bold mb-4 text-gray-900">100% Satisfaction Guarantee</h3>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        If you&apos;re not completely satisfied with your solar design within 30 days,
        we&apos;ll refund your consultation fee—no questions asked.
      </p>
      <div className="flex items-center justify-center gap-2 text-green-700 font-semibold">
        <CheckCircle className="w-5 h-5" />
        <span>Risk-Free Design Service</span>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        Your satisfaction is our priority. We stand behind our work 100%.
      </div>
    </div>
  )
}
