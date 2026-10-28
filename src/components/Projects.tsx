/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Github, ExternalLink, ArrowUpRight, Code, Cpu, Eye, Filter } from 'lucide-react';
import { PORTFOLIO_CONFIG, ProjectDetail } from '../portfolio.config.ts';
import { ProjectModal } from './ProjectModal.tsx';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_CONFIG;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectDetail | null>(null);

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ['All', ...Array.from(set)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 block mb-2">
              03. Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Engineering & AI Projects
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-xl">
              Architected for algorithmic precision, high throughput, and clean modular codebases.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                  selectedCategory === category
                    ? 'bg-cyan-500/90 text-slate-950 font-semibold shadow-md shadow-cyan-900/30'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl bg-[#0C101A]/90 border border-slate-800/90 hover:border-violet-500/40 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-violet-950/20 group relative"
            >
              {/* Category & Status Bar */}
              <div className="flex items-center justify-between gap-2 mb-3 text-xs text-slate-400">
                <span className="font-mono text-cyan-400">{project.category}</span>
                {project.isExample && (
                  <span className="text-[11px] font-mono text-slate-400 border border-slate-800 px-2 py-0.5 rounded bg-slate-900">
                    Example Project
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium mb-4 line-clamp-2">
                {project.subtitle}
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-2 py-2.5 px-3 mb-4 rounded-xl bg-slate-900/80 border border-slate-800/80 text-center">
                {project.metrics.map((m, i) => (
                  <div key={i}>
                    <span className="text-xs font-bold font-mono text-violet-300 block">
                      {m.value}
                    </span>
                    <span className="text-[10px] text-slate-400 block truncate">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech Stack List */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono text-slate-300 bg-slate-800/70 px-2 py-0.5 rounded border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-[11px] font-mono text-slate-400 px-1 py-0.5">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              {/* Card Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Architecture & Code</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    title="View GitHub Repository"
                    aria-label={`GitHub Repository for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                      title="View Demo"
                      aria-label={`Live Demo for ${project.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
