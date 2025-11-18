import { Lock, Shield, CheckCircle } from 'lucide-react'

export default function SecurityBadges({ variant = 'default' }) {
  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <Lock className="w-3 h-3 text-green-600" />
          <span>SSL Encrypted</span>
        </div>
        <div className="flex items-center gap-1">
          <Shield className="w-3 h-3 text-blue-600" />
          <span>Privacy Protected</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-600 flex-wrap">
      <div className="flex items-center gap-2">
        <Lock className="w-4 h-4 text-green-600" />
        <span>SSL Encrypted</span>
      </div>
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4 text-blue-600" />
        <span>Privacy Protected</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-purple-600" />
        <span>No Spam Ever</span>
      </div>
    </div>
  )
}
