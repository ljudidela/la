import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Camera } from '../types';
import L from 'leaflet';

// Fix for default Leaflet icons in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

interface MapComponentProps {
  cameras: Camera[];
  selectedCamera: Camera | null;
  onSelect: (camera: Camera) => void;
}

// Helper to fly to selected camera
const MapUpdater: React.FC<{ center: [number, number] }> = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 13, { duration: 2 });
  }, [center, map]);
  return null;
};

export const MapComponent: React.FC<MapComponentProps> = ({ cameras, selectedCamera, onSelect }) => {
  const initialCenter: [number, number] = [34.0522, -118.2437]; // LA Center

  return (
    <MapContainer 
      center={initialCenter} 
      zoom={10} 
      scrollWheelZoom={true} 
      className="w-full h-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {selectedCamera && (
        <MapUpdater center={[selectedCamera.lat, selectedCamera.lng]} />
      )}
      
      {cameras.map((cam) => (
        <Marker 
          key={cam.id} 
          position={[cam.lat, cam.lng]}
          eventHandlers={{
            click: () => onSelect(cam),
          }}
        >
          <Popup className="custom-popup">
            <div className="text-slate-900">
              <strong className="block mb-1">{cam.name}</strong>
              <button 
                onClick={() => onSelect(cam)}
                className="text-xs bg-la-blue text-white px-2 py-1 rounded hover:bg-blue-600 w-full"
              >
                Watch Live
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};