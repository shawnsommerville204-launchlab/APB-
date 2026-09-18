import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '' }) => {
  const isDark = variant === 'dark';
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg className="w-10 h-10 transform transition duration-300 hover:scale-105" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="44" stroke="#F25A24" stroke-width="7" stroke-dasharray="190 80" stroke-linecap="round" />
        <path d="M42 35 C46 32 54 30 62 31 C68 32 75 37 76 43 C72 41 68 42 66 45 C73 45 76 49 75 55 C70 53 66 54 64 58 C68 62 67 69 62 73 C58 66 57 60 52 56 C46 64 42 70 36 75 C41 68 43 60 41 53 C36 58 31 63 26 67 C30 58 34 50 37 42 C33 46 29 50 25 54 C28 44 34 37 42 35 Z" fill={isDark ? "#0A25C9" : "#001489"} />
        <polygon points="46,41 52,42 49,44" fill="#FFFFFF" />
      </svg>
      <div className="flex flex-col">
        <span className={`font-serif text-2xl font-bold tracking-tight leading-none ${isDark ? 'text-white' : 'text-[#001489]'}`}>
          Auburn
        </span>
        <span className="font-display text-[9px] font-bold tracking-[0.2em] text-[#8C827A] uppercase leading-none mt-1">
          Professional Branding
        </span>
      </div>
    </div>
  );
};
