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

interface NavLinks {
  [key: string]: { link: string; name: string };
}

const navLinks: NavLinks = {
  home: { link: "/", name: "home" },
  projects: { link: "/projects", name: "projects" },
  experiences: { link: "/experiences", name: "experiences" },
  contact: { link: "/contact", name: "contact" },
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

const NavbarLinks = [
  {
    link: "/",
    icon: "material-symbols:person",
    title: "Home",
  },
  {
    link: "/projects",
    icon: "heroicons-outline:light-bulb",
    title: "Projects",
  },
  {
    link: "/experiences",
    icon: "quill:paper",
    title: "Experiences",
  },
];

export { navLinks, experienceList, resume, NavbarLinks };
