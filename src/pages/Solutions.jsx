export default function Solutions({ openCalendly }) {
  return (
    <div className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <span className="text-[#F25A24] font-bold uppercase tracking-widest text-xs">
            Engineered Execution
          </span>
          <h1 className="text-4xl sm:text-5xl text-[#001489] mt-2 font-bold">
            Core Solutions Built for the Plains
          </h1>
          <p className="text-slate-700 mt-4 text-base leading-relaxed">
            We don't sell disconnected logos or cosmetic redesigns. We build an integrated system that captures demand, proves credibility, and books revenue.
          </p>
        </div>

        {/* Nova AI Card */}
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
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Immediate personalized SMS dispatch while the phone is in their hand</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Automatic photo collection of the leak, damage, or job requirement</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Syncs directly with your dispatch calendar without interrupting work on site</li>
              </ul>
            </div>
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8E1D7]">
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

        {/* 6-Stage Engine */}
        <div className="bg-[#060d2b] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-3xl mb-10">
            <span className="text-amber-300 font-bold uppercase tracking-widest text-xs">Closed-Loop Conversion</span>
            <h2 className="text-3xl font-bold text-white mt-2">The 6-Stage Revenue Engine</h2>
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
  );
}
