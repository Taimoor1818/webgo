import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';
import * as Icons from 'lucide-react';
import { allCategories } from '@/data';
import { ButtonCard } from '@components/ButtonCard';

export const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  // Simple client-side pagination state
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({});
  const ITEMS_PER_PAGE = 48;

  const category = allCategories.find(c => c.id === categoryId);

  // Reset pagination when category changes
  useEffect(() => {
    setVisibleCounts({});
    setSearchQuery('');
  }, [categoryId]);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  // @ts-ignore
  const IconComponent = Icons[category.iconName];

  // Helper to filter items based on search
  const filterItems = (items: any[]) => {
    if (!searchQuery) return items;
    return items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const getVisibleCount = (sectionKey: string) => {
    return visibleCounts[sectionKey] || ITEMS_PER_PAGE;
  };

  const showMore = (sectionKey: string) => {
    setVisibleCounts(prev => ({
      ...prev,
      [sectionKey]: (prev[sectionKey] || ITEMS_PER_PAGE) + ITEMS_PER_PAGE
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex p-4 rounded-2xl bg-blue-50 text-blue-600 mb-6">
            <IconComponent size={48} strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{category.title}</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">{category.description}</p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 bg-slate-50 border-0 ring-1 ring-slate-200 rounded-full text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-sm"
              placeholder={`Search ${category.title} (1000+ items)...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Render Sections if available (e.g. AI Tools) */}
        {category.sections && (
          <div className="space-y-16">
            {category.sections.map((section, idx) => {
              const filteredItems = filterItems(section.items);
              if (filteredItems.length === 0) return null;
              
              const sectionKey = `section-${idx}`;
              const visibleCount = getVisibleCount(sectionKey);
              const visibleItems = filteredItems.slice(0, visibleCount);
              const hasMore = visibleItems.length < filteredItems.length;

              return (
                <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="flex justify-between items-baseline mb-6 border-l-4 border-blue-500 pl-4">
                     <h2 className="text-2xl font-bold text-slate-800">
                      {section.title}
                     </h2>
                     <span className="text-sm font-medium text-slate-400">
                       {filteredItems.length} items
                     </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {visibleItems.map((item, i) => (
                      <ButtonCard 
                        key={i} 
                        title={item.name} 
                        url={item.url} 
                        icon={<IconComponent size={20} />} 
                      />
                    ))}
                  </div>

                  {hasMore && (
                    <div className="mt-8 text-center">
                      <button 
                        onClick={() => showMore(sectionKey)}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm"
                      >
                        Load More <ChevronDown size={16} />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Render Flat List if available */}
        {category.items && (
          <div className="animate-slide-up">
             {filterItems(category.items).length === 0 && (
                <div className="text-center py-20 text-slate-400">
                  <p>No results found for "{searchQuery}"</p>
                </div>
             )}
             
             {(() => {
                const filteredItems = filterItems(category.items);
                const sectionKey = 'main-list';
                const visibleCount = getVisibleCount(sectionKey);
                const visibleItems = filteredItems.slice(0, visibleCount);
                const hasMore = visibleItems.length < filteredItems.length;

                return (
                  <>
                     <div className="mb-6 flex justify-end">
                       <span className="text-sm font-medium text-slate-400">
                         Showing {visibleItems.length} of {filteredItems.length} items
                       </span>
                     </div>
                     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {visibleItems.map((item, i) => (
                        <ButtonCard 
                          key={i} 
                          title={item.name} 
                          url={item.url} 
                          icon={<IconComponent size={20} />} 
                        />
                      ))}
                    </div>
                    {hasMore && (
                      <div className="mt-12 text-center">
                        <button 
                          onClick={() => showMore(sectionKey)}
                          className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm font-medium"
                        >
                          Load More Websites <ChevronDown size={16} />
                        </button>
                      </div>
                    )}
                  </>
                );
             })()}
          </div>
        )}
      </div>
    </div>
  );
};
