import React from 'react';
import { useAuth } from '../App';
import { Star, TrendingUp, Shield, Users, Film, BarChart3 } from 'lucide-react';
import { mockRecommendations, mockFairnessMetrics } from '../data/mockData';
import TechnicalOverview from './TechnicalOverview';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    {
      name: 'Movies Rated',
      value: '42',
      icon: Star,
      change: '+12%',
      changeType: 'increase'
    },
    {
      name: 'Recommendations',
      value: '156',
      icon: TrendingUp,
      change: '+23%',
      changeType: 'increase'
    },
    {
      name: 'Fairness Score',
      value: (mockFairnessMetrics.overallFairness * 100).toFixed(1) + '%',
      icon: Shield,
      change: '+5%',
      changeType: 'increase'
    },
    {
      name: 'Genre Diversity',
      value: (mockFairnessMetrics.diversityScore * 100).toFixed(1) + '%',
      icon: BarChart3,
      change: '+8%',
      changeType: 'increase'
    }
  ];

  const recentRecommendations = mockRecommendations.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome back, {user?.name}!
          </h1>
          <p className="mt-2 text-gray-400">
            Here's your personalized dashboard with fair recommendations
          </p>
        </div>

        {/* Technical Overview */}
        <TechnicalOverview />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.name} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">{stat.name}</p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
                  <div className="p-3 bg-indigo-500 bg-opacity-20 rounded-lg">
                    <IconComponent className="h-6 w-6 text-indigo-400" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-gray-400 text-sm ml-2">from last month</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fairness Overview */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Shield className="h-5 w-5 text-indigo-400 mr-2" />
            Fairness Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Gender Bias Reduction</span>
                <span className="text-white">{((1 - mockFairnessMetrics.genderBias) * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" 
                  style={{ width: `${(1 - mockFairnessMetrics.genderBias) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Age Bias Reduction</span>
                <span className="text-white">{((1 - mockFairnessMetrics.ageBias) * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" 
                  style={{ width: `${(1 - mockFairnessMetrics.ageBias) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Occupation Bias Reduction</span>
                <span className="text-white">{((1 - mockFairnessMetrics.occupationBias) * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full" 
                  style={{ width: `${(1 - mockFairnessMetrics.occupationBias) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Recommendations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Film className="h-5 w-5 text-indigo-400 mr-2" />
            Recent Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentRecommendations.map((rec) => (
              <div key={rec.movie.id} className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <img
                  src={rec.movie.poster}
                  alt={rec.movie.title}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-white text-sm mb-2">{rec.movie.title}</h3>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Score: {rec.score.toFixed(2)}</span>
                  <span className="text-green-400">Fair: {rec.fairnessScore.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;