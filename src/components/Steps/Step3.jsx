import React from 'react';

const Step3 = ({ formData, handleChange }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
          Select a view
        </h2>
        <p className="text-xs text-gray-400 mt-1.5 font-normal">
          You can also customize this views in settings
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-5 my-6 pb-28">
        {/* 1. List View Option */}
        <div
          onClick={() => handleChange('viewType', 'List')}
          className="cursor-pointer flex flex-col items-center select-none"
        >
          <div
            className={`w-full h-36 rounded-xl border flex items-center justify-center transition-all ${
              formData.viewType === 'List'
                ? 'border-[1.5px] border-blue-500 shadow-sm'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {/* Exact List SVG Icon */}
            <svg
              className="w-16 h-16 text-gray-400"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <rect x="12" y="8" width="40" height="48" rx="4" />
              {/* Checkbox 1 */}
              <rect x="18" y="18" width="8" height="8" rx="1.5" />
              <line x1="30" y1="20" x2="44" y2="20" strokeLinecap="round" />
              <line x1="30" y1="24" x2="38" y2="24" strokeLinecap="round" />
              {/* Checkbox 2 */}
              <rect x="18" y="32" width="8" height="8" rx="1.5" />
              <line x1="30" y1="34" x2="44" y2="34" strokeLinecap="round" />
              <line x1="30" y1="38" x2="38" y2="38" strokeLinecap="round" />
            </svg>
          </div>

          <span
            className={`mt-3 text-xs font-medium transition-colors ${
              formData.viewType === 'List' ? 'text-gray-900 font-semibold' : 'text-gray-400'
            }`}
          >
            List
          </span>
        </div>

        {/* 2. Board View Option */}
        <div
          onClick={() => handleChange('viewType', 'Board')}
          className="cursor-pointer flex flex-col items-center select-none"
        >
          <div
            className={`w-full h-36 rounded-xl border flex items-center justify-center transition-all ${
              formData.viewType === 'Board'
                ? 'border-[1.5px] border-blue-500 shadow-sm'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {/* Exact Kanban Board SVG Icon */}
            <svg
              className="w-16 h-16 text-gray-400"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              {/* Column 1 */}
              <rect x="10" y="10" width="12" height="6" rx="1.5" />
              <rect x="10" y="19" width="12" height="18" rx="1.5" />
              <line x1="14" y1="25" x2="18" y2="25" strokeLinecap="round" />

              {/* Column 2 (Middle - Longer) */}
              <rect x="26" y="10" width="12" height="6" rx="1.5" />
              <rect x="26" y="19" width="12" height="32" rx="1.5" />

              {/* Column 3 */}
              <rect x="42" y="10" width="12" height="6" rx="1.5" />
              <rect x="42" y="19" width="12" height="24" rx="1.5" />
              <line x1="46" y1="25" x2="50" y2="25" strokeLinecap="round" />
              <line x1="46" y1="29" x2="50" y2="29" strokeLinecap="round" />
            </svg>
          </div>

          <span
            className={`mt-3 text-xs font-medium transition-colors ${
              formData.viewType === 'Board' ? 'text-gray-900 font-semibold' : 'text-gray-400'
            }`}
          >
            Board
          </span>
        </div>
      </div>
    </div>
  );
};

export default Step3;