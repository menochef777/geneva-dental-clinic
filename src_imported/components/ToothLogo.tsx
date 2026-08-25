import React from 'react';

interface ToothLogoProps {
  className?: string;
  size?: number;
}

export const ToothLogo: React.FC<ToothLogoProps> = ({ className = '', size = 26 }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Clean modern outline tooth icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white flex-shrink-0"
      >
        <path
          d="M7 3C4.23858 3 2 5.23858 2 8C2 10.3235 3.32832 12.338 5.25301 13.3328C6.01235 13.7253 6.55171 14.4756 6.72124 15.3138L7.54519 19.3879C7.81896 20.7416 9.00693 21.7248 10.3879 21.7248C11.8385 21.7248 13.0145 20.5488 13.0145 19.0982V14.5C13.0145 13.9477 13.4622 13.5 14.0145 13.5C14.5668 13.5 15.0145 13.9477 15.0145 14.5V19.0982C15.0145 20.5488 16.1905 21.7248 17.6411 21.7248C19.0221 21.7248 20.2101 20.7416 20.4838 19.3879L21.3078 15.3138C21.4773 14.4756 22.0167 13.7253 22.776 13.3328C24.7007 12.338 26.029 10.3235 26.029 8C26.029 5.23858 23.7904 3 21.029 3C18.9818 3 17.234 4.23078 16.4831 6.00293C15.9388 5.37894 15.0219 5 14.0145 5C13.0071 5 12.0902 5.37894 11.5459 6.00293C10.795 4.23078 9.04718 3 7 3Z"
          transform="scale(0.85) translate(1.5, 0.5)"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex flex-col">
        <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white font-['Montserrat'] leading-none">
          GENEVA <span className="font-light text-neutral-300">CLINIC</span>
        </span>
        <span className="text-[9px] uppercase tracking-[0.28em] text-neutral-400 font-medium font-['Montserrat'] mt-0.5">
          Dental & Aesthetics
        </span>
      </div>
    </div>
  );
};
