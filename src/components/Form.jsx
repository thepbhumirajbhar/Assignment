import React, { useState } from 'react';

const Form = ({ isOpen = true, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    projectName: '',
    client: '',
    startDate: '2019-10-25',
    endDate: '2019-11-28',
    notes: '',
    projectType: 'Time & Materials',
    hourlyRateType: 'Project Hourly Rate',
    hourlyRate: '12,678.00',
    budgetType: 'Hours per Person',
    budgetResetsMonthly: false,
    sendEmailAlerts: true,
    alertPercentage: '80.00',
    viewType: 'Board',
    managePermission: 'admins',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted Data:', formData);
    alert('Project Created Successfully!');
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-lg"
        >
          ✕
        </button>

        {/* Placeholder for Step Content */}
        <div className="mt-2 min-h-[300px] flex items-center justify-center text-gray-400">
          Step {currentStep} Component will render here
        </div>

        {/* Footer Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            className={`text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1 ${
              currentStep === 1 ? 'invisible' : ''
            }`}
          >
            <span>‹</span> Back
          </button>

          {currentStep === 4 ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-lg transition"
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-lg transition"
            >
              Next
            </button>
          )}
        </div>

        {/* Progress Pill Indicator */}
        <div className="flex justify-center items-center gap-1.5 mt-5">
          {[1, 2, 3, 4, 5, 6].map((dot) => (
            <div
              key={dot}
              className={`h-1.5 transition-all ${
                currentStep === dot
                  ? 'w-5 bg-gray-500 rounded-full'
                  : 'w-1.5 bg-gray-200 rounded-full'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;