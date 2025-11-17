import { useState, useEffect } from 'react';

const activities = [
  { name: 'Sarah M.', location: 'Denver, CO', action: 'requested a design quote', time: '2 minutes ago' },
  { name: 'Mike R.', location: 'Austin, TX', action: 'system approved in 3 days', time: '5 minutes ago' },
  { name: 'Jennifer P.', location: 'Portland, OR', action: 'saved $22,000 with our design', time: '12 minutes ago' },
  { name: 'David T.', location: 'Phoenix, AZ', action: 'received permit approval', time: '18 minutes ago' },
  { name: 'Amanda K.', location: 'Seattle, WA', action: 'completed installation', time: '25 minutes ago' },
  { name: 'Robert L.', location: 'San Diego, CA', action: 'got approved for financing', time: '32 minutes ago' },
  { name: 'Lisa W.', location: 'Miami, FL', action: 'started saving on energy bills', time: '45 minutes ago' },
  { name: 'Thomas H.', location: 'Boston, MA', action: 'received custom design', time: '1 hour ago' },
  { name: 'Maria G.', location: 'Las Vegas, NV', action: 'passed final inspection', time: '1 hour ago' },
  { name: 'Kevin S.', location: 'Atlanta, GA', action: 'requested a site assessment', time: '2 hours ago' },
  { name: 'Patricia D.', location: 'Chicago, IL', action: 'saved $18,500 with rebates', time: '2 hours ago' },
  { name: 'James B.', location: 'Houston, TX', action: 'upgraded to 12kW system', time: '3 hours ago' },
  { name: 'Nancy C.', location: 'San Francisco, CA', action: 'referred 3 neighbors', time: '3 hours ago' },
  { name: 'Christopher M.', location: 'Raleigh, NC', action: 'received permit-ready plans', time: '4 hours ago' },
  { name: 'Jessica T.', location: 'Salt Lake City, UT', action: 'scheduled installation', time: '4 hours ago' },
  { name: 'Daniel R.', location: 'Minneapolis, MN', action: 'got utility approval', time: '5 hours ago' },
  { name: 'Michelle L.', location: 'Tampa, FL', action: 'downloaded system design', time: '5 hours ago' },
  { name: 'Ryan K.', location: 'Sacramento, CA', action: 'added battery storage', time: '6 hours ago' },
];

export default function LiveActivityFeed() {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Random interval between 8-15 seconds
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentActivity(prev => (prev + 1) % activities.length);
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

  const activity = activities[currentActivity];

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
