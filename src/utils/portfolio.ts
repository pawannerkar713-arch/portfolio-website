/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

/**
 * Validates the contact form inputs
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  const trimmedName = data.name.trim();
  if (!trimmedName) {
    errors.name = 'Please provide your name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const trimmedEmail = data.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please provide your email address.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please provide a valid email address.';
  }

  const trimmedSubject = data.subject.trim();
  if (!trimmedSubject) {
    errors.subject = 'Please enter a subject.';
  }

  const trimmedMessage = data.message.trim();
  if (!trimmedMessage) {
    errors.message = 'Please write a brief message.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Encodes a mailto URI with sanitized parameters
 */
export function generateMailtoUrl(
  recipient: string,
  subject: string,
  message: string,
  senderName?: string
): string {
  const cleanSubject = encodeURIComponent(subject.trim());
  const formattedBody = encodeURIComponent(
    `From: ${senderName || 'Visitor'}\n\n${message.trim()}`
  );
  return `mailto:${recipient.trim()}?subject=${cleanSubject}&body=${formattedBody}`;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  [key: string]: unknown;
}

/**
 * Pure filter for portfolio projects
 */
export function filterProjects<T extends ProjectItem>(
  projects: T[],
  selectedCategory: string,
  searchQuery: string = ''
): T[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      project.category.toLowerCase() === selectedCategory.toLowerCase();

    if (!matchesCategory) return false;

    if (!query) return true;

    const matchesTitle = project.title.toLowerCase().includes(query);
    const matchesDesc = project.description.toLowerCase().includes(query);
    const matchesTech = project.technologies.some((tech) =>
      tech.toLowerCase().includes(query)
    );

    return matchesTitle || matchesDesc || matchesTech;
  });
}

export interface SkillItem {
  name: string;
  category: string;
  level: 'Core' | 'Proficient' | 'Familiar';
  tags?: string[];
}

/**
 * Pure filter for technical skills
 */
export function filterSkills<T extends SkillItem>(
  skills: T[],
  selectedCategory: string,
  searchQuery: string = ''
): T[] {
  const query = searchQuery.trim().toLowerCase();

  return skills.filter((skill) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      skill.category.toLowerCase() === selectedCategory.toLowerCase();

    if (!matchesCategory) return false;

    if (!query) return true;

    const matchesName = skill.name.toLowerCase().includes(query);
    const matchesTags = (skill.tags || []).some((tag) =>
      tag.toLowerCase().includes(query)
    );

    return matchesName || matchesTags;
  });
}

/**
 * Calculates academic degree completion progress
 */
export function calculateGraduationProgress(
  startYear: number,
  gradYear: number,
  currentYear: number
): { progressPercent: number; currentAcademicYear: number; totalYears: number } {
  const totalYears = Math.max(1, gradYear - startYear);
  const elapsed = currentYear - startYear;
  const clampedElapsed = Math.min(Math.max(0, elapsed), totalYears);
  const progressPercent = Math.round((clampedElapsed / totalYears) * 100);
  const currentAcademicYear = Math.min(Math.max(1, Math.floor(elapsed) + 1), totalYears);

  return {
    progressPercent,
    currentAcademicYear,
    totalYears,
  };
}
