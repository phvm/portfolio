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
    experienceTitle: "experienceView.vtexlab.title",
    company: "VTEX-Lab",
    description: "experienceView.vtexlab.description",
    startingDate: "03/2024",
    endDate: "11/2024",
    skills: ["HTML & CSS", "React", "Typescript", "NextJS", "SSR", "SSG"],
  },
  {
    experienceTitle: "experienceView.cincoders.title",
    company: "CInCoders",
    description: "experienceView.cincoders.description",
    startingDate: "08/2022",
    endDate: "03/2024",
    skills: ["React", "Typescript", "HTML & CSS", "Next.js", "Storybook", "Vitest", "Playwright", "Figma"],
  },
  {
    experienceTitle: "experienceView.serpro.title",
    company: "SERPRO",
    description: "experienceView.serpro.description",
    startingDate: "08/2022",
    endDate: "11/2022",
    skills: ["React", "Typescript", "HTML & CSS", "MaterialUI", "Figma"],
  },
];

interface NavLinks {
  [key: string]: { link: string; name: string };
}

const navLinks: NavLinks = {
  home: { link: "/", name: "navbar.link.home" },
  projects: { link: "/projects", name: "navbar.link.projects" },
  experiences: { link: "/experiences", name: "navbar.link.experiences" },
};

const NavbarLinks = [
  {
    link: navLinks["home"].link,
    icon: "charm:person",
    title: navLinks["home"].name,
  },
  {
    link: navLinks["projects"].link,
    icon: "heroicons-outline:light-bulb",
    title: navLinks["projects"].name,
  },
  {
    link: navLinks["experiences"].link,
    icon: "quill:paper",
    title: navLinks["experiences"].name,
  },
];

interface Project {
  title: string;
  summary: string;
  repoLink: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Portfolio",
    summary: "projectsView.portfolio.description",
    repoLink: "https://github.com/phvm/portfolio",
    description: "",
    technologies: ["Vue", "Typescript", "TailwindCSS", "HTML", "CSS"],
  },
  {
    title: "Bookboard",
    summary: "projectsView.bookboard.description",
    repoLink: "https://github.com/phvm/bookboard",
    description: "",
    technologies: ["React", "Typescript", "MaterialUI", "HTML", "CSS"],
  },
  {
    title: "Kaball",
    summary: "projectsView.kaball.description",
    repoLink: "https://github.com/Remato/kaball",
    description: "",
    technologies: ["React", "Typescript", "HTML", "CSS"],
  },
  {
    title: "Todo",
    summary: "projectsView.todo.description",
    repoLink: "https://github.com/phvm/Todo",
    description: "",
    technologies: ["Vue", "HTML", "CSS", "Typescript", "Vite"],
  },
  {
    title: "Linkthree",
    summary: "projectsView.linkthree.description",
    repoLink: "https://github.com/phvm/linkTree",
    description: "",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Reconectando",
    summary: "projectsView.reconectando.description",
    repoLink: "https://github.com/phvm/Reconectando",
    description: "",
    technologies: ["Python", "Heroku", "Streamlit"],
  },
];

export { navLinks, experienceList, NavbarLinks, projects };
