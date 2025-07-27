import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';
import Background from './components/Background';
import About from './pages/About';
import Team from './pages/Team';


function App() {
  const [prediction, setPrediction] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
        <Background />

        <div className="relative z-10">
          <Header
            onGetStarted={() => {
              setPrediction(null);
              setShowModal(true);
            }}
          />

          <Routes>
            <Route path="/" element={
              <div className="text-center mt-16 py-6">
                <h2 className="text-7xl md:text-8xl font-outfit font-bold tracking-wide text-white drop-shadow">
                  Predict{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-500 to-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">
                    Credit Card Approvals
                  </span>{" "}
                  with Confidence
                </h2>
              </div>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative w-[90%] max-w-2xl animate-fadeInScale">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-white text-2xl hover:text-blue-400"
              >
                &times;
              </button>
              <div className="max-w-xl mx-auto mt-10 shadow-xl rounded-xl p-6 bg-gray-900 text-white border border-blue-500">
                <div className="space-y-0">
  <Form onSubmit={(result) => setPrediction(result.prediction)} />
  {prediction && <Result prediction={prediction} />}
</div>

              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
