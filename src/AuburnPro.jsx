import { useState } from 'react';

// Lightweight UI helper icons (prevents React 19 / bundler dependency collisions)
function IconCheck({ className = "w-4 h-4 text-emerald-500" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconArrowRight({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function IconBot({ className = "w-10 h-10" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  );
}

function IconHammer({ className = "w-8 h-8" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 4l5 5-3.5 3.5-5-5L15 4zM9 10l-6 6 2 2 6-6" />
    </svg>
  );
}

function IconCalendar({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconX({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function IconMenu({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function IconFlame({ className = "w-3 h-3" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.5 6 6 9 6 13c0 3.3 2.7 6 6 6s6-2.7 6-6c0-4-2.5-7-6-11zm0 15c-1.7 0-3-1.3-3-3 0-1.8 1.4-3.4 3-5.2 1.6 1.8 3 3.4 3 5.2 0 1.7-1.3 3-3 3z"/>
    </svg>
  );
}

export default function AuburnPro() {
  // 3-Page State: 'home' | 'solutions' | 'pricing'
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  // ROI Interactive Calculator State
  const [monthlyLeads, setMonthlyLeads] = useState(30);
  const [averageJobValue, setAverageJobValue] = useState(1800);
  const missedRate = 0.35; 
  const recoveredCapture = 0.55; 
  const estimatedRecoveredDeals = Math.round(monthlyLeads * missedRate * recoveredCapture);
  const estimatedMonthlyGains = estimatedRecoveredDeals * averageJobValue;

  const openCalendly = () => setBookingModalOpen(true);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2433] font-sans selection:bg-[#F25A24] selection:text-white relative flex flex-col justify-between">
      
      <div>
        {/* Top Tradition Ribbon */}
        <div className="bg-[#060d2b] text-white text-xs py-2 px-4 border-b border-[#001489]/30">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-[#F25A24] text-white font-black text-[10px] tracking-wider px-2 py-0.5 rounded-full uppercase">
                <IconFlame className="w-3 h-3 text-white" /> Saturday Energy, Daily Precision
              </span>
              <span className="hidden sm:inline text-slate-300">
                Rooted in the Plains. Built for hardworking local contractors & businesses.
              </span>
            </div>
            <button 
              onClick={openCalendly}
              className="text-white underline hover:text-[#F25A24] font-bold transition"
            >
              Claim 15-Min Coffee Review &rarr;
            </button>
          </div>
        </div>

        {/* 3-Page Main Navigation */}
        <nav className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E1D7] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            
            {/* Logo Slot */}
            <div 
              onClick={() => navigateTo('home')} 
              className="flex items-center gap-3 cursor-pointer group"
            >
              <img 
                src="/logo.png" 
                alt="Auburn Professional Branding" 
                className="h-14 w-auto object-contain transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* 3 Main Desktop Pages */}
            <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-wider uppercase text-slate-700">
              <button 
                onClick={() => navigateTo('home')} 
                className={`transition pb-1 ${currentPage === 'home' ? 'text-[#001489] border-b-2 border-[#F25A24]' : 'hover:text-[#001489]'}`}
              >
                Page 1: Home &amp; Revenue Engine
              </button>
              <button 
                onClick={() => navigateTo('solutions')} 
                className={`transition pb-1 ${currentPage === 'solutions' ? 'text-[#001489] border-b-2 border-[#F25A24]' : 'hover:text-[#001489]'}`}
              >
                Page 2: Solutions &amp; Nova AI
              </button>
              <button 
                onClick={() => navigateTo('pricing')} 
                className={`transition pb-1 ${currentPage === 'pricing' ? 'text-[#001489] border-b-2 border-[#F25A24]' : 'hover:text-[#001489]'}`}
              >
                Page 3: Pricing &amp; Partnership
              </button>
            </div>

            {/* Desktop Action */}
            <div className="hidden sm:flex items-center gap-3">
              <button 
                onClick={openCalendly}
                className="bg-[#001489] hover:bg-[#060d2b] text-white text-xs font-extrabold uppercase tracking-wider px-5 py-3 rounded-lg shadow-md transition flex items-center gap-2"
              >
                <IconCalendar className="w-4 h-4 text-[#F25A24]" />
                <span>Book Calendly Audit</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700">
                {mobileMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-b border-[#E8E1D7] px-4 py-6 space-y-4 text-sm font-bold uppercase tracking-wider">
              <div 
                onClick={() => navigateTo('home')} 
                className={`py-2 cursor-pointer ${currentPage === 'home' ? 'text-[#001489]' : 'text-slate-800'}`}
              >
                Page 1: Home &amp; Revenue Engine
              </div>
              <div 
                onClick={() => navigateTo('solutions')} 
                className={`py-2 cursor-pointer ${currentPage === 'solutions' ? 'text-[#001489]' : 'text-slate-800'}`}
              >
                Page 2: Solutions &amp; Nova AI
              </div>
              <div 
                onClick={() => navigateTo('pricing')} 
                className={`py-2 cursor-pointer ${currentPage === 'pricing' ? 'text-[#001489]' : 'text-slate-800'}`}
              >
                Page 3: Pricing &amp; Partnership
              </div>
              <button 
                onClick={() => { setMobileMenuOpen(false); openCalendly(); }}
                className="w-full mt-2 bg-[#F25A24] text-white py-3 rounded-lg font-black uppercase text-xs"
              >
                Book 1-on-1 Calendly Audit
              </button>
            </div>
          )}
        </nav>

        {/* =========================================================
            PAGE 1: HOME & REVENUE ENGINE
        ========================================================= */}
        {currentPage === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-[#FAF8F5] via-[#F3EFEA] to-[#FAF8F5] border-b border-[#E8E1D7]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Logo Header Banner */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8 pb-6 border-b border-[#E8E1D7]/70 text-center sm:text-left">
                  <img 
                    src="/logo.png" 
                    alt="Auburn Professional Branding Emblem" 
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-md"
                  />
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white border border-[#E8E1D7] px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-[#001489] shadow-sm mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#F25A24] animate-ping" />
                      Lee County Operational Benchmark
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#001489] tracking-tight">
                      Honest Craft. Calibrated Execution.
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column: Headlines */}
                  <div className="lg:col-span-7">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#001489] leading-[1.12] mb-6 font-bold">
                      Built on Lee County grit. <br />
                      <span className="italic font-normal text-[#F25A24]">Powered by modern precision.</span>
                    </h1>

                    <p className="text-slate-700 text-lg sm:text-xl font-medium leading-snug mb-4 text-[#001489]">
                      Master your trade. We engineer the infrastructure so you never drop a job.
                    </p>

                    <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-2xl">
                      You built your reputation on the roof, behind the tool belt, and in client homes. 
                      Auburn Professional Branding provides authoritative brand architecture and the automated 
                      <strong> Nova AI Speed-to-Lead dispatch engine</strong> that catches emergency calls and quote 
                      requests in under 15 seconds.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                      <button 
                        onClick={openCalendly}
                        className="bg-[#F25A24] hover:bg-[#fa7a4b] text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-3"
                      >
                        <span>Lock In Your Calendly Audit</span>
                        <IconArrowRight className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => navigateTo('solutions')}
                        className="bg-white hover:bg-slate-50 text-[#001489] border border-[#E8E1D7] text-sm font-bold uppercase tracking-wider px-6 py-4 rounded-xl text-center transition"
                      >
                        Explore Page 2: Solutions
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8E1D7] text-slate-700">
                      <div>
                        <span className="text-2xl font-bold text-[#001489] block">&lt; 15 Sec</span>
                        <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Missed-Call Intercept</span>
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-[#F25A24] block">+38.4%</span>
                        <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Avg Revenue Recovery</span>
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-[#001489] block">100% Local</span>
                        <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Auburn &amp; Opelika</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Interactive Dispatch Terminal */}
                  <div className="lg:col-span-5">
                    <div className="bg-[#060d2b] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border-4 border-[#E8E1D7]/40 relative overflow-hidden">
                      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                        <div className="flex items-center gap-2.5">
                          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="font-mono text-xs tracking-widest text-slate-300 font-bold">NOVA DISPATCH LIVE</span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest bg-[#F25A24] px-2.5 py-0.5 rounded text-white">
                          ACTIVE
                        </span>
                      </div>

                      <div className="space-y-4 mb-6 text-xs">
                        <div className="bg-white/10 p-3.5 rounded-xl border border-white/10">
                          <div className="flex justify-between text-slate-400 mb-1">
                            <span>Inbound Missed Call: Slab Leak Emergency</span>
                            <span className="text-amber-400 font-mono">6:42 PM</span>
                          </div>
                          <p className="text-slate-200">Missed while technician was completing pipe pressure test.</p>
                        </div>

                        <div className="bg-[#001489]/60 p-3.5 rounded-xl border border-blue-400/30">
                          <div className="flex justify-between text-blue-200 mb-1">
                            <span>Nova AI Instant SMS Trigger</span>
                            <span className="text-emerald-400 font-mono">00:08s</span>
                          </div>
                          <p className="text-white italic">"Hey David, saw we just missed your call. Are you experiencing an active water leak or plumbing emergency tonight?"</p>
                        </div>

                        <div className="bg-emerald-950/60 p-3.5 rounded-xl border border-emerald-500/30 flex items-center justify-between">
                          <div>
                            <span className="text-emerald-300 font-bold block">Lead Captured & Scheduled</span>
                            <span className="text-slate-300 text-[11px]">8:00 AM First Stop Dispatched</span>
                          </div>
                          <IconCheck className="w-5 h-5 text-emerald-400" />
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-slate-300">
                        <span>Response Benchmark: <strong className="text-white">Sub-15 Seconds</strong></span>
                        <span className="text-amber-300 font-bold">Zero Lost Margin</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Calculator Section */}
            <section className="py-20 bg-white border-b border-[#E8E1D7]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-[#F25A24] font-bold uppercase tracking-widest text-xs">
                    Zero Guesswork • Clear Math
                  </span>
                  <h2 className="text-3xl sm:text-4xl text-[#001489] mt-2 font-bold">
                    Calculate Your Leaked Revenue in Lee County
                  </h2>
                  <p className="text-slate-600 mt-3 text-base">
                    62% of homeowners hire whichever contractor calls or texts back first. 
                    See what happens when you plug the missed-call leak with APB systems.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#E8E1D7] max-w-4xl mx-auto shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                          <span>Average Inbound Inquiries / Month</span>
                          <span className="text-[#001489] text-lg font-bold">{monthlyLeads} leads</span>
                        </div>
                        <input 
                          type="range" 
                          min="10" 
                          max="150" 
                          value={monthlyLeads}
                          onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                          className="w-full accent-[#F25A24] cursor-pointer"
                        />
                        <span className="text-[11px] text-slate-500">Includes phone calls, Google Maps clicks, and website inquiries.</span>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                          <span>Average Ticket or Project Value</span>
                          <span className="text-[#001489] text-lg font-bold">${averageJobValue.toLocaleString()}</span>
                        </div>
                        <input 
                          type="range" 
                          min="300" 
                          max="12000" 
                          step="100"
                          value={averageJobValue}
                          onChange={(e) => setAverageJobValue(Number(e.target.value))}
                          className="w-full accent-[#001489] cursor-pointer"
                        />
                        <span className="text-[11px] text-slate-500">Repairs, replacements, installs, or commercial contracts.</span>
                      </div>
                    </div>

                    <div className="bg-[#060d2b] text-white p-8 rounded-2xl border-2 border-amber-500/40 text-center">
                      <div className="text-xs uppercase tracking-widest text-amber-300 font-bold mb-2">
                        Recovered Revenue Estimate
                      </div>
                      <div className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-2">
                        +${estimatedMonthlyGains.toLocaleString()}
                      </div>
                      <div className="text-xs text-slate-300 uppercase tracking-wider mb-6">
                        Estimated Monthly Pipeline Recaptured
                      </div>
                      <div className="pt-3 border-t border-white/15 text-xs text-slate-300 mb-6">
                        Equals approximately <strong className="text-white font-bold">{estimatedRecoveredDeals} saved contracts</strong> each month.
                      </div>
                      <button 
                        onClick={openCalendly}
                        className="w-full bg-[#F25A24] hover:bg-[#fa7a4b] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-lg transition"
                      >
                        Book Free Audit & Plug This Leak
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* =========================================================
            PAGE 2: SOLUTIONS & NOVA AI
        ========================================================= */}
        {currentPage === 'solutions' && (
          <div className="py-16 bg-[#FAF8F5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Section Header */}
              <div className="max-w-3xl mb-16">
                <span className="text-[#F25A24] font-bold uppercase tracking-widest text-xs">
                  Engineered Execution
                </span>
                <h1 className="text-4xl sm:text-5xl text-[#001489] mt-2 font-bold">
                  Core Solutions Built for the Plains
                </h1>
                <p className="text-slate-700 mt-4 text-base leading-relaxed">
                  We don't sell disconnected logos or cosmetic website redesigns. We build an integrated system that captures demand, proves credibility, and books revenue.
                </p>
              </div>

              {/* Solution 1: Nova AI */}
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8E1D7] shadow-sm mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-[#F25A24]/10 text-[#F25A24] text-xs font-bold px-3 py-1 rounded-full uppercase mb-4">
                      Sub-15 Second Speed-to-Lead
                    </div>
                    <h2 className="text-3xl font-bold text-[#001489] mb-4">
                      Nova AI: Automated Call Intercept
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      When an emergency pipe bursts or an AC compressor cuts out on a humid Friday night, customers don't wait on voicemails. Nova detects the missed call and texts them back in under 15 seconds to triage the issue and secure the booking.
                    </p>
                    <ul className="space-y-3 text-xs text-slate-700">
                      <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#F25A24]" /> Immediate personalized SMS dispatch while the phone is in their hand</li>
                      <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#F25A24]" /> Automatic photo collection of the leak, damage, or job requirement</li>
                      <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#F25A24]" /> Syncs directly with your dispatch calendar without interrupting work on site</li>
                    </ul>
                  </div>
                  <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8E1D7]">
                    <IconBot className="w-12 h-12 text-[#F25A24] mb-4" />
                    <h3 className="text-xl font-bold text-[#001489] mb-2">Live Test on Your Own Phone</h3>
                    <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                      Book a brief demonstration. We will trigger an inbound call to our test line and watch how fast Nova handles the intake on your phone.
                    </p>
                    <button 
                      onClick={openCalendly}
                      className="bg-[#001489] hover:bg-[#060d2b] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition"
                    >
                      Schedule Nova Demonstration
                    </button>
                  </div>
                </div>
              </div>

              {/* Solution 2: Brand Architecture */}
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8E1D7] shadow-sm mb-12">
                <div className="max-w-3xl mb-8">
                  <div className="inline-flex items-center gap-2 bg-[#001489]/10 text-[#001489] text-xs font-bold px-3 py-1 rounded-full uppercase mb-4">
                    High-Authority Visuals
                  </div>
                  <h2 className="text-3xl font-bold text-[#001489] mb-4">
                    Brand Identity That Justifies Higher Rates
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Clients will nickel-and-dime an amateur-looking estimate. We build vector branding suites, trailer wraps, and digital letterheads that establish unquestioned authority across Lee County.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#E8E1D7]">
                    <span className="font-serif text-lg font-bold text-[#001489] block mb-1">01. Vector Suite</span>
                    <span className="text-xs text-slate-600">Truck graphics, high-res embroidery formats, and durable print files.</span>
                  </div>
                  <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#E8E1D7]">
                    <span className="font-serif text-lg font-bold text-[#001489] block mb-1">02. Proposal Assets</span>
                    <span className="text-xs text-slate-600">Clean estimate templates and digital letterheads that win commercial bids.</span>
                  </div>
                  <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#E8E1D7]">
                    <span className="font-serif text-lg font-bold text-[#001489] block mb-1">03. Map Pack Kit</span>
                    <span className="text-xs text-slate-600">Google Business optimization and verified local review acceleration.</span>
                  </div>
                </div>
              </div>

              {/* Solution 3: The 6-Stage Engine */}
              <div className="bg-[#060d2b] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
                <div className="max-w-3xl mb-10">
                  <span className="text-amber-300 font-bold uppercase tracking-widest text-xs">Closed-Loop Conversion</span>
                  <h2 className="text-3xl font-bold text-white mt-2">The 6-Stage Revenue Engine</h2>
                  <p className="text-slate-300 text-xs mt-2">Every touchpoint where money is won or lost in local contracting.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { s: '01', t: 'Discovery', d: 'Google Map Pack ranking ensuring Lee County homeowners see you first.' },
                    { s: '02', t: 'Authority', d: 'High-contrast branding and authentic reviews that create instant trust.' },
                    { s: '03', t: 'Contact', d: 'One-touch tap-to-call and clean direct booking with zero friction.' },
                    { s: '04', t: 'Speed (Nova)', d: 'Sub-15s automated triage intercepting missed opportunities instantly.' },
                    { s: '05', t: 'Estimate', d: 'Structured digital invoicing and automated SMS confirmations.' },
                    { s: '06', t: 'Retention', d: 'Automated 5-star review collection and seasonal service reminders.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/10 p-6 rounded-2xl border border-white/10">
                      <span className="text-xs font-mono font-bold text-[#F25A24]">STAGE {item.s}</span>
                      <h3 className="text-lg font-bold text-white mt-1 mb-2">{item.t}</h3>
                      <p className="text-xs text-slate-300">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* =========================================================
            PAGE 3: PRICING & PARTNERSHIP
        ========================================================= */}
        {currentPage === 'pricing' && (
          <div className="py-16 bg-[#FAF8F5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[#F25A24] font-bold uppercase tracking-widest text-xs">
                  Transparent &amp; Accessible
                </span>
                <h1 className="text-4xl sm:text-5xl text-[#001489] mt-2 font-bold">
                  Hometown Pricing. Unmatched Payoff.
                </h1>
                <p className="text-slate-600 mt-3 text-base">
                  Every package is priced so that <strong>a single recaptured job covers your entire monthly investment</strong>.
                </p>
              </div>

              {/* 3-Tier Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
                
                {/* TIER 1 */}
                <div className="bg-white rounded-3xl p-8 border border-[#E8E1D7] shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-[#F25A24] font-bold uppercase tracking-widest text-xs mb-2">Tier 1 • Foundations</div>
                    <h2 className="text-2xl font-bold text-[#001489]">The Local Standout</h2>
                    <div className="my-6">
                      <span className="text-4xl font-bold text-[#001489]">$495</span>
                      <span className="text-slate-500 text-xs"> / month</span>
                      <div className="text-[11px] text-emerald-600 font-bold mt-1">One job pays for this entire month</div>
                    </div>
                    <ul className="space-y-3 text-xs text-slate-700 mb-8">
                      <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#F25A24]" /> Core Vector Logo &amp; Brand Standards Kit</li>
                      <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#F25A24]" /> Nova AI Missed-Call Auto Text-Back (&lt;15s)</li>
                      <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#F25A24]" /> Google Business Profile Optimization</li>
                      <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#F25A24]" /> Direct Calendly / Mobile Booking Sync</li>
                    </ul>
                  </div>
                  <button onClick={openCalendly} className="w-full bg-slate-100 hover:bg-[#001489] hover:text-white text-[#001489] font-bold text-xs uppercase py-3.5 rounded-xl transition">
                    Select Local Standout
                  </button>
                </div>

                {/* TIER 2 */}
                <div className="bg-[#060d2b] text-white rounded-3xl p-8 border-2 border-[#F25A24] shadow-xl flex flex-col justify-between relative transform lg:-translate-y-2">
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#F25A24] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">
                    Most Popular in Lee County
                  </div>
                  <div>
                    <div className="text-amber-400 font-bold uppercase tracking-widest text-xs mb-2">Tier 2 • Growth Engine</div>
                    <h2 className="text-2xl font-bold text-white">Plains Market Leader</h2>
                    <div className="my-6">
                      <span className="text-4xl font-bold text-emerald-400">$950</span>
                      <span className="text-slate-300 text-xs"> / month</span>
                      <div className="text-[11px] text-amber-300 font-bold mt-1">Recaptures 3–8 jobs per month on average</div>
                    </div>
                    <ul className="space-y-3 text-xs text-slate-200 mb-8">
                      <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-amber-400" /> Complete Identity Suite</li>
                      <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-amber-400" /> High-Speed Custom Website</li>
                      <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-amber-400" /> 24/7 Nova AI Lead Qualification</li>
                      <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-amber-400" /> Local SEO &amp; Google Map Pack Rank</li>
                      <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-amber-400" /> Automated 5-Star Google Review Follow-ups</li>
                    </ul>
                  </div>
                  <button onClick={openCalendly} className="w-full bg-[#F25A24] hover:bg-[#fa7a4b] text-white font-bold text-xs uppercase py-3.5 rounded-xl shadow-lg transition">
                    Start Market Leader
                  </button>
                </div>

                {/* TIER 3 */}
                <div className="bg-white rounded-3xl p-8 border border-[#E8E1D7] shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-[#F25A24] font-bold uppercase tracking-widest text-xs mb-2">Tier 3 • Commercial</div>
                    <h2 className="text-2xl font-bold text-[#001489]">The Commercial Titan</h2>
                    <div className="my-6">
                      <span className="text-4xl font-bold text-[#001489]">$1,850</span>
                      <span className="text-slate-500 text-xs"> / month</span>
                      <div className="text-[11px] text-emerald-600 font-bold mt-1">Multi-crew triage &amp; pipeline</div>
                    </div>
                    <ul className="space-y-3 text-xs text-slate-700 mb-8">
                      <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#001489]" /> Full APB CRM &amp; Airtable Setup</li>
                      <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#001489]" /> Commercial Account Outreach System</li>
                      <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#001489]" /> Multi-Line Voice &amp; SMS Dispatch</li>
                      <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#001489]" /> Monthly 1-on-1 Revenue Leak Audits</li>
                    </ul>
                  </div>
                  <button onClick={openCalendly} className="w-full bg-slate-100 hover:bg-[#001489] hover:text-white text-[#001489] font-bold text-xs uppercase py-3.5 rounded-xl transition">
                    Select Commercial Titan
                  </button>
                </div>

              </div>

              {/* Who We Serve Breakdown */}
              <div className="mb-20">
                <div className="max-w-3xl mb-8">
                  <span className="text-[#F25A24] font-bold uppercase tracking-widest text-xs">Dedicated Specialization</span>
                  <h2 className="text-3xl font-bold text-[#001489] mt-1">Who We Serve Across Lee County</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    'HVAC & Climate Specialists',
                    'Plumbing & Gas Contractors',
                    'Roofing & General Trades',
                    'Electrical & Automation Pros',
                    'Landscaping & Earthworks',
                    'Local Retail & Specialty Storefronts',
                  ].map((trade, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E8E1D7] flex items-center gap-4">
                      <IconHammer className="w-8 h-8 text-[#F25A24] flex-shrink-0" />
                      <span className="font-bold text-sm text-[#001489]">{trade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Story / Creed Banner */}
              <div className="bg-[#060d2b] p-8 sm:p-12 rounded-3xl text-white border-2 border-[#E8E1D7]">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#F25A24] mb-3">"We don't build decoration. We build revenue systems."</h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl mb-6">
                  Auburn Professional Branding was founded right here in Lee County. We saw hardworking trade owners losing thousands in margin every week simply because their phones went unanswered while working on site. We level the playing field with responsive, reliable systems built on honest accountability.
                </p>
                <button 
                  onClick={openCalendly}
                  className="bg-[#F25A24] hover:bg-[#fa7a4b] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg transition"
                >
                  Book Founder Coffee Audit
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Global Footer */}
      <footer className="bg-[#060d2b] text-white py-12 border-t border-[#001489]/40 mt-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-4">
          <img 
            src="/logo.png" 
            alt="Auburn Professional Branding" 
            className="h-16 w-auto object-contain brightness-110"
          />
          <div className="flex gap-6 text-xs text-slate-300">
            <button onClick={() => navigateTo('home')} className="hover:text-white">Page 1: Home</button>
            <button onClick={() => navigateTo('solutions')} className="hover:text-white">Page 2: Solutions</button>
            <button onClick={() => navigateTo('pricing')} className="hover:text-white">Page 3: Pricing</button>
          </div>
          <p className="text-xs text-slate-400">&copy; 2026 Auburn Professional Branding. All rights reserved. Lee County, AL.</p>
        </div>
      </footer>

      {/* Calendly Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative border-2 border-[#E8E1D7]">
            <button onClick={() => setBookingModalOpen(false)} className="absolute top-4 right-4 text-slate-400 p-2">
              <IconX className="w-5 h-5" />
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

    </div>
  );
}
