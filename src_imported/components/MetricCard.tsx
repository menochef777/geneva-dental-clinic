import React from 'react';
import { Star } from 'lucide-react';

interface MetricCardProps {
  percentage?: string;
  label?: string;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  percentage = '98%',
  label = 'LOYAL DENTAL PATIENTS',
  className = '',
}) => {
  return (
    <div
      id="metric-patient-card"
      className={`relative inline-flex flex-col select-none ${className}`}
    >
      {/* Outer Metallic Bevel Container */}
      <div className="relative z-10 flex flex-col items-start bg-gradient-to-b from-[#3a3d42] via-[#232528] to-[#141517] text-white rounded-[26px] p-5 sm:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-[1.02] border border-[#52575f]/60 font-['Montserrat'] min-w-[190px] backdrop-blur-md">
        {/* Subtle Inner Glass Highlight */}
        <div className="absolute inset-[1px] rounded-[25px] border border-white/10 pointer-events-none" />
        
        {/* Percentage */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-4xl sm:text-[46px] font-black text-white tracking-tight font-['Montserrat'] leading-none">
            {percentage}
          </span>
        </div>

        {/* Label */}
        <p className="text-[11px] sm:text-xs font-bold text-neutral-300 leading-tight max-w-[140px] font-['Montserrat'] uppercase tracking-wider">
          {label}
        </p>

        {/* Rating stars & verified score */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 w-full">
          <div className="flex text-amber-400 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs font-extrabold tracking-wider text-neutral-300 ml-auto font-['Montserrat']">
            4.9 / 5.0
          </span>
        </div>
      </div>
    </div>
  );
};
