import React, { useRef, useState } from 'react';
import logoSrc from '../../assets/apb-logo.png';

interface IntroSplashProps {
  onEnter: () => void;
}

export const IntroSplash: React.FC<IntroSplashProps> = ({ onEnter }) => {
  const [stage, setStage] = useState<'intro' | 'transitioning'>('intro');
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.75;
      audioRef.current.currentTime = 0;
      void audioRef.current.play().catch(() => undefined);
    }
    setStage('transitioning');
    window.setTimeout(onEnter, 1100);
  };

  return (
    <div className="apb-app-container relative min-h-screen w-full bg-[#050509] overflow-hidden">
      <audio 
        ref={audioRef} 
        preload="auto" 
        src="https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3" 
      />

      {/* Main viewport is now a centered flex container with 3D perspective */}
      <section 
        className={`intro-viewport absolute inset-0 flex flex-col items-center justify-center gap-12 transition-opacity duration-1000 ease-in-out ${stage === 'transitioning' ? 'opacity-0' : 'opacity-100'}`}
        style={{ perspective: '2000px' }} // Enables 3D context for children
      >
        <div className="metallic-mesh-overlay absolute inset-0 bg-[url('/assets/mesh-texture.png')] opacity-10 pointer-events-none" />

        {/* 3D Floating Logo Container */}
        <div className="perspective-container relative group">
          <div className="logo-3d-crystal-card relative w-64 h-64 transition-transform duration-500 ease-out transform-style-3d group-hover:rotate-x-6 group-hover:rotate-y-12">
            
            {/* Glossy crystal refraction layer */}
            <div className="crystal-light-refraction absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-black/30 border border-white/10 backdrop-blur-sm z-10" />
            
            {/* The Logo Image */}
            <img 
              src={logoSrc} 
              alt="Auburn Professional Branding" 
              className="absolute inset-0 w-full h-full object-contain p-4 z-20 drop-shadow-[0_10px_15px_rgba(255,255,255,0.1)]"
            />

            {/* Subtle glow/shadow for depth */}
            <div className="absolute inset-x-8 -bottom-10 h-10 bg-white/5 rounded-full blur-2xl z-0" />
          </div>
        </div>

        {/* The Action Button */}
        <button 
          type="button" 
          onClick={handleEnter} 
          className="intro-enter-btn group relative px-10 py-4 bg-transparent border-2 border-cyan-500/50 rounded-full text-white font-bold text-lg tracking-wider uppercase overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
        >
          {/* Button content (layered z-index) */}
          <span className="relative z-10 block">Experience Auburn Pro Branding</span>
          <span className="relative z-10 block text-xs font-medium text-slate-400 tracking-normal normal-case mt-1">(Continue to site)</span>

          {/* Glitch-style background fill on hover */}
          <div className="absolute inset-0 bg-cyan-950 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
        </button>
      </section>

      {/* Transitioning Overlay */}
      {stage === 'transitioning' && (
        <div className="eagle-flight-canvas absolute inset-0 flex items-center justify-center bg-black z-50">
          <svg className="flying-eagle-silhouette w-32 h-32 text-cyan-400 animate-pulse" viewBox="0 0 512 512">
            <path fill="currentColor" d="M256,16 C250,16 230,48 220,70 C190,75 140,90 80,120 C40,140 10,180 16,210 C20,230 60,220 100,200 C150,175 190,160 220,165 C230,190 240,240 245,280 C230,300 200,340 180,380 C170,400 185,420 210,410 C235,400 250,370 256,350 C262,370 277,400 302,410 C327,420 342,400 332,380 C312,340 282,300 267,280 C272,240 282,190 292,165 C322,160 362,175 412,200 C452,220 492,230 496,210 C502,180 472,140 432,120 C372,90 322,75 292,70 C282,48 262,16 256,16 Z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default IntroSplash;
