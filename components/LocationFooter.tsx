'use client';

import React, { useState } from 'react';
import { MapPin, Mail, Clock, Crown, Facebook, Instagram, ArrowUpRight } from 'lucide-react';

export default function LocationFooter() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer id="location" className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Location & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
              <MapPin className="w-3.5 h-3.5" /> Chandigarh Office HQ
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black">
              Visit Our Office in Sector 32D
            </h2>

            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Drop by for a one-on-one consultation with our certified immigration experts. We welcome walk-ins and appointments.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-white">Office Address</h4>
                  <p className="text-slate-300 text-xs mt-0.5">
                    2nd Floor, SCO 361, Sector 32D, Sector 32, Chandigarh, 160030
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                <Clock className="w-5 h-5 text-amber-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-white">Working Hours</h4>
                  <p className="text-slate-300 text-xs mt-0.5">
                    Monday - Saturday: 10:00 AM - 6:00 PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                <Mail className="w-5 h-5 text-amber-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-white">Email Consultation</h4>
                  <p className="text-slate-300 text-xs mt-0.5">
                    info@atlascrownimmigration.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Large Interactive Map / Visual Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 h-[450px] flex flex-col items-center justify-center p-8 text-center">
              {/* Dark Styled Interactive Map Embed / Illustration */}
              <div className="absolute inset-0 opacity-80">
                <iframe
                  title="Sector 32D Chandigarh Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.552431692881!2d76.779419!3d30.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febf2c4f1c7d7%3A0x1c1e5e5b3c5a7f0!2sSector%2032D%2C%20Sector%2032%2C%20Chandigarh%2C%20160030!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter invert contrast-125 opacity-70"
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              <div className="relative z-10 bg-slate-950/90 backdrop-blur-md p-6 rounded-2xl border border-amber-500/30 max-w-sm shadow-2xl">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-lg">Atlas Crown Chandigarh</h4>
                <p className="text-slate-300 text-xs mt-1">SCO 361, Sector 32D, Chandigarh</p>
                <a
                  href="https://maps.google.com/?q=Sector+32D+Chandigarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {!logoError ? (
              <img
                src="/atlascrownimmigration.jpeg"
                alt="Atlas Crown Logo"
                onError={() => setLogoError(true)}
                className="w-10 h-10 rounded-xl object-cover border border-amber-500/30"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-950 to-slate-900 flex items-center justify-center text-amber-400 border border-amber-500/30">
                <Crown className="w-5 h-5" />
              </div>
            )}
            <div>
              <span className="text-base font-black tracking-tight text-white block">
                ATLAS CROWN IMMIGRATION
              </span>
              <span className="text-[10px] tracking-widest uppercase text-amber-400 block">
                Chandigarh, India
              </span>
            </div>
          </div>

          <div className="text-slate-400 text-xs text-center">
            &copy; {new Date().getFullYear()} Atlas Crown Immigration Consultants. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://www.facebook.com/profile.php?id=61592100354790"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 transition-colors flex items-center justify-center border border-slate-800"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/atlas_crown_immigration"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 transition-colors flex items-center justify-center border border-slate-800"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
