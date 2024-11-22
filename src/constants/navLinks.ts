interface NavLink {
  linkTo: string;
  pageTitle: string;
}

const navLinks: NavLink[] = [
  { linkTo: "/projects", pageTitle: "Projects" },
  { linkTo: "/about", pageTitle: "About me" },
  { linkTo: "/contact", pageTitle: "Contact" },
];

export { navLinks };
