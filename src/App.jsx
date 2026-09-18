import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';

function Layout({ children, openCalendly }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2433] font-sans flex flex-col justify-between selection:bg-[#F25A24] selection:text-white">
      <div>
        {/* Top Tradition Banner */}
        <div className="bg-[#060d2b] text-white text-xs py-2 px-4 border-b border-[#001489]/30">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-[#F25A24] text-white font-black text-[10px] tracking-wider px-2 py-0.5 rounded-full uppercase">
                Saturday Energy, Daily Precision
              </span>
              <span className="hidden sm:inline text-slate-300">
                Rooted in the Plains. Built for hardworking local contractors & businesses.
              </span>
            </div>
            <button onClick={openCalendly} className="text-white underline hover:text-[#F25A24] font-bold transition">
              Claim 15-Min Coffee Review &rarr;
            </button>
          </div>
        </div>

        {/* Multi-Page Navigation */}
        <nav className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E1D7] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/logo.png" alt="Auburn Professional Branding" className="h-14 w-auto object-contain transition group-hover:scale-105" />
            </Link>

            <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-wider uppercase text-slate-700">
              <Link to="/" className={`transition pb-1 ${location.pathname === '/' ? 'text-[#001489] border-b-2 border-[#F25A24]' : 'hover:text-[#001489]'}`}>
                Page 1: Home &amp; Engine
              </Link>
              <Link to="/solutions" className={`transition pb-1 ${location.pathname === '/solutions' ? 'text-[#001489] border-b-2 border-[#F25A24]' : 'hover:text-[#001489]'}`}>
                Page 2: Solutions &amp; Nova AI
              </Link>
              <Link to="/pricing" className={`transition pb-1 ${location.pathname === '/pricing' ? 'text-[#001489] border-b-2 border-[#F25A24]' : 'hover:text-[#001489]'}`}>
                Page 3: Pricing &amp; Partnership
              </Link>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <button onClick={openCalendly} className="bg-[#001489] hover:bg-[#060d2b] text-white text-xs font-extrabold uppercase tracking-wider px-5 py-3 rounded-lg shadow-md transition">
                Book Calendly Call
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700 font-bold text-lg">
                ☰
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-b border-[#E8E1D7] px-4 py-6 space-y-4 text-sm font-bold uppercase">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-800">Page 1: Home</Link>
              <Link to="/solutions" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-800">Page 2: Solutions</Link>
              <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-800">Page 3: Pricing</Link>
            </div>
          )}
        </nav>

        {children}
      </div>

      {/* Footer */}
      <footer className="bg-[#060d2b] text-white py-12 border-t border-[#001489]/40 mt-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-4">
          <img src="/logo.png" alt="Auburn Professional Branding" className="h-16 w-auto object-contain brightness-110" />
          <div className="flex gap-6 text-xs text-slate-300">
            <Link to="/" className="hover:text-white">Page 1: Home</Link>
            <Link to="/solutions" className="hover:text-white">Page 2: Solutions</Link>
            <Link to="/pricing" className="hover:text-white">Page 3: Pricing</Link>
          </div>
          <p className="text-xs text-slate-400">&copy; 2026 Auburn Professional Branding. All rights reserved. Lee County, AL.</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const openCalendly = () => setBookingModalOpen(true);

  return (
    <BrowserRouter>
      <Layout openCalendly={openCalendly}>
        <Routes>
          <Route path="/" element={<Home openCalendly={openCalendly} />} />
          <Route path="/solutions" element={<Solutions openCalendly={openCalendly} />} />
          <Route path="/pricing" element={<Pricing openCalendly={openCalendly} />} />
        </Routes>
      </Layout>

      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative border-2 border-[#E8E1D7]">
            <button onClick={() => setBookingModalOpen(false)} className="absolute top-4 right-4 text-slate-400 p-2 font-bold text-lg">
              ✕
            </button>
            <h3 className="text-2xl font-bold text-[#001489] mb-2">Book Your 15-Minute Review</h3>
            <p className="text-xs text-slate-600 mb-6">Direct calendar hook configured for immediate booking with zero phone tag.</p>
            <a 
              href="https://calendly.com/auburnprobranding" 
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-[#F25A24] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl block text-center"
            >
              Open Official Calendly Scheduler
            </a>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}
