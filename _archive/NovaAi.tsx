import React from 'react';
import { 
  Bot, 
  Zap, 
  CalendarCheck, 
  Database, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

const NovaFeatureSection = () => {
  const capabilities = [
    {
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
      title: "Real-Time Lead Capture (24/7)",
      description: "When high-value prospects arrive after business hours, Nova steps in immediately—engaging their curiosity before they can click over to a competitor."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: "Intelligent Inbound Qualification",
      description: "Say goodbye to empty contact forms. Nova conducts dynamic, guided discovery conversations to assess client goals, budget, and project scope instantly."
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-indigo-400" />,
      title: "Zero-Friction Scheduling",
      description: "Eliminate days of back-and-forth email tag. Once qualified, Nova routes prospects directly into your consultation calendar on the spot."
    },
    {
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      title: "Hands-Free CRM Synchronization",
      description: "Every key data point—timeline, pain points, contact info—is structured and piped directly into your backend CRM without a second of manual data entry."
    }
  ];

  const comparisons = [
    {
      metric: "Response Window",
      traditional: "Hours or days waiting on email triage",
      withNova: "Instant, sub-second live engagement"
    },
    {
      metric: "Visitor Experience",
      traditional: "Static, uninspiring 'Contact Us' forms",
      withNova: "Intuitive, brand-aligned conversational diagnostic"
    },
    {
      metric: "Pipeline Management",
      traditional: "Manual copy-pasting and calendar coordination",
      withNova: "Fully automated data capture and scheduled bookings"
    },
    {
      metric: "Conversion Window",
      traditional: "Limited strictly to standard business hours",
      withNova: "Around-the-clock revenue and lead generation"
    }
  ];

  return (
    <section className="relative w-full bg-slate-950 text-slate-100 py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background ambient glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Introducing Nova</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Turn Casual Browsers into <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Booked Clients Around the Clock
            </span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed pt-2">
            Most websites leak high-intent revenue to slow forms and delayed replies. 
            Nova transforms your digital presence into an active, intelligent front-office engine that qualifies leads, books meetings, and fuels your pipeline 24/7.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {capabilities.map((item, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="p-3 rounded-xl bg-slate-800/80 w-fit mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Showcase */}
        <div className="mt-20 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 md:p-10 backdrop-blur-md">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              The Evolution of Lead Conversion
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Stop letting warm prospects go cold. See how Nova upgrades your client intake.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[550px]">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <th className="pb-4">Metric</th>
                  <th className="pb-4 text-slate-500">Standard Intake</th>
                  <th className="pb-4 text-cyan-400">With Nova</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50 text-sm">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="group hover:bg-slate-800/20 transition-colors">
                    <td className="py-4 font-semibold text-slate-200">{row.metric}</td>
                    <td className="py-4 text-slate-500 line-through decoration-slate-600/70">{row.traditional}</td>
                    <td className="py-4 font-medium text-cyan-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{row.withNova}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#consultation" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:opacity-95 transition-all cursor-pointer"
            >
              <span>Deploy Nova for Your Business</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-base hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
            >
              Experience a Live Demo
            </a>
          </div>
          <p className="text-xs text-slate-500 mt-4 tracking-wide">
            Fast setup · Custom CRM integration · Tailored to your exact brand voice
          </p>
        </div>
      </div>
    </section>
  );
};

export default NovaFeatureSection;
