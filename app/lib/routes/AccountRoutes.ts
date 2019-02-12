import {
  GroupRounded as GroupIcon,
  LoyaltyRounded as LoyaltyIcon,
  MailRounded as MailIcon,
  PersonRounded as PersonIcon,
  SettingsRounded as SettingsIcon,
  StarRounded as StarIcon,
  TrendingUpRounded as TrendingIcon,
  AccountBalanceWalletRounded as WalletIcon,
} from '@material-ui/icons';

import { RouteGroup } from 'lib/routes';

const AccountRoutes: RouteGroup = {
  profile: {
    label: 'Profile',
    href: '/account/profile',
    Icon: PersonIcon,
  },
  membership: {
    label: 'Membership',
    href: '/account/membership',
    Icon: LoyaltyIcon,
  },
  team: {
    label: 'Team',
    href: '/account/team',
    Icon: GroupIcon,
  },
  rewards: {
    label: 'Rewards',
    href: '/account/rewards',
    Icon: WalletIcon,
  },
  bonus: {
    label: 'Bonus',
    href: '/account/bonus',
    Icon: TrendingIcon,
  },
  bookmarks: {
    label: 'Bookmarks',
    href: '/account/bookmarks',
    Icon: StarIcon,
  },
  messages: {
    label: 'Messages',
    href: '/account/messages',
    Icon: MailIcon,
  },
  settings: {
    label: 'Settings',
    href: '/account/settings',
    Icon: SettingsIcon,
  },
};

export default AccountRoutes;
