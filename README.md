# Sichao (Sean) Liu | Senior Software Engineer Portfolio

A high-performance, interactive personal portfolio website built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. This project showcases my skills, work experience, and expertise as a Senior Software Engineer with 8+ years of experience in AI, full-stack development, and scalable systems.

## 🚀 Features

- **Next.js 15 App Router**: Modern, server-first architecture for optimal performance and SEO.
- **Secure AI Chat Widget**:
  - Integrated AI assistant powered by **OpenAI GPT-4o-mini**.
  - **Secure Backend API**: API keys are handled server-side (`/api/chat`), ensuring they are never exposed to the client.
  - Intelligent guardrail system to keep conversations portfolio-focused.
  - Full-screen backdrop and polished UI/UX.
- **Premium UI/UX**:
  - **Custom Cursor**: Interactive trailing cursor with hover effects.
  - **Cinematic Preloader**: System-boot style intro animation.
  - **Scroll Animations**: Elements reveal smoothly on scroll using `framer-motion` concepts.
  - **Glassmorphism & Gradients**: Modern dark-themed aesthetic with emerald accents.
- **Work Experience Showcase**: Detailed timeline of professional experience at Scale AI, Abridge, Carbon Health, and Walmart.
- **Comprehensive Tech Stack**: Organized by categories including Languages, AI Development, Frontend, Backend, and DevOps.
- **Fully Responsive**: Optimized for all devices, from mobile phones to large desktop screens.
- **SEO Optimized**: Comprehensive metadata, Open Graph tags, and semantic HTML.
- **Performance**: Lazy loading for heavy components and optimized image handling.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI Integration**: [OpenAI API](https://platform.openai.com/) (via `openai` SDK)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Markdown**: `react-markdown` (for AI responses)
- **Deployment**: [Vercel](https://vercel.com/)

## 🏁 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/seanliu/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add your OpenAI API key:

```env
# .env.local
OPENAI_API_KEY=your_openai_api_key_here
```

> **Note**: You can get your API key from [OpenAI Platform](https://platform.openai.com/api-keys).
>
> **Important**: The `.env.local` file is already included in `.gitignore` to protect your API keys from being committed to version control.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

## 📂 Project Structure

```
├── app/                  # Next.js App Router pages and API routes
│   ├── api/chat/         # Secure backend route for OpenAI API
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout with metadata and fonts
│   └── page.tsx          # Main landing page
├── components/           # Reusable UI components
│   ├── ChatWidget.tsx    # AI Chat interface
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── WorkExperience.tsx # Work experience timeline
│   ├── Skills.tsx        # Tech stack showcase
│   └── ...
├── lib/                  # Utilities and constants
│   ├── constants.ts      # Portfolio content (text, links, data)
│   └── types.ts          # TypeScript interfaces
├── public/               # Static assets (images, favicon)
└── ...
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- **Email**: [sichliu.us@gmail.com](mailto:sichliu.us@gmail.com)
- **Phone**: +1 (941) 841-9504
- **Location**: Colleyville, TX
- **LinkedIn**: [Sichao (Sean) Liu](https://www.linkedin.com/in/seanliu/)
- **GitHub**: [@seanliu](https://github.com/seanliu)
