import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    hasServices: user?.hasServices || [],
    wantsServices: user?.wantsServices || []
  });

  const services = [
    'Netflix', 'Prime Video', 'Spotify', 'Apple Music', 'Disney+', 
    'HBO Max', 'Hulu', 'YouTube Premium', 'Adobe Creative', 'Canva Pro',
    'Notion Pro', 'Figma Pro', 'Github Pro', 'LinkedIn Premium'
  ];

  const handleSave = () => {
    updateUser(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      username: user?.username || '',
      email: user?.email || '',
      hasServices: user?.hasServices || [],
      wantsServices: user?.wantsServices || []
    });
    setIsEditing(false);
  };

  const addHaveService = (service) => {
    if (!editData.hasServices.includes(service)) {
      setEditData({
        ...editData,
        hasServices: [...editData.hasServices, service]
      });
    }
  };

  const removeHaveService = (service) => {
    setEditData({
      ...editData,
      hasServices: editData.hasServices.filter(s => s !== service)
    });
  };

  const addWantService = (service) => {
    if (!editData.wantsServices.includes(service)) {
      setEditData({
        ...editData,
        wantsServices: [...editData.wantsServices, service]
      });
    }
  };

  const removeWantService = (service) => {
    setEditData({
      ...editData,
      wantsServices: editData.wantsServices.filter(s => s !== service)
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile 👤</h1>
        <p className="text-gray-600">
          Manage your account and subscription preferences
        </p>
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-6">
            <img
              src={user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.username}`}
              alt={user?.username}
              className="w-24 h-24 rounded-full border-4 border-primary-100"
            />
            <div>
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editData.username}
                    onChange={(e) => setEditData({...editData, username: e.target.value})}
                    className="text-2xl font-bold bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => setEditData({...editData, email: e.target.value})}
                    className="block text-gray-600 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{user?.username}</h2>
                  <p className="text-gray-600 text-lg">{user?.email}</p>
                </div>
              )}
              <div className="flex items-center space-x-4 mt-3">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {user?.credits || 100} credits
                </span>
                <span className="text-gray-500 text-sm">
                  Joined {new Date(user?.joinedAt || Date.now()).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors font-medium"
            >
              ✏️ Edit Profile
            </button>
          ) : (
            <div className="space-x-3">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors font-medium"
              >
                ✅ Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-6 py-3 rounded-xl hover:bg-gray-600 transition-colors font-medium"
              >
                ❌ Cancel
              </button>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">{user?.credits || 100}</div>
            <div className="text-sm text-gray-600">Credits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary-600">{editData.hasServices.length}</div>
            <div className="text-sm text-gray-600">Services I Have</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{editData.wantsServices.length}</div>
            <div className="text-sm text-gray-600">Services I Want</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">0</div>
            <div className="text-sm text-gray-600">Completed Swaps</div>
          </div>
        </div>
      </div>

      {/* Services I Have */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="text-2xl mr-2">🎯</span>
          Services I Have
        </h3>
        
        {isEditing ? (
          <div>
            <div className="mb-4">
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    addHaveService(e.target.value);
                    e.target.value = '';
                  }
                }}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Add a service...</option>
                {services.filter(service => !editData.hasServices.includes(service)).map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-wrap gap-2">
              {editData.hasServices.map(service => (
                <span key={service} className="bg-primary-100 text-primary-700 px-4 py-2 rounded-xl flex items-center space-x-2">
                  <span>{service}</span>
                  <button
                    onClick={() => removeHaveService(service)}
                    className="text-primary-600 hover:text-primary-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {user?.hasServices?.length > 0 ? (
              user.hasServices.map(service => (
                <span key={service} className="bg-primary-100 text-primary-700 px-4 py-2 rounded-xl">
                  {service}
                </span>
              ))
            ) : (
              <p className="text-gray-500">No services added yet</p>
            )}
          </div>
        )}
      </div>

      {/* Services I Want */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="text-2xl mr-2">🎁</span>
          Services I Want
        </h3>
        
        {isEditing ? (
          <div>
            <div className="mb-4">
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    addWantService(e.target.value);
                    e.target.value = '';
                  }
                }}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              >
                <option value="">Add a service...</option>
                {services.filter(service => !editData.wantsServices.includes(service)).map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-wrap gap-2">
              {editData.wantsServices.map(service => (
                <span key={service} className="bg-secondary-100 text-secondary-700 px-4 py-2 rounded-xl flex items-center space-x-2">
                  <span>{service}</span>
                  <button
                    onClick={() => removeWantService(service)}
                    className="text-secondary-600 hover:text-secondary-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {user?.wantsServices?.length > 0 ? (
              user.wantsServices.map(service => (
                <span key={service} className="bg-secondary-100 text-secondary-700 px-4 py-2 rounded-xl">
                  {service}
                </span>
              ))
            ) : (
              <p className="text-gray-500">No services added yet</p>
            )}
          </div>
        )}
      </div>

      {/* Account Settings */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="text-2xl mr-2">⚙️</span>
          Account Settings
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
            <div>
              <h4 className="font-medium text-gray-900">Email Notifications</h4>
              <p className="text-sm text-gray-600">Get notified about new matches</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
            <div>
              <h4 className="font-medium text-gray-900">Public Profile</h4>
              <p className="text-sm text-gray-600">Show your profile to other users</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;