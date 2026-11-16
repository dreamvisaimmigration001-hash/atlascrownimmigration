import React from 'react';
import Navbar from '@/components/Navbar';
import LocationFooter from '@/components/LocationFooter';
import SuccessGallery from '@/components/SuccessGallery';
import { Award, Star, Users, CheckCircle, Globe } from 'lucide-react';

export const metadata = {
  title: 'Success Stories & Approved Visas Gallery | Atlas Crown Chandigarh',
  description: 'View 1000+ approved visas and actual PPR proofs at Atlas Crown Immigration Sector 32D Chandigarh.',
  keywords: ['visa success stories chandigarh', 'approved visas proof atlas crown', 'immigration testimonials chandigarh'],
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop"
            alt="Success Stories Team"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
            Client Triumphs
          </span>
          <h1 className="text-4xl sm:text-6xl font-black mt-4">Success Stories & Gallery</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mt-3">
            Celebrating over 1000+ approved visas and happy families who achieved their global dreams with us.
          </p>
        </div>
      </section>

      {/* Success Gallery Component */}
      <SuccessGallery />

      {/* Extended Testimonial Details */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-amber-500/10 text-amber-700 rounded-full border border-amber-500/20">
              Chandigarh Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
              Words From Our Happy Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-200 space-y-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500" />
                ))}
              </div>
              <p className="text-slate-700 italic text-base">
                &ldquo;Atlas Crown in Sector 32D Chandigarh handled my Canadian study visa with absolute perfection. My counselor was available at every step, and my visa arrived within 4 weeks!&rdquo;
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">Gurpreet Singh</h4>
                  <p className="text-xs text-slate-500">Studying at Seneca College, Toronto</p>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                  Visa Approved
                </span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-200 space-y-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500" />
                ))}
              </div>
              <p className="text-slate-700 italic text-base">
                &ldquo;Getting Australian Permanent Residency seemed complicated until we visited Atlas Crown. Their transparent paperwork review and expert advice made all the difference.&rdquo;
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">Neha & Vikram Malhotra</h4>
                  <p className="text-xs text-slate-500">Settled in Melbourne, Australia</p>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                  PR Granted
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationFooter />
    </main>
  );
}
