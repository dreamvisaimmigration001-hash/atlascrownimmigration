import React from 'react';
import { ClipboardCheck, FolderOpen, Send, PlaneTakeoff } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Profile Evaluation',
    description: 'Check eligibility with Chandigarh experts.',
    icon: ClipboardCheck,
    badge: 'Step 1',
  },
  {
    step: '02',
    title: 'Documentation',
    description: 'Flawless paperwork & file preparation.',
    icon: FolderOpen,
    badge: 'Step 2',
  },
  {
    step: '03',
    title: 'Visa Filing',
    description: 'Embassy submission & tracking.',
    icon: Send,
    badge: 'Step 3',
  },
  {
    step: '04',
    title: 'Approval & Flight',
    description: 'Visa granted & fly abroad.',
    icon: PlaneTakeoff,
    badge: 'Step 4',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-amber-500/10 text-amber-700 rounded-full border border-amber-500/20">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-600 text-lg mt-3">
            From Sector 32D Chandigarh to your dream destination in 4 transparent steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all group hover:-translate-y-1"
              >
                <div className="absolute top-6 right-6 text-3xl font-black text-slate-200 group-hover:text-amber-500/30 transition-colors">
                  {s.step}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-950 to-slate-900 text-amber-400 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>

                <span className="text-xs uppercase tracking-widest font-bold text-amber-700 block mb-1">
                  {s.badge}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm font-light leading-relaxed">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
