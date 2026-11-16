import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import Roadmap from '@/components/Roadmap';
import Destinations from '@/components/Destinations';
import EligibilityWizard from '@/components/EligibilityWizard';
import SuccessGallery from '@/components/SuccessGallery';
import LocationFooter from '@/components/LocationFooter';
import Link from 'next/link';
import { ArrowRight, Compass, GraduationCap, Award } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Services Preview Section */}
      <ServicesGrid />

      {/* Quick Multi-page Callout */}
      <section className="py-20 bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
            Explore Atlas Crown
          </span>
          <h2 className="text-3xl sm:text-5xl font-black">Ready to Discover Your Global Pathway?</h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Browse our dedicated pages for global destinations, success stories, and instant eligibility calculations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/destinations"
              className="px-8 py-3.5 rounded-2xl gold-gradient text-slate-950 font-bold text-sm shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Destinations</span>
            </Link>
            <Link
              href="/success"
              className="px-8 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Success Stories</span>
            </Link>
          </div>
        </div>
      </section>

      <Roadmap />
      <Destinations />
      <EligibilityWizard />
      <SuccessGallery />
      <LocationFooter />
    </main>
  );
}
