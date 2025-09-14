import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const { user, updateUser } = useAuth();
  const [haveService, setHaveService] = useState('');
  const [wantService, setWantService] = useState('');
  const [showMatchAnimation, setShowMatchAnimation] = useState(false);

  const services = [
    'Netflix', 'Prime Video', 'Spotify', 'Apple Music', 'Disney+', 
    'HBO Max', 'Hulu', 'YouTube Premium', 'Adobe Creative', 'Canva Pro',
    'Notion Pro', 'Figma Pro', 'Github Pro', 'LinkedIn Premium'
  ];

  const handleFindMatches = () => {
    if (!haveService || !wantService) {
      alert('Please select both services');
      return;
    }

    if (haveService === wantService) {
      alert('You cannot swap the same service');
      return;
    }

    // Update user preferences
    updateUser({
      hasServices: [haveService],
      wantsServices: [wantService]
    });

    // Show match animation
    setShowMatchAnimation(true);
    setTimeout(() => setShowMatchAnimation(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Match Animation */}
      {showMatchAnimation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 text-center max-w-md mx-4 animate-pulse">
            <div className="text-6xl mb-4">✨</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Searching for matches...</h2>
            <p className="text-gray-600">We're finding people who have {wantService} and want {haveService}!</p>
          </div>
        </div>
      )}

      {/* Welcome Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.username}! 👋
        </h1>
        <p className="text-gray-600">
          Ready to swap some subscriptions? Let's find your perfect match!
        </p>
      </div>

      {/* Main Swap Interface */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* I HAVE Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">I HAVE</h2>
            <p className="text-gray-600">What subscription do you currently have?</p>
          </div>
          
          <select
            value={haveService}
            onChange={(e) => setHaveService(e.target.value)}
            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-lg"
          >
            <option value="">Select a service...</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>

        {/* I WANT Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">🎁</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">I WANT</h2>
            <p className="text-gray-600">What subscription would you like to get?</p>
          </div>
          
          <select
            value={wantService}
            onChange={(e) => setWantService(e.target.value)}
            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-200 text-lg"
          >
            <option value="">Select a service...</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Find Matches Button */}
      <div className="text-center mb-8">
        <button
          onClick={handleFindMatches}
          disabled={!haveService || !wantService}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold py-4 px-12 rounded-2xl text-xl shadow-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
        >
          🔍 Find Matches
        </button>
      </div>

      {/* Current Selection Display */}
      {(haveService || wantService) && (
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Current Selection:</h3>
          <div className="flex flex-wrap gap-4">
            {haveService && (
              <div className="bg-white px-4 py-2 rounded-xl border border-primary-200">
                <span className="text-sm text-gray-600">I have:</span>
                <span className="ml-2 font-medium text-primary-700">{haveService}</span>
              </div>
            )}
            {wantService && (
              <div className="bg-white px-4 py-2 rounded-xl border border-secondary-200">
                <span className="text-sm text-gray-600">I want:</span>
                <span className="ml-2 font-medium text-secondary-700">{wantService}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-primary-600">{user?.credits || 100}</div>
          <div className="text-sm text-gray-600">Credits</div>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-secondary-600">{user?.hasServices?.length || 0}</div>
          <div className="text-sm text-gray-600">Services Shared</div>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-gray-600">0</div>
          <div className="text-sm text-gray-600">Successful Swaps</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;