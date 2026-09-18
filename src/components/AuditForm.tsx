import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const AuditForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="audit" className="py-24 bg-[#080D1A] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-[#F25A24] font-bold text-xs uppercase tracking-widest">
            Zero Obligation • Rapid Delivery
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4">
            Claim Your Free Revenue Leak Scan
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto font-normal">
            We will review your public presence, customer journey, and response latency to identify exact revenue leaks and missed opportunities.
          </p>
        </div>

        <div className="bg-white text-slate-800 rounded-2xl p-8 sm:p-10 shadow-2xl border border-slate-700">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">
                Audit Request Submitted!
              </h3>
              <p className="text-slate-600 max-w-md mx-auto">
                We have received your details. Shawn Sommerville will personally review your business footprint and deliver your briefing within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Shawn Sommerville"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#001489] focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Wingman Heating & Cooling"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#001489] focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Direct Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(334) 555-0192"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#001489] focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="owner@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#001489] focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Website / Google Business URL (If active)
                </label>
                <input
                  type="text"
                  placeholder="https://example.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#001489] focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Primary Challenge To Address
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#001489] focus:outline-none text-sm bg-white">
                  <option>Missed calls &amp; slow customer follow-up</option>
                  <option>Outdated website that fails to convert visitors</option>
                  <option>Under-pricing services / need authoritative brand kit</option>
                  <option>Local competitors outranking us on Google Maps</option>
                  <option>Complete brand redesign &amp; automation system</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F25A24] hover:bg-[#d94917] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200 text-base uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Submit For Rapid Audit</span>
                <Send className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-slate-400 text-center mt-3">
                🔒 Strictly confidential. No automated marketing spam. Hand-prepared briefing within 24 hours.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
