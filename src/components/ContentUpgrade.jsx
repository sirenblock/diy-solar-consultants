'use client';
import { useState } from 'react';
import { Download, Check, FileText, Calculator, Award, BookOpen, X } from 'lucide-react';

/**
 * ContentUpgrade Component
 * 
 * In-content lead magnet for blog posts and resource pages.
 * Contextual offers that match the content being read.
 * 
 * Usage:
 * <ContentUpgrade
 *   type="checklist"
 *   title="Solar Installation Checklist"
 *   description="Get our complete step-by-step checklist"
 * />
 */

const UPGRADE_TYPES = {
  checklist: {
    icon: FileText,
    bgColor: 'from-blue-50 to-sky-50',
    borderColor: 'border-blue-300',
    buttonColor: 'from-blue-600 to-sky-600',
    iconBg: 'bg-blue-600',
    leadMagnet: 'diy-solar-guide'
  },
  calculator: {
    icon: Calculator,
    bgColor: 'from-green-50 to-emerald-50',
    borderColor: 'border-green-300',
    buttonColor: 'from-green-600 to-emerald-600',
    iconBg: 'bg-green-600',
    leadMagnet: 'calculator-spreadsheet'
  },
  guide: {
    icon: BookOpen,
    bgColor: 'from-purple-50 to-violet-50',
    borderColor: 'border-purple-300',
    buttonColor: 'from-purple-600 to-violet-600',
    iconBg: 'bg-purple-600',
    leadMagnet: 'diy-solar-guide'
  },
  comparison: {
    icon: Award,
    bgColor: 'from-orange-50 to-amber-50',
    borderColor: 'border-orange-300',
    buttonColor: 'from-orange-600 to-amber-600',
    iconBg: 'bg-orange-600',
    leadMagnet: 'equipment-guide'
  }
};

export function ContentUpgrade({
  type = 'checklist',
  title,
  description,
  features = [],
  buttonText = 'Send It to Me',
  compact = false
}) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const config = UPGRADE_TYPES[type] || UPGRADE_TYPES.checklist;
  const Icon = config.icon;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: `content-upgrade-${type}`,
          leadMagnet: config.leadMagnet
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        if (window.gtag) {
          window.gtag('event', 'generate_lead', {
            event_category: 'Content Upgrade',
            event_label: type,
            value: 1
          });
        }
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`bg-gradient-to-r ${config.bgColor} border-2 ${config.borderColor} rounded-2xl p-6 my-8 text-center relative`}>
        <button
          onClick={() => setSubmitted(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h4 className="text-2xl font-bold mb-2">Check Your Email!</h4>
        <p className="text-gray-600">
          We've sent <strong>{title}</strong> to <strong>{email}</strong>
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <div className={`bg-gradient-to-r ${config.bgColor} border-2 ${config.borderColor} rounded-xl p-6 my-8`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 ${config.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold mb-2">{title}</h4>
            <p className="text-gray-600 mb-4 text-sm">{description}</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-gray-400 outline-none text-sm"
              />
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 bg-gradient-to-r ${config.buttonColor} text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 whitespace-nowrap`}
              >
                {loading ? 'Sending...' : buttonText}
              </button>
            </form>
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br ${config.bgColor} border-2 ${config.borderColor} rounded-2xl p-8 my-12 shadow-lg`}>
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Icon */}
        <div className={`w-16 h-16 ${config.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="mb-4">
            <h4 className="text-2xl md:text-3xl font-bold mb-2">{title}</h4>
            <p className="text-gray-700 text-lg">{description}</p>
          </div>

          {/* Features list (if provided) */}
          {features && features.length > 0 && (
            <ul className="space-y-2 mb-6">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Email form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-200 outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className={`px-8 py-3 bg-gradient-to-r ${config.buttonColor} text-white font-bold rounded-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap`}
            >
              <Download className="w-5 h-5" />
              {loading ? 'Sending...' : buttonText}
            </button>
          </form>
          
          {error && (
            <p className="text-red-600 mt-2 text-sm">{error}</p>
          )}

          {/* Privacy note */}
          <p className="text-sm text-gray-500 mt-3">
            📧 Instant delivery. No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

// Pre-configured variants for common use cases
export function ChecklistUpgrade({ title, description, features, compact }) {
  return (
    <ContentUpgrade
      type="checklist"
      title={title || "Want the Checklist?"}
      description={description || "Get our complete Solar Installation Checklist as a downloadable PDF."}
      features={features}
      compact={compact}
    />
  );
}

export function CalculatorUpgrade({ title, description, compact }) {
  return (
    <ContentUpgrade
      type="calculator"
      title={title || "Calculate Your Savings"}
      description={description || "Download our FREE Solar ROI Calculator spreadsheet."}
      features={[
        'Calculate exact savings based on your bill',
        '25-year projection with ROI',
        'Works with Excel & Google Sheets'
      ]}
      compact={compact}
    />
  );
}

export function GuideUpgrade({ title, description, compact }) {
  return (
    <ContentUpgrade
      type="guide"
      title={title || "Get the Complete Guide"}
      description={description || "Download our comprehensive 97-page DIY Solar Guide."}
      features={[
        'Step-by-step installation instructions',
        'Equipment buying guide',
        'Permitting & inspection roadmap'
      ]}
      compact={compact}
    />
  );
}

export function ComparisonUpgrade({ title, description, compact }) {
  return (
    <ContentUpgrade
      type="comparison"
      title={title || "Equipment Comparison Guide"}
      description={description || "Download our 2024 Solar Panel & Inverter Comparison Guide."}
      features={[
        'Top 10 solar panels rated',
        'Best inverters for DIY',
        'Where to buy with discounts'
      ]}
      compact={compact}
    />
  );
}
