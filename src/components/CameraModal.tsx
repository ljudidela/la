import React from 'react';
import { Webcam } from '../types';
import { X, MapPin, ExternalLink } from 'lucide-react';

interface CameraModalProps {
  webcam: Webcam | null;
  onClose: () => void;
}

export const CameraModal: React.FC<CameraModalProps> = ({ webcam, onClose }) => {
  if (!webcam) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b border-slate-800 bg-slate-900">
          <div>
            <h2 className="text-xl font-bold text-white">{webcam.title}</h2>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4" />
              {webcam.location}
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Player */}
        <div className="aspect-video w-full bg-black relative">
          {webcam.type === 'youtube' ? (
            <iframe
              src={`https://www.youtube.com/embed/${webcam.sourceUrl}?autoplay=1&mute=1&rel=0`}
              title={webcam.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img 
              src={webcam.sourceUrl} 
              alt={webcam.title} 
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-900">
          <p className="text-slate-300 leading-relaxed">{webcam.description}</p>
          <div className="mt-4 flex justify-end">
             <a 
               href={`https://www.google.com/maps/search/?api=1&query=${webcam.lat},${webcam.lng}`}
               target="_blank"
               rel="noreferrer"
               className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
             >
               Open in Google Maps <ExternalLink className="w-4 h-4" />
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};