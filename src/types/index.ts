export interface Bot {
  id: number;
  name: string;
  description: string;
  category: string;
  members: string;
  rating: number;
  link: string;
  verified: boolean;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Channel {
  id: number;
  name: string;
  description: string;
  members: string;
  link: string;
  verified: boolean;
  category: string;
  rating: number;
}

export interface Group {
  id: number;
  name: string;
  description: string;
  members: string;
  link: string;
  verified: boolean;
  category: string;
  rating: number;
}

export interface SearchResult {
  bots: Bot[];
  channels: Channel[];
  groups: Group[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface SearchParams extends PaginationParams {
  query: string;
  category?: string;
  sortBy?: 'relevant' | 'rating' | 'members' | 'verified';
}
