import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  title: string;
  icon: LucideIcon;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ id, title, icon: Icon }) => {
  return (
    <Link 
      to={`/${id}`}
      className="group relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden aspect-square flex flex-col items-center justify-center p-8 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl group-hover:bg-blue-200 transition-colors duration-500 opacity-50" />
      
      <div className="relative z-10 flex flex-col items-center gap-6 text-center transform group-hover:scale-105 transition-transform duration-500">
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:border-blue-100 group-hover:shadow-lg transition-all duration-300">
          <Icon size={48} className="text-slate-600 group-hover:text-blue-600 transition-colors duration-300 stroke-[1.5]" />
        </div>
        
        <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-800 transition-colors">
          {title}
        </h3>
        
        <span className="text-sm font-medium text-slate-400 group-hover:text-blue-500 flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Explore category &rarr;
        </span>
      </div>
    </Link>
  );
};
