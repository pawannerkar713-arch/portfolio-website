# Pawan Nerkar · AI & Machine Learning Engineering Portfolio

A modern, high-performance personal portfolio website built for a Computer Science Engineering student specializing in **Artificial Intelligence and Machine Learning**.

Featuring a dark charcoal aesthetic, electric violet & cyan accents, glassmorphic cards, smooth scrolling, interactive architecture deep-dive modals, and a printable/downloadable resume generator.

---

## 🚀 Features

- **Personalized Configuration**: All details (name, bio, skills, projects, achievements, coursework, and social links) are centrally maintained in `src/portfolio.config.ts`.
- **Dynamic Hero Section**: Cycling specializations, quick status indicator, profile monogram badge, and quick-action CTAs.
- **Categorized Technical Arsenal**: Skills organized across AI/ML & Data, Programming Languages, Frontend & Full-Stack, and Tools/DevOps, complete with real-time keyword search and category filters.
- **Featured Engineering Projects**: Detailed project cards with throughput/accuracy metrics, architecture breakdowns, and interactive code snippet viewer with one-click copy.
- **Academic Foundation & Degree Progress**: Automated completion progress tracking for the B.Tech (2023–2027) academic cycle, verified coursework tags, and milestones.
- **Authentic Credentials & Honors**: Verified certifications (DeepLearning.AI, AWS), hackathon accolades, and research assistantship highlights.
- **Working Contact Section**: Native mail client generator (`mailto:`) with input validation, copy-to-clipboard email action, and direct social links.
- **Built-in Resume Viewer & PDF Exporter**: Instant on-screen resume preview with print stylesheet (`window.print()`) and markdown export.
- **Automated CI/CD**: Pre-configured GitHub Actions workflow (`.github/workflows/deploy.yml`) for automated testing and deployment to GitHub Pages.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: Built-in `node:test` + `node:assert/strict` via `tsx`

---

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD workflow
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky blurred header with mobile drawer
│   │   ├── Hero.tsx             # Main hero with cycling specialization words
│   │   ├── About.tsx            # Academic narrative & engineering principles
│   │   ├── Skills.tsx           # Categorized skills with search and filtering
│   │   ├── Projects.tsx         # Featured project cards
│   │   ├── ProjectModal.tsx     # Deep-dive architecture & code snippet modal
│   │   ├── Education.tsx        # Timeline with dynamic degree progress
│   │   ├── Achievements.tsx     # Verified certifications & hackathons
│   │   ├── Contact.tsx          # Validated contact form & email copy
│   │   ├── ResumeModal.tsx      # Printable resume view & markdown download
│   │   ├── GitHubDeploymentModal.tsx # Interactive deployment guide
│   │   └── Footer.tsx           # Social links & back-to-top button
│   ├── utils/
│   │   ├── portfolio.ts         # Pure filtering, validation & math logic
│   │   └── portfolio.test.ts    # Unit test suite
│   ├── portfolio.config.ts      # ⚡ Central configuration file for all content
│   ├── App.tsx                  # Root app layout
│   ├── index.css                # Global styles, fonts, and print media rules
│   └── main.tsx                 # Entry point
├── index.html                   # HTML template with SEO metadata
├── vite.config.ts               # Vite configuration with relative base support
├── tsconfig.json                # TypeScript settings
└── package.json                 # Project dependencies & scripts
```

---

## ⚡ Quick Start & Customization

### 1. Install & Run Locally

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Run unit tests
npx tsx --test src/utils/portfolio.test.ts

# Build for production
npm run build
```

### 2. Customize Your Information

Simply open `src/portfolio.config.ts` in your code editor. Edit:
- `personal.name`: Your full name
- `personal.email`: Your primary contact email
- `personal.socialLinks`: Your GitHub, LinkedIn, LeetCode, and Kaggle URLs
- `projects`: Replace sample projects with your personal GitHub projects
- `achievements`: Add your verified certifications, hackathons, and research

---

## 🌐 Publishing to GitHub & GitHub Pages

Follow these simple steps to publish this portfolio to your own GitHub account:

### Step 1: Create a GitHub Repository
1. Navigate to [github.com/new](https://github.com/new).
2. Set the repository name to `portfolio` (or `<your-username>.github.io`).
3. Set visibility to **Public** and leave "Add a README" **unchecked**.
4. Click **Create repository**.

### Step 2: Initialize Git and Push

Run the following commands in the root of your project directory:

```bash
# 1. Initialize git
git init

# 2. Stage all files
git add .

# 3. Create your initial commit
git commit -m "feat: initial commit of AI & ML student portfolio"

# 4. Set the default branch to main
git branch -M main

# 5. Link your remote GitHub repository
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git

# 6. Push code to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your GitHub repository, click on **Settings** (gear icon).
2. In the left sidebar, click on **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build, test, and publish your website whenever you push changes to `main`!

Your live portfolio will be live at:
`https://<YOUR-GITHUB-USERNAME>.github.io/<YOUR-REPO-NAME>/`

---

## 📄 License

Distributed under the Apache-2.0 License.
