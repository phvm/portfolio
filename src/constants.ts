interface NavLink {
  linkTo: string;
  pageTitle: string;
}

const navLinks: NavLink[] = [
  { linkTo: "/projects", pageTitle: "Projects I've built" },
  { linkTo: "/work", pageTitle: "Some of my experiences" },
  { linkTo: "/contact", pageTitle: "Contact me" },
];

interface Experience {
  experienceTitle: string;
  description: string;
  skills: string[];
  startingDate: string;
  endDate: string;
}

const experienceList: Experience[] = [
  {
    experienceTitle: "Software Engineer",
    description: "",
    startingDate: "08/2022",
    endDate: "03/2024",
    skills: ["React", "Typescript", "HTML & CSS", "Next.js", "Storybook", "Vitest", "Playwright"],
  },
];

export { navLinks, experienceList };
