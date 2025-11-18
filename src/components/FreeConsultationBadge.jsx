import { Gift } from 'lucide-react'

export default function FreeConsultationBadge({ variant = 'default' }) {
  if (variant === 'compact') {
    return (
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-400 rounded-lg px-4 py-2">
        <Gift className="w-5 h-5 text-green-600" />
        <span className="font-bold text-green-900 text-sm">100% Free • No Credit Card</span>
      </div>
    )
  }

  return (
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-lg px-6 py-4 shadow-md">
      <Gift className="w-7 h-7 text-green-600" />
      <div>
        <p className="font-bold text-green-900 text-lg">100% Free Consultation</p>
        <p className="text-sm text-green-700">No Credit Card Required</p>
      </div>
    </div>
  )
}
