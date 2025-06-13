import React from 'react';

const TestComponent = () => {
  return (
    <div style={{padding: '16px'}}>
      <h2 style={{marginBottom: '16px', fontWeight: 'bold', fontSize: '24px'}}>Tailwind Test</h2>
      
      {/* Using inline styles for comparison */}
      <div style={{backgroundColor: '#0066CC', color: 'white', padding: '16px', borderRadius: '6px', marginBottom: '16px'}}>
        This has a blue background using inline styles
      </div>
      
      {/* Using Tailwind classes */}
      <div className="bg-primary text-white p-4 rounded-md mb-4">
        This should have a blue background using Tailwind bg-primary
      </div>
      
      <div className="bg-red-500 text-white p-4 rounded-md mb-4">
        This should have a red background using Tailwind bg-red-500
      </div>
      
      <div className="bg-green-500 text-white p-4 rounded-md">
        This should have a green background using Tailwind bg-green-500
      </div>
    </div>
  );
};

export default TestComponent;
