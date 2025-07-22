import { User, Movie, Recommendation, FairnessMetrics } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'alice@example.com',
    name: 'Alice Johnson',
    age: 28,
    gender: 'female',
    occupation: 'Software Engineer',
    role: 'user',
    preferences: ['Sci-Fi', 'Thriller', 'Action'],
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    email: 'bob@example.com',
    name: 'Bob Smith',
    age: 35,
    gender: 'male',
    occupation: 'Teacher',
    role: 'user',
    preferences: ['Drama', 'Comedy', 'Romance'],
    createdAt: new Date('2024-02-20')
  },
  {
    id: '3',
    email: 'carol@example.com',
    name: 'Carol Williams',
    age: 42,
    gender: 'female',
    occupation: 'Doctor',
    role: 'user',
    preferences: ['Documentary', 'Drama', 'Thriller'],
    createdAt: new Date('2024-03-10')
  },
  {
    id: '4',
    email: 'david@example.com',
    name: 'David Brown',
    age: 31,
    gender: 'male',
    occupation: 'Artist',
    role: 'user',
    preferences: ['Horror', 'Sci-Fi', 'Adventure'],
    createdAt: new Date('2024-04-05')
  },
  {
    id: '5',
    email: 'admin@example.com',
    name: 'System Administrator',
    age: 40,
    gender: 'other',
    occupation: 'Administrator',
    role: 'admin',
    preferences: ['Action', 'Thriller'],
    createdAt: new Date('2024-01-01')
  }
];

export const mockMovies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    genre: ['Sci-Fi', 'Thriller', 'Action'],
    year: 2010,
    rating: 8.8,
    description: 'A skilled thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Marion Cotillard', 'Tom Hardy']
  },
  {
    id: '2',
    title: 'The Shawshank Redemption',
    genre: ['Drama'],
    year: 1994,
    rating: 9.3,
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    poster: 'https://images.pexels.com/photos/8263194/pexels-photo-8263194.jpeg?auto=compress&cs=tinysrgb&w=400',
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman']
  },
  {
    id: '3',
    title: 'Pulp Fiction',
    genre: ['Crime', 'Drama'],
    year: 1994,
    rating: 8.9,
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
    poster: 'https://images.pexels.com/photos/8263177/pexels-photo-8263177.jpeg?auto=compress&cs=tinysrgb&w=400',
    director: 'Quentin Tarantino',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson']
  },
  {
    id: '4',
    title: 'The Dark Knight',
    genre: ['Action', 'Crime', 'Drama'],
    year: 2008,
    rating: 9.0,
    description: 'When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
    poster: 'https://images.pexels.com/photos/8263166/pexels-photo-8263166.jpeg?auto=compress&cs=tinysrgb&w=400',
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart']
  },
  {
    id: '5',
    title: 'Forrest Gump',
    genre: ['Drama', 'Romance'],
    year: 1994,
    rating: 8.8,
    description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man.',
    poster: 'https://images.pexels.com/photos/8263158/pexels-photo-8263158.jpeg?auto=compress&cs=tinysrgb&w=400',
    director: 'Robert Zemeckis',
    cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise']
  },
  {
    id: '6',
    title: 'Interstellar',
    genre: ['Sci-Fi', 'Drama', 'Adventure'],
    year: 2014,
    rating: 8.6,
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    poster: 'https://images.pexels.com/photos/8263151/pexels-photo-8263151.jpeg?auto=compress&cs=tinysrgb&w=400',
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain']
  },
  {
    id: '7',
    title: 'The Matrix',
    genre: ['Action', 'Sci-Fi'],
    year: 1999,
    rating: 8.7,
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    poster: 'https://images.pexels.com/photos/8263144/pexels-photo-8263144.jpeg?auto=compress&cs=tinysrgb&w=400',
    director: 'The Wachowskis',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss']
  },
  {
    id: '8',
    title: 'Goodfellas',
    genre: ['Biography', 'Crime', 'Drama'],
    year: 1990,
    rating: 8.7,
    description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.',
    poster: 'https://images.pexels.com/photos/8263137/pexels-photo-8263137.jpeg?auto=compress&cs=tinysrgb&w=400',
    director: 'Martin Scorsese',
    cast: ['Robert De Niro', 'Ray Liotta', 'Joe Pesci']
  },
  {
    id: '9',
    title: 'The Godfather',
    genre: ['Crime', 'Drama'],
    year: 1972,
    rating: 9.2,
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    poster: 'https://images.pexels.com/photos/8263130/pexels-photo-8263130.jpeg?auto=compress&cs=tinysrgb&w=400',
    director: 'Francis Ford Coppola',
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan']
  },
  {
    id: '10',
    title: 'Schindler\'s List',
    genre: ['Biography', 'Drama', 'History'],
    year: 1993,
    rating: 8.9,
    description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce.',
    poster: 'https://images.pexels.com/photos/8263123/pexels-photo-8263123.jpeg?auto=compress&cs=tinysrgb&w=400',
    director: 'Steven Spielberg',
    cast: ['Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley']
  }
];

export const mockRecommendations: Recommendation[] = [
  {
    movie: mockMovies[0], // Inception
    score: 0.92,
    fairnessScore: 0.85,
    biasComponents: {
      biasAware: 0.25,
      biasFree: 0.75
    },
    reasoning: 'Recommended based on your preference for Sci-Fi and Thriller genres. The fairness-aware algorithm ensures this recommendation is not biased by demographic factors, focusing on your viewing patterns and genre preferences.'
  },
  {
    movie: mockMovies[6], // The Matrix
    score: 0.88,
    fairnessScore: 0.82,
    biasComponents: {
      biasAware: 0.30,
      biasFree: 0.70
    },
    reasoning: 'Selected through collaborative filtering with orthogonality regularization. The adversarial discriminator failed to predict your demographic attributes from the bias-free embedding components used for this recommendation, ensuring fairness.'
  },
  {
    movie: mockMovies[3], // The Dark Knight
    score: 0.86,
    fairnessScore: 0.88,
    biasComponents: {
      biasAware: 0.22,
      biasFree: 0.78
    },
    reasoning: 'Generated using bias-free user embedding components (78% contribution). The low adversarial loss indicates successful separation of demographic attributes from content preferences in the recommendation process.'
  },
  {
    movie: mockMovies[5], // Interstellar
    score: 0.84,
    fairnessScore: 0.81,
    biasComponents: {
      biasAware: 0.28,
      biasFree: 0.72
    },
    reasoning: 'Matrix factorization with fairness constraints identified this match. Orthogonality regularization (L_orth) ensured bias-aware and bias-free components remain independent during training.'
  },
  {
    movie: mockMovies[1], // The Shawshank Redemption
    score: 0.81,
    fairnessScore: 0.90,
    biasComponents: {
      biasAware: 0.18,
      biasFree: 0.82
    },
    reasoning: 'Exemplifies successful adversarial training - 82% bias-free contribution with minimal demographic influence. The discriminator network achieved <20% accuracy in predicting user attributes from this recommendation.'
  },
  {
    movie: mockMovies[2], // Pulp Fiction
    score: 0.79,
    fairnessScore: 0.79,
    biasComponents: {
      biasAware: 0.32,
      biasFree: 0.68
    },
    reasoning: 'Deep learning model with custom loss function (L_rec + λ₁L_adv + λ₂L_orth) balanced personalization and fairness. Higher bias-aware component suggests some demographic correlation in genre preferences.'
  },
  {
    movie: mockMovies[7], // Goodfellas
    score: 0.77,
    fairnessScore: 0.83,
    biasComponents: {
      biasAware: 0.26,
      biasFree: 0.74
    },
    reasoning: 'Keras-based neural collaborative filtering with adversarial regularization. The 74% bias-free contribution demonstrates effective embedding separation through orthogonality constraints.'
  },
  {
    movie: mockMovies[8], // The Godfather
    score: 0.75,
    fairnessScore: 0.86,
    biasComponents: {
      biasAware: 0.24,
      biasFree: 0.76
    },
    reasoning: 'Generated via adversarial learning where discriminator loss exceeded threshold, indicating successful attribute-invariant representation. Low bias-aware component confirms demographic fairness.'
  }
];

export const mockFairnessMetrics: FairnessMetrics = {
  overallFairness: 0.842,
  genderBias: 0.156,
  ageBias: 0.203,
  occupationBias: 0.178,
  diversityScore: 0.763
};