import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Logo variant="dark" />
        <div className="text-xs text-slate-500 text-center sm:text-right">
          &copy; {new Date().getFullYear()} Auburn Professional Branding (APB). All rights reserved. • Auburn, Alabama
        </div>
      </div>
    </footer>
  );
};
