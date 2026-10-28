/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Github, Linkedin, Terminal, Sparkles, Cpu, Layers } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolio.config.ts';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal } = PORTFOLIO_CONFIG;
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setKeywordIndex((prev) => (prev + 1) % personal.specializationKeywords.length);
        setFadeState('in');
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, [personal.specializationKeywords.length]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle ambient lighting gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-violet-600/15 via-indigo-500/10 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-10 right-10 w-72 h-72 bg-violet-600/10 blur-[90px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Announcement Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                {personal.statusBadge}
              </span>
            </div>

            {/* Candidate Identity */}
            <h2 className="text-sm font-semibold tracking-wider uppercase text-cyan-400 font-mono mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-violet-400" />
              <span>{personal.name} · {personal.role}</span>
            </h2>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Building the Future with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">
                Code & AI.
              </span>
            </h1>

            {/* Animated Specialization Cycling */}
            <div className="flex flex-wrap items-baseline gap-2 text-base sm:text-xl font-medium text-slate-300 mb-6 min-h-[2.25rem]">
              <span className="text-slate-400 shrink-0">Specializing in:</span>
              <span
                className={`font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-300 transition-all duration-300 ${
                  fadeState === 'in'
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform -translate-y-1'
                }`}
              >
                {personal.specializationKeywords[keywordIndex]}
              </span>
            </div>

            {/* Intro text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              {personal.bioIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-lg shadow-violet-950/40 border border-violet-400/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <FileText className="w-4 h-4 text-violet-400" />
                <span>View & Download Resume</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 transition-colors"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links & Highlights */}
            <div className="flex items-center gap-5 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors p-1.5 hover:bg-slate-800/60 rounded-lg"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-1.5 hover:bg-slate-800/60 rounded-lg"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-400 font-mono">
                {personal.academicTimeline.degreeName} ({personal.academicTimeline.graduationYear})
              </span>
            </div>
          </div>

          {/* Right Column: High-Tech Glassmorphic Profile Card & Quick Telemetry */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600/40 via-indigo-600/20 to-cyan-500/40 rounded-2xl blur-sm opacity-70 group-hover:opacity-100 transition duration-1000"></div>

              {/* Glass container */}
              <div className="relative rounded-2xl bg-[#0D121F]/90 border border-slate-800/90 p-6 sm:p-7 backdrop-blur-xl shadow-2xl">
                {/* Header of card with profile and identity */}
                <div className="flex items-center gap-4 mb-6 pb-5 border-b border-slate-800/80">
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[2px] shadow-lg shadow-violet-900/20">
                    <div className="w-full h-full bg-[#0A0E18] rounded-[14px] flex items-center justify-center overflow-hidden">
                      {/* Monogram portrait placeholder */}
                      <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-violet-200 to-cyan-200 font-mono">
                        {personal.avatarInitials}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {personal.name}
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono">
                      {personal.specialization}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {personal.academicTimeline.degreeName}
                    </p>
                  </div>
                </div>

                {/* Technical Focus Chips */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-violet-400" />
                    <span>Primary Stack & Paradigms</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-2.5">
                      <span className="text-slate-400 block text-[11px]">Framework</span>
                      <span className="text-slate-200 font-semibold font-mono">PyTorch / CUDA</span>
                    </div>
                    <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-2.5">
                      <span className="text-slate-400 block text-[11px]">Languages</span>
                      <span className="text-slate-200 font-semibold font-mono">Python · C++</span>
                    </div>
                    <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-2.5">
                      <span className="text-slate-400 block text-[11px]">Domain</span>
                      <span className="text-slate-200 font-semibold font-mono">Vision & Transformers</span>
                    </div>
                    <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-2.5">
                      <span className="text-slate-400 block text-[11px]">Deployment</span>
                      <span className="text-slate-200 font-semibold font-mono">FastAPI · Docker</span>
                    </div>
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="p-3.5 rounded-xl bg-violet-950/20 border border-violet-900/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center text-violet-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-200 block">
                        Academic Standing
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Class of {personal.academicTimeline.graduationYear} (Year 3)
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
