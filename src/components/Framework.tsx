import React from 'react';
import { Search, Award, MessageSquare, Zap, CheckSquare, RefreshCw } from 'lucide-react';

const stages = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Local search visibility and Google Map Pack positioning so buyers locate you first.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Trust',
    desc: 'Elite brand consistency, verified credentials, and high-velocity social proof.',
    icon: Award,
  },
  {
    num: '03',
    title: 'Contact',
    desc: '1-click mobile calling, instant estimate triggers, and frictionless intake forms.',
    icon: MessageSquare,
  },
  {
    num: '04',
    title: 'Response',
    desc: 'Nova AI automated 15-second text-back to capture leads before they call competitors.',
    icon: Zap,
    highlight: true,
  },
  {
    num: '05',
    title: 'Conversion',
    desc: 'Transparent pricing presentation, automated follow-ups, and streamlined closing.',
    icon: CheckSquare,
  },
  {
    num: '06',
    title: 'Retention',
    desc: 'Systematized review generation, recurring maintenance agreements, and cross-sells.',
    icon: RefreshCw,
  },
];

export const Framework: React.FC = () => {
  return (
    <section id="framework" className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F25A24] font-display font-bold text-xs uppercase tracking-widest">
            Revenue Engineering
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            The APB 6-Stage Revenue Model
          </h2>
          <p className="text-slate-600 text-base">
            We don't merely design logos. We systematically audit and optimize every touchpoint where potential clients either convert or leak money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stg) => {
            const IconComponent = stg.icon;
            return (
              <div
                key={stg.num}
                className={`p-6 rounded-2xl border transition duration-300 ${
                  stg.highlight
                    ? 'bg-orange-50/40 border-[#F25A24] shadow-md'
                    : 'bg-slate-50 border-slate-200 hover:border-[#001489] hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-[#8C827A] font-mono">
                    {stg.num}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      stg.highlight
                        ? 'bg-[#F25A24] text-white'
                        : 'bg-blue-100 text-[#001489]'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">
                  {stg.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {stg.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
