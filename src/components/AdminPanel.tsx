import React from 'react';
import { Shield, Users, TrendingUp, AlertTriangle, BarChart3, Activity } from 'lucide-react';
import { mockFairnessMetrics, mockUsers, mockMovies } from '../data/mockData';

const AdminPanel: React.FC = () => {
  const metrics = mockFairnessMetrics;
  
  const systemStats = [
    {
      name: 'Total Users',
      value: mockUsers.length.toString(),
      icon: Users,
      change: '+12%',
      changeType: 'increase'
    },
    {
      name: 'Total Movies',
      value: mockMovies.length.toString(),
      icon: BarChart3,
      change: '+8%',
      changeType: 'increase'
    },
    {
      name: 'Overall Fairness',
      value: (metrics.overallFairness * 100).toFixed(1) + '%',
      icon: Shield,
      change: '+15%',
      changeType: 'increase'
    },
    {
      name: 'System Health',
      value: '98.2%',
      icon: Activity,
      change: '+2%',
      changeType: 'increase'
    }
  ];

  const biasMetrics = [
    {
      name: 'Gender Bias',
      value: metrics.genderBias,
      color: 'red',
      status: metrics.genderBias < 0.2 ? 'Low' : metrics.genderBias < 0.4 ? 'Medium' : 'High'
    },
    {
      name: 'Age Bias',
      value: metrics.ageBias,
      color: 'yellow',
      status: metrics.ageBias < 0.2 ? 'Low' : metrics.ageBias < 0.4 ? 'Medium' : 'High'
    },
    {
      name: 'Occupation Bias',
      value: metrics.occupationBias,
      color: 'blue',
      status: metrics.occupationBias < 0.2 ? 'Low' : metrics.occupationBias < 0.4 ? 'Medium' : 'High'
    }
  ];

  const userDemographics = {
    gender: {
      male: mockUsers.filter(u => u.gender === 'male').length,
      female: mockUsers.filter(u => u.gender === 'female').length,
      other: mockUsers.filter(u => u.gender === 'other' || u.gender === 'prefer-not-to-say').length
    },
    ageGroups: {
      '18-25': mockUsers.filter(u => u.age >= 18 && u.age <= 25).length,
      '26-35': mockUsers.filter(u => u.age >= 26 && u.age <= 35).length,
      '36-50': mockUsers.filter(u => u.age >= 36 && u.age <= 50).length,
      '50+': mockUsers.filter(u => u.age > 50).length
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">
            Monitor system fairness, bias detection, and user analytics
          </p>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.name} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Bias Metrics */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2" />
              Bias Detection
            </h2>
            <div className="space-y-4">
              {biasMetrics.map((metric) => (
                <div key={metric.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{metric.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        metric.status === 'Low' ? 'bg-green-900 text-green-300' :
                        metric.status === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                        'bg-red-900 text-red-300'
                      }`}>
                        {metric.status}
                      </span>
                      <span className="text-white text-sm">{(metric.value * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        metric.status === 'Low' ? 'bg-green-500' :
                        metric.status === 'Medium' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${metric.value * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fairness Score Breakdown */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Shield className="h-5 w-5 text-green-400 mr-2" />
              Fairness Metrics
            </h2>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {(metrics.overallFairness * 100).toFixed(1)}%
                </div>
                <p className="text-gray-400">Overall Fairness Score</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Diversity Score</span>
                  <span className="text-white">{(metrics.diversityScore * 100).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full" 
                    style={{ width: `${metrics.diversityScore * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Demographics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Gender Distribution */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">Gender Distribution</h2>
            <div className="space-y-3">
              {Object.entries(userDemographics.gender).map(([gender, count]) => (
                <div key={gender} className="flex justify-between items-center">
                  <span className="text-gray-300 capitalize">{gender}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-indigo-500 h-2 rounded-full" 
                        style={{ width: `${(count / mockUsers.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-white text-sm w-8">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Age Groups */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">Age Distribution</h2>
            <div className="space-y-3">
              {Object.entries(userDemographics.ageGroups).map(([ageGroup, count]) => (
                <div key={ageGroup} className="flex justify-between items-center">
                  <span className="text-gray-300">{ageGroup}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full" 
                        style={{ width: `${(count / mockUsers.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-white text-sm w-8">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 text-indigo-400 mr-2" />
            Model Training & System Alerts
          </h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-blue-900 bg-opacity-20 border border-blue-700 rounded">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div>
                <p className="text-blue-300 text-sm font-medium">Adversarial training epoch 1,247 completed - discriminator accuracy: 18.3%</p>
                <p className="text-blue-400 text-xs">5 minutes ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-purple-900 bg-opacity-20 border border-purple-700 rounded">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <div>
                <p className="text-purple-300 text-sm font-medium">Orthogonality regularization loss decreased to 0.0023</p>
                <p className="text-purple-400 text-xs">8 minutes ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-green-900 bg-opacity-20 border border-green-700 rounded">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div>
                <p className="text-green-300 text-sm font-medium">Collaborative filtering matrix factorization converged - RMSE: 0.847</p>
                <p className="text-green-400 text-xs">12 minutes ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-yellow-900 bg-opacity-20 border border-yellow-700 rounded">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div>
                <p className="text-yellow-300 text-sm font-medium">Keras model checkpoint saved - validation loss: 0.234</p>
                <p className="text-yellow-400 text-xs">15 minutes ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-red-900 bg-opacity-20 border border-red-700 rounded">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div>
                <p className="text-red-300 text-sm font-medium">Deep learning batch processing: 94.2% complete</p>
                <p className="text-red-400 text-xs">22 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;