'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Award } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

export default function EligibilityWizard() {
  const [visaType, setVisaType] = useState('Study Visa');
  const [country, setCountry] = useState('Canada');
  const [education, setEducation] = useState('Bachelor Degree');
  const [calculated, setCalculated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dynamic score calculation based on user selections
  const calculateResult = () => {
    let baseScore = 80;
    if (education.includes('Master') || education.includes('3+ Years')) {
      baseScore = 96;
    } else if (education.includes('Bachelor')) {
      baseScore = 90;
    } else if (education.includes('Diploma')) {
      baseScore = 83;
    } else {
      baseScore = 76;
    }

    // Country & Visa adjustments
    if (country === 'Canada' || country === 'Australia') {
      baseScore += 2;
    }
    if (baseScore > 98) baseScore = 98;

    let tier = 'High Success Potential';
    if (baseScore >= 92) tier = 'Exceptional Eligibility Match';
    else if (baseScore >= 85) tier = 'Strong Profile Potential';
    else tier = 'Qualified with Tailored Guidance';

    return { score: baseScore, tier };
  };

  const result = calculateResult();

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculated(true);
  };

  return (
    <>
      <section id="assessment" className="py-24 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
              Instant Assessment
            </span>
            <h2 className="text-3xl sm:text-5xl font-black mt-4 tracking-tight">
              Check Your Visa Eligibility
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Answer 3 quick questions to discover your dynamic pathway score instantly.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl">
            {!calculated ? (
              <form onSubmit={handleCalculate} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-amber-300 mb-2">1. Select Visa Type</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['Study Visa', 'Permanent Residency', 'Work Permit', 'Tourist Visa'].map((v) => (
                      <button
                        type="button"
                        key={v}
                        onClick={() => setVisaType(v)}
                        className={`p-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all border ${
                          visaType === v
                            ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg'
                            : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-amber-300 mb-2">2. Target Country</label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {['Canada', 'Australia', 'UK', 'USA', 'Europe'].map((c) => (
                      <button
                        type="button"
                        key={c}
                        onClick={() => setCountry(c)}
                        className={`p-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all border ${
                          country === c
                            ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg'
                            : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-amber-300 mb-2">3. Highest Qualification / Experience</label>
                  <select
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option>High School / 12th Grade</option>
                    <option>Diploma / Certificate</option>
                    <option>Bachelor Degree</option>
                    <option>Master Degree or Higher</option>
                    <option>3+ Years Professional Experience</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl gold-gradient text-slate-950 font-bold text-base shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <span>Calculate Eligibility Match</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-6">
                <div className="w-20 h-20 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-amber-500/40">
                  <Sparkles className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">Eligibility Match Result</span>
                  <h3 className="text-4xl font-black text-white mt-2">{result.score}% {result.tier}</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mt-2">
                    Your profile for <span className="text-amber-400 font-bold">{visaType}</span> to <span className="text-amber-400 font-bold">{country}</span> with <span className="text-amber-400 font-bold">{education}</span> qualifies for priority processing!
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 rounded-2xl gold-gradient text-slate-950 font-bold text-sm shadow-xl hover:scale-105 transition-all"
                  >
                    Book Chandigarh Consultation
                  </button>
                  <button
                    onClick={() => setCalculated(false)}
                    className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
                  >
                    Recalculate
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService={visaType} />
    </>
  );
}
