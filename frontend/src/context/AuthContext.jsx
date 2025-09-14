import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing user session
    const savedUser = localStorage.getItem('subswap_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // For demo purposes, create a user object
      // In production, this would be a real authentication call
      const userData = {
        id: Date.now(),
        username: email.split('@')[0], // Use email prefix as username
        email,
        credits: 100,
        hasServices: [],
        wantsServices: [],
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        joinedAt: new Date().toISOString()
      };
      
      setUser(userData);
      localStorage.setItem('subswap_user', JSON.stringify(userData));
      return { success: true, user: userData };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  };

  const signup = async (username, email, password) => {
    try {
      // For demo purposes, create a user object
      // In production, this would be a real authentication call
      const userData = {
        id: Date.now(),
        username,
        email,
        credits: 100,
        hasServices: [],
        wantsServices: [],
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
        joinedAt: new Date().toISOString()
      };
      
      setUser(userData);
      localStorage.setItem('subswap_user', JSON.stringify(userData));
      return { success: true, user: userData };
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('subswap_user');
  };

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('subswap_user', JSON.stringify(updatedUser));
  };

  const addCredits = (amount, description) => {
    const newCredits = user.credits + amount;
    const transaction = {
      id: Date.now(),
      amount,
      type: amount > 0 ? 'earned' : 'spent',
      description,
      timestamp: new Date().toISOString()
    };
    
    const transactions = JSON.parse(localStorage.getItem('subswap_transactions') || '[]');
    transactions.unshift(transaction);
    localStorage.setItem('subswap_transactions', JSON.stringify(transactions));
    
    updateUser({ credits: newCredits });
  };

  const getTransactions = () => {
    return JSON.parse(localStorage.getItem('subswap_transactions') || '[]');
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    updateUser,
    addCredits,
    getTransactions
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};