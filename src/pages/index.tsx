import React, { useState } from 'react';
import { Search, MessageCircle, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const features = [
    {
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: 'Smart Search',
      description: 'Find Telegram bots, channels, and groups by keywords, categories, or descriptions'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Recommendations',
      description: 'Get personalized suggestions based on your interests and preferences'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Community',
      description: 'Connect with thousands of Telegram resources and communities'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
      title: 'Browse Categories',
      description: 'Explore organized categories: crypto, gaming, news, education, and more'
    }
  ];

  const topBots = [
    { id: 1, name: 'Crypto Price Bot', category: 'Crypto', members: '125K' },
    { id: 2, name: 'News Channel', category: 'News', members: '450K' },
    { id: 3, name: 'Gaming Hub', category: 'Gaming', members: '89K' },
    { id: 4, name: 'Python Learning', category: 'Education', members: '200K' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-white">Telegram Bot Finder</span>
          </div>
          <div className="flex gap-4">
            <button className="text-slate-300 hover:text-white transition">Browse</button>
            <button className="text-slate-300 hover:text-white transition">Categories</button>
            <button className="text-slate-300 hover:text-white transition">About</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Discover Amazing <span className="text-blue-500">Telegram Resources</span>
        </h1>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Find the best Telegram bots, channels, and groups. Explore 1000+ resources curated with AI-powered recommendations.
        </p>

        {/* Search Box */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search bots, channels, groups... (e.g., crypto trading, news, gaming)"
              className="w-full px-6 py-4 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </form>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="text-3xl font-bold text-blue-500">1000+</div>
            <div className="text-slate-300">Bots & Channels</div>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="text-3xl font-bold text-green-500">50+</div>
            <div className="text-slate-300">Categories</div>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="text-3xl font-bold text-purple-500">AI Powered</div>
            <div className="text-slate-300">Smart Search</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-800/50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Telegram Bot Finder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700 p-6 rounded-lg border border-slate-600 hover:border-blue-500 transition">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Bots Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-8">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topBots.map((bot) => (
            <div key={bot.id} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{bot.name}</h3>
                  <span className="text-sm text-blue-400">{bot.category}</span>
                </div>
                <span className="text-sm text-slate-400">👥 {bot.members}</span>
              </div>
              <p className="text-slate-300 text-sm mb-4">Discover this popular Telegram resource with thousands of active members.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition text-sm">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-slate-800/50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Crypto', 'Gaming', 'News', 'Education', 'Business', 'Entertainment'].map((category) => (
              <div key={category} className="bg-slate-700 p-4 rounded-lg text-center hover:bg-blue-600 transition cursor-pointer">
                <p className="text-white font-medium">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Exploring Today</h2>
          <p className="text-blue-100 mb-8">Find your next favorite Telegram bot or channel</p>
          <button onClick={() => setSearchQuery('') || document.querySelector('input')?.focus?.()} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="text-slate-400 space-y-2">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="text-slate-400 space-y-2">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="text-slate-400 space-y-2">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="text-slate-400 space-y-2">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">License</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Telegram Bot Finder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
