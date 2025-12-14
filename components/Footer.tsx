import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
               <div className="bg-gradient-to-tr from-blue-600 to-violet-600 text-white p-1 rounded-md">
                 <Zap size={16} fill="currentColor" />
               </div>
              <span className="text-lg font-bold text-slate-800">WebGo</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Your premium gateway to the internet's most valuable resources. Curated, fast, and reliable.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/ai-tools" className="hover:text-blue-600 transition-colors">AI Tools</Link></li>
              <li><Link to="/education" className="hover:text-blue-600 transition-colors">Education</Link></li>
              <li><Link to="/technology" className="hover:text-blue-600 transition-colors">Technology</Link></li>
              <li><Link to="/news" className="hover:text-blue-600 transition-colors">News</Link></li>
            </ul>
          </div>

        </div>
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">© WebGo. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-400">
             <span className="cursor-pointer hover:text-slate-600">Terms</span>
             <span className="cursor-pointer hover:text-slate-600">Privacy</span>
             <span className="cursor-pointer hover:text-slate-600">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
