interface PagesNavbarHeader {
  [key: string]: {
    name: string
    link: string
  }
}

const PagesNavbarData = (route: string) => {
  const data: PagesNavbarHeader = {
    home: { name: 'Home', link: '/' },
    projects: { name: 'Projects', link: '/projects' },
    aboutme: { name: 'About me', link: '/aboutme' },
    contact: { name: 'Contact', link: '/contact' }
  }

  return data[route]
}
