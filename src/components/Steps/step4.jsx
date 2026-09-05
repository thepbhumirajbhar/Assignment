import React from 'react';

const StepFour = () => {
  return (
    <div>
      <div className="text-center mb-5">
        <h2 className="text-xl font-bold text-gray-900">
          Who can manage projects
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          Don't panic — You can also customize this permissions in settings
        </p>
      </div>

      <div className="space-y-3 my-4 text-left">
        {/* Everyone Card */}
        <div className="p-3.5 rounded-xl border border-gray-200 flex items-start gap-3">
          <div className="text-gray-400 mt-0.5">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-800">Everyone</h4>
            <p className="text-[11px] text-gray-400">
              All users can now to see it, but guests cannot access the projects.
            </p>
          </div>
        </div>

        {/* Only Admin's Card */}
        <div className="p-3.5 rounded-xl border border-gray-200 flex items-start gap-3">
          <div className="text-gray-600 mt-0.5">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-800">Only Admin's</h4>
            <p className="text-[11px] text-gray-400">
              Only admins can manage everything.
            </p>
          </div>
        </div>

        {/* Specific People Card */}
        <div className="p-3.5 rounded-xl border border-gray-200 flex items-start gap-3">
          <div className="text-gray-400 mt-0.5">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-800">Only to Specific people</h4>
            <p className="text-[11px] text-gray-400">
              Only some specific people can able to see it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;