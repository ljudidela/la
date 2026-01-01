import React from 'react';
import ReactPlayer from 'react-player';
import { Camera } from '../types';
import { Loader2 } from 'lucide-react';

interface VideoPlayerProps {
  camera: Camera | null;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ camera }) => {
  if (!camera) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-black/50 text-slate-400 p-8 text-center">
        <Loader2 className="w-12 h-12 mb-4 animate-spin text-la-blue" />
        <p>Select a camera from the list or map to start watching</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-black relative group">
      <ReactPlayer
        url={camera.url}
        width="100%"
        height="100%"
        playing={true}
        controls={true}
        pip={true}
        config={{
          youtube: {
            playerVars: { showinfo: 1, autoplay: 1 }
          }
        }}
      />
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-4 py-2 rounded-lg pointer-events-none">
        <h2 className="text-white font-bold">{camera.name}</h2>
        <span className="text-red-500 text-xs font-bold uppercase tracking-wider animate-pulse">● Live</span>
      </div>
    </div>
  );
};