import React from 'react';
import Navbar from '@/components/Navbar';
import LocationFooter from '@/components/LocationFooter';
import Destinations from '@/components/Destinations';
import { Globe, Compass, CheckCircle2, Award, Building, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Global Destinations | Canada, Australia, UK, USA, Europe | Atlas Crown',
  description: 'Explore immigration, permanent residency, and study visa options for Canada, Australia, UK, USA, and Europe with Atlas Crown Sector 32D Chandigarh.',
  keywords: ['canada immigration chandigarh', 'australia pr consultants', 'uk study visa chandigarh', 'europe schengen visa consultants'],
};

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1920&auto=format&fit=crop"
            alt="Global Destinations Skyline"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
            World-Class Horizons
          </span>
          <h1 className="text-4xl sm:text-6xl font-black mt-4">Global Destinations</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mt-3">
            Your comprehensive guide to study, work, and permanent residency across 5 top nations.
          </p>
        </div>
      </section>

      {/* Destinations Grid Component */}
      <Destinations />

      {/* Detailed Country Guides Section */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
              Country Profiles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-3">
              In-Depth Immigration Pathways
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Canada */}
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl">🇨🇦</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full">Top Choice</span>
              </div>
              <h3 className="text-2xl font-bold">Canada Immigration</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Canada remains the #1 destination for Chandigarh applicants. Benefit from Express Entry, Provincial Nominee Programs (PNP), and world-class universities like UofT and UBC.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Fast PR processing timelines</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> 3-year post-graduation work permits</li>
              </ul>
            </div>

            {/* Australia */}
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl">🇦🇺</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full">High Wages</span>
              </div>
              <h3 className="text-2xl font-bold">Australia Migration</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Explore Subclass 189, 190, and 491 skilled migration visas. Enjoy exceptional lifestyle, high minimum wages, and top-ranked Group of Eight universities.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Points-based PR system</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Regional visa sponsorships</li>
              </ul>
            </div>

            {/* UK */}
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl">🇬🇧</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full">1-Year Masters</span>
              </div>
              <h3 className="text-2xl font-bold">United Kingdom Study & Work</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Earn prestigious British master&apos;s degrees in just one year. Take advantage of the Graduate Route visa allowing 2 years of post-study employment in London and beyond.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> No GRE/GMAT required for many courses</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> 2-year post-study work rights</li>
              </ul>
            </div>

            {/* USA */}
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl">🇺🇸</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full">STEM Careers</span>
              </div>
              <h3 className="text-2xl font-bold">United States F-1 & H-1B</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Unlock global tech and business hubs. F-1 student visas with STEM OPT extensions offer up to 3 years of work authorization in top American corporations.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> 3-year STEM OPT extensions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> World-class career networking</li>
              </ul>
            </div>

            {/* Europe */}
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl">🇪🇺</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full">Schengen Access</span>
              </div>
              <h3 className="text-2xl font-bold">Europe & Schengen Zone</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Germany, France, and Ireland offer low-tuition or free public university education in English, alongside robust job seeker visas and PR pathways.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Affordable or zero tuition fees</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Travel across 29 Schengen countries</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      <LocationFooter />
    </main>
  );
}
