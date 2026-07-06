import { Bot } from '@/types';
import { formatNumber, truncateText } from '@/lib/utils';
import Link from 'next/link';

interface BotCardProps {
  bot: Bot;
  onView?: (bot: Bot) => void;
}

export default function BotCard({ bot, onView }: BotCardProps) {
  const handleClick = () => {
    if (onView) {
      onView(bot);
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer group">
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors truncate">
              {bot.name}
            </h3>
            <p className="text-sm text-gray-400 mt-1">@{bot.name}</p>
          </div>
          {bot.verified && (
            <div className="ml-2 flex-shrink-0">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {truncateText(bot.description, 100)}
        </p>

        {/* Category and Rating */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block px-3 py-1 bg-slate-700 text-blue-300 text-xs font-medium rounded-full">
            {bot.category}
          </span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(bot.rating)
                    ? 'text-yellow-400'
                    : 'text-gray-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Members and Button */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-700">
          <div className="text-sm">
            <span className="text-gray-400">Members: </span>
            <span className="text-white font-semibold">{formatNumber(parseInt(bot.members.replace(/[^0-9]/g, '')))}</span>
          </div>
          <a
            href={bot.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleClick();
              window.open(bot.link, '_blank');
            }}
          >
            View →
          </a>
        </div>
      </div>
    </div>
  );
}
