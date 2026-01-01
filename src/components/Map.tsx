import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Webcam } from '../types';
import { Play } from 'lucide-react';

// Fix for default Leaflet markers in React
const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface MapProps {
  webcams: Webcam[];
  onSelect: (webcam: Webcam) => void;
  selectedId?: string;
}

// Component to handle map movement when selection changes
const MapUpdater: React.FC<{ center: [number, number] }> = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 13, { duration: 1.5 });
  }, [center, map]);
  return null;
};

export const MapView: React.FC<MapProps> = ({ webcams, onSelect, selectedId }) => {
  const selectedWebcam = webcams.find(w => w.id === selectedId);
  const center: [number, number] = selectedWebcam 
    ? [selectedWebcam.lat, selectedWebcam.lng] 
    : [34.0522, -118.2437];

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer 
        center={[34.0522, -118.2437]} 
        zoom={11} 
        scrollWheelZoom={true} 
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        {selectedWebcam && <MapUpdater center={[selectedWebcam.lat, selectedWebcam.lng]} />}

        {webcams.map((cam) => (
          <Marker 
            key={cam.id} 
            position={[cam.lat, cam.lng]} 
            icon={customIcon}
            eventHandlers={{
              click: () => onSelect(cam),
            }}
          >
            <Popup className="custom-popup">
              <div className="flex flex-col gap-2 min-w-[200px]">
                <h3 className="font-bold text-lg">{cam.title}</h3>
                <p className="text-sm opacity-80">{cam.location}</p>
                <div className="relative aspect-video rounded-md overflow-hidden mt-1">
                  <img src={cam.thumbnail} alt={cam.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white opacity-80" />
                  </div>
                </div>
                <button 
                  onClick={() => onSelect(cam)}
                  className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-1.5 rounded transition-colors"
                >
                  Watch Live
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};