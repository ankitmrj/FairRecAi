export interface User {
  id: string;
  email: string;
  name: string;
  age: number;
  gender: string;
  occupation: string;
  role: 'user' | 'admin';
  preferences: string[];
  createdAt: Date;
}

export interface Movie {
  id: string;
  title: string;
  genre: string[];
  year: number;
  rating: number;
  description: string;
  poster: string;
  director: string;
  cast: string[];
}

export interface Rating {
  id: string;
  userId: string;
  movieId: string;
  rating: number;
  timestamp: Date;
}

export interface Recommendation {
  movie: Movie;
  score: number;
  fairnessScore: number;
  biasComponents: {
    biasAware: number;
    biasFree: number;
  };
  reasoning: string;
}

export interface FairnessMetrics {
  overallFairness: number;
  genderBias: number;
  ageBias: number;
  occupationBias: number;
  diversityScore: number;
}

export interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}