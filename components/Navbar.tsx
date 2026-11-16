'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Crown, Clock, MapPin, Menu, X } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Eligibility', href: '/eligibility' },
    { name: 'Success Stories', href: '/success' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
        {/* Top bar for Chandigarh office & hours */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white text-xs py-2 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-amber-300 font-medium">
                <MapPin className="w-3.5 h-3.5" /> Sector 32D, Chandigarh
              </span>
              <span className="hidden md:flex items-center gap-1.5 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> Mon - Sat: 10:00 AM - 6:00 PM
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded font-bold uppercase tracking-wider text-[10px]">
                ICRC Certified
              </span>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            {!logoError ? (
              <img
                src="/atlascrownimmigration.jpeg"
                alt="Atlas Crown Logo"
                onError={() => setLogoError(true)}
                className="w-11 h-11 rounded-2xl object-cover shadow-md group-hover:scale-105 transition-transform border border-amber-500/30"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-950 to-slate-900 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform border border-amber-500/30">
                <Crown className="w-6 h-6 fill-amber-400/20" />
              </div>
            )}
            <div>
              <span className="text-xl font-black tracking-tight text-slate-900 block leading-tight">
                ATLAS CROWN
              </span>
              <span className="text-[10px] tracking-widest font-bold uppercase text-amber-700 block">
                Immigration Consultants
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-700">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors relative py-2 ${
                    isActive ? 'text-blue-900 font-bold' : 'hover:text-blue-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-950 to-blue-900 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:from-blue-900 hover:to-blue-950 transition-all flex items-center gap-2 border border-amber-500/30"
            >
              <span>Free Consultation</span>
              <span className="text-amber-400">→</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-3 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-medium py-2 border-b border-slate-50 ${
                  pathname === link.href ? 'text-blue-900 font-bold' : 'text-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full py-3 rounded-xl bg-blue-950 text-white font-semibold text-sm shadow-md mt-2 flex items-center justify-center gap-2"
            >
              <span>Free Consultation</span>
              <span className="text-amber-400">→</span>
            </button>
          </div>
        )}
      </header>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
