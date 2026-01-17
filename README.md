# stellarspend-api
Backend API for user management, data storage, and Stellar transaction processing
Web application for tracking daily, monthly, and quarterly spending on Stellar blockchain
0verview
StellarSpend is a comprehensive financial management platform designed specifically for the unbanked and underbanked populations worldwide. Built on the Stellar blockchain, it provides transparent, low-cost transaction tracking and budgeting tools that empower users to take control of their financial lives.
Key Features

📊 Transaction Tracking: Automatic tracking of all Stellar blockchain transactions
💰 Smart Budgeting: AI-powered budget recommendations and spending limits
📱 Offline-First Design: Core features work without internet connectivity
🔐 Self-Sovereign Identity: Your wallet is your identity - no KYC required
🌍 Multi-Currency Support: Track XLM, USDC, EURC, and all Stellar assets
📈 Visual Analytics: Beautiful charts showing spending patterns and trends
🎯 Savings Goals: Set and track financial goals with milestone celebrations
🔔 Smart Notifications: Budget alerts, payment reminders, goal achievements
🌐 Multilingual: English, Spanish, French, Swahili, Portuguese, Arabic
🤝 Community-Driven: Built with transparency and user feedback

Contributing

We welcome contributions!

Fork the repository

Create a branch: git checkout -b feature/short-description

Implement changes and add tests where applicable

Run linters and tests locally

Open a clear Pull Request describing the changes

Look for issues labeled good first issue or help wanted.
🚀 Quick Start
Prerequisites
bashNode.js 18+
npm or yarn or pnpm
Modern web browser
Stellar wallet (Freighter recommended)
Installation
bash# Clone the repository
git clone https://github.com/stellarspend/stellarspend-app.git
cd stellarspend-app

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
Environment Setup
Environment variables configure various aspects of the application. Sensitive variables (without NEXT_PUBLIC_ prefix) are server-only, while NEXT_PUBLIC_ variables are exposed to the browser.
Create a .env.local file in the root:
bashcp .env.example .env.local
Then configure your environment variables:
env# Stellar Network Configuration
NEXT_PUBLIC_STELLAR_NETWORK=TESTNET
NEXT_PUBLIC_HORIZON_URL=https://horizon-testnet.stellar.org
NEXT_PUBLIC_SOROBAN_RPC_URL=https://soroban-testnet.stellar.org

# Backend API
NEXT_PUBLIC_API_URL=http://localhost:3001
API_SECRET_KEY=your-secret-key-here

# Database (if using built-in caching)
DATABASE_URL=postgresql://user:password@localhost:5432/stellarspend

# Analytics (Optional)
NEXT_PUBLIC_ANALYTICS_ID=
NEXT_PUBLIC_SENTRY_DSN=

# Feature Flags
NEXT_PUBLIC_ENABLE_SOROBAN=true
NEXT_PUBLIC_ENABLE_SHARED_BUDGETS=false
NEXT_PUBLIC_ENABLE_AI_INSIGHTS=false

🏗️ Architecture
Technology Stack
Framework

Next.js 15 with App Router
React 18 with Server Components
TypeScript 5.0

Styling & UI

Tailwind CSS 3.4 with custom design system
shadcn/ui components
Framer Motion for animations
Lucide React for icons
Recharts for data visualization

State Management

React Query (TanStack Query) for server state
Zustand for client state
React Context for theme/auth

Blockchain Integration

@stellar/stellar-sdk 11.x
Freighter API for wallet connection
Albedo SDK for alternative wallet
Soroban RPC client for smart contracts






      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
      


