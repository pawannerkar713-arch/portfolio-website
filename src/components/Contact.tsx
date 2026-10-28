/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Github, Linkedin, ExternalLink, MapPin, Sparkles } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolio.config.ts';
import { validateContactForm, generateMailtoUrl, ContactFormData } from '../utils/portfolio.ts';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_CONFIG;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formState);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Launch native mailto client
    const mailtoUrl = generateMailtoUrl(
      personal.email,
      formState.subject,
      formState.message,
      formState.name
    );

    // Open email client safely
    window.location.href = mailtoUrl;

    setSubmittedSuccess(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-800/70 bg-[#080B11]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 block mb-2">
            06. Communication
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-xl">
            Whether for Summer 2027 internship opportunities, research collaborations, or technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Card */}
            <div className="p-6 rounded-2xl bg-[#0C101A] border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400">Direct Inquiries</span>
                  <h3 className="text-sm font-semibold text-white">Email Address</h3>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs sm:text-sm font-mono text-cyan-300 truncate mr-2">
                  {personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Social / Developer Handles */}
            <div className="p-6 rounded-2xl bg-[#0C101A] border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Profiles & Repositories
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personal.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs font-medium"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-40" />
                </a>

                <a
                  href={personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs font-medium"
                >
                  <Linkedin className="w-4 h-4 text-violet-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-40" />
                </a>

                <a
                  href={personal.socialLinks.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs font-medium"
                >
                  <span className="font-mono text-amber-400 font-bold">LC</span>
                  <span>LeetCode</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-40" />
                </a>

                <a
                  href={personal.socialLinks.kaggle}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs font-medium"
                >
                  <span className="font-mono text-cyan-400 font-bold">K</span>
                  <span>Kaggle</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-40" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0C101A] border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to dispatch a message directly to my inbox via your preferred mail client.
              </p>

              {submittedSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>
                    Your message draft has been prepared! If your email client didn&apos;t automatically launch, click the email above.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleFormChange}
                      placeholder="e.g. Alex Rivera"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-900 border text-white placeholder-slate-400 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleFormChange}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-900 border text-white placeholder-slate-400 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject <span className="text-violet-400">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleFormChange}
                    placeholder="e.g. Summer 2027 Machine Learning Internship"
                    className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-900 border text-white placeholder-slate-400 focus:outline-none transition-colors ${
                      errors.subject ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleFormChange}
                    placeholder="Hi Pawan, I reviewed your CV and projects and would love to connect..."
                    className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-900 border text-white placeholder-slate-400 focus:outline-none transition-colors resize-y ${
                      errors.message ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-lg shadow-violet-950/40 border border-violet-400/20 transition-all hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Mail Client</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
