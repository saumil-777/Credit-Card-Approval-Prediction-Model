import React from 'react';
import { Link } from 'react-router-dom';

function Header({ onGetStarted }) {
  return (
    <header className="w-full bg-black text-white py-6 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="text-4xl font-extrabold text-blue-400 tracking-wider">
          CardWiseAI
        </div>

        <nav className="space-x-8 text-lg hidden md:flex">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/team" className="hover:text-blue-400 transition">Team</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
        </nav>

        <button
          onClick={onGetStarted}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-lg font-semibold transition duration-200"
        >
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Header;
