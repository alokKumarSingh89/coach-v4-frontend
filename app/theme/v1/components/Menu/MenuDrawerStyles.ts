import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Style rules interface
 */
interface MenuDrawerSectionStyleRules extends StyleRules {
  root?: CSSProperties;
  link?: CSSProperties;
  icon?: CSSProperties;
  text?: CSSProperties;
  textPrimary?: CSSProperties;
  textSecondary?: CSSProperties;
  actionSecondary?: CSSProperties;
  actionSecondaryText?: CSSProperties;
}

/**
 * Styles definition
 */
const MenuDrawerSectionStyles = (theme: Theme) => {
  // defines custom styles
  const styles: MenuDrawerSectionStyleRules = {
    root: {
      padding: 0,
      marginBottom: 10,
      // @ts-ignore
      border: [[1, 'solid', theme.colors.black.light]],
      borderRadius: theme.shape.borderRadius,
      '&[data-layout="jumbo"]': {
        border: 'none',
        '& $link': {
          padding: [[15, 30, 15, 15]],
        },
        '& $icon': {
          fontSize: '2.5rem',
        },
      },
      // applies only for WISDOM list items
      '&[data-index="wisdom"]': {
        background: theme.colors.purple.main,
        '& $textSecondary': {
          color: theme.colors.purple.dark,
        },
      },
      // applies only for TOOLS list items
      '&[data-index="tools"]': {
        background: theme.colors.orange.main,
        '& $textSecondary': {
          color: theme.colors.orange.dark,
        },
      },
      // applies only for COMMUNITY list items
      '&[data-index="community"]': {
        background: theme.colors.pink.main,
        '& $textSecondary': {
          color: theme.colors.pink.dark,
        },
      },
    },
    link: {
      color: theme.colors.white.main,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
      width: '100%',
    },
    icon: {
      color: theme.colors.white.main,
    },
    text: {
      padding: 0,
    },
    textPrimary: {
      color: theme.colors.white.main,
      textTransform: 'none',
    },
    textSecondary: {
      textTransform: 'none',
      fontSize: '0.875rem',
      fontWeight: theme.typography.fontWeightMedium,
    },
    actionSecondary: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    divider: {
      width: 20,
      height: 20,
      background: theme.colors.black.light,
      borderRadius: '100%',
      // @ts-ignore
      margin: [[25, 'auto']],
    },
  };

  // creates JSS formated styles
  return createStyles(styles);
};

/**
 * Styles interface
 */
interface MenuDrawerStyleRules extends StyleRules {
  paper?: CSSProperties;
  label?: CSSProperties;
  list?: CSSProperties;
}

/**
 * Styles definition
 */
const MenuDrawerStyles = (theme: Theme) => {
  // defines custom styles
  const styles: MenuDrawerStyleRules = {
    paper: {
      maxWidth: 320,
      background: theme.colors.black.main,
      color: theme.colors.white.main,
      // @ts-ignore
      padding: [[0, 15, 25]],
    },
    label: {
      color: theme.colors.white.main,
      textAlign: 'center',
      // @ts-ignore
      padding: [[30, 25, 25]],
    },
    list: {
      padding: 0,
    },
  };

  // creates JSS formated styles
  return createStyles(styles);
};

/**
 * Exports
 */
export {
  MenuDrawerStyles,
  MenuDrawerStyleRules,
  MenuDrawerSectionStyles,
  MenuDrawerSectionStyleRules,
};
