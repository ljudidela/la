import React, { useState } from 'react';
import { Header } from './components/Header';
import { MapView } from './components/Map';
import { CameraList } from './components/CameraList';
import { CameraModal } from './components/CameraModal';
import { webcams } from './data/webcams';
import { Webcam } from './types';

function App() {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('list');
  const [selectedWebcam, setSelectedWebcam] = useState<Webcam | null>(null);

  // Responsive layout logic: On desktop we might show split view, on mobile we toggle
  // For this modern design, let's do a dashboard style:
  // Mobile: Toggle between Map and List
  // Desktop: Split screen (List left, Map right)

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-950 text-slate-100">
      <Header viewMode={viewMode} setViewMode={setViewMode} />
      
      <main className="flex-1 flex overflow-hidden relative">
        {/* Desktop Sidebar (List) */}
        <div className={`
          absolute inset-0 z-10 bg-slate-950 transition-transform duration-300 overflow-y-auto
          md:relative md:w-[400px] md:translate-x-0 md:border-r md:border-slate-800 md:z-0
          ${viewMode === 'list' ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <CameraList 
            webcams={webcams} 
            onSelect={setSelectedWebcam}
            selectedId={selectedWebcam?.id}
          />
        </div>

        {/* Map Area */}
        <div className={`
          absolute inset-0 z-0 transition-opacity duration-300
          md:relative md:flex-1 md:opacity-100
          ${viewMode === 'map' ? 'opacity-100 z-20' : 'opacity-0 md:opacity-100'}
        `}>
          <MapView 
            webcams={webcams} 
            onSelect={setSelectedWebcam}
            selectedId={selectedWebcam?.id}
          />
        </div>
      </main>

      <CameraModal 
        webcam={selectedWebcam} 
        onClose={() => setSelectedWebcam(null)} 
      />
    </div>
  );
}

export default App;