import { useState, FormEvent } from 'react';
import { 
  PhoneCall, 
  Clock, 
  Globe, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  ChevronRight
} from 'lucide-react';

export function App() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    bottleneck: 'Missed calls'
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will reach out shortly at ${formData.phone}.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              AP
            </div>
            <span className="font-bold tracking-tight text-slate-900 text-lg">
              Auburn Pro Branding
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:3340000000" 
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
            >
              <PhoneCall className="w-4 h-4 text-blue-600" />
              (334) 000-0000
            </a>
            <a 
              href="#audit" 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition"
            >
              Free Audit
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Serving Auburn, Opelika & Lee County Businesses
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
            More booked jobs. <br className="hidden sm:inline" />
            <span className="text-blue-600">Zero missed calls.</span> <br className="hidden sm:inline" />
            No tech headaches.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            We build clean, modern websites and simple customer follow-up systems that turn local searches into paying jobs—without eating up your workday.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#audit" 
              className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base rounded-xl shadow-sm hover:shadow transition flex items-center justify-center gap-2"
            >
              Book a 15-Minute Intro Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="tel:3340000000" 
              className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-100 text-slate-800 font-medium text-base rounded-xl border border-slate-200 shadow-sm transition flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-slate-600" />
              Call (334) 000-0000
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              No long-term contracts
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Done-for-you setup
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Direct local support
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">The Reality Check</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-2">
              You’re great at your craft. Chasing leads shouldn't be your second job.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">The Unanswered Call</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                When you're on a ladder, under a hood, or with a client, the phone rings. If they get voicemail, they hang up and dial the next company on Google.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">The Evening Quote Chase</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                You spend hours after dinner digging through crumpled paper notes, text threads, and voice notes trying to remember who needs an estimate.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">The Outdated Website</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your site is slow, looks like it was built a decade ago, or doesn't make it effortless for someone on a smartphone to tap "Call Now."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">What We Build</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-2">
            Simple systems that pay for themselves.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">High-Converting Websites</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Clean, lightning-fast sites built specifically to turn local Google searches into immediate phone calls and estimate requests.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Mobile-first tap-to-call design
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Local SEO structure for Lee County
              </li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-blue-200 shadow-sm ring-1 ring-blue-500/20 flex flex-col justify-between relative">
            <span className="absolute -top-3 left-6 px-2.5 py-0.5 bg-blue-600 text-white text-[11px] font-semibold rounded-full uppercase tracking-wide">
              Highest ROI
            </span>
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-5">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Missed-Call Text-Back</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Miss a call while on the job? Your system instantly texts them within 30 seconds to lock in the lead before they call a competitor.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Instant SMS follow-up (&lt; 60s)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Saves jobs you would have lost
              </li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Streamlined Pipeline</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                All your leads, quote requests, and review follow-ups organized in one clear dashboard. No messy spreadsheets or sticky notes.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Automated Google review requests
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Simple lead tracker you can check on your phone
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Three steps. Zero hassle.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <span className="text-2xl font-black text-blue-600">01</span>
              <h4 className="font-bold text-slate-900 text-base mt-2 mb-1">15-Minute Audit</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We review your current website and customer intake to identify exactly where leads are slipping through the cracks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <span className="text-2xl font-black text-blue-600">02</span>
              <h4 className="font-bold text-slate-900 text-base mt-2 mb-1">Hands-Off Setup</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We write the copy, build the system, and wire up the automations. You don't have to fiddle with complex tech.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <span className="text-2xl font-black text-blue-600">03</span>
              <h4 className="font-bold text-slate-900 text-base mt-2 mb-1">Turn It On & Grow</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Calls get answered, follow-ups fire instantly, and you take back hours of your evenings every single week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="audit" className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Let’s get your follow-up running on autopilot.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              No high-pressure sales pitch. Just a quick conversation to see if simple automation makes sense for your business.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Your Name</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Marcus Davis"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-slate-50 focus:bg-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Business Name / Trade</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Davis Plumbing"
                value={formData.business}
                onChange={(e) => setFormData({...formData, business: e.target.value})}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-slate-50 focus:bg-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Mobile Number</label>
              <input 
                type="tel" 
                required
                placeholder="(334) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-slate-50 focus:bg-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                Biggest Bottleneck Right Now?
              </label>
              <select 
                value={formData.bottleneck}
                onChange={(e) => setFormData({...formData, bottleneck: e.target.value})}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-slate-50 focus:bg-white transition"
              >
                <option value="Missed calls">Missed calls while on jobs</option>
                <option value="Slow website">Website needs a total refresh</option>
                <option value="Tracking quotes">Chasing quotes & manual paperwork</option>
                <option value="Getting reviews">Need more 5-star Google reviews</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition mt-2 flex items-center justify-center gap-2"
            >
              Request Free 15-Minute Audit
              <ChevronRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 bg-white text-center text-xs sm:text-sm text-slate-500">
        <div className="max-w-6xl mx-auto px-4">
          <p className="font-semibold text-slate-800">Auburn Professional Branding</p>
          <p className="mt-1">Local Business Automations & Modern Web Systems • Auburn & Opelika, AL</p>
          <p className="mt-4 text-slate-400">© {new Date().getFullYear()} Auburn Professional Branding. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
