import React from 'react';

interface DummyImageProps {
  category: 'exterior' | 'interior' | 'equipment' | 'team';
  index?: number;
  width?: string | number;
  height?: string | number;
  text?: string;
}

// Different color schemes for different image categories
const categoryColors = {
  exterior: {
    bg: '#e0f2fe',
    text: '#0369a1',
    accent: '#0ea5e9'
  },
  interior: {
    bg: '#f0fdf4',
    text: '#166534',
    accent: '#22c55e'
  },
  equipment: {
    bg: '#fef2f2',
    text: '#991b1b',
    accent: '#ef4444'
  },
  team: {
    bg: '#faf5ff',
    text: '#6b21a8',
    accent: '#a855f7'
  }
};

// Sample icons/emojis for each category
const categoryIcons = {
  exterior: '🏢',
  interior: '🪑',
  equipment: '🦷',
  team: '👨‍⚕️'
};

const DummyImage: React.FC<DummyImageProps> = ({ 
  category, 
  index = 1, 
  width = '100%', 
  height = '400px',
  text
}) => {
  const colors = categoryColors[category];
  const icon = categoryIcons[category];
  const displayText = text || `${category.charAt(0).toUpperCase() + category.slice(1)} View ${index}`;
  
  return (
    <div 
      style={{
        width,
        height,
        backgroundColor: colors.bg,
        color: colors.text,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        position: 'relative',
        border: `2px dashed ${colors.accent}`
      }}
    >
      {/* Pattern background */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `repeating-linear-gradient(45deg, ${colors.accent}, ${colors.accent} 10px, transparent 10px, transparent 20px)`
        }}
      />
      
      {/* Content */}
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        {icon}
      </div>
      <div style={{ 
        fontSize: '1.25rem', 
        fontWeight: 600, 
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        {displayText}
      </div>
      <div style={{ 
        fontSize: '0.875rem', 
        marginTop: '0.75rem',
        padding: '0.5rem 1rem',
        backgroundColor: colors.accent,
        color: 'white',
        borderRadius: '0.25rem'
      }}>
        Om Muktinath Clinic
      </div>
    </div>
  );
};

export default DummyImage;
