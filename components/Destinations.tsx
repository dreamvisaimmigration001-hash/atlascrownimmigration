'use client';

import React, { useState } from 'react';
import { Compass, Sparkles } from 'lucide-react';

const initialDestinations = [
  {
    name: 'Canada',
    flag: '🇨🇦',
    tagline: 'PR & Study Hub',
    image: 'https://images.unsplash.com/photo-1517935706615-27170d3c22f5?q=80&w=800&auto=format&fit=crop',
    fallback: 'https://picsum.photos/seed/canada_atlas/800/800',
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    tagline: 'High Wages & Lifestyle',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop',
    fallback: 'https://picsum.photos/seed/australia_atlas/800/800',
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    tagline: 'Top Global Universities',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop',
    fallback: 'https://picsum.photos/seed/uk_atlas/800/800',
  },
  {
    name: 'United States',
    flag: '🇺🇸',
    tagline: 'Career Opportunities',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800&auto=format&fit=crop',
    fallback: 'https://picsum.photos/seed/usa_atlas/800/800',
  },
  {
    name: 'Europe',
    flag: '🇪🇺',
    tagline: 'Schengen & Work Permits',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop',
    fallback: 'https://picsum.photos/seed/europe_atlas/800/800',
  },
];

export default function Destinations() {
  const [imgSources, setImgSources] = useState<{ [key: string]: string }>({});

  const handleError = (name: string, fallbackUrl: string) => {
    setImgSources((prev) => ({ ...prev, [name]: fallbackUrl }));
  };

  return (
    <section id="destinations" className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
            Global Reach
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-4 tracking-tight">
            Top Destinations
          </h2>
        </div>
        <p className="text-slate-400 max-w-md text-sm">
          Explore world-class countries with dedicated pathways tailored for Chandigarh applicants.
        </p>
      </div>

      {/* Horizontal scrolling grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {initialDestinations.map((d) => {
            const currentImg = imgSources[d.name] || d.image;
            return (
              <div
                key={d.name}
                className="relative h-[380px] rounded-3xl overflow-hidden group shadow-2xl border border-white/10 bg-slate-900"
              >
                <img
                  src={currentImg}
                  alt={d.name}
                  onError={() => handleError(d.name, d.fallback)}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-85"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Flag Badge */}
                <div className="absolute top-5 right-5 text-3xl bg-slate-950/60 backdrop-blur-md px-3 py-1 rounded-2xl border border-white/20 shadow-lg">
                  {d.flag}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                    {d.tagline}
                  </span>
                  <h3 className="text-2xl font-black text-white">{d.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
