interface Resume {
  devTools: string[];
  technologies: string[];
  languages: { name: string; level: "Beginner" | "Advanced" | "Native" }[];
}

const resume: Resume = {
  devTools: ["TailwindCSS", "Figma", "Vite", "Docker", "Vitest", "Cypress", "Git"],
  technologies: ["HTML", "CSS", "Javascript & Typescript", "Vue", "React", "Next", "Node"],
  languages: [
    {
      name: "Portuguese",
      level: "Native",
    },
    {
      name: "English",
      level: "Advanced",
    },
  ],
};

interface Experience {
  experienceTitle: string;
  description: string;
  skills: string[];
  startingDate: string;
  endDate: string;
  company: string;
}

const experienceList: Experience[] = [
  {
    experienceTitle: "Software Developer",
    company: "VTEX-Lab",
    description:
      "Built and maintained the developers and support portals for VTEX's thousands of users. Implemented functionalities to statically generate assets like texts, icons and codeblocks through markdown files.",
    startingDate: "03/2024",
    endDate: "Present",
    skills: ["HTML & CSS", "React", "Typescript", "NextJS", "SSR", "SSG"],
  },
  {
    experienceTitle: "Software Engineer",
    company: "CInCoders",
    description:
      "Built full-stack applications for professors, staff and students of the Informatics Center, prototyping and implementing responsive and performant interfaces and components, integrating and developing REST APIs and implementing unit and integration tests. Developed and maintained the Cinnamon Design System and made it open-source",
    startingDate: "08/2022",
    endDate: "03/2024",
    skills: ["React", "Typescript", "HTML & CSS", "Next.js", "Storybook", "Vitest", "Playwright", "Figma"],
  },
  {
    experienceTitle: "Frontend Developer",
    company: "SERPRO",
    description:
      "Prototyped, built, styled and maintained the whole front-end application for a Agile Methodologies Process Mining tool, mainly the page to render a responsive graph generated through process mining. I've also led the front-end team taking decisions for the project and being a technical reference to other developers.",
    startingDate: "08/2022",
    endDate: "11/2022",
    skills: ["React", "Typescript", "HTML & CSS", "MaterialUI", "Figma"],
  },
];

interface NavLinks {
  [key: string]: { link: string; name: string };
}

const navLinks: NavLinks = {
  home: { link: "/", name: "home" },
  projects: { link: "/projects", name: "projects" },
  experiences: { link: "/experiences", name: "experiences" },
};

const NavbarLinks = [
  {
    link: navLinks.home.link,
    icon: "charm:person",
    title: navLinks.home.name,
  },
  {
    link: navLinks.projects.link,
    icon: "heroicons-outline:light-bulb",
    title: navLinks.projects.name,
  },
  {
    link: navLinks.experiences.link,
    icon: "quill:paper",
    title: navLinks.experiences.name,
  },
];

interface project {
  title: string;
  summary: string;
  repoLink: string;
  description: string;
  technologies: string[];
}

const projects: project[] = [
  {
    title: "Portfolio",
    summary: "A minimalistic, accessibility focused, personal website",
    repoLink: "https://github.com/phvm/portfolio",
    description: "",
    technologies: ["Vue", "Typescript", "TailwindCSS", "HTML", "CSS"],
  },
  {
    title: "Bookboard",
    summary: "A dashboard for book search with charts based on book categories ratings built for accessibility",
    repoLink: "https://github.com/phvm/bookboard",
    description: "",
    technologies: ["React", "Typescript", "MaterialUI", "HTML", "CSS"],
  },
  {
    title: "Kaball",
    summary: "A self balancing class scheduler to reduce students stress",
    repoLink: "https://github.com/Remato/kaball",
    description: "",
    technologies: ["React", "Typescript", "HTML", "CSS"],
  },
  {
    title: "Todo",
    summary: "A minimalistic, dark-mode capable, to-do list",
    repoLink: "https://github.com/phvm/Todo",
    description: "",
    technologies: ["Vue", "HTML", "CSS", "Typescript", "Vite"],
  },
  {
    title: "Linkthree",
    summary: "A minimal link tree with exactly three links to my socials",
    repoLink: "https://github.com/phvm/linkTree",
    description: "",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Reconectando",
    summary: "A electric grid mapper to detect fail points using Dijkstra algorithm",
    repoLink: "https://github.com/phvm/Reconectando",
    description: "",
    technologies: ["Python", "Heroku", "Streamlit"],
  },
];

export { navLinks, experienceList, resume, NavbarLinks, projects };
