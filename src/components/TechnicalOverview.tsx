import React from 'react';
import { Brain, Shield, TrendingUp, Zap, GitBranch, Target } from 'lucide-react';

const TechnicalOverview: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Brain className="h-6 w-6 text-indigo-400 mr-3" />
        Technical Architecture: Fairness-Aware AI
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Adversarial Learning */}
        <div className="bg-gray-700 rounded-lg p-5">
          <div className="flex items-center mb-4">
            <GitBranch className="h-5 w-5 text-purple-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Adversarial Learning</h3>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            Our system employs a discriminator network that attempts to predict user attributes 
            (gender, age, occupation) from user embeddings, while the main recommendation model 
            learns to generate embeddings that fool the discriminator.
          </p>
          <div className="bg-gray-800 rounded p-3">
            <code className="text-xs text-green-400">
              Loss = L_rec + λ₁ × L_adv + λ₂ × L_orth
            </code>
          </div>
        </div>

        {/* Orthogonality Regularization */}
        <div className="bg-gray-700 rounded-lg p-5">
          <div className="flex items-center mb-4">
            <Target className="h-5 w-5 text-blue-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Orthogonality Regularization</h3>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            Ensures bias-aware and bias-free components are orthogonal, preventing information 
            leakage between attribute-dependent and attribute-independent user preferences.
          </p>
          <div className="bg-gray-800 rounded p-3">
            <code className="text-xs text-blue-400">
              L_orth = ||U_bias^T × U_free||²_F
            </code>
          </div>
        </div>

        {/* User Embedding Separation */}
        <div className="bg-gray-700 rounded-lg p-5">
          <div className="flex items-center mb-4">
            <Zap className="h-5 w-5 text-yellow-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Embedding Separation</h3>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            User embeddings are decomposed into two orthogonal components: bias-aware (capturing 
            demographic preferences) and bias-free (capturing genuine content preferences).
          </p>
          <div className="bg-gray-800 rounded p-3">
            <code className="text-xs text-yellow-400">
              U_user = U_bias + U_free
            </code>
          </div>
        </div>

        {/* Collaborative Filtering */}
        <div className="bg-gray-700 rounded-lg p-5">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-5 w-5 text-green-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Collaborative Filtering</h3>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            Matrix factorization approach enhanced with fairness constraints, learning latent 
            factors for users and items while maintaining demographic parity.
          </p>
          <div className="bg-gray-800 rounded p-3">
            <code className="text-xs text-green-400">
              R̂ = U_free × V^T + bias_terms
            </code>
          </div>
        </div>
      </div>

      {/* Technical Stack */}
      <div className="mt-6 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-lg p-5">
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
          <Shield className="h-5 w-5 text-indigo-400 mr-2" />
          Implementation Stack
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <div className="bg-orange-500 bg-opacity-20 rounded-lg p-3 mb-2">
              <span className="text-orange-300 font-semibold">Deep Learning</span>
            </div>
            <p className="text-gray-400">Neural Networks</p>
          </div>
          <div className="text-center">
            <div className="bg-red-500 bg-opacity-20 rounded-lg p-3 mb-2">
              <span className="text-red-300 font-semibold">Keras/TensorFlow</span>
            </div>
            <p className="text-gray-400">Model Training</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500 bg-opacity-20 rounded-lg p-3 mb-2">
              <span className="text-blue-300 font-semibold">Loss Functions</span>
            </div>
            <p className="text-gray-400">Custom Objectives</p>
          </div>
          <div className="text-center">
            <div className="bg-green-500 bg-opacity-20 rounded-lg p-3 mb-2">
              <span className="text-green-300 font-semibold">Adversarial</span>
            </div>
            <p className="text-gray-400">Bias Mitigation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalOverview;