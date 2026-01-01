import React from 'react';
import { Webcam } from '../types';
import { Play, MapPin } from 'lucide-react';

interface CameraListProps {
  webcams: Webcam[];
  onSelect: (webcam: Webcam) => void;
  selectedId?: string;
}

export const CameraList: React.FC<CameraListProps> = ({ webcams, onSelect, selectedId }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pb-24 md:pb-4">
      {webcams.map((cam) => (
        <div 
          key={cam.id} 
          onClick={() => onSelect(cam)}
          className={`group relative bg-slate-800 rounded-xl overflow-hidden border transition-all cursor-pointer hover:shadow-xl hover:-translate-y-1 ${
            selectedId === cam.id ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-700 hover:border-slate-500'
          }`}
        >
          {/* Thumbnail */}
          <div className="aspect-video relative overflow-hidden">
            <img 
              src={cam.thumbnail} 
              alt={cam.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60" />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-blue-600/90 p-3 rounded-full backdrop-blur-sm shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                <Play className="w-6 h-6 text-white fill-white" />
              </div>
            </div>

            <div className="absolute bottom-2 left-2 right-2">
              <div className="flex items-center gap-1 text-xs text-slate-300 mb-1">
                <MapPin className="w-3 h-3" />
                {cam.location}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="font-bold text-white text-lg leading-tight mb-1 group-hover:text-blue-400 transition-colors">{cam.title}</h3>
            <p className="text-sm text-slate-400 line-clamp-2">{cam.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};