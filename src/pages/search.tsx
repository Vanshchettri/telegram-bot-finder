import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, Share2, MessageCircle } from 'lucide-react';
import { useRouter } from 'next/router';

interface Bot {
  id: number;
  name: string;
  description: string;
  category: string;
  members: string;
  rating: number;
  link: string;
  verified: boolean;
}

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  const [searchQuery, setSearchQuery] = useState(q as string || '');
  const [results, setResults] = useState<Bot[]>([]);
  const [filteredResults, setFilteredResults] = useState<Bot[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('relevant');
  const [loading, setLoading] = useState(false);

  const categories = ['All', 'Crypto', 'Gaming', 'News', 'Education', 'Business', 'Entertainment', 'Tools'];

  // Mock data - replace with API call
  const mockBots: Bot[] = [
    {
      id: 1,
      name: 'Crypto Price Bot',
      description: 'Real-time cryptocurrency prices and market updates',
      category: 'Crypto',
      members: '125K',
      rating: 4.8,
      link: 't.me/cryptobot',
      verified: true
    },
    {
      id: 2,
      name: 'News Channel',
      description: 'Latest news from around the world delivered daily',
      category: 'News',
      members: '450K',
      rating: 4.5,
      link: 't.me/newschannel',
      verified: true
    },
    {
      id: 3,
      name: 'Gaming Hub',
      description: 'Find and join gaming communities and tournaments',
      category: 'Gaming',
      members: '89K',
      rating: 4.6,
      link: 't.me/gaminghub',
      verified: false
    },
    {
      id: 4,
      name: 'Python Learning',
      description: 'Learn Python programming from basics to advanced',
      category: 'Education',
      members: '200K',
      rating: 4.9,
      link: 't.me/pythonlearning',
      verified: true
    },
    {
      id: 5,
      name: 'Stock Market Bot',
      description: 'Real-time stock prices and market analysis',
      category: 'Business',
      members: '175K',
      rating: 4.7,
      link: 't.me/stockbot',
      verified: true
    },
    {
      id: 6,
      name: 'Movie Reviews',
      description: 'Daily movie reviews and entertainment news',
      category: 'Entertainment',
      members: '320K',
      rating: 4.4,
      link: 't.me/moviereviews',
      verified: false
    },
    {
      id: 7,
      name: 'Trading Signals',
      description: 'AI-powered trading signals for crypto',
      category: 'Crypto',
      members: '95K',
      rating: 4.3,
      link: 't.me/tradingsignals',
      verified: true
    },
    {
      id: 8,
      name: 'Web Development',
      description: 'Learn web development from experts',
      category: 'Education',
      members: '150K',
      rating: 4.8,
      link: 't.me/webdev',
      verified: true
    },
  ];

  useEffect(() => {
    if (q) {
      setSearchQuery(q as string);
      performSearch(q as string);
    }
  }, [q]);

  const performSearch = (query: string) => {
    setLoading(true);
    setTimeout(() => {
      const filtered = mockBots.filter(bot =>
        bot.name.toLowerCase().includes(query.toLowerCase()) ||
        bot.description.toLowerCase().includes(query.toLowerCase()) ||
        bot.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setFilteredResults(filtered);
      setLoading(false);
    }, 500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    let filtered = results;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(bot => bot.category === selectedCategory);
    }

    // Sort results
    if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'members') {
      filtered.sort((a, b) => {
        const aMembers = parseInt(a.members);
        const bMembers = parseInt(b.members);
        return bMembers - aMembers;
      });
    } else if (sortBy === 'verified') {
      filtered.sort((a, b) => (b.verified ? 1 : 0) - (a.verified ? 1 : 0));
    }

    setFilteredResults(filtered);
  }, [selectedCategory, sortBy, results]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <MessageCircle className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-white">Telegram Bot Finder</span>
          </a>
          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search Results Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Search Results for "{searchQuery}"
          </h1>
          <p className="text-slate-400">
            Found {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar - Filters */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-semibold text-white">Filters</h3>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white mb-3 uppercase">Category</h4>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="w-4 h-4 accent-blue-500"
                      />
                      <span className={selectedCategory === cat ? 'text-white' : 'text-slate-400'}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white mb-3 uppercase">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="relevant">Most Relevant</option>
                  <option value="rating">Highest Rating</option>
                  <option value="members">Most Members</option>
                  <option value="verified">Verified First</option>
                </select>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSortBy('relevant');
                }}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Main Content - Results */}
          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center h-96">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                  <p className="text-slate-300">Searching...</p>
                </div>
              </div>
            ) : filteredResults.length > 0 ? (
              <div className="space-y-4">
                {filteredResults.map(bot => (
                  <div
                    key={bot.id}
                    className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-white">{bot.name}</h3>
                          {bot.verified && (
                            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <p className="text-slate-400 mb-3">{bot.description}</p>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="bg-slate-700 px-3 py-1 rounded text-blue-400">
                            {bot.category}
                          </span>
                          <span>👥 {bot.members} members</span>
                          <span className="flex items-center gap-1">
                            ⭐ {bot.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 bg-slate-700 hover:bg-slate-600 text-yellow-400 rounded-lg transition">
                          <Star className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg transition">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={`https://${bot.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition text-center"
                      >
                        Open Bot
                      </a>
                      <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-300 mb-2">No results found</h3>
                <p className="text-slate-400">
                  Try searching with different keywords or browse all categories
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
