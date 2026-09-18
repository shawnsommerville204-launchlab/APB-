import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home({ openCalendly }) {
  const [monthlyLeads, setMonthlyLeads] = useState(30);
  const [averageJobValue, setAverageJobValue] = useState(1800);
  const missedRate = 0.35;
  const recoveredCapture = 0.55;
  const estimatedRecoveredDeals = Math.round(monthlyLeads * missedRate * recoveredCapture);
  const estimatedMonthlyGains = estimatedRecoveredDeals * averageJobValue;

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-[#FAF8F5] via-[#F3EFEA] to-[#FAF8F5] border-b border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
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
                  <span>&rarr;</span>
                </button>
                <Link 
                  to="/solutions"
                  className="bg-white hover:bg-slate-50 text-[#001489] border border-[#E8E1D7] text-sm font-bold uppercase tracking-wider px-6 py-4 rounded-xl text-center transition flex items-center justify-center"
                >
                  Explore Page 2: Solutions
                </Link>
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
                    <span className="text-emerald-400 font-bold">✓</span>
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
  );
}
