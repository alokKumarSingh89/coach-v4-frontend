import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Style rules interface
 */
interface MenuAvatarSectionStyleRules extends StyleRules {
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
const MenuAvatarSectionStyles = (theme: Theme) => {
  // defines custom styles
  const styles: MenuAvatarSectionStyleRules = {
    root: {
      padding: 0,
      marginBottom: 0,
      '&[data-index="profile"]': {
        '& $icon': {
          color: theme.colors.blue.main,
        },
        '& $actionSecondaryText': {
          color: theme.colors.blue.main,
        },
      },
      '&[data-index="membership"]': {
        '& $icon': {
          color: theme.colors.pink.main,
        },
        '& $actionSecondaryText': {
          color: theme.colors.pink.main,
        },
      },
      '&[data-index="team"]': {
        '& $icon': {
          color: theme.colors.green.main,
        },
        '& $actionSecondaryText': {
          color: theme.colors.green.main,
        },
      },
      '&[data-index="rewards"]': {
        '& $icon': {
          color: theme.colors.orange.main,
        },
        '& $actionSecondaryText': {
          color: theme.colors.orange.main,
        },
      },
      '&[data-index="bonus"]': {
        '& $icon': {
          color: theme.colors.purple.main,
        },
        '& $actionSecondaryText': {
          color: theme.colors.purple.main,
        },
      },
      '&[data-index="bookmarks"]': {
        '& $icon': {
          color: theme.colors.yellow.main,
        },
        '& $actionSecondaryText': {
          color: theme.colors.yellow.main,
        },
      },
      '&[data-index="messages"]': {
        '& $icon': {
          color: theme.colors.red.main,
        },
        '& $actionSecondaryText': {
          color: theme.colors.red.main,
        },
      },
      '&[data-index="settings"]': {
        '& $icon': {
          color: theme.colors.grey.main,
        },
        '& $actionSecondaryText': {
          color: theme.colors.grey.main,
        },
      },
    },
    link: {
      color: theme.colors.black.main,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // @ts-ignore
      padding: [[15, 80, 15, 20]],
      width: '100%',
    },
    icon: {
      color: theme.colors.black.main,
    },
    text: {
      padding: 0,
    },
    textPrimary: {
      color: theme.colors.black.main,
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
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
      right: 20,
    },
    actionSecondaryText: {
      fontWeight: theme.typography.fontWeightRegular,
    },
  };

  // creates JSS formated styles
  return createStyles(styles);
};

/**
 * Style rules interface
 */
interface MenuAvatarStyleRules extends StyleRules {
  paper?: CSSProperties;
  list?: CSSProperties;
}

/**
 * Styles definition
 */
const MenuAvatarStyles = (theme: Theme) => {
  // defines custom styles
  const styles: MenuAvatarStyleRules = {
    paper: {},
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
  MenuAvatarStyles,
  MenuAvatarStyleRules,
  MenuAvatarSectionStyles,
  MenuAvatarSectionStyleRules,
};
