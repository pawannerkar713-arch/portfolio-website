/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * PORTFOLIO CONFIGURATION
 * 
 * Easily edit this file to personalize your name, bio, social links,
 * projects, skills, education, and achievements.
 */

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI / Deep Learning' | 'Computer Vision' | 'LLM & NLP' | 'Systems & Engineering';
  isExample: boolean; // Indicates realistic sample project until replaced
  description: string;
  keyHighlights: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  architectureOverview: string;
  codeSnippetTitle: string;
  codeSnippet: string;
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  skills: {
    name: string;
    level: 'Core' | 'Proficient' | 'Familiar';
    context: string;
    iconName?: string;
  }[];
}

export interface EducationMilestone {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  currentStatus: string;
  gpaOrScore?: string;
  relevantCoursework: string[];
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: 'Certification' | 'Hackathon' | 'Research' | 'Academic';
  description: string;
  credentialUrl?: string;
  verified: boolean;
}

export const PORTFOLIO_CONFIG = {
  personal: {
    name: "Pawan Nerkar",
    role: "Computer Science Engineering Student",
    specialization: "Artificial Intelligence & Machine Learning",
    tagline: "Building the Future with Code & AI",
    bioIntro: "Undergraduate CSE student focused on scalable deep learning architectures, computer vision pipelines, and production-ready intelligent systems. Passionate about bringing algorithmic rigor to real-world software engineering.",
    statusBadge: "Available for Summer 2027 Internships & Research",
    email: "pawannerkar713@gmail.com",
    location: "India / Open to Global Remote",
    avatarInitials: "PN",
    specializationKeywords: [
      "Deep Learning Architectures",
      "Computer Vision & Edge Inference",
      "LLM Agents & Retrieval Systems",
      "High-Performance C++ & Python",
      "Distributed Data Systems"
    ],
    socialLinks: {
      github: "https://github.com/pawannerkar",
      linkedin: "https://linkedin.com/in/pawannerkar",
      leetcode: "https://leetcode.com",
      kaggle: "https://kaggle.com",
      twitter: "https://x.com"
    },
    academicTimeline: {
      startYear: 2023,
      graduationYear: 2027,
      degreeName: "B.Tech in Computer Science & Engineering",
      specializationTag: "Artificial Intelligence & Machine Learning"
    }
  },

  aboutMe: {
    summary: [
      "I am a third-year Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. My work sits at the intersection of mathematical foundations and pragmatic software engineering.",
      "Rather than treating deep learning models as black boxes, I focus on understanding their internal mechanics—from gradient propagation and attention matrices to memory footprint optimization during inference on constrained edge hardware.",
      "When I am not training models or optimizing CUDA/PyTorch pipelines, I build robust full-stack applications to deploy AI models where real humans can use them."
    ],
    learningGoals: [
      "Mastering Low-Rank Adaptation (LoRA) and quantization techniques (AWQ/GPTQ) for efficient on-device LLMs",
      "Building high-throughput inference microservices using FastAPI, Triton Inference Server, and Docker",
      "Deepening systems knowledge in C++20, cache coherency, and distributed key-value consensus"
    ],
    corePrinciples: [
      {
        title: "Mathematical Foundations First",
        description: "Prioritizing linear algebra, vector calculus, and statistical learning over superficial framework wrapper usage."
      },
      {
        title: "Production-Grade Engineering",
        description: "Clean modular code, typed interfaces, reproducible experiment tracking, and rigorous test coverage."
      },
      {
        title: "Responsible & Explainable AI",
        description: "Implementing interpretability tools (like Grad-CAM, SHAP, and attention rollout) to ensure model safety."
      }
    ]
  },

  skillCategories: [
    {
      categoryName: "AI / Machine Learning & Data",
      description: "Core frameworks for training, evaluation, inference, and data manipulation.",
      skills: [
        { name: "PyTorch", level: "Core", context: "Model training, custom autograd modules, loss functions" },
        { name: "TensorFlow / Keras", level: "Proficient", context: "Sequential & functional APIs, TensorBoard diagnostics" },
        { name: "Scikit-learn", level: "Core", context: "Feature engineering, clustering, SVMs, random forests" },
        { name: "OpenCV", level: "Core", context: "Image processing, bounding box geometry, camera feeds" },
        { name: "Hugging Face", level: "Proficient", context: "Transformers pipeline, tokenizers, PEFT fine-tuning" },
        { name: "NumPy & Pandas", level: "Core", context: "Vectorized array calculations, EDA, time-series data" },
        { name: "Matplotlib & Seaborn", level: "Proficient", context: "Statistical distribution plots, confusion matrices" }
      ]
    },
    {
      categoryName: "Programming Languages",
      description: "Core languages applied across algorithms, system pipelines, and application backends.",
      skills: [
        { name: "Python", level: "Core", context: "AsyncIO, OOP, type hinting, scientific computing stack" },
        { name: "C++", level: "Proficient", context: "Modern C++ (17/20), STL, memory management, OOP" },
        { name: "Java", level: "Proficient", context: "Object-oriented design patterns, enterprise algorithms" },
        { name: "SQL", level: "Proficient", context: "Relational queries, joins, indexes, schema normalization" },
        { name: "TypeScript / JavaScript", level: "Proficient", context: "Modern ES6+, async/await, typed React codebases" }
      ]
    },
    {
      categoryName: "Frontend & Full-Stack",
      description: "Creating accessible, interactive interfaces to interface with AI models.",
      skills: [
        { name: "React 19", level: "Proficient", context: "Custom hooks, state management, component architecture" },
        { name: "Tailwind CSS", level: "Proficient", context: "Modern responsive utility styling, dark mode themes" },
        { name: "FastAPI", level: "Proficient", context: "High-speed Python REST APIs with automatic OpenAPI docs" },
        { name: "Node.js & Express", level: "Proficient", context: "Lightweight middleware, proxy services, authentication" },
        { name: "HTML5 & Modern CSS", level: "Core", context: "Semantic web standards, CSS variables, accessibility" }
      ]
    },
    {
      categoryName: "Tools, Systems & DevOps",
      description: "Developer tooling for version control, containerization, and reproducible environments.",
      skills: [
        { name: "Git & GitHub", level: "Core", context: "Feature branching, pull requests, CI/CD Actions" },
        { name: "Docker", level: "Proficient", context: "Multi-stage Dockerfiles for Python/Node containerization" },
        { name: "Linux / Bash", level: "Proficient", context: "Shell scripting, environment setup, process management" },
        { name: "Weights & Biases (W&B)", level: "Familiar", context: "Hyperparameter sweep tracking and loss curves" },
        { name: "Google Cloud Platform", level: "Familiar", context: "Cloud Storage, Compute Engine, Cloud Run hosting" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "neuro-vision-tracker",
      title: "NeuroVision: Multi-Object Detection & Trajectory Tracking",
      subtitle: "Low-latency inference pipeline for surveillance and edge traffic analysis",
      category: "Computer Vision",
      isExample: true,
      featured: true,
      description: "Engineered an end-to-end computer vision pipeline combining a fine-tuned YOLOv8 detector with ByteTrack Kalman-filtering for resilient multi-target association under sudden occlusion.",
      keyHighlights: [
        "Benchmarked inference throughput across TensorRT FP16 and ONNX runtimes",
        "Achieved 42+ FPS on an NVIDIA RTX 3060 edge workstation",
        "Implemented custom spatial boundary triggers for automatic directional count logging"
      ],
      technologies: ["PyTorch", "YOLOv8", "OpenCV", "ByteTrack", "Python", "ONNX"],
      metrics: [
        { label: "Throughput", value: "42+ FPS" },
        { label: "mAP@0.5", value: "86.4%" },
        { label: "ID Switches", value: "< 1.8%" }
      ],
      architectureOverview: "Raw video frames are fed through OpenCV into a pre-processing queue, transformed via letterbox resizing, dispatched to the quantized ONNX YOLO model, and tracklets are linked across frames via ByteTrack's dual-threshold Hungarian algorithm.",
      codeSnippetTitle: "tracking_pipeline.py",
      codeSnippet: `import cv2
import torch
from ultralytics import YOLO
from trackers.byte_tracker import BYTETracker

class VisionPipeline:
    def __init__(self, model_weights: str = 'yolov8m_custom.pt'):
        self.device = 'cuda' if torch.cuda.is_available() else 'cpu'
        self.model = YOLO(model_weights).to(self.device)
        self.tracker = BYTETracker(track_thresh=0.45, match_thresh=0.8)

    def process_frame(self, frame):
        results = self.model(frame, verbose=False, device=self.device)[0]
        detections = results.boxes.data.cpu().numpy()
        tracks = self.tracker.update(detections, frame.shape[:2])
        return tracks`,
      githubUrl: "https://github.com/pawannerkar/neuro-vision-tracker",
      liveDemoUrl: "https://github.com/pawannerkar"
    },
    {
      id: "agentic-doc-rag",
      title: "AgenticDoc: Multi-Source RAG with Vector Search & Fact Grounding",
      subtitle: "Context-aware question answering with hallucination filtering and citation grounding",
      category: "LLM & NLP",
      isExample: true,
      featured: true,
      description: "Designed a modular Retrieval-Augmented Generation (RAG) system with hybrid semantic search (dense embeddings + BM25 keyword matching) and an automated confidence evaluator to cite exact page references.",
      keyHighlights: [
        "Recursive chunking algorithm preserving section context and markdown table structures",
        "Sub-200ms document similarity retrieval powered by ChromaDB HNSW indexing",
        "Self-correction loop that flags answers failing strict citation alignment"
      ],
      technologies: ["Python", "FastAPI", "ChromaDB", "Hugging Face", "LangChain", "Docker"],
      metrics: [
        { label: "Retrieval p95", value: "115ms" },
        { label: "Faithfulness", value: "93.1%" },
        { label: "Chunk Size", value: "512 tokens" }
      ],
      architectureOverview: "PDFs/Markdown documents are ingested -> chunked with overlapping windows -> vectorized via BAAI/bge-base-en -> persisted in ChromaDB. At query time, reciprocal rank fusion synthesizes retrieved nodes for the LLM generator.",
      codeSnippetTitle: "retrieval_service.py",
      codeSnippet: `from chromadb import PersistentClient
from sentence_transformers import SentenceTransformer

class VectorSearchEngine:
    def __init__(self, collection_name: str = 'kb_docs'):
        self.embed_model = SentenceTransformer('BAAI/bge-small-en-v1.5')
        self.client = PersistentClient(path='./chroma_storage')
        self.collection = self.client.get_or_create_collection(collection_name)

    def query_context(self, user_query: str, top_k: int = 5):
        query_vector = self.embed_model.encode([user_query]).tolist()
        results = self.collection.query(query_embeddings=query_vector, n_results=top_k)
        return results['documents'][0], results['metadatas'][0]`,
      githubUrl: "https://github.com/pawannerkar/agentic-doc-rag",
      liveDemoUrl: "https://github.com/pawannerkar"
    },
    {
      id: "mri-tumor-classifier",
      title: "BrainTumor-Net: Medical MRI Classification with Grad-CAM",
      subtitle: "ResNet-50 based multi-class classification with visual saliency heatmaps",
      category: "AI / Deep Learning",
      isExample: true,
      featured: true,
      description: "Trained and evaluated a convolutional neural network for 4-class brain tumor classification from brain MRI scans, integrated with Grad-CAM to render explainable diagnostic heatmaps for clinicians.",
      keyHighlights: [
        "Fine-tuned pre-trained ResNet-50 with layer-wise discriminative learning rates",
        "Comprehensive data augmentation pipeline mitigating class imbalance",
        "Interactive web dashboard to overlay heatmap activations on raw axial slices"
      ],
      technologies: ["PyTorch", "TorchVision", "Grad-CAM", "FastAPI", "React", "NumPy"],
      metrics: [
        { label: "Test Accuracy", value: "96.4%" },
        { label: "Macro F1", value: "0.958" },
        { label: "AUC-ROC", value: "0.989" }
      ],
      architectureOverview: "Images are standardized and augmented -> passed to ResNet-50 feature extractor -> gradients with respect to the final convolutional layer are backpropagated to compute weighted activation maps.",
      codeSnippetTitle: "gradcam_visualizer.py",
      codeSnippet: `import torch
import numpy as np

class GradCAM:
    def __init__(self, model, target_layer):
        self.model = model
        self.target_layer = target_layer
        self.gradients = None
        self.activations = None
        self.target_layer.register_forward_hook(self._save_activations)
        self.target_layer.register_full_backward_hook(self._save_gradients)

    def generate(self, input_tensor, class_idx=None):
        output = self.model(input_tensor)
        if class_idx is None:
            class_idx = torch.argmax(output, dim=1).item()
        self.model.zero_grad()
        output[0, class_idx].backward()
        weights = torch.mean(self.gradients, dim=(2, 3), keepdim=True)
        cam = torch.relu(torch.sum(weights * self.activations, dim=1))
        return cam.squeeze().cpu().numpy()`,
      githubUrl: "https://github.com/pawannerkar/mri-tumor-classifier",
      liveDemoUrl: "https://github.com/pawannerkar"
    },
    {
      id: "distributed-kv-raft",
      title: "DistributedKV: Fault-Tolerant Key-Value Store with Raft",
      subtitle: "Systems engineering project implementing consensus, leader election, and log replication",
      category: "Systems & Engineering",
      isExample: true,
      featured: false,
      description: "Engineered a distributed in-memory key-value store in C++ implementing the Raft consensus algorithm. Designed for high-availability reads/writes with cluster state reconciliation across node partitions.",
      keyHighlights: [
        "Implemented leader election with randomized election timeouts and heartbeat timers",
        "Deterministic log matching and persistent disk snapshotting for crash recovery",
        "Rigorous network partition simulation tests ensuring linearizable consistency"
      ],
      technologies: ["C++17", "gRPC", "Protobuf", "Docker", "POSIX Threads", "CMake"],
      metrics: [
        { label: "Throughput", value: "14,000 req/s" },
        { label: "P99 Latency", value: "12ms" },
        { label: "Failover Time", value: "< 350ms" }
      ],
      architectureOverview: "Cluster consists of 3 or 5 peer nodes communicating over gRPC. A leader coordinates client write proposals, appends log entries, replicates them to a quorum of followers, and commits once acknowledged.",
      codeSnippetTitle: "raft_node.cpp",
      codeSnippet: `// Raft consensus state machine heartbeat & append entries
void RaftNode::SendHeartbeats() {
    std::lock_guard<std::mutex> lock(mutex_);
    if (state_ != NodeRole::LEADER) return;
    
    for (const auto& peer : peers_) {
        AppendEntriesArgs args;
        args.set_term(current_term_);
        args.set_leader_id(node_id_);
        args.set_prev_log_index(next_index_[peer.id] - 1);
        
        async_client_->AppendEntries(peer.address, args, [this, peer](const AppendEntriesReply& reply) {
            HandleAppendReply(peer.id, reply);
        });
    }
}`,
      githubUrl: "https://github.com/pawannerkar/distributed-kv-raft",
      liveDemoUrl: "https://github.com/pawannerkar"
    },
    {
      id: "ast-code-scanner",
      title: "CodeInsight: AST Static Analysis & Vulnerability Scanner",
      subtitle: "Static analyzer for Python source code detecting anti-patterns and memory leaks",
      category: "Systems & Engineering",
      isExample: true,
      featured: false,
      description: "Built a CLI and visual report generator that parses Python Abstract Syntax Trees (AST) to measure cyclomatic complexity, detect insecure eval/exec invocations, and highlight dead branches.",
      keyHighlights: [
        "Custom AST NodeVisitor traversing statement hierarchies in O(N) AST size",
        "Generates clean terminal diagnostic banners with precise line and column highlights",
        "Seamless integration with GitHub Actions as a pull-request quality gate"
      ],
      technologies: ["Python", "AST", "Rich CLI", "Pytest", "Typer"],
      metrics: [
        { label: "Parse Speed", value: "~18,000 LOC/s" },
        { label: "Rule Coverage", value: "24 Checks" },
        { label: "Zero Dependencies", value: "Stdlib AST" }
      ],
      architectureOverview: "Source files are scanned with Python's built-in `ast` module. Custom visitor classes check AST node invariants, construct a directed control-flow graph for complexity calculations, and output JSON / colored reports.",
      codeSnippetTitle: "ast_visitor.py",
      codeSnippet: `import ast

class SecurityVisitor(ast.NodeVisitor):
    def __init__(self, filename: str):
        self.filename = filename
        self.violations = []

    def visit_Call(self, node):
        if isinstance(node.func, ast.Name):
            if node.func.id in ('eval', 'exec'):
                self.violations.append({
                    'rule': 'SEC001_DANGEROUS_CALL',
                    'line': node.lineno,
                    'func': node.func.id
                })
        self.generic_visit(node)`,
      githubUrl: "https://github.com/pawannerkar/ast-code-scanner",
      liveDemoUrl: "https://github.com/pawannerkar"
    }
  ] as ProjectDetail[],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      institution: "Government College of Engineering / University Institute",
      location: "India",
      startDate: "Aug 2023",
      endDate: "May 2027",
      currentStatus: "3rd Year Undergraduate (Expected Grad: May 2027)",
      gpaOrScore: "8.7 / 10.0 CGPA",
      relevantCoursework: [
        "Data Structures & Algorithms",
        "Design & Analysis of Algorithms",
        "Deep Learning & Neural Networks",
        "Machine Learning Foundations",
        "Computer Vision",
        "Operating Systems",
        "Database Management Systems",
        "Linear Algebra & Probability",
        "Computer Networks"
      ],
      highlights: [
        "Specialization Track: Artificial Intelligence and Machine Learning",
        "Consistently on the Academic Dean's Commendation List",
        "Active member of the University Machine Learning & Competitive Coding Club"
      ]
    }
  ] as EducationMilestone[],

  achievements: [
    {
      id: "ach-1",
      title: "Deep Learning Specialization",
      organization: "DeepLearning.AI / Coursera (Instructor: Andrew Ng)",
      date: "2024",
      type: "Certification",
      description: "Completed 5 rigorous courses covering Neural Networks, Hyperparameter Tuning, Convolutional Neural Networks, Sequence Models, and Structuring ML Projects.",
      credentialUrl: "https://coursera.org",
      verified: true
    },
    {
      id: "ach-2",
      title: "National AI Innovation Hackathon — Top 5 Finalist",
      organization: "Inter-College Tech Conclave",
      date: "2024",
      type: "Hackathon",
      description: "Designed an automated edge computer vision system for campus resource management with sub-second incident reporting across 36 hours of continuous hacking.",
      verified: true
    },
    {
      id: "ach-3",
      title: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services",
      date: "2024",
      type: "Certification",
      description: "Validated foundational knowledge of AWS cloud architecture, security compliance, IAM, VPC networking, and cost management.",
      credentialUrl: "https://aws.amazon.com",
      verified: true
    },
    {
      id: "ach-4",
      title: "Undergraduate Research Assistant (Vision & Learning)",
      organization: "Department of Computer Science",
      date: "2024 - Present",
      type: "Research",
      description: "Investigating data-efficient semi-supervised techniques for biological image segmentation under faculty mentorship.",
      verified: true
    },
    {
      id: "ach-5",
      title: "Active Competitive Programmer (400+ Problems)",
      organization: "LeetCode & Codeforces",
      date: "2023 - Present",
      type: "Academic",
      description: "Consistently sharpening algorithmic intuition across Dynamic Programming, Graphs, Disjoint-Set Unions, and Bitmasking.",
      credentialUrl: "https://leetcode.com",
      verified: true
    }
  ] as AchievementItem[],

  resumeData: {
    title: "Curriculum Vitae",
    lastUpdated: "Fall 2026",
    summary: "Dedicated Computer Science Engineering student specializing in AI & Machine Learning. Strong background in mathematical foundations, deep learning frameworks (PyTorch), high-performance C++, and production-minded software development. Seeking Summer 2027 Software Engineering / ML Internships.",
    skillsSummary: {
      languages: "Python, C++, Java, SQL, JavaScript, TypeScript, Bash",
      aiml: "PyTorch, TensorFlow, OpenCV, Hugging Face, Scikit-learn, NumPy, Pandas",
      developerTools: "Git, GitHub, Docker, Linux, FastAPI, React, CMake, Google Cloud Platform"
    }
  }
};
