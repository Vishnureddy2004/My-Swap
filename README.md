# Intent Swap - Subscription Exchange Platform

A modern platform where people can exchange subscriptions based on what they have and what they want.

## ✨ Features

### Clean, Modern Design
- **Minimal UI**: Soft colors, rounded cards, simple icons
- **Dashboard Layout**: Easy navigation with Home | Matches | Wallet | Profile
- **TailwindCSS**: Responsive design that works on all devices
- **Glass Morphism**: Beautiful gradient backgrounds and card effects

### Core Functionality
- **Smart Matching**: Find people who have what you want and want what you have
- **Credit System**: Start with 100 credits, earn 20 per successful swap
- **Real-time Notifications**: Get notified about new matches instantly
- **User Profiles**: Manage your services and preferences easily

### Pages & Flow
1. **Home/Dashboard**: Set what you HAVE and what you WANT
2. **Matches**: Browse potential swaps with detailed user info
3. **Wallet**: Track credits and transaction history
4. **Profile**: Manage account details and preferences

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:
- [Node.js](https://nodejs.org/) (v18 or higher) ✅ Already installed!
- npm (comes with Node.js) ✅ Ready to go!
- Optional: [PostgreSQL](https://www.postgresql.org/) for persistent data

### Quick Start

1. **Install Dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Intent Swap**
   Visit [http://localhost:3000](http://localhost:3000)

### Demo Mode
Intent Swap works in demo mode by default:
- No database required for testing
- User data stored in browser localStorage
- Perfect for trying out all features

## 📁 Project Structure

```
Intent Swap/
├── frontend/                 # React + TailwindCSS app
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Navbar.jsx       # Navigation bar
│   │   │   ├── Footer.jsx       # Footer with attribution
│   │   │   └── AuthPage.jsx     # Login/signup
│   │   ├── pages/             # Main application pages
│   │   │   ├── HomePage.jsx     # Dashboard with I HAVE/WANT
│   │   │   ├── MatchesPage.jsx  # Browse potential swaps
│   │   │   ├── WalletPage.jsx   # Credits & transactions
│   │   │   └── ProfilePage.jsx  # User settings
│   │   ├── context/           # React Context providers
│   │   │   └── AuthContext.jsx  # User authentication
│   │   └── App.jsx            # Main app component
│   └── package.json          # Frontend dependencies
├── backend/                  # Express API (optional)
└── README.md                # This file
```

## 🎮 How to Use Intent Swap

### 1. Sign Up
- Enter your username and email
- Start with 100 free credits
- No payment required!

### 2. Set Your Preferences
- **I HAVE**: Select a subscription you currently own
- **I WANT**: Choose what you'd like to get
- Click "Find Matches" to see potential swaps

### 3. Browse Matches
- View users who have what you want
- See their ratings and swap history
- Click "Connect & Swap" to start a trade

### 4. Complete Swaps
- Earn 20 credits for each successful swap
- Build your reputation and rating
- Unlock access to premium matches

### 5. Manage Your Account
- Track credits in your wallet
- View transaction history
- Update preferences anytime

## 🔧 Available Services

**Streaming & Entertainment**
- Netflix, Prime Video, Disney+, HBO Max
- Hulu, YouTube Premium, Apple Music, Spotify

**Productivity & Creative**
- Adobe Creative Suite, Canva Pro, Figma Pro
- Notion Pro, GitHub Pro, LinkedIn Premium

*More services can be easily added in the code!*

## 🔧 Tech Stack

**Frontend**
- React 18 with modern hooks
- TailwindCSS for styling
- Vite for fast development
- Context API for state management

**Backend (Optional)**
- Node.js with Express
- PostgreSQL for data persistence
- RESTful API design

**Deployment Ready**
- Vercel (Frontend)
- Heroku/Render (Backend)
- Managed PostgreSQL databases

## 🔧 Configuration

### Customizing Services
Edit the services array in any component:
```javascript
const services = [
  'Netflix', 'Prime Video', 'Spotify',
  // Add your custom services here
];
```

### Updating Credits System
Modify credit values in `AuthContext.jsx`:
```javascript
// Starting credits
const userData = { credits: 100 };

// Credits per swap
addCredits(20, `Swap with ${username}`);
```

### Customizing Footer
Update your Twitter handle in `Footer.jsx`:
```javascript
<a href="https://twitter.com/your_username">
  @your_username
</a>
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

**Prerequisites:**
1. [Vercel account](https://vercel.com/signup) (free)
2. Vercel CLI installed globally

**Option 1: Using Vercel CLI**
```bash
# Login to Vercel (first time only)
vercel login

# Deploy preview
npm run deploy:preview

# Deploy to production
npm run deploy
```

**Option 2: Using PowerShell Script**
```powershell
# Deploy preview
.\deploy.ps1

# Deploy production
.\deploy.ps1 -Environment production
```

**Option 3: Git Integration**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Auto-deploy on every push to main branch

**Configuration Files:**
- `vercel.json` - Main Vercel configuration
- `frontend/vercel.json` - Frontend-specific settings
- `.vercelignore` - Files to exclude from deployment

**Environment Variables (if needed):**
```bash
# Set environment variables in Vercel dashboard
vercel env add VITE_API_URL
vercel env add VITE_DATABASE_URL
```

### Alternative Deployments

**Frontend (Other Platforms)**
1. Build: `cd frontend && npm run build`
2. Deploy the `dist` folder to Vercel
3. Set environment variables if needed

### Backend (Optional)
For persistent data, deploy to Heroku/Render:
1. Set environment variables
2. Deploy the `backend` directory
3. Configure PostgreSQL database

## 🔍 Troubleshooting

**Common Issues:**

1. **TailwindCSS not working**
   - Ensure PostCSS config is correct
   - Check Tailwind config file

2. **Components not rendering**
   - Verify all imports are correct
   - Check browser console for errors

3. **Development server issues**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall

## 🌟 Next Features

- [ ] Real-time chat between matched users
- [ ] Push notifications for new matches
- [ ] Advanced filtering and search
- [ ] User ratings and review system
- [ ] Mobile app with React Native
- [ ] Integration with actual subscription APIs
- [ ] Premium membership tiers
- [ ] Referral system and bonuses

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

---

### 🎉 Enjoy Intent Swap!

**Start swapping subscriptions today and build a community of shared digital experiences!**

*Made with ❤️ by [@your_username](https://twitter.com/your_username)*