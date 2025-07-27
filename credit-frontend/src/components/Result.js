import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function Result({ prediction }) {
  const isApproved = prediction.toLowerCase().includes('approved');

  return (
    <div className={`mt-6 p-6 rounded-xl text-center shadow-lg border-2 ${isApproved ? 'bg-green-900 border-green-500' : 'bg-red-900 border-red-500'}`}>
      {isApproved ? (
        <>
          <FaCheckCircle className="mx-auto text-green-400 text-4xl mb-2" />
          <h3 className="text-2xl font-bold text-green-300">Approved</h3>
          <p className="text-green-200 mt-2">You are eligible for a credit card.</p>
        </>
      ) : (
        <>
          <FaTimesCircle className="mx-auto text-red-400 text-4xl mb-2" />
          <h3 className="text-2xl font-bold text-red-300">Rejected</h3>
          <p className="text-red-200 mt-2">Unfortunately, you are currently not eligible for a credit card.</p>
        </>
      )}
    </div>
  );
}

export default Result;
