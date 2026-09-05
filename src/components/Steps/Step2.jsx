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

      <div className="space-y-4 text-left">
        {/* Hourly Rate */}
        <div>
          <label className="block text-xs font-semibold text-gray-800">
            Hourly
          </label>
          <p className="text-[11px] text-gray-400 mb-1.5">
            We need hourly rates to track your project's billable amount.
          </p>
          <div className="flex gap-2">
            <select
              value={formData.hourlyRateType}
              onChange={(e) => handleChange('hourlyRateType', e.target.value)}
              className="w-3/5 border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs text-gray-700 focus:outline-none"
            >
              <option>Project Hourly Rate</option>
              <option>Person Hourly Rate</option>
            </select>
            <input
              type="text"
              value={formData.hourlyRate}
              onChange={(e) => handleChange('hourlyRate', e.target.value)}
              className="w-2/5 border border-blue-400 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-800 focus:outline-none"
            />
          </div>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-xs font-semibold text-gray-800">
            Budget
          </label>
          <p className="text-[11px] text-gray-400 mb-1.5">
            We need hourly rates to track your project's billable amount.
          </p>
          <select
            value={formData.budgetType}
            onChange={(e) => handleChange('budgetType', e.target.value)}
            className="w-3/5 border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs text-gray-700 focus:outline-none"
          >
            <option>Hours per Person</option>
            <option>Total Project Hours</option>
          </select>
        </div>

        {/* Checkboxes */}
        <div className="space-y-2 text-xs text-gray-700 pt-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.budgetResetsMonthly}
              onChange={(e) => handleChange('budgetResetsMonthly', e.target.checked)}
              className="rounded border-gray-300 text-blue-500"
            />
            <span>Budget resets every month</span>
          </label>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="emailAlert"
              checked={formData.sendEmailAlerts}
              onChange={(e) => handleChange('sendEmailAlerts', e.target.checked)}
              className="rounded border-gray-300 text-blue-500"
            />
            <label htmlFor="emailAlert" className="cursor-pointer">
              Send email alerts if project exceeds
            </label>
            <input
              type="text"
              value={formData.alertPercentage}
              onChange={(e) => handleChange('alertPercentage', e.target.value)}
              className="w-12 border border-gray-300 rounded px-1.5 py-0.5 text-center text-xs text-gray-800"
            />
            <span>% of budget</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;