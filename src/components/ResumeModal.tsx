/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { X, Printer, Download, Check, FileText, Mail, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolio.config.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { personal, education, skillCategories, projects, achievements, resumeData } = PORTFOLIO_CONFIG;
  const [downloaded, setDownloaded] = useState(false);

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

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const mdContent = `# ${personal.name}
${personal.role} · ${personal.specialization}
Email: ${personal.email} | Location: ${personal.location}
GitHub: ${personal.socialLinks.github} | LinkedIn: ${personal.socialLinks.linkedin}

---

## PROFESSIONAL SUMMARY
${resumeData.summary}

---

## EDUCATION
${education.map((e) => `### ${e.degree}
**${e.institution}** | ${e.location} | ${e.startDate} – ${e.endDate}
- Status: ${e.currentStatus}
- CGPA / Score: ${e.gpaOrScore || 'N/A'}
- Relevant Coursework: ${e.relevantCoursework.join(', ')}
`).join('\n')}

---

## TECHNICAL SKILLS
- **Programming Languages**: ${resumeData.skillsSummary.languages}
- **AI / Machine Learning**: ${resumeData.skillsSummary.aiml}
- **Developer Tools & Systems**: ${resumeData.skillsSummary.developerTools}

---

## SELECTED PROJECTS
${projects.map((p) => `### ${p.title} (${p.category})
- ${p.description}
- Technologies: ${p.technologies.join(', ')}
- Repository: ${p.githubUrl}
`).join('\n')}

---

## CERTIFICATIONS & ACHIEVEMENTS
${achievements.map((a) => `- **${a.title}** (${a.organization}, ${a.date}) - ${a.description}`).join('\n')}
`;

    const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${personal.name.replace(/\s+/g, '_')}_Resume.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume Preview Modal"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0B0F17] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Actions Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0E1320] no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
              Resume Preview · {personal.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
              title="Download Markdown Resume"
            >
              {downloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Saved</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download MD</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-white text-slate-900" id="resume-print-area">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                  {personal.name}
                </h1>
                <p className="text-sm font-semibold text-indigo-700 tracking-wide uppercase mt-0.5">
                  {personal.role} · {personal.specialization}
                </p>
              </div>

              <div className="text-xs text-slate-600 space-y-1 sm:text-right">
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{personal.email}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{personal.location}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-2 text-indigo-600 font-medium">
                  <span>github.com/pawannerkar</span>
                  <span>·</span>
                  <span>linkedin.com/in/pawannerkar</span>
                </p>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {resumeData.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Education
            </h2>
            {education.map((edu, idx) => (
              <div key={idx} className="space-y-1.5 text-xs">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>{edu.degree}</span>
                  <span>{edu.startDate} – {edu.endDate}</span>
                </div>
                <div className="flex justify-between text-slate-700 italic">
                  <span>{edu.institution}, {edu.location}</span>
                  <span>{edu.gpaOrScore}</span>
                </div>
                <p className="text-slate-600">
                  <span className="font-semibold text-slate-800">Relevant Coursework:</span>{' '}
                  {edu.relevantCoursework.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="text-xs space-y-1 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Programming Languages:</span>{' '}
                {resumeData.skillsSummary.languages}
              </p>
              <p>
                <span className="font-semibold text-slate-900">AI / Machine Learning:</span>{' '}
                {resumeData.skillsSummary.aiml}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Tools, Systems & Cloud:</span>{' '}
                {resumeData.skillsSummary.developerTools}
              </p>
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Technical Projects
            </h2>
            <div className="space-y-4">
              {projects.slice(0, 3).map((project) => (
                <div key={project.id} className="text-xs space-y-1">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{project.title}</span>
                    <span className="font-mono text-[11px] text-slate-600">{project.category}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                    {project.keyHighlights.slice(0, 2).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-slate-500 font-mono">
                    <span className="font-semibold text-slate-700">Stack:</span>{' '}
                    {project.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Certifications & Honors
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {achievements.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    <strong className="text-slate-900">{item.title}</strong> — {item.organization} ({item.description})
                  </span>
                  <span className="font-mono text-slate-500 shrink-0 ml-2">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
