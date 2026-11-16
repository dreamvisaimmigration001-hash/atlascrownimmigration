import React from 'react';
import Navbar from '@/components/Navbar';
import LocationFooter from '@/components/LocationFooter';
import { MapPin, Clock, Mail, Car, Bus } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Sector 32D Chandigarh Office | Atlas Crown',
  description: 'Visit Atlas Crown Immigration at 2nd Floor, SCO 361, Sector 32D, Chandigarh. Open Mon-Sat 10 AM - 6 PM.',
  keywords: ['contact atlas crown immigration', 'sector 32d chandigarh immigration office', 'immigration office chandigarh'],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
            alt="Chandigarh Office Building"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
            Sector 32D Headquarters
          </span>
          <h1 className="text-4xl sm:text-6xl font-black mt-4">Contact Chandigarh Office</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mt-3">
            Schedule a personal consultation with our senior immigration attorneys and consultants.
          </p>
        </div>
      </section>

      {/* How to Reach Us Section */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black">Getting to Our Sector 32D Office</h2>
            <p className="text-slate-400 mt-2">Easily accessible from all parts of Chandigarh, Mohali, Panchkula, and Punjab.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">By Car / Taxi</h3>
              <p className="text-slate-400 text-sm">Located at SCO 361, Sector 32D, Chandigarh with ample parking space right in front of the commercial block.</p>
            </div>

            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Bus className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">From ISBT Sector 43 / 17</h3>
              <p className="text-slate-400 text-sm">Just a 10-15 minute cab ride or local bus commute from major transit hubs in Chandigarh.</p>
            </div>

            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Working Hours</h3>
              <p className="text-slate-400 text-sm">Open Monday through Saturday, from 10:00 AM to 6:00 PM. Walk-ins are always welcome.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Footer Component */}
      <LocationFooter />
    </main>
  );
}
