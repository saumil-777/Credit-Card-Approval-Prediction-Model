import React from 'react';

function Team() {
  const members = [
    { name: 'Saumil Singhal', color: 'from-blue-400 to-cyan-500' },
    { name: 'Bhavya Katiyar', color: 'from-purple-400 to-pink-500' },
    { name: 'Kanak', color: 'from-yellow-400 to-red-500' },
    { name: 'Vidhushi Chhajed', color: 'from-green-400 to-teal-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent mb-12">
          Meet the Team
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          {members.map((member, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-lg bg-gray-900 border border-gray-700 transition transform hover:scale-105`}
            >
              <h2 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${member.color}`}>
                {member.name}
              </h2>
              <p className="text-gray-400 mt-2">{member.role}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-gray-500 text-sm italic">
          A dedicated crew building seamless AI-powered financial solutions 💡🚀
        </p>
      </div>
    </div>
  );
}

export default Team;
