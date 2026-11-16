'use client';

import React, { useState } from 'react';
import { Star, CheckCircle, Award, Users, Globe, ThumbsUp, Eye, X } from 'lucide-react';

const stats = [
  { label: 'Visas Approved', value: '1000+', icon: Award },
  { label: 'Success Rate', value: '98%', icon: ThumbsUp },
  { label: 'Partner Universities', value: '50+', icon: Globe },
  { label: 'Happy Families', value: '850+', icon: Users },
];

const proofImages = [
  { src: '/proof/ppr-2.jpeg', title: 'Canada Study Visa Approval' },
  { src: '/proof/ppr-3.jpeg', title: 'Australia PR Grant' },
  { src: '/proof/ppr-4.jpeg', title: 'UK Work Permit Approval' },
  { src: '/proof/ppr-5.jpeg', title: 'USA F-1 Student Visa' },
  { src: '/proof/ppr-6.jpeg', title: 'Europe Schengen Visitor' },
  { src: '/proof/ppr-7.jpeg', title: 'Canada Express Entry PR' },
  { src: '/proof/ppr-8.jpeg', title: 'Australia Study Visa' },
];

export default function SuccessGallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="success" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-amber-500/10 text-amber-700 rounded-full border border-amber-500/20">
            Proven Track Record & Proof
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Visa Approval Success Gallery
          </h2>
          <p className="text-slate-600 text-lg mt-3">
            Real visa approvals and PPR (Passport Request) proofs from our Chandigarh Sector 32D office.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-md border border-slate-200/80 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-black text-slate-900">{s.value}</div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-500">{s.label}</div>
              </div>
            );
          })}
        </div>

        {/* Proof Images Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">Actual Visa & PPR Proofs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {proofImages.map((p, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImage(p.src)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 cursor-pointer hover:shadow-2xl transition-all"
              >
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={p.src}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-amber-500 text-slate-950 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-4 h-4" /> View Proof
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm truncate">{p.title}</h4>
                  <div className="flex items-center justify-end">
                    <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Verified Approval
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Proof Image */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-h-[80vh] overflow-auto flex items-center justify-center p-2">
              <img
                src={activeImage}
                alt="Visa Approval Proof"
                className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-sm font-bold text-slate-900">Atlas Crown Immigration - Official Visa Approval Proof</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
