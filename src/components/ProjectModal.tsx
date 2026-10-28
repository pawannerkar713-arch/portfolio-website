/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Github, ExternalLink, Copy, Check, Cpu, Layers, Terminal, Sparkles } from 'lucide-react';
import { ProjectDetail } from '../portfolio.config.ts';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(project.codeSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0C101A] border border-slate-700/80 rounded-2xl shadow-2xl shadow-black p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-violet-950/70 text-violet-300 border border-violet-800/40">
              {project.category}
            </span>
            {project.isExample && (
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                Portfolio Example · Customizable
              </span>
            )}
          </div>
          <h2
            id="project-modal-title"
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
          >
            {project.title}
          </h2>
          <p className="text-sm text-cyan-400 font-mono mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Description & Highlights */}
        <div className="space-y-4 mb-6 text-sm text-slate-300 leading-relaxed">
          <p>{project.description}</p>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Key Architectural Highlights</span>
            </h4>
            <ul className="space-y-1.5 list-disc list-inside text-xs text-slate-300">
              {project.keyHighlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center"
            >
              <span className="text-lg font-bold text-cyan-300 font-mono block">
                {metric.value}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Architecture Narrative */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-violet-400" />
            <span>Architecture & Data Flow</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 bg-slate-900/40 border border-slate-800 rounded-xl p-3.5 leading-relaxed">
            {project.architectureOverview}
          </p>
        </div>

        {/* Code Snippet Box */}
        <div className="mb-6">
          <div className="flex items-center justify-between bg-slate-950 px-4 py-2 border-t border-x border-slate-800 rounded-t-xl text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-violet-400" />
              <span>{project.codeSnippetTitle}</span>
            </div>
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1 text-[11px] text-slate-300 hover:text-white transition-colors"
            >
              {copiedCode ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy code</span>
                </>
              )}
            </button>
          </div>
          <pre className="bg-[#07090F] p-4 rounded-b-xl border border-slate-800 overflow-x-auto text-xs font-mono text-slate-200 leading-normal">
            <code>{project.codeSnippet}</code>
          </pre>
        </div>

        {/* Technologies Used */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* External Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>Repository</span>
          </a>
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Project Demo / Docs</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
