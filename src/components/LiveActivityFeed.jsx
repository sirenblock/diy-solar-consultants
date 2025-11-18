import { useState, useEffect } from 'react';
import { liveActivities } from '../data/testimonials';

export default function LiveActivityFeed() {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Random interval between 8-15 seconds
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentActivity(prev => (prev + 1) % liveActivities.length);
        setIsAnimating(false);
      }, 500);
    }, Math.floor(Math.random() * (15000 - 8000) + 8000));

    return () => clearInterval(interval);
  }, []);

  // Check if dismissed in this session
  useEffect(() => {
    const isDismissed = sessionStorage.getItem('activityFeedDismissed');
    if (isDismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('activityFeedDismissed', 'true');
  };

  if (!isVisible) return null;

  const activity = liveActivities[currentActivity];

  return (
    <div
      className={`fixed bottom-6 left-6 bg-white rounded-lg shadow-2xl p-4 max-w-sm z-40 border-l-4 border-solar-600 transition-all duration-500 hidden md:block ${
        isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
      }`}
    >
      <button
        onClick={handleDismiss}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none w-6 h-6 flex items-center justify-center"
        aria-label="Dismiss notification"
      >
        ×
      </button>
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-solar-100 flex items-center justify-center flex-shrink-0">
          <span className="text-solar-600 font-bold text-lg">{activity.name.charAt(0)}</span>
        </div>
        <div className="pr-6">
          <p className="text-sm font-semibold text-gray-900">
            {activity.name} <span className="text-gray-500 font-normal">from {activity.location}</span>
          </p>
          <p className="text-sm text-gray-600 mt-0.5">{activity.action}</p>
          {activity.savings && (
            <p className="text-sm text-green-600 font-semibold mt-1">
              {activity.savings}/year savings
            </p>
          )}
          <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {activity.time}
          </p>
        </div>
      </div>
    </div>
  );
}
