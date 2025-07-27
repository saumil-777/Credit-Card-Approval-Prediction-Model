import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent mb-8">
          About CardWiseAI
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed">
          <span className="font-semibold text-blue-400">CardWiseAI</span> is an intelligent prediction tool powered by Machine Learning that estimates your credit card approval chances in seconds.
          Built for both curiosity and clarity, we transform complex data into simple, confident decisions — all in one click.
        </p>

        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 mb-4">Why CardWiseAI?</h2>
          <ul className="text-left list-disc list-inside text-gray-300 space-y-3 text-md">
            <li><strong className="text-blue-400">Smart Predictions:</strong> Know your chances instantly with our trained ML model.</li>
            <li><strong className="text-blue-400">User-Friendly:</strong> A clean and intuitive interface, no finance degree required.</li>
            <li><strong className="text-blue-400">Confidence First:</strong> Make better credit choices with real-time insights.</li>
          </ul>
        </div>

        <p className="mt-10 text-gray-400 italic">
          “We believe access to financial clarity should be simple, elegant, and empowering.”
        </p>
      </div>
    </div>
  );
}

export default About;
