import React from 'react'
import { AlertTriangle } from 'lucide-react';

const DiseaseDiagnosis = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg">
        <AlertTriangle className="mx-auto text-yellow-400 mb-4" size={64} />
        <h1 className="text-3xl font-bold mb-4 text-white">Site Under Construction</h1>
        <p className="text-gray-300 mb-6">
          We're working hard to bring you an awesome experience. Please check back soon!
        </p>
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
          <div className="bg-blue-500 h-2.5 rounded-full w-3/4"></div>
        </div>
        <p className="text-sm text-gray-400">Estimated completion: 75%</p>
      </div>
    </div>
  )
}

export default DiseaseDiagnosis