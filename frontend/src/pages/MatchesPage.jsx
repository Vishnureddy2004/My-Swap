import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const MatchesPage = () => {
  const { user, addCredits } = useAuth();
  const [matches, setMatches] = useState([]);
  const [showMatchFound, setShowMatchFound] = useState(false);
  const [currentMatch, setCurrentMatch] = useState(null);

  // Generate demo matches based on user preferences
  useEffect(() => {
    if (user?.hasServices?.length > 0 && user?.wantsServices?.length > 0) {
      const demoMatches = [
        {
          id: 1,
          username: 'Alex',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
          hasService: user.wantsServices[0],
          wantsService: user.hasServices[0],
          credits: 95,
          rating: 4.8,
          swapsCompleted: 12,
          joinedDays: 45
        },
        {
          id: 2,
          username: 'Sarah',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
          hasService: user.wantsServices[0],
          wantsService: user.hasServices[0],
          credits: 110,
          rating: 4.9,
          swapsCompleted: 8,
          joinedDays: 23
        },
        {
          id: 3,
          username: 'Mike',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
          hasService: user.wantsServices[0],
          wantsService: user.hasServices[0],
          credits: 87,
          rating: 4.7,
          swapsCompleted: 15,
          joinedDays: 67
        }
      ];
      setMatches(demoMatches);
    } else {
      setMatches([]);
    }
  }, [user]);

  const handleConnect = (match) => {
    setCurrentMatch(match);
    setShowMatchFound(true);
    
    // Simulate match confirmation after 3 seconds
    setTimeout(() => {
      addCredits(20, `Swap with ${match.username}`);
      setShowMatchFound(false);
      setMatches(matches.filter(m => m.id !== match.id));
    }, 3000);
  };

  if (!user?.hasServices?.length || !user?.wantsServices?.length) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-12">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No preferences set</h2>
          <p className="text-gray-600 mb-6">
            Go to your dashboard and select what you have and what you want to see potential matches.
          </p>
          <div className="inline-flex items-center space-x-2 text-primary-600">
            <span>👈</span>
            <span>Start by setting your preferences</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Match Found Modal */}
      {showMatchFound && currentMatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 text-center max-w-md mx-4 animate-bounce">
            <div className="text-6xl mb-4">✨</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Match Found!</h2>
            <p className="text-gray-600 mb-4">
              You and {currentMatch.username} are now connected!
            </p>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="text-center">
                <img src={user.avatar} alt={user.username} className="w-16 h-16 rounded-full mx-auto mb-2" />
                <p className="text-sm font-medium">{user.username}</p>
                <p className="text-xs text-gray-500">has {user.hasServices[0]}</p>
              </div>
              <div className="text-2xl">🔄</div>
              <div className="text-center">
                <img src={currentMatch.avatar} alt={currentMatch.username} className="w-16 h-16 rounded-full mx-auto mb-2" />
                <p className="text-sm font-medium">{currentMatch.username}</p>
                <p className="text-xs text-gray-500">has {currentMatch.hasService}</p>
              </div>
            </div>
            <p className="text-sm text-primary-600">+20 credits earned!</p>
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Matches 💝</h1>
        <p className="text-gray-600">
          Found {matches.length} people who want {user.hasServices[0]} and have {user.wantsServices[0]}
        </p>
      </div>

      {matches.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-12 text-center">
          <div className="text-6xl mb-4">😴</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No matches yet</h2>
          <p className="text-gray-600">
            We're looking for people who have {user.wantsServices[0]} and want {user.hasServices[0]}. 
            Check back soon!
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {matches.map((match) => (
            <div key={match.id} className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={match.avatar}
                    alt={match.username}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{match.username}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>⭐ {match.rating}</span>
                      <span>🔄 {match.swapsCompleted} swaps</span>
                      <span>📅 {match.joinedDays} days</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-lg font-semibold text-gray-900">{match.credits} credits</div>
                  <div className="text-sm text-gray-500">Available</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="text-2xl mb-1">🎯</div>
                    <div className="text-sm text-gray-600">You have</div>
                    <div className="font-semibold text-primary-600">{user.hasServices[0]}</div>
                  </div>
                  
                  <div className="flex items-center space-x-2 px-4">
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <div className="text-2xl">🔄</div>
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                  </div>
                  
                  <div className="text-center flex-1">
                    <div className="text-2xl mb-1">🎁</div>
                    <div className="text-sm text-gray-600">They have</div>
                    <div className="font-semibold text-secondary-600">{match.hasService}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <button
                  onClick={() => handleConnect(match)}
                  className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium py-3 px-6 rounded-xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 transform hover:scale-105"
                >
                  🤝 Connect & Swap
                </button>
                <button className="px-6 py-3 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-all duration-200">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tips Section */}
      <div className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Swap Tips</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Each successful swap earns you 20 credits</li>
          <li>• Higher rated users are more reliable</li>
          <li>• Check their swap history before connecting</li>
          <li>• Be respectful and communicate clearly</li>
        </ul>
      </div>
    </div>
  );
};

export default MatchesPage;