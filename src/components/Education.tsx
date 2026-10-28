/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolio.config.ts';
import { calculateGraduationProgress } from '../utils/portfolio.ts';

export const Education: React.FC = () => {
  const { education, personal } = PORTFOLIO_CONFIG;
  const progressInfo = calculateGraduationProgress(
    personal.academicTimeline.startYear,
    personal.academicTimeline.graduationYear,
    2026 // Current local academic year
  );

  return (
    <section id="education" className="py-24 relative border-t border-slate-800/70 bg-[#080B11]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 block mb-2">
            04. Academic Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Coursework
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-xl">
            Rigorous undergraduate training blending core computer science theory with advanced AI/ML electives.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-[#0C101A]/90 border border-slate-800/90 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.degree}
                    </h3>
                    <p className="text-sm sm:text-base text-cyan-300 font-medium mt-1">
                      {item.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {item.startDate} – {item.endDate}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {item.location}
                      </span>
                      {item.gpaOrScore && (
                        <span className="px-2 py-0.5 rounded bg-violet-950/60 text-violet-300 border border-violet-800/40 font-semibold">
                          Cumulative CGPA: {item.gpaOrScore}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Academic Progress Meter */}
                <div className="lg:w-64 bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-400 font-mono">Degree Progress</span>
                    <span className="text-cyan-400 font-mono font-bold">
                      {progressInfo.progressPercent}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-violet-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${progressInfo.progressPercent}%` }}
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 mt-2 block">
                    Expected Graduation: {personal.academicTimeline.graduationYear}
                  </span>
                </div>
              </div>

              {/* Coursework & Milestones */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
                {/* Coursework list */}
                <div className="md:col-span-7">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Key Coursework & Laboratory Subjects</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relevantCoursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="md:col-span-5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-violet-400" />
                    <span>Academic Highlights</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
