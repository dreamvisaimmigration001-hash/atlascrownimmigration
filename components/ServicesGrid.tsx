'use client';

import React, { useState } from 'react';
import { GraduationCap, Plane, Home, Briefcase, ArrowUpRight } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

const services = [
  {
    id: 'study',
    title: 'Study Visa',
    subtitle: 'Top Universities & Colleges',
    description: 'Secure admission and study permits for Canada, Australia, UK, and USA.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
    icon: GraduationCap,
    badge: 'Popular for Youth',
  },
  {
    id: 'tourist',
    title: 'Tourist Visa',
    subtitle: 'Global Exploration Made Easy',
    description: 'Fast-track visitor visas for family visits, vacations, and business trips.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
    icon: Plane,
    badge: 'Quick Approval',
  },
  {
    id: 'pr',
    title: 'Permanent Residency',
    subtitle: 'Settle Down Abroad',
    description: 'Express Entry and Provincial Nominee Programs for families and professionals.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    icon: Home,
    badge: 'High Success',
  },
  {
    id: 'work',
    title: 'Work Permit',
    subtitle: 'Global Career Growth',
    description: 'Employer-sponsored and LMIA work permits in thriving international markets.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    icon: Briefcase,
    badge: 'Direct Employment',
  },
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<string>('Study Visa');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = (title: string) => {
    setSelectedService(title);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-amber-500/10 text-amber-700 rounded-full border border-amber-500/20">
              Atlas Crown Specializations
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
              Choose Your Pathway
            </h2>
            <p className="text-slate-600 text-lg mt-3">
              Designed for speed, transparency, and guaranteed results from our Chandigarh experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  onClick={() => handleOpen(s.title)}
                  className="group relative h-[420px] rounded-3xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-slate-900"
                >
                  {/* Background Image with Zoom */}
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-5 left-5 right-5 flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-amber-300 text-xs font-semibold border border-amber-500/30">
                      {s.badge}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mb-3 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
                      {s.subtitle}
                    </span>
                    <h3 className="text-2xl font-black">{s.title}</h3>
                    <p className="text-slate-300 text-xs line-clamp-2 font-light">
                      {s.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService={selectedService} />
    </>
  );
}
