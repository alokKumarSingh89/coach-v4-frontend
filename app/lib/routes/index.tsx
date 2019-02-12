import {
  AccountCircleRounded as AccountIcon,
  GroupRounded as CommunityIcon,
  HomeRounded as HomeIcon,
  FitnessCenterRounded as ToolsIcon,
  FavoriteRounded as TributeIcon,
  WbIncandescentRounded as WisdomIcon,
} from '@material-ui/icons';

import AboutRoutes from 'lib/routes/AboutRoutes';
import AccountRoutes from 'lib/routes/AccountRoutes';
import ActionRoutes from 'lib/routes/ActionRoutes';
import AuthRoutes from 'lib/routes/AuthRoutes';

/**
 * Route group type
 */
export type RouteGroup = Record<string, RouteConfig>;

/**
 * Route config interfaces
 */
export interface RouteConfig {
  href: string;
  label?: string;
  Icon?: any;
}

/**
 * Main routes group
 */
const MainRoutes: RouteGroup = {
  home: {
    label: 'Timeline',
    href: '/',
    Icon: HomeIcon,
  },
  wisdom: {
    label: 'Well Of Wisdom',
    href: '/main/well-of-wisdom',
    Icon: WisdomIcon,
  },
  tools: {
    label: 'Tools Of Success',
    href: '/main/tools-of-success',
    Icon: ToolsIcon,
  },
  community: {
    label: 'Power Of Community',
    href: '/main/power-of-community',
    Icon: CommunityIcon,
  },
  tribute: {
    label: 'Table Of Honor',
    href: '/tribute',
    Icon: TributeIcon,
  },
};

/**
 * Main routes
 */
export default MainRoutes;
/**
 * Other routes
 */
export { MainRoutes,AccountRoutes, ActionRoutes, AuthRoutes, AboutRoutes };
