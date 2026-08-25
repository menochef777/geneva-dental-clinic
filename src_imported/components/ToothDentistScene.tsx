import React, { useState } from 'react';

interface ToothDentistSceneProps {
  className?: string;
  onOpenConsultation?: () => void;
}

export const ToothDentistScene: React.FC<ToothDentistSceneProps> = ({
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="tooth-dentist-scene-wrapper"
      className={`relative w-full max-w-[820px] h-[520px] sm:h-[580px] lg:h-[640px] flex items-center justify-center select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        viewBox="0 0 960 720"
        className="w-full h-full filter drop-shadow-[0_35px_80px_rgba(255,255,255,0.1)] transition-transform duration-500 ease-out"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="cgiEnamelBody" cx="42%" cy="22%" r="68%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#e2e8f0" />
            <stop offset="72%" stopColor="#94a3b8" />
            <stop offset="88%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1e293b" />
          </radialGradient>

          <radialGradient id="specularGlintLeft" cx="35%" cy="20%" r="40%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.75" />
            <stop offset="65%" stopColor="#e0f2fe" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="specularGlintRight" cx="65%" cy="18%" r="42%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#f1f5f9" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="creviceShader" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#334155" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#475569" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1e293b" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="rootShaderLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="45%" stopColor="#cbd5e1" />
            <stop offset="75%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="rootShaderRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#cbd5e1" />
            <stop offset="75%" stopColor="#475569" />
            <stop offset="100%" stopColor="#090d16" />
          </linearGradient>

          <linearGradient id="royalBlueSuit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="30%" stopColor="#1d4ed8" />
            <stop offset="70%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#172554" />
          </linearGradient>

          <linearGradient id="royalBlueShine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="35%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>

          <linearGradient id="chromeTube" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="20%" stopColor="#cbd5e1" />
            <stop offset="45%" stopColor="#ffffff" />
            <stop offset="75%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <linearGradient id="metalPlatformPlate" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f1f5f9" />
            <stop offset="35%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <radialGradient id="macroWaterDrop" cx="28%" cy="28%" r="68%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
          </radialGradient>

          <linearGradient id="clearFaceShield" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="25%" stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#0284c7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="trailingHoseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="30%" stopColor="#cbd5e1" />
            <stop offset="60%" stopColor="#475569" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <filter id="waterMistGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse cx="480" cy="670" rx="420" ry="28" fill="#ffffff" fillOpacity="0.04" filter="blur(20px)" />
        <ellipse cx="480" cy="665" rx="300" ry="16" fill="#38bdf8" fillOpacity="0.06" filter="blur(10px)" />
        <ellipse cx="400" cy="668" rx="46" ry="7" fill="#cbd5e1" fillOpacity="0.14" filter="blur(4px)" />
        <ellipse cx="480" cy="668" rx="52" ry="7" fill="#ffffff" fillOpacity="0.12" filter="blur(4px)" />
        <ellipse cx="560" cy="668" rx="46" ry="7" fill="#cbd5e1" fillOpacity="0.14" filter="blur(4px)" />
        <ellipse cx="490" cy="666" rx="90" ry="8" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
        <ellipse cx="490" cy="666" rx="140" ry="11" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.25" fill="none" />

        <g id="cgi-central-tooth" transform="translate(480, 365)">
          <path
            d="M -190 -210 C -225 -120, -230 0, -210 95 C -198 155, -182 235, -160 290 C -148 314, -122 308, -110 278 C -92 225, -82 135, -65 85 C -55 60, -42 85, -30 135 C -14 205, 0 285, 20 304 C 30 314, 48 304, 55 278 C 68 225, 75 135, 88 85 C 98 60, 110 85, 118 135 C 134 210, 148 275, 168 288 C 180 298, 196 288, 198 258 C 206 195, 220 105, 225 10 C 230 -90, 225 -170, 185 -210 C 148 -260, 60 -270, 0 -230 C -60 -270, -152 -260, -190 -210 Z"
            fill="url(#cgiEnamelBody)"
            stroke="#ffffff"
            strokeWidth="2.8"
          />

          <path d="M -180 -200 C -140 -260, -50 -260, -15 -200 C -50 -140, -140 -140, -180 -200 Z" fill="url(#specularGlintLeft)" />
          <path d="M 15 -200 C 50 -260, 140 -260, 180 -200 C 140 -140, 50 -140, 15 -200 Z" fill="url(#specularGlintRight)" />

          <path d="M 0 -230 Q 0 -150 0 -55 Q 0 35 0 85" stroke="#475569" strokeWidth="4.5" strokeLinecap="round" strokeOpacity="0.5" />

          <path d="M -210 95 C -198 155, -182 235, -160 290 C -148 314, -122 308, -110 278 C -92 225, -82 135, -65 85" fill="url(#rootShaderLeft)" fillOpacity="0.65" />
          <path d="M -65 85 C -55 60, -42 85, -30 135 C -14 205, 0 285, 20 304 C 30 314, 48 304, 55 278 C 68 225, 75 135, 88 85" fill="url(#rootShaderLeft)" fillOpacity="0.75" />
          <path d="M 88 85 C 98 60, 110 85, 118 135 C 134 210, 148 275, 168 288 C 180 298, 196 288, 198 258 C 206 195, 220 105, 225 10" fill="url(#rootShaderRight)" fillOpacity="0.6" />

          <ellipse cx="-95" cy="-135" rx="75" ry="92" fill="url(#specularGlintLeft)" transform="rotate(-15 -95 -135)" />
          <ellipse cx="100" cy="-125" rx="68" ry="82" fill="url(#specularGlintRight)" transform="rotate(15 100 -125)" />

          <path d="M -200 -140 C -215 -45, -208 55, -182 135" stroke="#ffffff" strokeWidth="7.5" strokeLinecap="round" fill="none" opacity="0.92" />
          <path d="M 200 -140 C 215 -45, 208 55, 182 135" stroke="#ffffff" strokeWidth="6.5" strokeLinecap="round" fill="none" opacity="0.88" />

          <g id="water-macro-details">
            <path d="M -100 -100 Q -102 -45 -98 15 Q -95 70 -98 125" stroke="#ffffff" strokeWidth="2.8" strokeOpacity="0.85" fill="none" strokeLinecap="round" />
            <circle cx="-98" cy="127" r="5" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="0.9" />
            <path d="M -35 -70 Q -38 0 -32 65 Q -30 130 -34 195" stroke="#ffffff" strokeWidth="2.4" strokeOpacity="0.75" fill="none" strokeLinecap="round" />
            <circle cx="-34" cy="197" r="4.5" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="0.9" />
            <path d="M 50 -90 Q 46 -25 52 45 Q 54 110 50 175" stroke="#ffffff" strokeWidth="2.8" strokeOpacity="0.8" fill="none" strokeLinecap="round" />
            <circle cx="50" cy="177" r="5" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="0.9" />
            <path d="M 120 -80 Q 124 -15 118 55 Q 116 120 122 185" stroke="#ffffff" strokeWidth="2.2" strokeOpacity="0.75" fill="none" strokeLinecap="round" />
            <circle cx="122" cy="187" r="4.2" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="0.9" />

            <circle cx="-145" cy="-110" r="6.5" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="-160" cy="-65" r="4.8" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="0.9" />
            <circle cx="-128" cy="-35" r="7" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="-150" cy="25" r="5" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="0.9" />
            <circle cx="-70" cy="-155" r="5.5" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="1.1" />
            <circle cx="-45" cy="-115" r="7.5" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="-12" cy="-80" r="5.8" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="1" />
            <circle cx="25" cy="-145" r="6.8" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="80" cy="-155" r="5.5" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="1" />
            <circle cx="148" cy="-110" r="6.8" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="165" cy="-45" r="5" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="0.9" />
            <circle cx="132" cy="15" r="5.8" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="1" />
            <circle cx="155" cy="80" r="6.2" fill="url(#macroWaterDrop)" stroke="#ffffff" strokeWidth="1.1" />
            
            {[
              [-135, -155], [-115, -175], [-85, -185], [-60, -165], [-25, -175],
              [15, -185], [45, -175], [70, -190], [110, -175], [135, -155],
              [-165, -15], [-145, 65], [-125, 155], [145, 135], [165, 45],
              [-80, 35], [-55, 105], [25, 45], [70, 105], [90, 25],
              [-105, 75], [-20, 25], [40, 85], [115, 95], [-40, -15]
            ].map(([x, y], idx) => (
              <circle key={idx} cx={x} cy={y} r={1.6 + (idx % 3) * 0.9} fill="#ffffff" opacity={0.88} />
            ))}
          </g>
        </g>

        <g id="left-industrial-scaffold" transform="translate(85, 340)">
          <rect x="0" y="300" width="180" height="16" rx="4" fill="url(#chromeTube)" stroke="#1e293b" strokeWidth="2" />
          <circle cx="22" cy="328" r="10.5" fill="#1e293b" stroke="#cbd5e1" strokeWidth="3.5" />
          <circle cx="158" cy="328" r="10.5" fill="#1e293b" stroke="#cbd5e1" strokeWidth="3.5" />
          <circle cx="22" cy="328" r="3.5" fill="#ffffff" />
          <circle cx="158" cy="328" r="3.5" fill="#ffffff" />

          <line x1="18" y1="0" x2="18" y2="300" stroke="url(#chromeTube)" strokeWidth="9" strokeLinecap="round" />
          <line x1="162" y1="0" x2="162" y2="300" stroke="url(#chromeTube)" strokeWidth="9" strokeLinecap="round" />
          <line x1="90" y1="0" x2="90" y2="300" stroke="url(#chromeTube)" strokeWidth="7" strokeLinecap="round" />

          <line x1="18" y1="300" x2="162" y2="200" stroke="url(#chromeTube)" strokeWidth="5" />
          <line x1="162" y1="300" x2="18" y2="200" stroke="url(#chromeTube)" strokeWidth="5" />
          <line x1="18" y1="200" x2="162" y2="100" stroke="url(#chromeTube)" strokeWidth="5" />
          <line x1="162" y1="200" x2="18" y2="100" stroke="url(#chromeTube)" strokeWidth="5" />

          <rect x="0" y="90" width="180" height="18" rx="3" fill="url(#metalPlatformPlate)" stroke="#334155" strokeWidth="2" />
          <rect x="0" y="83" width="180" height="8" fill="#64748b" />

          <line x1="8" y1="-80" x2="8" y2="90" stroke="url(#chromeTube)" strokeWidth="7" strokeLinecap="round" />
          <line x1="172" y1="-80" x2="172" y2="90" stroke="url(#chromeTube)" strokeWidth="7" strokeLinecap="round" />
          <line x1="8" y1="-75" x2="172" y2="-75" stroke="url(#chromeTube)" strokeWidth="7" />
          <line x1="8" y1="-30" x2="172" y2="-30" stroke="url(#chromeTube)" strokeWidth="5.5" />
          <line x1="8" y1="25" x2="172" y2="25" stroke="url(#chromeTube)" strokeWidth="5.5" />

          {[130, 165, 200, 235, 270].map((y, idx) => (
            <line key={idx} x1="50" y1={y} x2="130" y2={y} stroke="url(#chromeTube)" strokeWidth="5.5" />
          ))}

          <circle cx="35" cy="-75" r="2.5" fill="#ffffff" opacity={0.9} />
          <circle cx="95" cy="-75" r="2.5" fill="#ffffff" opacity={0.9} />
          <circle cx="140" cy="-75" r="2.5" fill="#ffffff" opacity={0.9} />
        </g>

        <g id="worker-1-top-scaffold" transform="translate(225, 210)">
          <ellipse cx="16" cy="218" rx="9" ry="5" fill="#0f172a" />
          <ellipse cx="42" cy="218" rx="9" ry="5" fill="#0f172a" />
          <path d="M 14 135 L 16 215 M 40 135 L 42 215" stroke="url(#royalBlueSuit)" strokeWidth="14" strokeLinecap="round" />
          <path d="M 8 60 Q 28 55 50 60 L 45 140 Q 28 144 12 140 Z" fill="url(#royalBlueShine)" stroke="#1e3a8a" strokeWidth="2" />
          <circle cx="30" cy="28" r="11" fill="#fed7aa" />
          <path d="M 18 22 Q 30 10 42 22 Z" fill="url(#royalBlueSuit)" />
          <path d="M 20 20 Q 42 16 46 42 Q 34 46 20 42 Z" fill="url(#clearFaceShield)" stroke="#38bdf8" strokeWidth="1.8" />
          <path d="M 20 74 L 60 78 L 94 88" stroke="url(#royalBlueSuit)" strokeWidth="10.5" strokeLinecap="round" />
          <circle cx="94" cy="88" r="6" fill="#0f172a" />
          <rect x="85" y="80" width="34" height="16" rx="4" fill="#334155" stroke="#cbd5e1" strokeWidth="1.8" />
          <ellipse cx="118" cy="88" rx="8" ry="18" fill="#facc15" stroke="#ca8a04" strokeWidth="2.8" />
          <ellipse cx="118" cy="88" rx="3.5" ry="9" fill="#0f172a" />

          <g filter="url(#waterMistGlow)">
            <circle cx="118" cy="88" r="16" fill="#ffffff" fillOpacity="0.45" />
            <path d="M 118 70 Q 145 58 162 64 M 118 106 Q 150 120 168 114" stroke="#ffffff" strokeWidth="2.4" fill="none" opacity="0.85" />
            {[
              [128, 68], [138, 80], [145, 96], [134, 108], [150, 74], [156, 90],
              [122, 58], [134, 118], [145, 62], [162, 102]
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={1.6} fill="#ffffff" opacity={0.92} />
            ))}
          </g>

          <path d="M 85 92 C 45 125, 25 200, 35 320" stroke="url(#trailingHoseGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>

        <g id="worker-2-top-scissor" transform="translate(745, 120)">
          <ellipse cx="36" cy="162" rx="9" ry="5" fill="#0f172a" />
          <ellipse cx="60" cy="162" rx="9" ry="5" fill="#0f172a" />
          <path d="M 34 95 L 36 158 M 58 95 L 60 158" stroke="url(#royalBlueSuit)" strokeWidth="12" strokeLinecap="round" />
          <path d="M 22 36 Q 44 32 64 36 L 60 100 Q 42 104 28 100 Z" fill="url(#royalBlueShine)" stroke="#1e3a8a" strokeWidth="2" />
          <circle cx="38" cy="18" r="10.5" fill="#fed7aa" />
          <path d="M 26 14 Q 38 5 48 14 Z" fill="url(#royalBlueSuit)" />
          <path d="M 24 12 Q 46 8 48 32 Q 36 36 24 32 Z" fill="url(#clearFaceShield)" stroke="#38bdf8" strokeWidth="1.8" />
          <path d="M 30 50 L 0 68 M 50 50 L 14 74" stroke="url(#royalBlueSuit)" strokeWidth="9" strokeLinecap="round" />
          <circle cx="0" cy="68" r="5.5" fill="#0f172a" />
          <circle cx="14" cy="74" r="5.5" fill="#0f172a" />
          <line x1="0" y1="68" x2="-32" y2="86" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
          <circle cx="-32" cy="86" r="3.5" fill="#38bdf8" />

          <g filter="url(#waterMistGlow)">
            <circle cx="-32" cy="86" r="9" fill="#ffffff" fillOpacity="0.55" />
            <line x1="-32" y1="86" x2="-54" y2="92" stroke="#ffffff" strokeWidth="2.2" opacity="0.9" />
          </g>
        </g>

        <g id="right-hydraulic-scissor-lift" transform="translate(735, 280)">
          <rect x="0" y="380" width="175" height="18" rx="4" fill="url(#chromeTube)" stroke="#1e293b" strokeWidth="2" />
          <circle cx="22" cy="408" r="10.5" fill="#1e293b" stroke="#cbd5e1" strokeWidth="3.5" />
          <circle cx="153" cy="408" r="10.5" fill="#1e293b" stroke="#cbd5e1" strokeWidth="3.5" />
          <circle cx="22" cy="408" r="3.5" fill="#ffffff" />
          <circle cx="153" cy="408" r="3.5" fill="#ffffff" />

          <line x1="30" y1="380" x2="145" y2="285" stroke="url(#chromeTube)" strokeWidth="9" strokeLinecap="round" />
          <line x1="145" y1="380" x2="30" y2="285" stroke="url(#chromeTube)" strokeWidth="9" strokeLinecap="round" />
          <circle cx="87.5" cy="332.5" r="7" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />

          <line x1="30" y1="285" x2="145" y2="190" stroke="url(#chromeTube)" strokeWidth="9" strokeLinecap="round" />
          <line x1="145" y1="285" x2="30" y2="190" stroke="url(#chromeTube)" strokeWidth="9" strokeLinecap="round" />
          <circle cx="87.5" cy="237.5" r="7" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />

          <line x1="30" y1="190" x2="145" y2="95" stroke="url(#chromeTube)" strokeWidth="9" strokeLinecap="round" />
          <line x1="145" y1="190" x2="30" y2="95" stroke="url(#chromeTube)" strokeWidth="9" strokeLinecap="round" />
          <circle cx="87.5" cy="142.5" r="7" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />

          <line x1="87.5" y1="332.5" x2="87.5" y2="142.5" stroke="#e2e8f0" strokeWidth="5.5" strokeDasharray="6 2" />

          <rect x="0" y="80" width="175" height="20" rx="3" fill="url(#metalPlatformPlate)" stroke="#334155" strokeWidth="2" />

          <line x1="12" y1="-20" x2="12" y2="80" stroke="url(#chromeTube)" strokeWidth="7" strokeLinecap="round" />
          <line x1="163" y1="-20" x2="163" y2="80" stroke="url(#chromeTube)" strokeWidth="7" strokeLinecap="round" />
          <line x1="12" y1="-15" x2="163" y2="-15" stroke="url(#chromeTube)" strokeWidth="7" />
          <line x1="12" y1="30" x2="163" y2="30" stroke="url(#chromeTube)" strokeWidth="5.5" />
        </g>

        <g id="worker-3-bottom-right" transform="translate(665, 425)">
          <ellipse cx="28" cy="245" rx="9.5" ry="5" fill="#0f172a" />
          <ellipse cx="54" cy="245" rx="9.5" ry="5" fill="#0f172a" />
          <path d="M 26 165 L 28 242 M 52 165 L 54 242" stroke="url(#royalBlueSuit)" strokeWidth="13" strokeLinecap="round" />
          <path d="M 16 82 Q 38 76 60 82 L 55 170 Q 38 174 22 170 Z" fill="url(#royalBlueShine)" stroke="#1e3a8a" strokeWidth="2" />
          <circle cx="36" cy="52" r="11" fill="#fed7aa" />
          <path d="M 24 46 Q 36 36 48 46 Z" fill="url(#royalBlueSuit)" />
          <path d="M 22 44 Q 44 40 46 64 Q 32 68 22 64 Z" fill="url(#clearFaceShield)" stroke="#38bdf8" strokeWidth="1.8" />
          <path d="M 26 98 L 0 108 L -28 102" stroke="url(#royalBlueSuit)" strokeWidth="10" strokeLinecap="round" />
          <circle cx="-28" cy="102" r="6" fill="#0f172a" />
          <rect x="-48" y="94" width="26" height="16" rx="3" fill="#334155" stroke="#cbd5e1" strokeWidth="1.6" />
          <ellipse cx="-52" cy="102" rx="7" ry="16" fill="#facc15" stroke="#ca8a04" strokeWidth="2.2" />
          <circle cx="-52" cy="102" r="12" fill="#ffffff" fillOpacity="0.45" filter="url(#waterMistGlow)" />
        </g>

        <g id="worker-4-bottom-left" transform="translate(355, 425)">
          <ellipse cx="22" cy="245" rx="9.5" ry="5" fill="#0f172a" />
          <ellipse cx="48" cy="245" rx="9.5" ry="5" fill="#0f172a" />
          <path d="M 20 165 L 22 242 M 46 165 L 48 242" stroke="url(#royalBlueSuit)" strokeWidth="13" strokeLinecap="round" />
          <path d="M 12 82 Q 34 76 56 82 L 50 170 Q 34 174 18 170 Z" fill="url(#royalBlueShine)" stroke="#1e3a8a" strokeWidth="2" />
          <circle cx="32" cy="52" r="11" fill="#fed7aa" />
          <path d="M 20 46 Q 32 36 44 46 Z" fill="url(#royalBlueSuit)" />
          <path d="M 20 44 Q 42 40 44 66 Q 30 70 20 66 Z" fill="url(#clearFaceShield)" stroke="#38bdf8" strokeWidth="1.8" />
          <path d="M 20 98 L 44 110 L 64 92" stroke="url(#royalBlueSuit)" strokeWidth="10" strokeLinecap="round" />
          <circle cx="64" cy="92" r="5.5" fill="#0f172a" />
          <line x1="64" y1="92" x2="80" y2="76" stroke="#cbd5e1" strokeWidth="4.5" strokeLinecap="round" />
        </g>

        <g id="trailing-hose-network">
          <path
            d="M 745 180 C 810 240, 845 370, 845 480 C 845 610, 790 665, 710 675 C 630 682, 520 672, 430 680 C 340 686, 250 678, 190 672 C 145 668, 100 660, 75 630"
            stroke="url(#trailingHoseGrad)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            filter="drop-shadow(0 5px 8px rgba(0,0,0,0.85))"
          />
          <path
            d="M 745 180 C 810 240, 845 370, 845 480 C 845 610, 790 665, 710 675 C 630 682, 520 672, 430 680 C 340 686, 250 678, 190 672"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeOpacity="0.45"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
