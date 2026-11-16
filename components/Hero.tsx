'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Award, ShieldCheck, Star, Users } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        {/* Unique Cinematic Architecture & Global Skyline Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1920&auto=format&fit=crop"
            alt="Cinematic Global Architecture"
            className="w-full h-full object-cover object-center opacity-35 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/90 to-slate-950/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Sector 32D Chandigarh’s Premier Consultants</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                Your Global Journey <br />
                <span className="gold-text">Starts Here.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light">
                Expert Visa & Immigration Services in Chandigarh. Unlocking opportunities in Canada, Australia, UK, USA & Europe.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl gold-gradient text-slate-950 font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 group"
                >
                  <span>Free Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  href="/eligibility"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-base border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Start Eligibility Check</span>
                </Link>
              </div>

              {/* Trust badges row */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/10 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-bold text-white">1000+</p>
                    <p className="text-xs text-slate-400">Visas Approved</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <Star className="w-5 h-5 fill-amber-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-bold text-white">98%</p>
                    <p className="text-xs text-slate-400">Success Rate</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-bold text-white">100%</p>
                    <p className="text-xs text-slate-400">Transparent</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Visual Floating Card - Distinct Modern Architecture */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1.5 rounded-3xl gold-gradient opacity-30 blur-xl animate-pulse" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/25 bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                    alt="Modern Glass Architecture Corporate Office"
                    className="w-full h-[420px] object-cover object-center hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Featured Pathway</span>
                        <h4 className="text-lg font-bold text-white mt-0.5">Study & Work in Canada</h4>
                      </div>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30">
                        Open Intake
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
