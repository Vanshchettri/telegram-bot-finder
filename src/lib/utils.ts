export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

export const parseMembersString = (members: string): number => {
  const multiplier: { [key: string]: number } = {
    K: 1000,
    M: 1000000,
    B: 1000000000,
  };

  const match = members.match(/^([\d.]+)([KMB]?)$/i);
  if (!match) return 0;

  const num = parseFloat(match[1]);
  const suffix = match[2]?.toUpperCase();

  return suffix ? num * (multiplier[suffix] || 1) : num;
};

export const truncateText = (text: string, length: number): string => {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
};

export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatDistanceToNow = (date: string | Date): string => {
  const now = new Date();
  const d = new Date(date);
  const seconds = Math.floor((now.getTime() - d.getTime()) / 1000);

  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  return formatDate(date);
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const generateId = (): string => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const sortBots = (
  bots: any[],
  sortBy: 'relevant' | 'rating' | 'members' | 'verified' = 'relevant'
): any[] => {
  const sorted = [...bots];

  switch (sortBy) {
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'members':
      return sorted.sort(
        (a, b) => parseMembersString(b.members) - parseMembersString(a.members)
      );
    case 'verified':
      return sorted.sort((a, b) => (b.verified ? 1 : 0) - (a.verified ? 1 : 0));
    default:
      return sorted;
  }
};

export const filterBots = (
  bots: any[],
  query: string,
  category?: string
): any[] => {
  let filtered = bots;

  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (bot) =>
        bot.name.toLowerCase().includes(q) ||
        bot.description.toLowerCase().includes(q)
    );
  }

  if (category && category !== 'All') {
    filtered = filtered.filter((bot) => bot.category === category);
  }

  return filtered;
};
