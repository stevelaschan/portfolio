export const attributes = {
  hero: {
    firstButton: {
      icon: 'briefcase-outline',
      link: '/#portofolio',
      text: 'My work',
    },
    heading: "I'm Stefan Laschan, and I create",
    image: '/img/hero.jpeg',
    secondButton: { icon: 'whatsapp', link: '/#contact', text: 'Contact' },
    social: {
      facebook: { link: 'https://facebook.com', show: true },
      instagram: { link: 'https://instagram.com/stevelaschan/', show: true },
      linkedin: {
        link: 'https://at.linkedin.com/in/stefan-laschan-948490182',
        show: true,
      },
    },
    typed: [
      { text: 'creative websites.' },
      { text: 'beautiful logos.' },
      { text: 'great experiences.' },
    ],
  },
  about: {
    heading: 'Who am I?',
    image: '/img/about.jpeg',
    text: 'I am a 28 year old Full Stack Web Developer. I finished my law degree in 2021 and worked at Deloitte for a year. In 2022 I decided to become a Web Developer and completed the Full Stack Web Developer Bootcamp at UpLeveled.\n',
  },
  features: [
    {
      icon: 'monitor-screenshot',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dapibus mi.\n',
      title: 'UI/UX',
    },
    {
      icon: 'draw',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dapibus mi.\n',
      title: 'Logo Design',
    },
    {
      icon: 'xml',
      text: 'Frontend (HTML, CSS and Javascript) and Backend (Node.js).\n',
      title: 'Web Development',
    },
  ],
  portfolio: {
    projects: [
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-1.jpeg',
        title: 'ShopoShopy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-2.jpeg',
        title: 'LogoLogy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-3.jpeg',
        title: 'SitoSity',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-4.jpeg',
        title: 'DrawoDrawy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-5.jpeg',
        title: 'PagoPagy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-6.jpeg',
        title: 'UIoUXy',
      },
    ],
    title: 'My work',
  },
  footer: { text: '© Stefan Laschan' },
};
