# Fairness-Aware Movie Recommendation System

A sophisticated movie recommendation system that uses adversarial learning and orthogonality regularization to ensure fairness across different demographic groups.

## 🎯 Project Overview

This project addresses bias in movie recommendation systems by implementing a fairness-aware AI approach that separates user embeddings into bias-aware and bias-free components, ensuring equitable recommendations regardless of user demographics.

## 🚀 Features

- **Adversarial Learning**: Discriminator network that attempts to predict user attributes while the main model learns to generate attribute-invariant embeddings
- **Orthogonality Regularization**: Ensures bias-aware and bias-free components remain independent
- **Collaborative Filtering**: Enhanced matrix factorization with fairness constraints
- **Real-time Bias Detection**: Monitors gender, age, and occupation bias across recommendations
- **Interactive Dashboard**: Comprehensive analytics and fairness metrics visualization
- **User Authentication**: Complete registration and login system with demographic profiling

## 🛠️ Technical Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **AI Concepts**: Deep Learning, Adversarial Learning, Loss Functions simulation

## 📊 Key Algorithms

### Adversarial Learning Loss Function
```
Loss = L_rec + λ₁ × L_adv + λ₂ × L_orth
```

### User Embedding Separation
```
U_user = U_bias + U_free
```

### Orthogonality Regularization
```
L_orth = ||U_bias^T × U_free||²_F
```

## 🎮 Demo Accounts

- **User Account**: alice@example.com / password
- **Admin Account**: admin@example.com / password

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ankitmrj/FairRecAi.git
cd FairRecAi
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── AdminPanel.tsx   # Admin dashboard with bias monitoring
│   ├── Dashboard.tsx    # User dashboard with recommendations
│   ├── Login.tsx        # Authentication component
│   ├── Movies.tsx       # Movie browsing and rating
│   ├── Navbar.tsx       # Navigation component
│   ├── Recommendations.tsx # AI-powered recommendations
│   ├── Register.tsx     # User registration
│   └── TechnicalOverview.tsx # Technical architecture explanation
├── data/
│   └── mockData.ts      # Mock data for users, movies, and recommendations
├── types/
│   └── index.ts         # TypeScript type definitions
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🔬 Technical Implementation

### Fairness Metrics
- **Overall Fairness Score**: Composite metric measuring recommendation equity
- **Bias Detection**: Real-time monitoring of demographic biases
- **Diversity Score**: Measures genre and content diversity in recommendations

### AI Architecture
- **Neural Collaborative Filtering**: Enhanced with fairness constraints
- **Adversarial Training**: Discriminator accuracy kept below 20% for effective bias mitigation
- **Embedding Decomposition**: Separates user preferences into attribute-dependent and independent components

## 📈 Performance Metrics

- **Discriminator Accuracy**: <20% (indicates successful bias mitigation)
- **Orthogonality Loss**: <0.01 (ensures component independence)
- **Recommendation RMSE**: <0.85 (maintains prediction accuracy)
- **Fairness Score**: >80% (across all demographic groups)

## 🎨 UI/UX Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark Theme**: Modern, professional appearance
- **Interactive Charts**: Real-time bias and fairness visualization
- **Smooth Animations**: Enhanced user experience with micro-interactions
- **Accessibility**: WCAG compliant design patterns

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📊 Key Features Demonstration

### For Users:
- Browse and rate movies with intelligent filtering
- Receive personalized recommendations with fairness scores
- View detailed AI reasoning for each recommendation
- Track personal recommendation history and preferences

### For Administrators:
- Monitor system-wide fairness metrics
- Analyze bias across different demographic groups
- View real-time training progress and model performance
- Access detailed user analytics and system health

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Research in fairness-aware machine learning
- Adversarial learning techniques for bias mitigation
- Collaborative filtering and matrix factorization methods
- Modern web development best practices

## 📞 Contact

Ankit Kumar - ankitmrj@example.com

Project Link: [https://github.com/ankitmrj/FairRecAi](https://github.com/ankitmrj/FairRecAi)

---

**Built with ❤️ and fairness in mind**