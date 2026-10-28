/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, BookOpen, Brain, Terminal, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolio.config.ts';

export const About: React.FC = () => {
  const { aboutMe, personal } = PORTFOLIO_CONFIG;

  return (
    <section id="about" className="py-24 relative border-t border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 block mb-2">
            01. Professional Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me & Technical Philosophy
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl">
            An engineering perspective driven by sound mathematical intuition, algorithmic efficiency, and clean code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative - 7 Columns */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            {aboutMe.summary.map((paragraph, index) => (
              <p key={index} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Current Learning Objectives */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-300 font-mono mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>Current Research & Growth Roadmap</span>
              </h3>
              <ul className="space-y-3">
                {aboutMe.learningGoals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-violet-400 font-mono font-bold mt-0.5">0{index + 1}.</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Guiding Principles Cards - 5 Columns */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Engineering Values
            </h3>

            {aboutMe.corePrinciples.map((principle, index) => {
              const icons = [Brain, Terminal, ShieldCheck];
              const IconComponent = icons[index % icons.length];

              return (
                <div
                  key={principle.title}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-violet-600/15 border border-violet-500/20 flex items-center justify-center text-violet-400">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white tracking-tight">
                      {principle.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-11">
                    {principle.description}
                  </p>
                </div>
              );
            })}

            {/* Quick Summary Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-violet-950/20 via-slate-900/40 to-cyan-950/20 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <div>
                <span className="text-slate-300 font-medium block">Specialization Track</span>
                <span>{personal.specialization}</span>
              </div>
              <div className="text-right">
                <span className="text-slate-300 font-medium block">Undergrad Class</span>
                <span className="font-mono text-cyan-400">2023 - 2027</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
