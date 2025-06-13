import React, { useState } from 'react';
import { FaMapMarkerAlt, FaImage } from 'react-icons/fa';
import DummyImageProvider from './DummyImageProvider';
import { getLocationImage } from './config';

interface LocationComponentProps {
  locationCoords: {
    lat: number;
    lng: number;
  };
}

const LocationComponent: React.FC<LocationComponentProps> = ({ locationCoords }) => {
  const [showMap, setShowMap] = useState(true);
  const locationImage = getLocationImage();
  
  if (!locationImage) {
    console.error("Location image not found in config. Using default map view.");
    return (
      <div className="relative w-full h-full min-h-[400px]">
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
      </div>
    );
  }
  
  return (
    <div className="relative w-full h-full min-h-[400px]">
      {/* Map View */}
      {showMap ? (
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
      ) : (
        // Image View
        <DummyImageProvider
          image={locationImage}
          style={{ minHeight: '400px', borderRadius: '0.65rem' }}
          className="w-full h-full object-cover"
          height="100%"
        />
      )}
      
      {/* Toggle Button */}
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => setShowMap(!showMap)}
          className="bg-white/90 backdrop-blur-sm hover:bg-white px-3 py-2 rounded-lg shadow-md text-sm font-medium text-primary transition-colors duration-300 flex items-center gap-2"
        >
          {showMap ? (
            <>
              <FaImage /> View Photo
            </>
          ) : (
            <>
              <FaMapMarkerAlt /> View Map
            </>
          )}
        </button>
      </div>
      
      {/* Location Badge */}
      <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md text-sm font-medium text-primary">
        Om Muktinath
      </div>
    </div>
  );
};

export default LocationComponent;
