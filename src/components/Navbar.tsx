import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <a href="#services" className="hover:text-[#001489] transition">Services</a>
          <a href="#nova" className="hover:text-[#001489] transition flex items-center gap-1.5">
            <span>Nova AI</span>
            <span className="bg-blue-100 text-[#001489] text-[10px] font-bold px-2 py-0.5 rounded-full">
              Automated
            </span>
          </a>
          <a href="#framework" className="hover:text-[#001489] transition">6-Stage Model</a>
          <a href="#audit" className="hover:text-[#001489] transition">Audit</a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#audit"
            className="bg-[#F25A24] hover:bg-[#d94917] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span>Book Free Audit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-slate-700 hover:text-[#001489]"
          >
            Services
          </a>
          <a
            href="#nova"
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-slate-700 hover:text-[#001489]"
          >
            Nova AI Revenue System
          </a>
          <a
            href="#framework"
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-slate-700 hover:text-[#001489]"
          >
            6-Stage Revenue Model
          </a>
          <a
            href="#audit"
            onClick={() => setIsOpen(false)}
            className="block bg-[#F25A24] text-white text-center font-bold py-3 rounded-lg"
          >
            Book Free Audit
          </a>
        </div>
      )}
    </header>
  );
};
