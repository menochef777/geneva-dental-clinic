import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Droplets, Zap } from 'lucide-react';

interface ToothCleaningIllustrationProps {
  className?: string;
}

export const ToothCleaningIllustration: React.FC<ToothCleaningIllustrationProps> = ({
  className = '',
}) => {
  const [isSuperClean, setIsSuperClean] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null);

  const handleToothClick = () => {
    setIsSuperClean(true);
    setClickCount((prev) => prev + 1);
    setTimeout(() => setIsSuperClean(false), 2400);
  };

  return (
    <div
      id="tooth-cleaning-stage"
      className={`relative w-full max-w-[620px] aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/4.8] flex items-center justify-center select-none ${className}`}
      onClick={handleToothClick}
    >
      {/* Interactive Tooltip Hint on hover */}
      <div className="absolute top-2 right-4 z-40 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/80 border border-white/20 text-[11px] text-white/70 backdrop-blur-md pointer-events-none transition-opacity duration-300">
        <Sparkles className="w-3 h-3 text-white animate-spin-slow" />
        <span>Click tooth to power clean</span>
      </div>

      {/* SVG Container holding the entire 3D-styled tooth, scaffolding, workers, spray, and chrome base */}
      <svg
        viewBox="0 0 600 700"
        className="w-full h-full drop-shadow-[0_20px_40px_rgba(255,255,255,0.08)] cursor-pointer"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Glossy Tooth Gradients */}
          <radialGradient id="toothHighlight" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#f8fafc" />
            <stop offset="60%" stopColor="#e2e8f0" />
            <stop offset="88%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </radialGradient>

          <linearGradient id="toothGleam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="crownSpecular" cx="45%" cy="25%" r="35%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          {/* Chrome Screw Base Gradients */}
          <linearGradient id="chromeThread" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="15%" stopColor="#cbd5e1" />
            <stop offset="35%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="65%" stopColor="#e2e8f0" />
            <stop offset="85%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="chromeCap" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="25%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="75%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Scaffolding Metal Gradients */}
          <linearGradient id="metalBar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>

          {/* Blue Scrubs Worker Gradient */}
          <linearGradient id="scrubBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>

          <linearGradient id="scrubDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>

          {/* Water Jet Gradient */}
          <linearGradient id="waterSpray" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#67e8f9" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
          </linearGradient>

          {/* Filters for glow & shimmer */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="sparkleGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Dark Backdrop Shadow */}
        <ellipse cx="380" cy="650" rx="160" ry="25" fill="#ffffff" fillOpacity="0.05" filter="blur(15px)" />

        {/* ======================================================== */}
        {/* 1. CHROME THREADED LIGHTBULB BASE                        */}
        {/* ======================================================== */}
        <g id="chrome-screw-base" transform="translate(260, 480)">
          {/* Base Rim Cylinder */}
          <rect x="0" y="0" width="220" height="40" rx="6" fill="url(#chromeThread)" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.4" />
          
          {/* Thread 1 */}
          <path
            d="M 5 35 Q 110 50 215 35 L 215 65 Q 110 80 5 65 Z"
            fill="url(#chromeThread)"
            stroke="#000000"
            strokeWidth="1.5"
          />
          {/* Thread 2 */}
          <path
            d="M 12 70 Q 110 85 208 70 L 208 100 Q 110 115 12 100 Z"
            fill="url(#chromeThread)"
            stroke="#000000"
            strokeWidth="1.5"
          />
          {/* Thread 3 */}
          <path
            d="M 22 105 Q 110 120 198 105 L 198 135 Q 110 150 22 135 Z"
            fill="url(#chromeThread)"
            stroke="#000000"
            strokeWidth="1.5"
          />
          {/* Thread 4 / Bottom contact */}
          <path
            d="M 40 140 Q 110 155 180 140 L 170 165 Q 110 178 50 165 Z"
            fill="url(#chromeCap)"
            stroke="#000000"
            strokeWidth="1.5"
          />
          {/* Dark contact point terminal */}
          <path d="M 65 165 Q 110 176 155 165 L 140 180 Q 110 186 80 180 Z" fill="#090d16" />

          {/* Chrome reflection highlights */}
          <rect x="45" y="5" width="20" height="155" fill="#ffffff" fillOpacity="0.35" filter="blur(4px)" />
          <rect x="155" y="5" width="12" height="155" fill="#ffffff" fillOpacity="0.25" filter="blur(3px)" />

          {/* Condensation water droplets on chrome */}
          <circle cx="85" cy="45" r="2.5" fill="#ffffff" fillOpacity="0.8" />
          <circle cx="130" cy="75" r="3" fill="#ffffff" fillOpacity="0.9" />
          <circle cx="70" cy="115" r="2" fill="#ffffff" fillOpacity="0.7" />
          <circle cx="160" cy="120" r="3" fill="#ffffff" fillOpacity="0.85" />
          <circle cx="110" cy="145" r="2.5" fill="#ffffff" fillOpacity="0.9" />
        </g>

        {/* ======================================================== */}
        {/* 2. GIANT GLOSSY 3D CERAMIC TOOTH BULB                    */}
        {/* ======================================================== */}
        <g id="giant-tooth" transform="translate(190, 180)">
          {/* Base Tooth Shape (anatomical molar with crown cusps and bulb taper) */}
          <path
            d="M 175 315 
               C 130 315, 80 270, 65 210
               C 50 145, 45 95, 85 45
               C 120 5, 170 18, 195 48
               C 220 18, 270 5, 305 45
               C 345 95, 340 145, 325 210
               C 310 270, 260 315, 215 315 
               Z"
            fill="url(#toothHighlight)"
            stroke="#ffffff"
            strokeWidth="2"
            strokeOpacity="0.8"
          />

          {/* Left Cusp Curvature Volume & Occlusion */}
          <path
            d="M 95 65
               C 125 35, 160 40, 195 70
               C 180 140, 130 190, 85 200
               C 70 160, 75 110, 95 65 Z"
            fill="#ffffff"
            fillOpacity="0.4"
          />

          {/* Right Cusp Curvature Volume */}
          <path
            d="M 295 65
               C 265 35, 230 40, 195 70
               C 210 140, 260 190, 305 200
               C 320 160, 315 110, 295 65 Z"
            fill="#cbd5e1"
            fillOpacity="0.3"
          />

          {/* Deep Fissure Groove in Crown Center */}
          <path
            d="M 195 48 Q 195 110 195 170"
            stroke="#94a3b8"
            strokeWidth="4"
            strokeLinecap="round"
            strokeOpacity="0.5"
          />

          {/* Ultra Gloss Specular Sheens & Highlights */}
          <ellipse cx="145" cy="115" rx="55" ry="75" fill="url(#crownSpecular)" transform="rotate(-15 145 115)" />
          <ellipse cx="245" cy="115" rx="40" ry="60" fill="url(#crownSpecular)" transform="rotate(15 245 115)" opacity="0.65" />

          {/* Crisp White Rim Light Stripe */}
          <path
            d="M 75 90 C 65 140, 70 190, 95 240"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            filter="url(#softGlow)"
          />
          <path
            d="M 315 90 C 325 140, 320 190, 295 240"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />

          {/* Sweeping Animated Reflection Sheen */}
          <g className={isSuperClean ? 'animate-pulse' : ''}>
            <path
              d="M 110 70 Q 195 140 180 280"
              stroke="#ffffff"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
              strokeOpacity="0.35"
              filter="blur(5px)"
            />
          </g>

          {/* Interactive Sparkle Burst over Tooth on Click */}
          {isSuperClean && (
            <g filter="url(#sparkleGlow)">
              <circle cx="195" cy="140" r="16" fill="#ffffff" fillOpacity="0.9" />
              <line x1="195" y1="80" x2="195" y2="200" stroke="#ffffff" strokeWidth="4" />
              <line x1="135" y1="140" x2="255" y2="140" stroke="#ffffff" strokeWidth="4" />
              <line x1="150" y1="95" x2="240" y2="185" stroke="#ffffff" strokeWidth="2.5" />
              <line x1="240" y1="95" x2="150" y2="185" stroke="#ffffff" strokeWidth="2.5" />
            </g>
          )}

          {/* Natural Sparkle Star 1 (Polished Glint) */}
          <g transform="translate(130, 90) scale(0.9)" className="animate-pulse" filter="url(#sparkleGlow)">
            <polygon points="0,-12 3,-3 12,0 3,3 0,12 -3,3 -12,0 -3,-3" fill="#ffffff" />
            <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
          </g>

          {/* Natural Sparkle Star 2 (Center Glint) */}
          <g transform="translate(230, 160) scale(0.75)" style={{ animation: 'spin-slow 6s linear infinite' }} filter="url(#sparkleGlow)">
            <polygon points="0,-14 3.5,-3.5 14,0 3.5,3.5 0,14 -3.5,3.5 -14,0 -3.5,-3.5" fill="#ffffff" />
          </g>

          {/* Natural Sparkle Star 3 (Lower Cheek Glint) */}
          <g transform="translate(160, 230) scale(0.6)" className="animate-pulse" filter="url(#sparkleGlow)">
            <polygon points="0,-10 2.5,-2.5 10,0 2.5,2.5 0,10 -2.5,2.5 -10,0 -2.5,-2.5" fill="#ffffff" />
          </g>
        </g>

        {/* ======================================================== */}
        {/* 3. ALUMINUM SCAFFOLDING PLATFORM (Left side of tooth)    */}
        {/* ======================================================== */}
        <g id="scaffolding-tower" transform="translate(150, 310)">
          {/* Vertical Columns */}
          <line x1="10" y1="0" x2="10" y2="230" stroke="url(#metalBar)" strokeWidth="5" strokeLinecap="round" />
          <line x1="70" y1="0" x2="70" y2="230" stroke="url(#metalBar)" strokeWidth="5" strokeLinecap="round" />

          {/* Horizontal Rungs */}
          <line x1="10" y1="40" x2="70" y2="40" stroke="url(#metalBar)" strokeWidth="4" />
          <line x1="10" y1="90" x2="70" y2="90" stroke="url(#metalBar)" strokeWidth="4" />
          <line x1="10" y1="140" x2="70" y2="140" stroke="url(#metalBar)" strokeWidth="4" />
          <line x1="10" y1="190" x2="70" y2="190" stroke="url(#metalBar)" strokeWidth="4" />

          {/* Cross Bracing */}
          <line x1="10" y1="40" x2="70" y2="90" stroke="#64748b" strokeWidth="2.5" />
          <line x1="70" y1="40" x2="10" y2="90" stroke="#64748b" strokeWidth="2.5" />
          <line x1="10" y1="90" x2="70" y2="140" stroke="#64748b" strokeWidth="2.5" />
          <line x1="70" y1="90" x2="10" y2="140" stroke="#64748b" strokeWidth="2.5" />
          <line x1="10" y1="140" x2="70" y2="190" stroke="#64748b" strokeWidth="2.5" />
          <line x1="70" y1="140" x2="10" y2="190" stroke="#64748b" strokeWidth="2.5" />

          {/* Top Platform Grate */}
          <rect x="-5" y="32" width="90" height="9" rx="2" fill="url(#metalBar)" stroke="#334155" strokeWidth="1" />
          
          {/* Platform Safety Railing */}
          <line x1="-5" y1="0" x2="-5" y2="35" stroke="url(#metalBar)" strokeWidth="3.5" />
          <line x1="85" y1="0" x2="85" y2="35" stroke="url(#metalBar)" strokeWidth="3.5" />
          <line x1="-5" y1="5" x2="85" y2="5" stroke="url(#metalBar)" strokeWidth="3.5" />
          <line x1="-5" y1="18" x2="85" y2="18" stroke="url(#metalBar)" strokeWidth="2" />
        </g>

        {/* ======================================================== */}
        {/* 4. WORKER 1: ON SCAFFOLDING POLISHING SIDE OF TOOTH      */}
        {/* ======================================================== */}
        <g id="worker-scaffolding" transform="translate(195, 270)">
          {/* Boots */}
          <ellipse cx="2" cy="72" rx="5" ry="3" fill="#1e293b" />
          <ellipse cx="16" cy="72" rx="5" ry="3" fill="#1e293b" />

          {/* Legs & Scrub Pants */}
          <path d="M 0 45 L 2 70 M 14 45 L 16 70" stroke="url(#scrubDark)" strokeWidth="7" strokeLinecap="round" />

          {/* Torso in Blue Scrubs (leaning right toward tooth) */}
          <path d="M -4 20 Q 8 20 18 24 L 14 48 Q 6 46 -2 46 Z" fill="url(#scrubBlue)" stroke="#1e40af" strokeWidth="1" />

          {/* Head & Scrub Cap */}
          <circle cx="8" cy="10" r="7" fill="#fed7aa" />
          <path d="M 2 10 Q 8 2 15 10 Z" fill="#2563eb" />

          {/* Extended Arms holding Rotary Buffer */}
          <path d="M 14 26 L 36 28 L 52 32" stroke="url(#scrubBlue)" strokeWidth="4.5" strokeLinecap="round" />
          
          {/* Polishing Tool Machine */}
          <rect x="42" y="27" width="22" height="7" rx="2" fill="#475569" />
          <line x1="58" y1="30" x2="76" y2="30" stroke="#e2e8f0" strokeWidth="3.5" />

          {/* Spinning Polishing Disk against Tooth */}
          <g transform="translate(76, 30)" className="animate-spin-slow">
            <ellipse cx="0" cy="0" rx="4" ry="12" fill="#f8fafc" stroke="#3b82f6" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="3" fill="#94a3b8" />
          </g>

          {/* Buffing Friction Sparks & Spray */}
          <g transform="translate(78, 30)">
            <circle cx="3" cy="-8" r="1.5" fill="#ffffff" className="animate-ping" />
            <circle cx="6" cy="6" r="1.2" fill="#ffffff" />
            <circle cx="4" cy="12" r="1" fill="#67e8f9" />
          </g>
        </g>

        {/* ======================================================== */}
        {/* 5. WORKER 2: TOP LEFT CUSP (Fine Scaler / Drill)         */}
        {/* ======================================================== */}
        <g id="worker-top-left" transform="translate(245, 110)">
          {/* Standing on left cusp */}
          <ellipse cx="6" cy="92" rx="4.5" ry="2.5" fill="#1e293b" />
          <ellipse cx="20" cy="90" rx="4.5" ry="2.5" fill="#1e293b" />

          {/* Scrub Legs */}
          <path d="M 6 62 L 6 90 M 18 62 L 20 88" stroke="url(#scrubDark)" strokeWidth="6" strokeLinecap="round" />

          {/* Torso bent forward */}
          <path d="M 2 36 Q 14 34 24 38 L 22 65 Q 12 65 4 64 Z" fill="url(#scrubBlue)" stroke="#1e40af" strokeWidth="1" />

          {/* Head & Mask */}
          <circle cx="14" cy="24" r="6.5" fill="#fed7aa" />
          <path d="M 8 23 Q 14 16 20 23 Z" fill="#2563eb" />
          <rect x="10" y="24" width="7" height="4" rx="1" fill="#ffffff" opacity="0.9" />

          {/* Arms holding Precision Scaler */}
          <path d="M 18 42 L 32 58 L 38 72" stroke="url(#scrubBlue)" strokeWidth="4" strokeLinecap="round" />
          
          {/* Dental Scaler Handpiece */}
          <line x1="32" y1="62" x2="42" y2="82" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
          <circle cx="43" cy="84" r="2" fill="#ffffff" className="animate-ping" />
        </g>

        {/* ======================================================== */}
        {/* 6. WORKER 3: TOP CENTER (Heavy Rotary Polisher)          */}
        {/* ======================================================== */}
        <g id="worker-top-center" transform="translate(325, 80)">
          {/* Feet planted firmly on crown groove */}
          <ellipse cx="6" cy="115" rx="5" ry="2.5" fill="#1e293b" />
          <ellipse cx="28" cy="115" rx="5" ry="2.5" fill="#1e293b" />

          {/* Legs */}
          <path d="M 8 78 L 6 113 M 26 78 L 28 113" stroke="url(#scrubDark)" strokeWidth="6.5" strokeLinecap="round" />

          {/* Torso leaning over machine */}
          <path d="M 3 45 Q 18 42 31 45 L 29 80 Q 17 82 5 80 Z" fill="url(#scrubBlue)" stroke="#1e40af" strokeWidth="1" />

          {/* Head looking down */}
          <circle cx="17" cy="30" r="7" fill="#fed7aa" />
          <path d="M 10 29 Q 17 21 24 29 Z" fill="#2563eb" />

          {/* Arms holding vertical buffer handles */}
          <path d="M 6 52 L 14 68 M 28 52 L 20 68" stroke="url(#scrubBlue)" strokeWidth="4.5" strokeLinecap="round" />

          {/* Large Vertical Buffer Tool */}
          <rect x="13" y="60" width="8" height="38" rx="2" fill="#334155" />
          <rect x="8" y="66" width="18" height="4" rx="1" fill="#64748b" />
          <line x1="17" y1="98" x2="17" y2="124" stroke="#e2e8f0" strokeWidth="3" />

          {/* Vibrating Rotary Base Pad */}
          <g transform="translate(17, 126)">
            <ellipse cx="0" cy="0" rx="14" ry="4.5" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
            
            {/* Water Mist Splash flying up from high speed rotary pad */}
            <path
              d="M -12 -2 Q -18 -20 -6 -28 M 12 -2 Q 18 -20 6 -28 M -4 -4 Q -8 -35 0 -40 M 4 -4 Q 8 -35 0 -40"
              stroke="#67e8f9"
              strokeWidth="1.5"
              fill="none"
              strokeOpacity="0.75"
              strokeDasharray="2 3"
              className="animate-pulse"
            />
            <circle cx="-14" cy="-18" r="1.5" fill="#ffffff" />
            <circle cx="15" cy="-22" r="1.5" fill="#ffffff" />
            <circle cx="0" cy="-34" r="2" fill="#67e8f9" />
          </g>
        </g>

        {/* ======================================================== */}
        {/* 7. WORKER 4: TOP RIGHT (High-Pressure Water Blaster)     */}
        {/* ======================================================== */}
        <g id="worker-top-right" transform="translate(425, 110)">
          {/* Feet on right cusp slope */}
          <ellipse cx="8" cy="98" rx="5" ry="3" fill="#1e293b" />
          <ellipse cx="26" cy="92" rx="5" ry="3" fill="#1e293b" />

          {/* Legs */}
          <path d="M 10 65 L 8 95 M 24 65 L 26 90" stroke="url(#scrubDark)" strokeWidth="6.5" strokeLinecap="round" />

          {/* Torso leaning forward aiming blaster */}
          <path d="M 4 35 Q 18 34 28 38 L 26 68 Q 16 68 8 67 Z" fill="url(#scrubBlue)" stroke="#1e40af" strokeWidth="1" />

          {/* Head & Cap */}
          <circle cx="16" cy="22" r="7" fill="#fed7aa" />
          <path d="M 9 21 Q 16 13 23 21 Z" fill="#2563eb" />

          {/* Arms holding water gun lance */}
          <path d="M 12 44 L 0 54 L -18 64" stroke="url(#scrubBlue)" strokeWidth="4.5" strokeLinecap="round" />

          {/* Pressure Lance Barrel */}
          <line x1="0" y1="54" x2="-35" y2="78" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
          <line x1="-35" y1="78" x2="-45" y2="85" stroke="#e2e8f0" strokeWidth="2.5" strokeLinecap="round" />

          {/* Flexible High-Pressure Hose Looping Down off Screen */}
          <path
            d="M 14 54 C 45 60, 75 90, 85 180 C 95 270, 90 380, 100 480"
            stroke="#0f172a"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />

          {/* Dynamic Water Spray Jet shooting out of nozzle */}
          <g transform="translate(-45, 85)">
            <path
              d="M 0 0 L -85 55 L -95 30 Z"
              fill="url(#waterSpray)"
              filter="url(#softGlow)"
            />
            {/* Fine Splash Droplets in flight */}
            <circle cx="-35" cy="22" r="2" fill="#ffffff" />
            <circle cx="-55" cy="42" r="1.8" fill="#67e8f9" />
            <circle cx="-75" cy="35" r="2.2" fill="#ffffff" className="animate-ping" />
            <circle cx="-90" cy="50" r="1.5" fill="#67e8f9" />
            <circle cx="-60" cy="18" r="1.2" fill="#ffffff" />
          </g>
        </g>
      </svg>

      {/* Floating Status Pill */}
      <div className="absolute bottom-2 right-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-white/15 backdrop-blur-md text-xs font-semibold text-white/90 shadow-xl pointer-events-none font-['DM_Sans']">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>Live Deep Clean in Progress</span>
      </div>
    </div>
  );
};
