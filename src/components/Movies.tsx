import React, { useState } from 'react';
import { Star, Heart, Calendar, Play } from 'lucide-react';
import { mockMovies } from '../data/mockData';
import { useAuth } from '../App';

const Movies: React.FC = () => {
  const { user } = useAuth();
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [ratings, setRatings] = useState<{[key: string]: number}>({});

  const genres = ['All', 'Action', 'Adventure', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 'Thriller'];

  const filteredMovies = mockMovies.filter(movie => {
    const matchesGenre = selectedGenre === 'All' || movie.genre.includes(selectedGenre);
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         movie.director.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  const handleRating = (movieId: string, rating: number) => {
    setRatings(prev => ({
      ...prev,
      [movieId]: rating
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Movie Library</h1>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search movies by title or director..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMovies.map(movie => (
            <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105">
              <div className="relative">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors">
                    <Play className="h-4 w-4" />
                    <span>Watch Trailer</span>
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-white text-lg mb-2 line-clamp-2">{movie.title}</h3>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {movie.year}
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400" />
                    {movie.rating.toFixed(1)}
                  </span>
                </div>
                
                <div className="mb-3">
                  <p className="text-gray-400 text-sm mb-1">Director: {movie.director}</p>
                  <div className="flex flex-wrap gap-1">
                    {movie.genre.slice(0, 3).map(genre => (
                      <span key={genre} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{movie.description}</p>
                
                {/* Rating System */}
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-gray-400 text-sm mb-2">Rate this movie:</p>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        onClick={() => handleRating(movie.id, star)}
                        className={`h-6 w-6 transition-colors ${
                          (ratings[movie.id] || 0) >= star 
                            ? 'text-yellow-400' 
                            : 'text-gray-600 hover:text-yellow-300'
                        }`}
                      >
                        <Star className="h-full w-full fill-current" />
                      </button>
                    ))}
                    {ratings[movie.id] && (
                      <span className="ml-2 text-sm text-gray-400">
                        ({ratings[movie.id]}/5)
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No movies found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;