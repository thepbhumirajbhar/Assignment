import React from 'react';

const Step2 = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Project type</h2>
        <p className="text-xs text-gray-500 mt-1">
          Don't panic — You can also customize this types in settings
        </p>
      </div>

      {/* Segmented Tabs */}
      <div className="grid grid-cols-3 border border-gray-200 rounded-lg p-1 mb-4">
        {['Time & Materials', 'Fixed Fee', 'Non-Billable'].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => handleChange('projectType', tab)}
            className={`py-1.5 text-xs font-medium rounded-md transition ${
              formData.projectType === tab
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step2;