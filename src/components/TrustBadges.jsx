import { ShieldCheck, Zap, BadgeCheck, BarChart3, Star, Lock } from 'lucide-react';

export default function TrustBadges({ variant = 'horizontal', className = '' }) {
  const badges = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-solar-600" />,
      text: 'Licensed PE - 50 States',
      subtext: 'Professional Engineers'
    },
    {
      icon: <Zap className="w-8 h-8 text-solar-600" />,
      text: 'NABCEP Certified',
      subtext: 'Industry Gold Standard'
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-solar-600" />,
      text: '5,000+ Systems',
      subtext: 'Designed & Approved'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-solar-600" />,
      text: '98% Approval Rate',
      subtext: 'First-Time Success'
    },
    {
      icon: <Star className="w-8 h-8 text-solar-600" fill="currentColor" />,
      text: 'Google 4.9★',
      subtext: '1,000+ Reviews'
    },
    {
      icon: <Lock className="w-8 h-8 text-solar-600" />,
      text: 'BBB A+ Rated',
      subtext: 'Accredited Business'
    },
  ];

  const gridClass = variant === 'horizontal'
    ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
    : 'grid-cols-2 md:grid-cols-3';

  return (
    <div className={`grid ${gridClass} gap-4 ${className}`}>
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
        >
          <div className="mb-2">{badge.icon}</div>
          <div className="font-bold text-gray-900 text-sm leading-tight">{badge.text}</div>
          <div className="text-xs text-gray-500 mt-1">{badge.subtext}</div>
        </div>
      ))}
    </div>
  );
}
