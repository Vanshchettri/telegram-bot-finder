# Telegram Bot Finder

Discover free Telegram bots, channels, and groups with AI-powered search.

## Features

✨ **Smart Search** - Find Telegram resources by keyword, category, or description  
🤖 **AI Recommendations** - Get personalized suggestions based on interests  
📊 **Analytics** - View trending bots, popular categories, and statistics  
🔖 **Bookmarks** - Save your favorite bots and channels  
📱 **Mobile Friendly** - Responsive design for all devices  

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express (to be implemented)
- **Database**: PostgreSQL (to be implemented)
- **Search**: Elasticsearch or Hugging Face API (to be implemented)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Vanshchettri/telegram-bot-finder.git
cd telegram-bot-finder

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── pages/
│   │   ├── api/           # API routes
│   │   ├── index.tsx      # Home page
│   │   └── search.tsx     # Search page
│   ├── components/        # React components
│   ├── styles/            # Global styles
│   ├── types/             # TypeScript types
│   └── utils/             # Utility functions
├── public/                # Static files
└── package.json
```

## License

MIT
