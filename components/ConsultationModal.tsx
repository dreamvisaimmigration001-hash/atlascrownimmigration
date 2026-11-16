'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, User, Phone, Mail, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ConsultationModal({ isOpen, onClose, defaultService = 'Study Visa' }: ConsultationModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    destination: 'Canada',
    preferredDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const resetAndClose = () => {
    setStep('form');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-500/20"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-950 to-slate-900 p-6 text-white relative">
            <button
              onClick={resetAndClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-white bg-white/10 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
              Atlas Crown Exclusive
            </span>
            <h3 className="text-2xl font-bold mt-3">Book Free Consultation</h3>
            <p className="text-slate-300 text-sm mt-1">Sector 32D, Chandigarh Experts at Your Service</p>
          </div>

          <div className="p-6 md:p-8">
            {step === 'form' ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      required
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-slate-800 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-slate-800 text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-slate-800 text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">Visa Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-slate-800 text-sm bg-white"
                    >
                      <option>Study Visa</option>
                      <option>Permanent Residency (PR)</option>
                      <option>Work Permit</option>
                      <option>Tourist & Visitor Visa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">Preferred Country</label>
                    <div className="relative">
                      <Globe className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-slate-800 text-sm bg-white"
                      >
                        <option>Canada</option>
                        <option>Australia</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>Europe / Schengen</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      required
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-slate-800 text-sm"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-900 hover:to-blue-950 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Confirm Booking</span>
                    <span className="text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-3 flex items-center justify-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600" /> Mon - Sat, 10:00 AM - 6:00 PM • Sector 32D Chandigarh
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Consultation Booked!</h4>
                <p className="text-slate-600 text-sm max-w-xs mx-auto">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our Chandigarh immigration expert will call you shortly at <span className="font-semibold text-slate-900">{formData.phone}</span>.
                </p>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left text-xs text-slate-600 space-y-1">
                  <p><span className="font-semibold text-slate-800">Service:</span> {formData.service}</p>
                  <p><span className="font-semibold text-slate-800">Target Country:</span> {formData.destination}</p>
                  <p><span className="font-semibold text-slate-800">Location:</span> SCO 361, Sector 32D, Chandigarh</p>
                </div>
                <button
                  onClick={resetAndClose}
                  className="w-full py-3 bg-blue-950 text-white font-semibold rounded-xl hover:bg-blue-900 transition-colors"
                >
                  Back to Home
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
