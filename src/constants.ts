import { useLocaleStore } from "@/stores/localeStore";
import { computed } from "vue";

const { getMessage } = useLocaleStore();

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

const experienceList = computed<Experience[]>(() => {
  return [
    {
      experienceTitle: getMessage("experienceView.vtexlab.title"),
      company: "VTEX-Lab",
      description: getMessage("experienceView.vtexlab.description"),
      startingDate: "03/2024",
      endDate: "11/2024",
      skills: ["HTML & CSS", "React", "Typescript", "NextJS", "SSR", "SSG"],
    },
    {
      experienceTitle: getMessage("experienceView.cincoders.title"),
      company: "CInCoders",
      description: getMessage("experienceView.cincoders.description"),
      startingDate: "08/2022",
      endDate: "03/2024",
      skills: ["React", "Typescript", "HTML & CSS", "Next.js", "Storybook", "Vitest", "Playwright", "Figma"],
    },
    {
      experienceTitle: getMessage("experienceView.serpro.title"),
      company: "SERPRO",
      description: getMessage("experienceView.serpro.description"),
      startingDate: "08/2022",
      endDate: "11/2022",
      skills: ["React", "Typescript", "HTML & CSS", "MaterialUI", "Figma"],
    },
  ];
});

interface NavLinks {
  [key: string]: { link: string; name: string };
}

const navLinks = computed<NavLinks>(() => ({
  home: { link: "/", name: getMessage("navbar.link.home") },
  projects: { link: "/projects", name: getMessage("navbar.link.projects") },
  experiences: { link: "/experiences", name: getMessage("navbar.link.experiences") },
}));

const NavbarLinks = computed(() => {
  return [
    {
      link: navLinks.value["home"].link,
      icon: "charm:person",
      title: navLinks.value["home"].name,
    },
    {
      link: navLinks.value["projects"].link,
      icon: "heroicons-outline:light-bulb",
      title: navLinks.value["projects"].name,
    },
    {
      link: navLinks.value["experiences"].link,
      icon: "quill:paper",
      title: navLinks.value["experiences"].name,
    },
  ];
});

interface project {
  title: string;
  summary: string;
  repoLink: string;
  description: string;
  technologies: string[];
}

const projects = computed<project[]>(() => {
  return [
    {
      title: "Portfolio",
      summary: getMessage("projectsView.portfolio.description"),
      repoLink: "https://github.com/phvm/portfolio",
      description: "",
      technologies: ["Vue", "Typescript", "TailwindCSS", "HTML", "CSS"],
    },
    {
      title: "Bookboard",
      summary: getMessage("projectsView.bookboard.description"),
      repoLink: "https://github.com/phvm/bookboard",
      description: "",
      technologies: ["React", "Typescript", "MaterialUI", "HTML", "CSS"],
    },
    {
      title: "Kaball",
      summary: getMessage("projectsView.kaball.description"),
      repoLink: "https://github.com/Remato/kaball",
      description: "",
      technologies: ["React", "Typescript", "HTML", "CSS"],
    },
    {
      title: "Todo",
      summary: getMessage("projectsView.todo.description"),
      repoLink: "https://github.com/phvm/Todo",
      description: "",
      technologies: ["Vue", "HTML", "CSS", "Typescript", "Vite"],
    },
    {
      title: "Linkthree",
      summary: getMessage("projectsView.linkthree.description"),
      repoLink: "https://github.com/phvm/linkTree",
      description: "",
      technologies: ["HTML", "CSS"],
    },
    {
      title: "Reconectando",
      summary: getMessage("projectsView.reconectando.description"),
      repoLink: "https://github.com/phvm/Reconectando",
      description: "",
      technologies: ["Python", "Heroku", "Streamlit"],
    },
  ];
});

export { navLinks, experienceList, NavbarLinks, projects };
