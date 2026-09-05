import React from 'react';

const Step3 = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="text-center mb-5">
        <h2 className="text-xl font-bold text-gray-900">Select a view</h2>
        <p className="text-xs text-gray-500 mt-1">
          You can also customize this views in settings
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 my-6">
        {/* List View with Active Border */}
        <div
          onClick={() => handleChange('viewType', 'List')}
          className={`cursor-pointer rounded-xl border p-5 flex flex-col items-center justify-center text-center transition ${
            formData.viewType === 'List'
              ? 'border-blue-500 shadow-sm'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="mb-3 h-14 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth="1.5" />
              <rect x="7" y="7" width="3" height="3" rx="0.5" strokeWidth="1.5" />
              <line x1="12" y1="8.5" x2="17" y2="8.5" strokeWidth="1.5" />
              <rect x="7" y="13" width="3" height="3" rx="0.5" strokeWidth="1.5" />
              <line x1="12" y1="14.5" x2="17" y2="14.5" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-gray-700">List</span>
        </div>

        {/* Board View with Active Border */}
        <div
          onClick={() => handleChange('viewType', 'Board')}
          className={`cursor-pointer rounded-xl border p-5 flex flex-col items-center justify-center text-center transition ${
            formData.viewType === 'Board'
              ? 'border-blue-500 shadow-sm'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="mb-3 h-14 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="3" y="4" width="5" height="10" rx="1" strokeWidth="1.5" />
              <rect x="9.5" y="4" width="5" height="15" rx="1" strokeWidth="1.5" />
              <rect x="16" y="4" width="5" height="12" rx="1" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-gray-800">Board</span>
        </div>
      </div>
    </div>
  );
};

export default Step3;