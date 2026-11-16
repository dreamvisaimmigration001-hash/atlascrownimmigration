import React from 'react';
import Navbar from '@/components/Navbar';
import LocationFooter from '@/components/LocationFooter';
import EligibilityWizard from '@/components/EligibilityWizard';
import { Sparkles, CheckCircle2, Award, FileText } from 'lucide-react';

export const metadata = {
  title: 'Visa Eligibility Calculator & Assessment | Atlas Crown Chandigarh',
  description: 'Calculate your CRS score and visa eligibility instantly with expert guidance from Atlas Crown Sector 32D Chandigarh.',
  keywords: ['visa eligibility calculator chandigarh', 'crs score calculator canada', 'immigration assessment chandigarh'],
};

export default function EligibilityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop"
            alt="Eligibility Assessment"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
            Instant Score Check
          </span>
          <h1 className="text-4xl sm:text-6xl font-black mt-4">Visa Eligibility Assessment</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mt-3">
            Evaluate your profile against official Canadian, Australian, and European immigration parameters.
          </p>
        </div>
      </section>

      {/* Eligibility Wizard Component */}
      <EligibilityWizard />

      {/* Detailed CRS / Points Breakdown Guide */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
              Evaluation Criteria
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-3">
              How Immigration Points Are Calculated
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl">
                01
              </div>
              <h3 className="text-xl font-bold">Age & Adaptability</h3>
              <p className="text-slate-400 text-sm">Applicants aged 20-29 receive maximum points across Express Entry and skilled migration streams.</p>
            </div>

            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl">
                02
              </div>
              <h3 className="text-xl font-bold">Education Level</h3>
              <p className="text-slate-400 text-sm">Bachelor degrees, Master degrees, and educational credential assessments (ECA) significantly boost scores.</p>
            </div>

            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl">
                03
              </div>
              <h3 className="text-xl font-bold">Language Proficiency</h3>
              <p className="text-slate-400 text-sm">Scoring CLB 9+ in IELTS or PTE General provides a massive competitive advantage in visa draws.</p>
            </div>

            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl">
                04
              </div>
              <h3 className="text-xl font-bold">Work Experience</h3>
              <p className="text-slate-400 text-sm">Skilled full-time work experience (NOC TEER 0, 1, 2, or 3) is evaluated for maximum points.</p>
            </div>
          </div>
        </div>
      </section>

      <LocationFooter />
    </main>
  );
}
