import { useState } from 'react';
import { CAMERAS } from './data/cameras';
import { Camera } from './types';
import { CameraList } from './components/CameraList';
import { VideoPlayer } from './components/VideoPlayer';
import { MapComponent } from './components/MapComponent';
import { Video, Map as MapIcon, Menu } from 'lucide-react';
import { clsx } from 'clsx';

function App() {
  const [selectedCamera, setSelectedCamera] = useState<Camera | null>(CAMERAS[0]);
  const [mobileTab, setMobileTab] = useState<'list' | 'map'>('list');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen w-full bg-dark-bg text-white">
      {/* Header */}
      <header className="h-16 border-b border-slate-700 flex items-center px-4 justify-between bg-card-bg/50 backdrop-blur">
        <div className="flex items-center gap-2">
          <Video className="text-la-gold w-6 h-6" />
          <h1 className="text-xl font-bold tracking-tight">
            LA<span className="text-la-blue">Cams</span>
          </h1>
        </div>
        <button 
          className="md:hidden p-2 hover:bg-slate-700 rounded-lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden relative">
        
        {/* Sidebar (Desktop: Left, Mobile: Conditional) */}
        <aside className={clsx(
          "absolute md:relative z-20 md:z-auto h-full w-full md:w-80 lg:w-96 bg-card-bg border-r border-slate-700 transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          "md:block",
          mobileTab === 'map' && "hidden md:block" // Hide on mobile if map tab is active
        )}>
          <CameraList 
            cameras={CAMERAS} 
            selectedId={selectedCamera?.id || null} 
            onSelect={(cam) => {
              setSelectedCamera(cam);
              setMobileTab('map'); // Switch to view on mobile select
              if (window.innerWidth < 768) setSidebarOpen(false);
            }}
          />
        </aside>

        {/* Content Area */}
        <div className="flex-1 flex flex-col relative">
          {/* Video Section (Top Half) */}
          <div className="h-[40vh] md:h-[55vh] w-full bg-black border-b border-slate-700 shadow-2xl">
            <VideoPlayer camera={selectedCamera} />
          </div>

          {/* Map Section (Bottom Half) */}
          <div className="flex-1 relative bg-slate-800">
            <MapComponent 
              cameras={CAMERAS} 
              selectedCamera={selectedCamera} 
              onSelect={setSelectedCamera}
            />
          </div>

          {/* Mobile Bottom Nav */}
          <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex bg-slate-800/90 backdrop-blur rounded-full p-1 border border-slate-600 shadow-xl z-[400]">
            <button 
              onClick={() => { setMobileTab('list'); setSidebarOpen(true); }}
              className={clsx(
                "p-3 rounded-full transition-colors",
                mobileTab === 'list' ? "bg-la-blue text-white" : "text-slate-400 hover:text-white"
              )}
            >
              <Menu size={20} />
            </button>
            <button 
              onClick={() => { setMobileTab('map'); setSidebarOpen(false); }}
              className={clsx(
                "p-3 rounded-full transition-colors",
                mobileTab === 'map' ? "bg-la-blue text-white" : "text-slate-400 hover:text-white"
              )}
            >
              <MapIcon size={20} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;