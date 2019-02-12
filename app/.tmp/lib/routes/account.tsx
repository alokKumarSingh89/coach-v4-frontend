import {
  Group as GroupIcon,
  Loyalty as LoyaltyIcon,
  Mail as MailIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Star as StarIcon,
  TrendingUp as TrendingIcon,
  AccountBalanceWallet as WalletIcon,
} from '@material-ui/icons';

import { Routes } from '@lib/routes';

const routes: Routes = {
  profile: {
    label: 'Profile',
    href: '/account/profile',
    icon: PersonIcon,
  },
  membership: {
    label: 'Membership',
    href: '/account/membership',
    icon: LoyaltyIcon,
  },
  team: {
    label: 'Team',
    href: '/account/team',
    icon: GroupIcon,
  },
  rewards: {
    label: 'Rewards',
    href: '/account/rewards',
    icon: WalletIcon,
  },
  bonus: {
    label: 'Bonus',
    href: '/account/bonus',
    icon: TrendingIcon,
  },
  bookmarks: {
    label: 'Bookmarks',
    href: '/account/bookmarks',
    icon: StarIcon,
  },
  messages: {
    label: 'Messages',
    href: '/account/messages',
    icon: MailIcon,
  },
  settings: {
    label: 'Settings',
    href: '/account/settings',
    icon: SettingsIcon,
  },
};

export default routes;
