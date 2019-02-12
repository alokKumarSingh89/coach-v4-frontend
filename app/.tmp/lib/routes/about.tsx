import {
  Info as AboutIcon,
  TrendingUp as BonusIcon,
  Call as ContactIcon,
  Group as CooperationIcon,
  ChatBubble as FaqIcon,
  Group as TeamIcon,
  Whatshot as VisionIcon,
} from '@material-ui/icons';

import { Routes } from '@lib/routes';

const routes: Routes = {
  about: {
    label: 'About',
    href: '/about',
    icon: AboutIcon,
  },
  bonus: {
    label: 'Bonus',
    href: '/about/bonus',
    icon: BonusIcon,
  },
  contact: {
    label: 'Contact',
    href: '/about/contact',
    icon: ContactIcon,
  },
  cooperation: {
    label: 'Cooperation',
    href: '/about/cooperation',
    icon: CooperationIcon,
  },
  faq: {
    label: 'FAQ',
    href: '/about/faq',
    icon: FaqIcon,
  },
  team: {
    label: 'Team',
    href: '/about/team',
    icon: TeamIcon,
  },
  vision: {
    label: 'Vision',
    href: '/about/vision',
    icon: VisionIcon,
  },
};

export default routes;
