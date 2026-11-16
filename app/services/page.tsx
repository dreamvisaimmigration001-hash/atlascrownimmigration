import React from 'react';
import Navbar from '@/components/Navbar';
import LocationFooter from '@/components/LocationFooter';
import ServicesGrid from '@/components/ServicesGrid';
import { GraduationCap, Plane, Home, Briefcase, Award, CheckCircle2, FileText, ShieldCheck, Clock, Users } from 'lucide-react';

export const metadata = {
  title: 'Comprehensive Visa Services | Study, PR, Work Permit | Atlas Crown Chandigarh',
  description: 'Explore expert visa consulting services: Study Visa, Permanent Residency, Work Permits, and Tourist Visas at Sector 32D Chandigarh. 98% Success Rate.',
  keywords: ['study visa chandigarh', 'pr consultants chandigarh', 'work permit visa agents sector 32 chandigarh', 'atlas crown services'],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1920&auto=format&fit=crop"
            alt="Corporate Executive Consultation"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
            Atlas Crown Expertise
          </span>
          <h1 className="text-4xl sm:text-6xl font-black mt-4">Comprehensive Visa Services</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mt-3">
            End-to-end legal and documentation support for study, work, PR, and travel from Chandigarh.
          </p>
        </div>
      </section>

      {/* Services Grid Component */}
      <ServicesGrid />

      {/* Detailed Category Breakdowns */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-amber-500/10 text-amber-700 rounded-full border border-amber-500/20">
              In-Depth Breakdown
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
              What Each Visa Program Includes
            </h2>
          </div>

          <div className="space-y-12">
            
            {/* Study Visa */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl shadow-md border border-slate-200">
              <div className="lg:col-span-5 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-950 text-amber-400 flex items-center justify-center font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-amber-700">Study Abroad</span>
                <h3 className="text-3xl font-bold text-slate-900">Study Visa & University Admissions</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We secure admissions into top-tier universities and colleges across Canada, Australia, UK, and USA. From SOP drafting to financial documentation and visa interview preparation, our Chandigarh counselors ensure 100% compliance.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> University shortlisting & application filing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Scholarship & tuition fee assistance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Post-Graduation Work Permit (PGWP) guidance</li>
                </ul>
              </div>
              <div className="lg:col-span-7 relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                  alt="Students Collaborating in Library"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Permanent Residency */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl shadow-md border border-slate-200">
              <div className="lg:col-span-7 relative h-80 rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                  alt="Modern Architectural Family Home"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
                <div className="w-12 h-12 rounded-2xl bg-blue-950 text-amber-400 flex items-center justify-center font-bold">
                  <Home className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-amber-700">Immigration & PR</span>
                <h3 className="text-3xl font-bold text-slate-900">Permanent Residency & Skilled Migration</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Make Canada or Australia your permanent home. We evaluate your CRS scores, assist with ECA (Educational Credential Assessment), IELTS/PTE coaching, and file Provincial Nominee Programs (PNP) with precision.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Express Entry profile creation & management</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> PNP stream optimization</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Family sponsorship & dependent visas</li>
                </ul>
              </div>
            </div>

            {/* Work Permit */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl shadow-md border border-slate-200">
              <div className="lg:col-span-5 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-950 text-amber-400 flex items-center justify-center font-bold">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-amber-700">Employment Abroad</span>
                <h3 className="text-3xl font-bold text-slate-900">Work Permits & LMIA Assistance</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Accelerate your global career. We help skilled professionals connect with international employers, secure LMIA-backed job offers, and obtain valid work permits with pathway options to permanent residency.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Employer-sponsored work visas</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> LMIA application support</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Inter-company transfer permits</li>
                </ul>
              </div>
              <div className="lg:col-span-7 relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                  alt="Executive Corporate Office Meeting"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900">Why Atlas Crown Chandigarh?</h2>
            <p className="text-slate-600 mt-2">Unmatched expertise and end-to-end file support right from Sector 32D.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-xl">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900">ICRC Certified Guidance</h3>
              <p className="text-slate-600 text-sm">
                Certified advisors with years of proven success in navigating complex embassy regulations.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-xl">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900">Flawless Documentation</h3>
              <p className="text-slate-600 text-sm">
                Rigorous multi-point file review to ensure zero rejection due to paperwork errors.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-xl">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900">Post-Visa Support</h3>
              <p className="text-slate-600 text-sm">
                Airport pickup assistance, accommodation guidance, and settlement support abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LocationFooter />
    </main>
  );
}
