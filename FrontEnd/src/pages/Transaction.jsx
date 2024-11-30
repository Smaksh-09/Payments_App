import React from 'react';
import { ArrowLeft, Share, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Transfer = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-4">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="mb-8"
      >
        <ArrowLeft className="h-6 w-6 text-gray-800" />
      </button>

      {/* Success Icon and Message */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 mb-6">
          <div className="relative">
            {/* Green Circle with Checkmark */}
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-12 h-6 border-white border-4 border-t-0 border-l-0 rotate-45 translate-y-[-4px]" />
            </div>
            {/* Money Icon */}
            <div className="absolute bottom-[-10px] right-[-10px]">
              <div className="w-16 h-10 bg-green-200 rounded-sm rotate-12 flex items-center justify-center">
                <span className="text-green-700 font-bold">$</span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Successfully sent!</h1>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-8">
        <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-gray-200">
          <Share className="h-5 w-5 text-green-600" />
          <span className="text-gray-800">Share Receipt</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-gray-200">
          <Plus className="h-5 w-5 text-green-600" />
          <span className="text-gray-800">Add to Favorite</span>
        </button>
      </div>

      {/* Transaction Details */}
      <div className="bg-gray-50 rounded-3xl p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-400 rounded-full overflow-hidden">
            {/* Profile Image */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-white">PA</span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">Peace Anthony</h3>
            <p className="text-gray-500">Recipient</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-900">$1,000.00</p>
            <p className="text-gray-500">Amount</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Date</span>
          <span className="text-gray-900">24/12/2024</span>
        </div>
      </div>
    </div>
  );
};
