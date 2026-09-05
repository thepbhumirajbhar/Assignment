import React from 'react';

const Step1 = ({ formData, handleChange }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-center text-gray-900 mb-5">
        Create a project
      </h2>

      <div className="space-y-4 text-left">
        {/* Project Name */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Project name
          </label>
          <input
            type="text"
            placeholder="Enter project name here"
            value={formData.projectName}
            onChange={(e) => handleChange('projectName', e.target.value)}
            className="w-full border border-blue-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Client Selection */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Client
          </label>
          <div className="flex items-center gap-2">
            <select
              value={formData.client}
              onChange={(e) => handleChange('client', e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none"
            >
              <option value="">Select a client</option>
              <option value="Client A">Client A</option>
              <option value="Client B">Client B</option>
            </select>
            <span className="text-xs text-gray-400">Or</span>
            <button
              type="button"
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              + New Client
            </button>
          </div>
        </div>

        {/* Dates */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Dates
          </label>
          <div className="flex items-center gap-2">
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) => handleChange('startDate', e.target.value)}
              className="w-1/2 border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-700 focus:outline-none"
            />
            <span className="text-gray-400">-</span>
            <input
              type="date"
              value={formData.endDate}
              onChange={(e) => handleChange('endDate', e.target.value)}
              className="w-1/2 border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Notes
          </label>
          <textarea
            rows="3"
            placeholder="Optional"
            value={formData.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;