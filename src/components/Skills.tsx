/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, Code2, Cpu, Globe, Wrench, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolio.config.ts';

export const Skills: React.FC = () => {
  const { skillCategories } = PORTFOLIO_CONFIG;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryOptions = useMemo(() => {
    return ['All', ...skillCategories.map((c) => c.categoryName)];
  }, [skillCategories]);

  // Flattened and filtered skills list
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return skillCategories
      .filter((cat) => selectedCategory === 'All' || cat.categoryName === selectedCategory)
      .map((cat) => {
        const matchingSkills = cat.skills.filter((skill) => {
          if (!query) return true;
          return (
            skill.name.toLowerCase().includes(query) ||
            skill.context.toLowerCase().includes(query) ||
            skill.level.toLowerCase().includes(query)
          );
        });

        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [skillCategories, selectedCategory, searchQuery]);

  const getCategoryIcon = (categoryName: string) => {
    if (categoryName.includes('AI') || categoryName.includes('Machine Learning')) {
      return Cpu;
    }
    if (categoryName.includes('Language')) {
      return Code2;
    }
    if (categoryName.includes('Frontend') || categoryName.includes('Full-Stack')) {
      return Globe;
    }
    return Wrench;
  };

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/70 bg-[#080B11]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 block mb-2">
              02. Technical Arsenal
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills & Frameworks
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-xl">
              Categorized technologies verified through hands-on coursework, laboratory research, and deployed projects.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="mt-6 md:mt-0 relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. PyTorch, C++)..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Interactive Segmented Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categoryOptions.map((catName) => {
            const isActive = selectedCategory === catName;
            return (
              <button
                key={catName}
                onClick={() => setSelectedCategory(catName)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                  isActive
                    ? 'bg-violet-600/90 text-white shadow-md shadow-violet-900/30 border border-violet-400/40'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {catName}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl">
            <p className="text-slate-400 text-sm">No skills found matching &quot;{searchQuery}&quot; in this category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-cyan-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {filteredCategories.map((category) => {
              const IconComponent = getCategoryIcon(category.categoryName);

              return (
                <div key={category.categoryName} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 tracking-tight">
                        {category.categoryName}
                      </h3>
                      <p className="text-xs text-slate-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 hover:shadow-lg hover:shadow-black/20 group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h4>
                          <span
                            className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded ${
                              skill.level === 'Core'
                                ? 'bg-violet-950/70 text-violet-300 border border-violet-800/50'
                                : skill.level === 'Proficient'
                                ? 'bg-indigo-950/70 text-indigo-300 border border-indigo-800/50'
                                : 'bg-slate-800 text-slate-400 border border-slate-700/60'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {skill.context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
