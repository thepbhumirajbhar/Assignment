import React, { useState } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <button
        onClick={() => setOpenModal(true)}
        className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow transition"
      >
        + Create Project
      </button>
    </div>
  );
}

export default App;