import React from 'react';
import { CategoryCard } from '@components/CategoryCard';
import { allCategories } from '@/data';
import * as Icons from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-slate-50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
          <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Animated Colorful Dots */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" style={{ animationDelay: '0ms' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </div>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" style={{ animationDelay: '300ms' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" style={{ animationDelay: '600ms' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </div>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" style={{ animationDelay: '900ms' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </div>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" style={{ animationDelay: '1200ms' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 animate-slide-up">
            Instant Access to the <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              World's Best Websites
            </span>
          </h1>
          
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Your curated command center for AI, Education, Tech, News, and more. 
            Stop searching, start discovering.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Explore Categories</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allCategories.map((cat) => {
              // @ts-ignore - Lucide icons are dynamically accessed
              const IconComponent = Icons[cat.iconName];
              return (
                <CategoryCard 
                  key={cat.id} 
                  id={cat.id} 
                  title={cat.title} 
                  icon={IconComponent} 
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};