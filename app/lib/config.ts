import MainRoutes, { AccountRoutes, AboutRoutes, ActionRoutes } from 'lib/routes';
import { MenuDrawerSectionProps } from 'components/Menu/MenuDrawer';
import { MenuAvatarSectionProps } from 'components/Menu/MenuAvatar';
import { MenuActionsSectionProps } from 'components/Menu/MenuActions';

// MENU ACTIONS SECTIONS
const menuActionsSections: Array<MenuActionsSectionProps> = [
  {
    ...ActionRoutes.addHelp,
    index: 'help',
  },
  {
    ...ActionRoutes.addGift,
    index: 'gift',
  },
];

// MENU AVATAR SECTIONS
const menuAvatarSections: Array<MenuAvatarSectionProps> = [
  {
    ...AccountRoutes.profile,
    status: '30%',
    index: 'profile',
  },
  {
    ...AccountRoutes.membership,
    status: 'knight',
    index: 'membership',
  },
  {
    ...AccountRoutes.team,
    status: '1 340',
    index: 'team',
  },
  {
    ...AccountRoutes.rewards,
    status: '$ 1320',
    index: 'rewards',
  },
  {
    ...AccountRoutes.bonus,
    status: '2%',
    index: 'bonus',
  },
  {
    ...AccountRoutes.bookmarks,
    status: '325',
    index: 'bookmarks',
  },
  {
    ...AccountRoutes.messages,
    status: '4',
    index: 'messages',
  },
  {
    ...AccountRoutes.settings,
    status: null,
    index: 'settings',
  },
];

// MENU DRAWER SECTIONS
const menuDrawerSections: Array<MenuDrawerSectionProps> = [
  {
    ...MainRoutes.home,
    layout: 'basic',
    index: 'timeline',
  },
  {
    ...MainRoutes.wisdom,
    layout: 'jumbo',
    index: 'wisdom',
    description: 'Learn all about health, money and relations',
  },
  {
    ...MainRoutes.tools,
    layout: 'jumbo',
    index: 'tools',
    description: 'Track your visions, goals or daily activities',
  },
  {
    ...MainRoutes.community,
    layout: 'jumbo',
    index: 'community',
    description: 'Connect with others and solve your life obstacles',
    divider: true,
  },
  {
    ...MainRoutes.tribute,
    layout: 'basic',
    index: 'tribute',
  },
  {
    ...AboutRoutes.cooperation,
    layout: 'basic',
    index: 'cooperation',
    divider: true,
  },
  {
    ...AboutRoutes.vision,
    layout: 'basic',
    index: 'about',
    label: 'About',
  },
  {
    ...AboutRoutes.contact,
    layout: 'basic',
    index: 'contact',
  },
  {
    ...AboutRoutes.faq,
    layout: 'basic',
    index: 'faq',
    divider: true,
  },
];

// TIMELINE PRESETS
const timelineFilterPresets: Array<any> = [
  {
    label: 'All',
    value: 'any',
  },
  {
    label: 'Map',
    value: 'localizable',
  },
  {
    label: 'Magazine',
    value: 'blog',
  },
  {
    label: 'Comments',
    value: 'comment',
  },
  {
    label: 'Wisdoms',
    value: 'wisdom',
  },
  {
    label: 'Help',
    value: 'help',
  },
  {
    label: 'Jobs',
    value: 'job',
  },
];
export { menuAvatarSections, menuDrawerSections, menuActionsSections, timelineFilterPresets };
