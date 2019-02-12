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
  addHelp: {
    label: 'Ask for help',
    href: '/action/ask-for-help',
    Icon: BonusIcon,
  },
  addGift: {
    label: 'Offer a gift',
    href: '/actions/offer-a-gift',
    Icon: ContactIcon,
  },
};

export default AboutRoutes;
