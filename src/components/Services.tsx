import React from 'react';
import { Palette, Bot, Globe, MapPin, Database, Send } from 'lucide-react';

const services = [
  {
    title: 'Brand Architecture & Identity',
    desc: 'Complete identity systems, vector emblems, corporate color theory, and digital asset kits that position you as the premium authority in your market.',
    icon: Palette,
    bullets: ['Primary & Secondary Logo Suites', 'Full Brand Guidelines Document', 'Asset Kits for Print & Web'],
  },
  {
    title: 'Nova Speed-to-Lead Automation',
    desc: 'Never forfeit high-ticket jobs to missed calls. Nova intercepts missed inquiries with an automated, customized text within 15 seconds.',
    icon: Bot,
    bullets: ['Missed-Call AI Text-Back', '24/7 Inquiry Qualification', 'Direct Calendar Self-Booking'],
  },
  {
    title: 'High-Converting Web Systems',
    desc: 'Ultra-fast, mobile-first React and Tailwind architectures built to transform inbound search traffic into qualified phone calls and appointments.',
    icon: Globe,
    bullets: ['Performance Vitals 95+', 'Integrated Direct Booking', 'SEO Structured Schema'],
  },
  {
    title: 'Local Market Dominance',
    desc: 'Google Business Profile optimization, local service area pages, and citation authority that capture top placement in regional Map Packs.',
    icon: MapPin,
    bullets: ['Google Map Pack Ranking', 'Localized Service Hubs', 'Review Acceleration Engine'],
  },
  {
    title: 'CRM & Pipeline Engineering',
    desc: 'Structured database systems in Airtable with automated status notifications, estimate tracking, and multi-stage deal pipelines.',
    icon: Database,
    bullets: ['Automated Stage Triggers', 'GA4 Goal Event Tracking', 'Multi-Channel Alert Dispatch'],
  },
  {
    title: 'Direct Outreach Systems',
    desc: 'Outbound B2B infrastructure connecting trade contractors with commercial accounts, property managers, and general builders.',
    icon: Send,
    bullets: ['Commercial Prospect Lists', 'Automated Email Sequences', 'Inbox Deliverability Guard'],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F25A24] font-display font-bold text-xs uppercase tracking-widest">
            Capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Unified Brand &amp; Automation Architecture
          </h2>
          <p className="text-slate-600 text-base">
            We merge design prestige with operational systems so your business commands higher rates and captures every customer inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-[#001489] transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-blue-50 text-[#001489] rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                    {svc.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                </div>

                <ul className="text-xs text-slate-500 space-y-2 border-t border-slate-100 pt-4">
                  {svc.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F25A24]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
