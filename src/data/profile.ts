// Single source of truth for the content shown across the site.
// Edit text here instead of inside the components.

export const profile = {
  name: "Victor Ceja",
  role: "Associate Software Engineer",
  headline: {
    before: "Frontend engineer building",
    highlight: "fast, accessible",
    after: "web interfaces.",
  },
  lead: "I turn ideas into reliable products with React, TypeScript and a strong eye for detail. Currently shipping at Thomson Reuters.",
  availability: "Available for freelance projects",
  location: "Mexico (CST)",
  company: "Thomson Reuters",
  stackSummary: "React · TS · Node",
  photo: "src/assets/personale_image.jpeg",
  email: "victorceja.dev@gmail.com",
  links: {
    github: "https://github.com/VicCMdev",
    linkedin: "https://www.linkedin.com/in/víctor-eduardo-ceja-martínez-2901a9278",
  },
  about: [
    "As an Associate Software Engineer, I'm driven by the challenge of turning ideas into real, impactful and innovative digital products. I enjoy projects that push my creativity and technical skills, and I thrive in teams where I can collaborate closely with other professionals.",
    "I'm committed to continuous learning, staying up to date with emerging development trends so I can contribute modern, efficient and scalable solutions.",
  ],
};

export interface Experience {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  highlights: string[];
  stack: string[];
}

export const experience: Experience[] = [
  {
    role: "Associate Software Engineer",
    company: "Thomson Reuters",
    period: "Jan 2025 — Present",
    current: true,
    highlights: [
      "Build and maintain features for a legal catalog management platform in an agile team.",
      "Own the full cycle: implementation, QA testing, debugging and peer code reviews.",
      "Collaborate across cross-functional teams while keeping code-quality standards high.",
    ],
    stack: ["React", "TypeScript", "JavaScript", "Code Review"],
  },
  {
    role: "Software Development Intern",
    company: "Thomson Reuters",
    period: "Jul 2024 — Dec 2024",
    highlights: [
      "Shipped technical tasks for the legal catalog platform under senior mentorship.",
      "Led a research initiative on migrating and upgrading repository management tooling.",
      "Analyzed monorepo and large-scale codebase architectures and presented findings to the development committee.",
    ],
    stack: ["Monorepos", "Git", "Technical Research"],
  },
  {
    role: "Web Developer Intern",
    company: "Gestoria Empresarial Global Service",
    period: "Aug 2023 — Mar 2024",
    highlights: [
      "Built a web application to manage the repair process of optical reader devices used for mail delivery in Mexico.",
    ],
    stack: ["Laravel 9", "Vue.js 3", "Node 20", "Git", "HTML", "CSS"],
  },
];

export interface Education {
  title: string;
  school: string;
  period: string;
  summary: string;
}

export const education: Education[] = [
  {
    title: "Computer Systems Engineering",
    school: "ESCOM · Instituto Politécnico Nacional",
    period: "2019 — 2024",
    summary:
      "Programming, systems architecture, mathematical analysis, information security and project management, with a focus on scalable enterprise solutions.",
  },
  {
    title: "Technical Diploma in Computer Programming",
    school: "CECyT N°9 · Instituto Politécnico Nacional",
    period: "2016 — 2019",
    summary:
      "Hands-on software development and programming logic with Java, Python, JavaScript and SQL through real-world projects.",
  },
];
