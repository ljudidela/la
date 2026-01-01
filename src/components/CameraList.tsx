import React from 'react';
import { Camera } from '../types';
import { clsx } from 'clsx';
import { PlayCircle, MapPin } from 'lucide-react';

interface CameraListProps {
  cameras: Camera[];
  selectedId: string | null;
  onSelect: (camera: Camera) => void;
}

export const CameraList: React.FC<CameraListProps> = ({ cameras, selectedId, onSelect }) => {
  return (
    <div className="flex flex-col gap-4 p-4 overflow-y-auto h-full">
      <h2 className="text-xl font-bold text-la-gold mb-2 sticky top-0 bg-dark-bg/95 backdrop-blur py-2 z-10">
        Live Locations
      </h2>
      {cameras.map((cam) => (
        <div
          key={cam.id}
          onClick={() => onSelect(cam)}
          className={clsx(
            "group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border border-slate-700 hover:border-la-blue",
            selectedId === cam.id ? "ring-2 ring-la-blue shadow-lg shadow-la-blue/20" : "opacity-80 hover:opacity-100"
          )}
        >
          <div className="aspect-video w-full relative">
            <img 
              src={cam.thumbnail} 
              alt={cam.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <PlayCircle className={clsx(
                "w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100",
                selectedId === cam.id && "opacity-100 scale-100 text-la-gold"
              )} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="font-semibold text-white truncate">{cam.name}</h3>
              <div className="flex items-center text-xs text-slate-300 mt-1">
                <MapPin className="w-3 h-3 mr-1" />
                {cam.location}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};