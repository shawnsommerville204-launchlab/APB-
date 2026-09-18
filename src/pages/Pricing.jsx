export default function Pricing({ openCalendly }) {
  return (
    <div className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* 3-Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          <div className="bg-white rounded-3xl p-8 border border-[#E8E1D7] shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-[#F25A24] font-bold uppercase tracking-widest text-xs mb-2">Tier 1 • Foundations</div>
              <h2 className="text-2xl font-bold text-[#001489]">The Local Standout</h2>
              <div className="my-6">
                <span className="text-4xl font-bold text-[#001489]">$495</span>
                <span className="text-slate-500 text-xs"> / month</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-700 mb-8">
                <li>✓ Core Vector Logo &amp; Brand Standards Kit</li>
                <li>✓ Nova AI Missed-Call Auto Text-Back (&lt;15s)</li>
                <li>✓ Google Business Profile Optimization</li>
                <li>✓ Direct Calendly / Mobile Booking Sync</li>
              </ul>
            </div>
            <button onClick={openCalendly} className="w-full bg-slate-100 hover:bg-[#001489] hover:text-white text-[#001489] font-bold text-xs uppercase py-3.5 rounded-xl transition">
              Select Local Standout
            </button>
          </div>

          <div className="bg-[#060d2b] text-white rounded-3xl p-8 border-2 border-[#F25A24] shadow-xl flex flex-col justify-between relative transform lg:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#F25A24] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">
              Most Popular
            </div>
            <div>
              <div className="text-amber-400 font-bold uppercase tracking-widest text-xs mb-2">Tier 2 • Growth Engine</div>
              <h2 className="text-2xl font-bold text-white">Plains Market Leader</h2>
              <div className="my-6">
                <span className="text-4xl font-bold text-emerald-400">$950</span>
                <span className="text-slate-300 text-xs"> / month</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-200 mb-8">
                <li>✓ Complete Identity Suite</li>
                <li>✓ High-Speed Custom Website</li>
                <li>✓ 24/7 Nova AI Lead Qualification</li>
                <li>✓ Local SEO &amp; Google Map Pack Rank</li>
              </ul>
            </div>
            <button onClick={openCalendly} className="w-full bg-[#F25A24] hover:bg-[#fa7a4b] text-white font-bold text-xs uppercase py-3.5 rounded-xl shadow-lg transition">
              Start Market Leader
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#E8E1D7] shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-[#F25A24] font-bold uppercase tracking-widest text-xs mb-2">Tier 3 • Commercial</div>
              <h2 className="text-2xl font-bold text-[#001489]">The Commercial Titan</h2>
              <div className="my-6">
                <span className="text-4xl font-bold text-[#001489]">$1,850</span>
                <span className="text-slate-500 text-xs"> / month</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-700 mb-8">
                <li>✓ Full APB CRM &amp; Airtable Setup</li>
                <li>✓ Commercial Account Outreach System</li>
                <li>✓ Multi-Line Voice &amp; SMS Dispatch</li>
              </ul>
            </div>
            <button onClick={openCalendly} className="w-full bg-slate-100 hover:bg-[#001489] hover:text-white text-[#001489] font-bold text-xs uppercase py-3.5 rounded-xl transition">
              Select Commercial Titan
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
