import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';
import { BgColoring } from 'theme/v1/Mixins';

/**
 * Styles interface
 */
interface HeaderNotificationTogglerStyleRules extends StyleRules {
  root?: CSSProperties;
  bar?: CSSProperties;
  icon?: CSSProperties;
  badge?: CSSProperties;
  badgeRoot?: CSSProperties;
}

/**
 * Styles definition
 */
const HeaderNotificationTogglerStyles = (theme: Theme) => {
  // defines custom styles
  const styles: HeaderNotificationTogglerStyleRules = {
    icon: {
      color: theme.colors.black.dark,
      opacity: 0.75,
    },
    badge: {
      color: theme.colors.white.main,
      backgroundColor: theme.colors.pink.main,
    },
    badgeRoot: {
      '&[data-visibility="hidden"]': {
        '& $badge': {
          display: 'none',
        },
      },
    },
  };

  // creates JSS formated styles
  return createStyles(styles);
};

/**
 * Styles interface
 */
interface HeaderStyleRules extends StyleRules {
  root?: CSSProperties;
  iconAccount?: CSSProperties;
  iconSearch?: CSSProperties;
}

/**
 * Styles HOC component
 */
const HeaderStyles = (theme: Theme) => {
  // styles definition
  const styles: HeaderStyleRules = {
    root: {
      flexGrow: 1,
      color: theme.colors.white.main,
      // @ts-ignore
      padding: [[8, 2]],
    },
    bar: {
      background: 'transparent',
      ...BgColoring(theme),
    },
    // CONTAINERS
    leftContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      order: 1,
    },
    centerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      order: 3,
      [theme.breakpoints.up('md')]: {
        order: 2,
      },
    },
    rightContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      order: 2,
      [theme.breakpoints.up('md')]: {
        order: 3,
      },
    },
    // ACCOUNT icon
    iconAccount: {
      color: theme.colors.black.dark,
      opacity: 0.75,
    },
    // SEARCH icon
    iconSearch: {
      color: theme.colors.black.dark,
      opacity: 0.75,
    },
  };
  // create styles
  return createStyles(styles);
};

/**
 * Exports
 */
export {
  HeaderStyles,
  HeaderStyleRules,
  HeaderNotificationTogglerStyles,
  HeaderNotificationTogglerStyleRules,
};
