/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, Trophy, ShieldCheck, Microscope, Binary } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolio.config.ts';

export const Achievements: React.FC = () => {
  const { achievements } = PORTFOLIO_CONFIG;
  const [activeFilter, setActiveFilter] = useState<'All' | 'Certification' | 'Hackathon' | 'Research' | 'Academic'>('All');

  const filterOptions = ['All', 'Certification', 'Hackathon', 'Research', 'Academic'] as const;

  const filteredItems = achievements.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.type === activeFilter;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Certification':
        return ShieldCheck;
      case 'Hackathon':
        return Trophy;
      case 'Research':
        return Microscope;
      default:
        return Binary;
    }
  };

  return (
    <section id="achievements" className="py-24 relative border-t border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 block mb-2">
              05. Verified Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Certifications & Honors
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-xl">
              Authentic milestones, industry certifications, hackathon rankings, and undergraduate research contributions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1.5">
            {filterOptions.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                  activeFilter === type
                    ? 'bg-violet-600 text-white font-semibold shadow-md shadow-violet-900/30'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const IconComponent = getTypeIcon(item.type);

            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#0C101A]/90 border border-slate-800/90 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300 border border-slate-700/60">
                      {item.type}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {item.date}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Qualification</span>
                  </span>

                  {item.credentialUrl && (
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                      title="View Credential URL"
                    >
                      <span>Certificate</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
