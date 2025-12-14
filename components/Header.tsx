import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import clsx from 'clsx';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-tr from-blue-600 to-violet-600 text-white p-1.5 rounded-lg group-hover:scale-105 transition-transform duration-300">
              <Zap size={24} fill="currentColor" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-violet-700 tracking-tight">
              WebGo
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={clsx(
                "text-sm font-medium transition-colors hover:text-blue-600", 
                isActive('/') ? "text-blue-600" : "text-slate-600"
              )}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={clsx(
                "text-sm font-medium transition-colors hover:text-blue-600", 
                isActive('/about') ? "text-blue-600" : "text-slate-600"
              )}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={clsx(
                "text-sm font-medium transition-colors hover:text-blue-600", 
                isActive('/contact') ? "text-blue-600" : "text-slate-600"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 animate-fade-in shadow-lg">
          <div className="px-4 py-4 space-y-4 flex flex-col">
            <Link 
              to="/" 
              className="text-base font-medium text-slate-700 hover:text-blue-600 px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-base font-medium text-slate-700 hover:text-blue-600 px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-base font-medium text-slate-700 hover:text-blue-600 px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
