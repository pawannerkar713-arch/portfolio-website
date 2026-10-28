/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Github, Terminal, Copy, Check, Rocket, ShieldAlert, BookOpen, ExternalLink } from 'lucide-react';

interface GitHubDeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubDeploymentModal: React.FC<GitHubDeploymentModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // Fallback
    }
  };

  const steps = [
    {
      title: 'Step 1: Create a New GitHub Repository',
      desc: 'Go to github.com/new and create a new repository (e.g. "portfolio" or "username.github.io"). Keep it Public and leave "Initialize with README" unchecked.',
      code: '# If using GitHub CLI:\ngh repo create my-portfolio --public --source=.',
    },
    {
      title: 'Step 2: Initialize Git & Push Code',
      desc: 'Run these commands in your project terminal to link your repository and push the codebase to your main branch:',
      code: `git init
git add .
git commit -m "feat: initial commit of AI & ML student portfolio"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main`,
    },
    {
      title: 'Step 3: Enable GitHub Pages with GitHub Actions',
      desc: 'This repository comes pre-configured with a `.github/workflows/deploy.yml` GitHub Actions pipeline. In your repository on GitHub:',
      code: `# In GitHub:
1. Go to "Settings" -> "Pages"
2. Under "Build and deployment" > "Source", select "GitHub Actions"
3. That's it! Every git push to main will automatically build & deploy your site.`,
    },
    {
      title: 'Step 4: Subpath Base Path Support',
      desc: 'If your site is hosted at `https://<username>.github.io/<repo>/`, Vite handles this via relative `./` paths in `vite.config.ts`, or you can pass `VITE_BASE_PATH=/<repo>/` in the GitHub Actions workflow.',
      code: `// Already included in your vite.config.ts:
base: process.env.VITE_BASE_PATH || './'`,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="deployment-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0C101A] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          aria-label="Close guide modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-cyan-950/50 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
            <Rocket className="w-5 h-5" />
          </div>
          <div>
            <h2 id="deployment-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              GitHub Publishing & Deployment Guide
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              GitHub Actions · GitHub Pages · Automated CI/CD
            </p>
          </div>
        </div>

        {/* Authentication Notice */}
        <div className="mt-4 mb-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
          <div>
            <span className="font-semibold text-white block mb-0.5">
              Secure Repository Authorization Note
            </span>
            As an ethical developer portfolio, your private GitHub credentials and repository access are never requested or pushed to automatically. All ready-to-run files, `.github/workflows/deploy.yml`, and `README.md` are included so you can push with full ownership using your GitHub account!
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-violet-600/30 text-violet-300 font-mono text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span>{step.title}</span>
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {step.desc}
              </p>

              <div className="relative mt-2">
                <pre className="bg-[#07090F] p-3 rounded-lg border border-slate-800 overflow-x-auto text-xs font-mono text-cyan-300 leading-relaxed">
                  <code>{step.code}</code>
                </pre>
                <button
                  onClick={() => copyToClipboard(step.code, idx)}
                  className="absolute top-2 right-2 p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Copy command"
                  aria-label="Copy code to clipboard"
                >
                  {copiedIndex === idx ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800 text-xs">
          <a
            href="https://github.com/new"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Open GitHub in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
