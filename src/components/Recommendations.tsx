import React, { useState } from 'react';
import { Star, Shield, TrendingUp, Info, Zap, Brain } from 'lucide-react';
import { mockRecommendations } from '../data/mockData';
import { useAuth } from '../App';

const Recommendations: React.FC = () => {
  const { user } = useAuth();
  const [showDetails, setShowDetails] = useState<string | null>(null);

  const recommendations = mockRecommendations;

  const getFairnessColor = (score: number) => {
    if (score >= 0.8) return 'text-green-400 bg-green-400';
    if (score >= 0.6) return 'text-yellow-400 bg-yellow-400';
    return 'text-red-400 bg-red-400';
  };

  const getScoreColor = (score: number) => {
    if (score >= 0.8) return 'text-blue-400';
    if (score >= 0.6) return 'text-indigo-400';
    return 'text-purple-400';
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Personalized Recommendations
          </h1>
          <p className="text-gray-400">
            AI-powered recommendations optimized for fairness and personalization
          </p>
        </div>

        {/* Algorithm Explanation */}
        <div className="bg-gradient-to-r from-indigo-800 to-purple-800 rounded-lg p-6 mb-8 border border-indigo-600">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-white bg-opacity-20 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Adversarial Learning Architecture</h2>
              <p className="text-gray-200 text-sm mb-3">
                Our system employs adversarial learning with orthogonality regularization to decompose user 
                embeddings into bias-aware and bias-free components. The discriminator network attempts to 
                predict user attributes while the encoder learns to generate attribute-invariant representations.
              </p>
              <div className="bg-black bg-opacity-30 rounded p-3">
                <code className="text-green-300 text-xs">
                  min_θ max_φ L_rec(θ) - λ₁L_adv(θ,φ) + λ₂L_orth(θ)
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations Grid */}
        <div className="space-y-6">
          {recommendations.map((rec, index) => (
            <div key={rec.movie.id} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-indigo-500 transition-all duration-300">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Movie Poster and Basic Info */}
                  <div className="flex-shrink-0">
                    <img
                      src={rec.movie.poster}
                      alt={rec.movie.title}
                      className="w-48 h-72 object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Movie Details and Scores */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">{rec.movie.title}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-yellow-400">#{index + 1}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <span>{rec.movie.year}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-400" />
                          {rec.movie.rating.toFixed(1)}
                        </span>
                        <span>•</span>
                        <span>{rec.movie.director}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {rec.movie.genre.map(genre => (
                          <span key={genre} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                            {genre}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* AI Scores */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-400 text-sm">Recommendation Score</span>
                          <TrendingUp className="h-4 w-4 text-blue-400" />
                        </div>
                        <div className={`text-2xl font-bold ${getScoreColor(rec.score)}`}>
                          {(rec.score * 100).toFixed(1)}%
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-400 text-sm">Fairness Score</span>
                          <Shield className="h-4 w-4 text-green-400" />
                        </div>
                        <div className={`text-2xl font-bold ${getFairnessColor(rec.fairnessScore).split(' ')[0]}`}>
                          {(rec.fairnessScore * 100).toFixed(1)}%
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-400 text-sm">Bias Components</span>
                          <Zap className="h-4 w-4 text-purple-400" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Bias-Free:</span>
                            <span className="text-green-400">{rec.biasComponents.biasFree.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Bias-Aware:</span>
                            <span className="text-orange-400">{rec.biasComponents.biasAware.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description and Reasoning */}
                    <div className="space-y-3">
                      <p className="text-gray-300">{rec.movie.description}</p>
                      
                      <div className="bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Info className="h-4 w-4 text-indigo-400" />
                          <span className="text-sm font-semibold text-indigo-400">AI Reasoning</span>
                        </div>
                        <p className="text-gray-300 text-sm">{rec.reasoning}</p>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                      <button className="flex-1 bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                        Watch Now
                      </button>
                      <button className="flex-1 border border-gray-600 text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors">
                        Add to Watchlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fairness Notice */}
        <div className="mt-8 bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-green-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Fairness Guarantee</h3>
              <p className="text-gray-300 text-sm">
                These recommendations are generated using our fairness-aware AI system that actively 
                mitigates bias based on gender, age, and occupation. Each recommendation balances 
                personalization with fairness to ensure equal representation across all user groups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;