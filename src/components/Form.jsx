import React, { useState } from 'react';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/step4';

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
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Final Form Submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Final Form Data Submitted:', formData);
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

        <div className="mt-2">
          {currentStep === 1 && (
            <StepOne formData={formData} handleChange={handleChange} />
          )}
          {currentStep === 2 && (
            <StepTwo formData={formData} handleChange={handleChange} />
          )}
          {currentStep === 3 && (
            <StepThree formData={formData} handleChange={handleChange} />
          )}
          {currentStep === 4 && (
            <StepFour formData={formData} handleChange={handleChange} />
          )}
        </div>

        {/* Navigation Action Bar */}
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

          {/* Dynamic Next -> Submit Switch on Step 4 */}
          {currentStep === 4 ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-lg transition shadow"
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-lg transition shadow"
            >
              Next
            </button>
          )}
        </div>

        {/* Step Indicator */}
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