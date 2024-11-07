// src/App.jsx
import React, { useState } from 'react';
import Gauge from './Gaugee';

function App() {
  const [value, setValue] = useState(75);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      
      <Gauge value={value} />
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-4 w-full max-w-xs"
      />
    </div>
  );
}

export default App;
