import {
  Project,
  WorkExperience,
  SkillCategory,
  Achievement,
  SocialLink,
  Testimonial,
} from "./types";
export const PERSONAL_INFO = {
  name: "Sichao (Sean) Liu",
  mainRole: "Senior Software Engineer",
  role: "Full Stack Engineer",
  roleSecondary: "AI Engineer",
  location: "Colleyville, TX",
  email: "sichliu.us@gmail.com",
  phone: "+1 (941) 841-9504",
  resume: "/Sean_Liu_Resume.pdf",
  terminalIntro: {
    cmd: "> npm run dev",
    response:
      "Initializing Project... Setup complete. Specializing in scalable full-stack architecture and AI integration.",
    tagline:
      "Transforming innovative ideas into impactful, user-friendly solutions that drive business growth.",
    latency_humor: "O(1) complexity preferred",
  },
  aboutJson: {
    current_focus:
      "AI/ML Integration, Full Stack Development, Scalable Systems",
    core_stack: ["React", "Python", "FastAPI", "LLMs"],
    mission_objective:
      "Building resilient systems that solve real-world problems.",
    latency_tolerance: "Optimized for High Performance",
  },
};

export const ABOUT = {
  imageUrl: "/MyImage.png",
  bioParagraphs: [
    "I'm an experienced *software* *engineer* with *8+* *years* of delivering impactful digital solutions across retail, healthcare, and AI industries.",
    "From developing *AI-powered* *platforms* and *recommendation* *engines* to building *scalable* *applications*, I transform ideas into user-friendly products that drive business growth.",
    "I specialize in *JavaScript*, *TypeScript*, *Python*, and *AI* *technologies*, leading cross-functional teams and solving complex challenges with a focus on building *resilient* *systems* that solve real-world problems.",
  ],
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: "Senior Full Stack AI Engineer",
    company: "Scale AI",
    location: "San Francisco, California",
    period: "06/2024 - 10/2025",
    responsibilities: [
      "Worked on LLMs using Reinforcement Learning from Human Feedback (RLHF), debugging and rewriting AI-generated code in Python, Java, and C++ to improve performance and meet coding standards",
      "Analyzed over 1,000 datasets using Pandas, NumPy, and Matplotlib, optimizing data processing pipelines and reducing processing time by 20%",
      "Scaled databases and optimized AI-driven queries, improving query efficiency by 15% while ensuring the system remained scalable",
      "Reviewed 2,000+ full-stack code submissions (including Django, Flask, React, SQL), enhancing model accuracy per batch by 25%",
      "Built full-stack systems to support expert acquisition for RLHF and data-labeling, contributing to AI applications for the public sector and ranking 4th globally in coding accuracy on Llama 3.1 405B Instruct",
    ],
    tech: [
      "Python",
      "Java",
      "C++",
      "Django",
      "Flask",
      "React",
      "SQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "RLHF",
      "LLMs",
    ],
  },
  {
    title: "Senior Full Stack Engineer",
    company: "Abridge",
    location: "Pittsburgh, Pennsylvania",
    period: "06/2022 - 03/2024",
    responsibilities: [
      "Designed and optimized backend services to process vast amounts of real-time clinical data, utilizing FastAPI, PostgreSQL, and Redis for fast, secure data retrieval and storage within Abridge's proprietary system",
      "Redeveloped the front end using React, and refactored the code for improved performance and maintainability",
      "Built backend storage solutions using AWS S3 and PostgreSQL, applying data partitioning and indexing to optimize the storage and retrieval of patient conversation data, ensuring fast and reliable access",
      "Integrated AI APIs such as transforming clinical conversations into comprehensive documentation",
      "Integrated AI models with TensorFlow and Python to enhance speech recognition, language context, and medical term transcription, using NLP to help clinicians document patient conversations accurately",
      "Containerized the project using Docker and Kubernetes, automated the workflow using Jenkins",
    ],
    tech: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "React",
      "AWS S3",
      "TensorFlow",
      "Python",
      "NLP",
      "Docker",
      "Kubernetes",
      "Jenkins",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Carbon Health",
    location: "San Francisco, California",
    period: "04/2020 - 05/2022",
    responsibilities: [
      "Worked on core engineering efforts for the Provider and Patient apps, including features for Diabetes, Asthma, Metabolic Health Assessment, and COVID-19-related improvements using React to enhance app functionality",
      "Migrated user authorization and appointment scheduling from a legacy Scala monolith to Kotlin microservices on AWS, enabling independent scaling and a 3x increase in API request rate",
      "Built backend systems with FastAPI to identify billing and insurance claim discrepancies, improving accuracy and reducing errors, while working closely with medical coding specialists",
      "Stored and retrieved data for exploratory data analysis and model building using SQL and Snowflake",
      "Reduced the error in predicted revenue over the existing method by 30% using machine learning techniques in Python, improving the accuracy of predictions",
      "Reconciled data sources across internal systems and Stripe, ensuring consistent and reliable financial reporting",
      "Mentored fellow engineers on web development best practices, improved the codebase, and upgraded libraries to increase team efficiency",
    ],
    tech: [
      "React",
      "Kotlin",
      "AWS",
      "FastAPI",
      "SQL",
      "Snowflake",
      "Python",
      "Machine Learning",
      "Stripe",
    ],
  },
  {
    title: "Software Engineer",
    company: "Walmart",
    location: "Bentonville, AR",
    period: "05/2017 - 03/2020",
    responsibilities: [
      "Worked with the Online Grocery Pickup team to manage customer orders, coordinating with 30+ employees to meet hourly goals",
      "Helped maintain and improve Plutus, a payment system using JavaScript, that handles transactions, ensuring smooth processing of payments",
      "Led the move from MariaDB to MS SQL, and then to Oracle, making sure the system could handle up to 50K transactions per second during peak times",
      "Refactored payment systems and set up Kafka using JavaScript to handle large-scale data processing, improving the speed of transaction handling",
      "Worked with teams across the world to create and improve integration systems for Order Management, Inventory, and Payment Processing",
    ],
    tech: ["JavaScript", "MariaDB", "MS SQL", "Oracle", "Kafka"],
  },
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "C++"],
    icon: "Code",
  },
  {
    name: "AI Development",
    skills: [
      "LangChain",
      "LangGraph",
      "Large Language Models",
      "OpenAI ChatGPT",
      "Google Gemini",
      "Anthropic Claude",
      "Meta Llama",
      "AI Agents",
      "RAG",
      "RLHF",
      "Prompt Engineering",
      "LoRA Fine-Tuning",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
    ],
    icon: "Brain",
  },
  {
    name: "Frontend Interface",
    skills: [
      "React.js",
      "Vue.js",
      "Next.js",
      "HTML5/CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "MUI",
    ],
    icon: "Layout",
  },
  {
    name: "Backend Infrastructure",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Django",
      "Flask",
      "Laravel",
      "REST API",
      "GraphQL",
    ],
    icon: "Server",
  },
  {
    name: "Data Persistence & State",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Snowflake",
      "SQL",
    ],
    icon: "Database",
  },
  {
    name: "System Ops & Ecosystem",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "Git",
      "Kafka",
      "Nginx",
      "Linux",
    ],
    icon: "Cloud",
  },
  {
    name: "Test Tools & Frameworks",
    skills: ["Jest", "Cypress", "Pytest", "PyUnit", "Mocha"],
    icon: "TestTube",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "TechieBlog",
    date: "March 2025",
    description: [
      "A clean and modern open - source blogging platform powered by Appwrite and Next.js.",
      "Built end - to - end authentication, markdown publishing, media uploads, and a dynamic editor — all wrapped in a fast, minimal UI.",
      "Focused on improving DX by contributing optimizations, setup, and scalable architecture.",
    ],
    tech: [
      "Next.js",
      "Express.js",
      "Tailwind CSS",
      "Appwrite",
      "Docker",
      "JavaScript",
    ],
    links: {
      demo: "https://techie-blogs.vercel.app/",
      code: "https://github.com/yashpandav/TechieBlog/tree/main",
    },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=TechieBlog",
  },
  {
    title: "AI-SafeQuery",
    date: "September 2025",
    description: [
      "A secure natural-language SQL assistant designed for teams working with sensitive data and internal dashboards.",
      "Converts English queries into safe, permission-aware SQL using FastAPI guardrails, role-based access, and immutable blockchain-style logs.",
      "Built during HackOdisha with a focus on speed, safety, and enterprise-grade reliability — delivering a smooth, intelligent query experience.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "LangChain",
      "Mastra",
    ],
    links: {
      demo: "https://safequeryai.devinit.in/",
      code: "https://github.com/yashpandav/HackOdisha/tree/main",
    },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=AI-SafeQuery",
  },
  {
    title: "TeaCoder Agent - AI Coding Assistant",
    date: "May 2025",
    description: [
      "A terminal - native AI coding companion that edits, generates, and executes code like a mini Cursor.",
      "Scans entire projects, rewrites files, runs shell commands, and maintains reasoning context using Gemini 1.5 Flash.",
      "Designed for speed, automation, and a coder- first workflow — perfect for rapid prototyping from your terminal.",
    ],
    tech: [
      "Python",
      "Google Gemini API",
      "Terminal UI",
      "Code Generation",
      "Shell Automation",
    ],
    links: {
      demo: "https://www.youtube.com/playlist?list=PLm3PPaAhVA-YfZdyG9lDjgPAoo1CP5bqK",
      code: "https://github.com/yashpandav/TeaCoder",
    },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=TeaCoder+Agent",
  },
  {
    title: "AutoMission Bot - HR Assistant",
    date: "June 2025",
    description: [
      "A smart HR automation agent that answers employee queries with sub - second vector - retrieval accuracy.",
      "Reduces manual workload by nearly 80 % through RAG pipelines, structured memory, and dynamic tool - calling.",
      "Achieved Top 8 global ranking in the official LangFlow AI Challenge.",
    ],
    tech: ["LangFlow", "LangChain", "RAG", "Vector DB", "Gemini API"],
    links: { demo: "https://youtu.be/k9CrXuwjglw" },
    featured: true,
    image:
      "https://placehold.co/800x450/18181b/a1a1aa/png?text=AutoMission+Bot",
  },
  {
    title: "Book Review Platform",
    date: "September 2025",
    description: [
      "A full - stack MERN platform for discovering, reviewing, and organizing books with an intuitive rating system.",
      "Features real - time reviews, pagination, search filters, JWT authentication, and interactive rating charts.",
      "Built with a focus on clean UX, responsive layouts, and a robust REST API layer.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "Tailwind CSS",
      "JWT Authentication",
    ],
    links: {
      demo: "https://book-review-platform-sigma.vercel.app/",
      code: "https://github.com/yashpandav/Book-Review-Platform",
    },
    featured: true,
    image:
      "https://placehold.co/800x450/18181b/a1a1aa/png?text=Book+Review+Platform",
  },
  {
    title: "Portfolio",
    date: "November 2025",
    description: [
      "A high - performance personal portfolio built with React, Tailwind CSS, and Google Gemini.",
      "Features a custom AI chat agent, a cinematic system - boot preloader, and a premium Vercel - inspired UI.",
      "Enhanced with micro - interactions, custom cursors, smooth reveal animations, and full mobile responsiveness.",
    ],
    tech: [
      "Next Js",
      "Tailwind CSS",
      "Google Gemini API",
      "Framer Motion",
      "TypeScript",
    ],
    links: {
      code: "https://github.com/yashpandav",
      demo: "#",
    },
    featured: true,
    image: "",
  },
  {
    title: "Circle LMS",
    date: "November 2024",
    description: [
      "A Google - Classroom - style learning platform for managing assignments, submissions, and grading.",
      "Role - based dashboards for teachers and students, automated evaluation workflows, and a scalable MERN backend.",
      "Designed with clean UI, reliable state management, and real - world classroom - friendly usability.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Role-based Access"],
    links: {
      code: "https://github.com/yashpandav/Circle",
    },
    featured: false,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=Circle+LMS",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Entrepreneurial Mindset",
    description:
      "Driving innovation and taking initiative to create impactful solutions",
  },
  {
    title: "Problem-solving",
    description:
      "Expert at analyzing complex challenges and implementing effective solutions",
  },
  {
    title: "Adaptability",
    description:
      "Thriving in dynamic environments and embracing new technologies",
  },
  {
    title: "Leadership",
    description:
      "Leading cross-functional teams and mentoring engineers on best practices",
  },
];

export const EDUCATION = {
  degree: "BA in Computer Science",
  school: "Rice University",
  location: "Houston, Texas",
  period: "2013 - 2017",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Oken Keithellakpam",
    role: "Project Maintainer",
    company: "React Blog (SWOC/IWOC)",
    image: "/Oken.png",
    text: "I want to highlight Yash, one of the key contributors to my React Blog open-source project. Yash made more than 40+ meaningful contributions, ranging from adding significant features to improving existing functionality and addressing important issues. Throughout the process, he was highly professional, reliable, and always easy to communicate with. His dedication and technical expertise played a major role in the growth of the project. Yash is an excellent developer with a strong sense of collaboration, and I'm confident he will continue to grow and achieve even greater milestones in his career.",
    linkedin: "https://www.linkedin.com/in/okenk/",
  },
];

export const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/seanliu", icon: "Github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/seanliu/",
    icon: "Linkedin",
  },
  { name: "Email", url: "mailto:sichliu.us@gmail.com", icon: "Mail" },
];
