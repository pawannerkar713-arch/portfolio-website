/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  generateMailtoUrl,
  filterProjects,
  filterSkills,
  calculateGraduationProgress,
  ProjectItem,
  SkillItem,
} from './portfolio.ts';

test('validateContactForm rejects invalid inputs and accepts valid data', () => {
  // Empty data
  const emptyRes = validateContactForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  assert.equal(emptyRes.isValid, false);
  assert.ok(emptyRes.errors.name);
  assert.ok(emptyRes.errors.email);
  assert.ok(emptyRes.errors.subject);
  assert.ok(emptyRes.errors.message);

  // Invalid email format
  const badEmailRes = validateContactForm({
    name: 'Pawan',
    email: 'not-an-email',
    subject: 'Collaboration',
    message: 'Hello, I loved your computer vision research project.',
  });
  assert.equal(badEmailRes.isValid, false);
  assert.ok(badEmailRes.errors.email);
  assert.equal(badEmailRes.errors.name, undefined);

  // Valid data
  const validRes = validateContactForm({
    name: 'Pawan Nerkar',
    email: 'pawannerkar713@gmail.com',
    subject: 'AI Research Collaboration',
    message: 'Hello! I would love to discuss your PyTorch object detection model.',
  });
  assert.equal(validRes.isValid, true);
  assert.equal(Object.keys(validRes.errors).length, 0);
});

test('generateMailtoUrl correctly builds URI', () => {
  const url = generateMailtoUrl(
    'test@example.com',
    'Hello World',
    'Check this out',
    'Alex'
  );
  assert.ok(url.startsWith('mailto:test@example.com?subject=Hello%20World'));
  assert.ok(url.includes('Alex'));
});

test('filterProjects correctly handles category and search queries', () => {
  const sampleProjects: ProjectItem[] = [
    {
      id: '1',
      title: 'NeuroVision YOLO',
      category: 'Computer Vision',
      description: 'Real-time multi-object tracking using PyTorch and ByteTrack.',
      technologies: ['PyTorch', 'OpenCV', 'Python'],
    },
    {
      id: '2',
      title: 'AgenticDoc RAG',
      category: 'LLM & NLP',
      description: 'Document Q&A with ChromaDB and LangChain embeddings.',
      technologies: ['Python', 'ChromaDB', 'FastAPI'],
    },
    {
      id: '3',
      title: 'DistributedKV Store',
      category: 'Systems',
      description: 'Raft consensus in-memory cache.',
      technologies: ['C++', 'gRPC', 'Docker'],
    },
  ];

  // All category
  assert.equal(filterProjects(sampleProjects, 'All').length, 3);

  // Category filter
  const visionOnly = filterProjects(sampleProjects, 'Computer Vision');
  assert.equal(visionOnly.length, 1);
  assert.equal(visionOnly[0].id, '1');

  // Search by keyword in technologies
  const cppProjects = filterProjects(sampleProjects, 'All', 'C++');
  assert.equal(cppProjects.length, 1);
  assert.equal(cppProjects[0].id, '3');

  // Search by keyword in description
  const docProjects = filterProjects(sampleProjects, 'All', 'ChromaDB');
  assert.equal(docProjects.length, 1);
  assert.equal(docProjects[0].id, '2');
});

test('filterSkills filters by category and search term', () => {
  const sampleSkills: SkillItem[] = [
    { name: 'PyTorch', category: 'AI/ML', level: 'Core', tags: ['Deep Learning', 'Tensors'] },
    { name: 'React', category: 'Frontend', level: 'Proficient', tags: ['Web', 'UI'] },
    { name: 'Docker', category: 'DevOps', level: 'Familiar', tags: ['Containers'] },
  ];

  assert.equal(filterSkills(sampleSkills, 'All').length, 3);
  assert.equal(filterSkills(sampleSkills, 'AI/ML').length, 1);
  assert.equal(filterSkills(sampleSkills, 'All', 'Deep Learning').length, 1);
  assert.equal(filterSkills(sampleSkills, 'All', 'NonExistent').length, 0);
});

test('calculateGraduationProgress calculates accurate progress metrics', () => {
  const year3 = calculateGraduationProgress(2023, 2027, 2025);
  assert.equal(year3.progressPercent, 50);
  assert.equal(year3.currentAcademicYear, 3);
  assert.equal(year3.totalYears, 4);

  const grad = calculateGraduationProgress(2023, 2027, 2027);
  assert.equal(grad.progressPercent, 100);
});
