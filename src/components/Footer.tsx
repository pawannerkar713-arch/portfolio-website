/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Github, Linkedin, Terminal, Sparkles } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolio.config.ts';

interface FooterProps {
  onOpenGitHubGuide: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGitHubGuide, onOpenResume }) => {
  const { personal } = PORTFOLIO_CONFIG;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070A10] text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-mono font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              {personal.avatarInitials}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                {personal.name}
              </p>
              <p className="text-xs text-slate-400">
                {personal.role} · {personal.specialization}
              </p>
            </div>
          </div>

          {/* Quick Action Navigation */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              onClick={onOpenResume}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Resume
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={onOpenGitHubGuide}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              GitHub & CI/CD Guide
            </button>
            <span className="text-slate-700">·</span>
            <a
              href="#contact"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors hover:border-slate-700 ml-2"
              aria-label="Back to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Edit Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            © {new Date().getFullYear()} {personal.name}. Built with React, Vite & Tailwind CSS.
          </p>
          <p className="font-mono text-[11px] text-slate-400">
            Personalize data in <span className="text-cyan-400">src/portfolio.config.ts</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
