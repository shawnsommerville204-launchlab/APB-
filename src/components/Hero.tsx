import React from 'react';
import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Prop */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#001489] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F25A24] animate-pulse" />
              Brand Strategy • Systems • Revenue Intelligence
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.12] mb-6">
              Engineered For Market Dominance &amp; Predictable Growth.
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl font-normal">
              We transform regional home service contractors, commercial vendors, and professional firms into authoritative market leaders through high-converting web architecture, elite brand kits, and Nova speed-to-lead automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#audit"
                className="bg-[#F25A24] hover:bg-[#d94917] text-white text-base font-bold px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl text-center transition flex items-center justify-center gap-2"
              >
                <span>Claim Free Revenue Leak Scan</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="bg-white hover:bg-slate-50 text-[#001489] border border-slate-300 text-base font-bold px-7 py-3.5 rounded-lg text-center transition"
              >
                Explore Solutions
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Sub-15-Second Lead Response
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Custom Vector Brand Architecture
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Airtable / CRM Integration
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Nova Engine Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#080D1A] rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-800 text-white">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-display font-bold text-sm text-slate-200">
                    NOVA REVENUE ENGINE
                  </span>
                </div>
                <span className="text-[10px] bg-slate-800 text-[#F25A24] font-bold px-2 py-1 rounded tracking-wider">
                  ACTIVE
                </span>
              </div>

              {/* Live Metric Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 font-semibold block uppercase">
                    Speed to Lead
                  </span>
                  <span className="text-3xl font-extrabold text-emerald-400 font-mono">
                    12s
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    Automated SMS active
                  </span>
                </div>

                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 font-semibold block uppercase">
                    Conversion Lift
                  </span>
                  <span className="text-3xl font-extrabold text-[#F25A24] font-mono">
                    +38.4%
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    90-Day rolling average
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 mb-5">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-slate-400">Monthly Recovered Pipeline</span>
                  <span className="font-bold text-slate-200">$48,250</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-[#001489] via-blue-500 to-[#F25A24] h-2.5 rounded-full" style={{ width: '78%' }} />
                </div>
              </div>

              {/* Notification Banner */}
              <div className="text-xs bg-blue-950/60 border border-blue-900 p-3.5 rounded-lg text-slate-300 flex items-start gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#F25A24] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">AI Voice/SMS Recovery:</strong> "Missed call intercepted &rarr; Instant SMS sent &rarr; Estimate booked for tomorrow at 10 AM."
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
