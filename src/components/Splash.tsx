import { useState, useEffect } from 'react';

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Hold the splash screen for 2.5 seconds, then trigger fade out
    const timer1 = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500);

    // After fade out completes (800ms), unmount
    const timer2 = setTimeout(() => {
      onComplete();
    }, 3300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 transition-opacity duration-1000 ease-in-out ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
    >
      <div className="relative text-center flex flex-col items-center justify-center">
        {/* Glowing background behind logo */}
        <div className="absolute inset-0 bg-sky-500/20 blur-[100px] rounded-full animate-pulse" />

        {/* Animated Icon */}
        <img src='../logo.png' className="w-50 h-35 text-sky-400" />

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 tracking-wider">
          InfraSocket
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sky-200/60 tracking-widest uppercase text-sm animate-pulse">
          Initializing System...
        </p>

        {/* Loading Dots */}
        <div className="mt-12 flex justify-center gap-4">
          <div className="w-3 h-3 bg-sky-500 rounded-full animate-ping" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-ping" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 bg-violet-500 rounded-full animate-ping" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
