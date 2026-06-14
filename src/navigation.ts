export const headerData = {
  links: [
    {
      text: 'Liste des Yuris',
      href: '/ListeYuri',
    },
    {
      text: 'Présentation',
      href: '/Presentation',
    },
  ],
  actions: [{ text: 'Discord', href: 'https://discord.gg/YyG3CmHTWh', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Made Using onWidget · All rights reserved. ', href: 'https://github.com/onwidget/astrowind' },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    //{ ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-discord', href: 'https://discord.gg/YyG3CmHTWh' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/YumeYuriFr' },
  ],
  footNote: `
     Yuri can save this world ! Made with Yuri Power by 🌸Mikuwu🌸.
  `,
};
