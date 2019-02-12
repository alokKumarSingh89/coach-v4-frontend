import {
  InfoRounded as AboutIcon,
  TrendingUpRounded as BonusIcon,
  CallRounded as ContactIcon,
  GroupRounded as CooperationIcon,
  ChatBubbleRounded as FaqIcon,
  GroupRounded as TeamIcon,
  WhatshotRounded as VisionIcon,
} from '@material-ui/icons';
import { RouteGroup } from 'lib/routes';

const AboutRoutes: RouteGroup = {
  bonus: {
    label: 'Bonus',
    href: '/about/bonus',
    Icon: BonusIcon,
  },
  contact: {
    label: 'Contact',
    href: '/about/contact',
    Icon: ContactIcon,
  },
  cooperation: {
    label: 'Cooperation',
    href: '/about/cooperation',
    Icon: CooperationIcon,
  },
  faq: {
    label: 'FAQ',
    href: '/about/faq',
    Icon: FaqIcon,
  },
  team: {
    label: 'Team',
    href: '/about/team',
    Icon: TeamIcon,
  },
  vision: {
    label: 'Vision',
    href: '/about/vision',
    Icon: VisionIcon,
  },
};

export default AboutRoutes;
