import React from 'react';

function Features() {
  const features = [
    {
      title: 'Smart Card Recommendations',
      description: 'Get AI-powered credit card suggestions based on spending behavior.',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      title: 'AI Spending Analytics',
      description: 'Analyze transaction patterns and financial habits intelligently.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      title: 'Fraud Risk Detection',
      description: 'Identify suspicious activity using machine learning models.',
      color: 'from-yellow-400 to-red-500',
    },
    {
      title: 'Personalized Insights',
      description: 'Receive tailored financial recommendations and smart insights.',
      color: 'from-green-400 to-teal-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent mb-12">
          Core Features
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-lg bg-gray-900 border border-gray-700 transition transform hover:scale-105 hover:border-fuchsia-500"
            >
              <h2
                className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}
              >
                {feature.title}
              </h2>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-gray-500 text-sm italic">
          Empowering smarter financial decisions with AI-driven technology 
        </p>
      </div>
    </div>
  );
}

export default Features;