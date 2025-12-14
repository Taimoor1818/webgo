import React from 'react';
import { Target, Users, ShieldCheck, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Simplifying the Web</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            WebGo is your curated compass for the digital age. We cut through the noise to bring you the highest quality tools and resources in one beautiful interface.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center px-4">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600">
                To eliminate bookmark clutter and search fatigue by organizing the internet's best utility sites into a single, lightning-fast dashboard.
              </p>
            </div>
            <div className="text-center px-4">
              <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality First</h3>
              <p className="text-slate-600">
                Every link on WebGo is hand-picked, verified, and updated for 2025. We prioritize reliable, high-utility, and safe websites.
              </p>
            </div>
            <div className="text-center px-4">
              <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-600">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Speed & Design</h3>
              <p className="text-slate-600">
                Built with modern tech for instant loads. No ads, no popups, just a clean, professional interface that respects your time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Who We Are</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-sm">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center text-slate-400">
                  <Users size={40} />
                </div>
                <h4 className="text-lg font-bold text-slate-900">The WebGo Team</h4>
                <p className="text-slate-500 mt-2">
                  We are a small group of developers and designers passionate about digital organization and productivity.
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
