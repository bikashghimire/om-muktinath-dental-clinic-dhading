import React from "react";

export const LocationPlaceholder = () => {
  return (
    <div 
      style={{
        width: '100%', 
        height: '100%', 
        minHeight: '400px',
        backgroundColor: '#f0f9ff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#0369a1',
        padding: '1.5rem',
        textAlign: 'center',
        borderRadius: '0.65rem'
      }}
    >
      <div style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
        Om Muktinath - Clinic Location
      </div>
      <div style={{ fontSize: '1rem', maxWidth: '80%', marginBottom: '1.5rem' }}>
        This is a placeholder for the clinic's location image. Replace this with an actual photo of your clinic building and surroundings.
      </div>
      <div style={{ 
        border: '2px dashed #0369a1', 
        padding: '1rem 2rem', 
        borderRadius: '0.5rem',
        fontSize: '0.9rem'
      }}>
        Suggestion: Include both exterior and interior photos for better orientation
      </div>
    </div>
  );
};

export default LocationPlaceholder;
