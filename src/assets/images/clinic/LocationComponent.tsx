// filepath: /Users/bikashghimire/om-muktinath/src/assets/images/clinic/LocationComponent.tsx
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface LocationComponentProps {
  locationCoords: {
    lat: number;
    lng: number;
  };
}

const LocationComponent: React.FC<LocationComponentProps> = ({ locationCoords }) => {
  return (
    <div className="relative w-full h-full min-h-[400px]">
      {/* Map View */}
      <iframe 
        src={`https://maps.google.com/maps?q=${locationCoords.lat},${locationCoords.lng}&z=15&output=embed`}
        width="100%" 
        height="100%" 
        style={{ border: 0, minHeight: '400px', borderRadius: '0.65rem' }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Clinic Location"
        className="w-full h-full object-cover"
      ></iframe>
      
      {/* Location Badge */}
      <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md text-sm font-medium text-primary">
        Om Muktinath
      </div>
    </div>
  );
};

export default LocationComponent;
