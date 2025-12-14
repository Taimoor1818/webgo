import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ButtonCardProps {
  title: string;
  url: string;
  icon?: React.ReactNode;
}

export const ButtonCard: React.FC<ButtonCardProps> = ({ title, url, icon }) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 h-32 md:h-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col items-center gap-3">
        {icon && <div className="text-slate-500 group-hover:text-blue-600 transition-colors duration-300">{icon}</div>}
        
        <h3 className="font-bold text-slate-800 text-sm md:text-base group-hover:text-blue-700 transition-colors line-clamp-2">
          {title}
        </h3>
        
        <ExternalLink size={14} className="text-slate-300 group-hover:text-blue-400 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>
    </a>
  );
};
