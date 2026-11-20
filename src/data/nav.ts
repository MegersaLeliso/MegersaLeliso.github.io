export const site = {
  name: 'Megersa Leliso',
  tagline: 'Computer Science · Vassar College',
  email: 'mleliso@vassar.edu',
  github: 'https://github.com/MegersaLeliso',
  linkedin: 'https://www.linkedin.com/in/megersa-leliso-a6a5923b4/',
};

export type NavGroup = { label: string; items: { label: string; href: string }[] };

export const navGroups: NavGroup[] = [
  {
    label: 'Software Engineering',
    items: [
      { label: 'Smart Weather Dashboard', href: '/projects/smart-weather-dashboard/' },
      { label: 'Vehicle Rental Web App', href: '/projects/vehicle-rental-app/' },
    ],
  },
  {
    label: 'Product & Leadership',
    items: [
      { label: 'Stooping Club', href: '/projects/stooping-club/' },
      { label: 'OIS Apprentice', href: '/#leadership' },
    ],
  },
];
