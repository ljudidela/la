import React from 'react';
import { Camera, MapPin } from 'lucide-react';

interface HeaderProps {
  viewMode: 'map' | 'list';
  setViewMode: (mode: 'map' | 'list') => void;
}

export const Header: React.FC<HeaderProps> = ({ viewMode, setViewMode }) => {
  return (
    <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-700 p-4 sticky top-0 z-50 flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-lg">
          <Camera className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">LA Vision</h1>
          <p className="text-xs text-slate-400">Live Webcam Explorer</p>
        </div>
      </div>

      <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-700">
        <button
          onClick={() => setViewMode('map')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
            viewMode === 'map' 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'text-slate-400 hover:text-white hover:bg-slate-700'
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span className="hidden sm:inline">Map View</span>
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
            viewMode === 'list' 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'text-slate-400 hover:text-white hover:bg-slate-700'
          }`}
        >
          <Camera className="w-4 h-4" />
          <span className="hidden sm:inline">List View</span>
        </button>
      </div>
    </header>
  );
};