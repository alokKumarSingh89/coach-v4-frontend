import {
  AccountCircle as AccountIcon,
  Group as CommunityIcon,
  Home as HomeIcon,
  FitnessCenter as ToolsIcon,
  Favorite as TributeIcon,
  WbIncandescent as WisdomIcon,
} from '@material-ui/icons';

import AboutRoutes from '@lib/routes/about';
import AccountRoutes from '@lib/routes/account';
import AuthRoutes from '@lib/routes/auth';
import { RouteConfig } from '@assets/declarations';

export type Routes = Record<string, RouteConfig>;

const mainRoutes: Routes = {
  home: {
    label: 'Timeline',
    href: '/',
    icon: HomeIcon,
  },
  tribute: {
    label: 'Tribute',
    href: '/tribute',
    icon: TributeIcon,
  },
  wisdom: {
    label: 'Well Of Wisdom',
    href: '/wisdom',
    icon: WisdomIcon,
  },
  tools: {
    label: 'Tools Of Success',
    href: '/tools',
    icon: ToolsIcon,
  },
  community: {
    label: 'Power Of Community',
    href: '/community',
    icon: CommunityIcon,
  },
  account: {
    ...AccountRoutes.profile,
    label: 'Account',
  },
};

/**
 * Main routes
 */
export default mainRoutes;
/**
 * Other routes
 */
export { AccountRoutes, AuthRoutes, AboutRoutes };
