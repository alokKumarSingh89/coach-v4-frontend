import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';
import color from 'color';

/**
 * Styles interface
 */
export interface MenuAvatarStyles extends StyleRules {
  paper?: CSSProperties;
  listItem?: CSSProperties;
}

/**
 * Styles definition
 */
export default (theme: Theme) => {
  // defines custom styles
  const styles: MenuAvatarStyles = {
    // dialog styles
    dialogBackdrop: {
      backgroundColor: color(theme.colors.blue.main)
        .alpha(0.5)
        .hsl()
        .string(),
    },
    dialogPaper: {
      margin: [[25, 'auto']],
    },
    dialogTitle: {
      background: theme.colors.grey.light,
    },
    // menu list item styles
    list: {
      padding: 0,
    },
    listItem: {
      padding: 0,
      marginBottom: 0,
      '&[data-index="profile"]': {
        '& $listItemIcon': {
          color: theme.colors.blue.main,
        },
        '& $listActionSecondaryText': {
          color: theme.colors.blue.main,
        },
      },
      '&[data-index="membership"]': {
        '& $listItemIcon': {
          color: theme.colors.pink.main,
        },
        '& $listActionSecondaryText': {
          color: theme.colors.pink.main,
        },
      },
      '&[data-index="team"]': {
        '& $listItemIcon': {
          color: theme.colors.green.main,
        },
        '& $listActionSecondaryText': {
          color: theme.colors.green.main,
        },
      },
      '&[data-index="rewards"]': {
        '& $listItemIcon': {
          color: theme.colors.orange.main,
        },
        '& $listActionSecondaryText': {
          color: theme.colors.orange.main,
        },
      },
      '&[data-index="bonus"]': {
        '& $listItemIcon': {
          color: theme.colors.purple.main,
        },
        '& $listActionSecondaryText': {
          color: theme.colors.purple.main,
        },
      },
      '&[data-index="bookmarks"]': {
        '& $listItemIcon': {
          color: theme.colors.yellow.main,
        },
        '& $listActionSecondaryText': {
          color: theme.colors.yellow.main,
        },
      },
      '&[data-index="messages"]': {
        '& $listItemIcon': {
          color: theme.colors.red.main,
        },
        '& $listActionSecondaryText': {
          color: theme.colors.red.main,
        },
      },
      '&[data-index="settings"]': {
        '& $listItemIcon': {
          color: theme.colors.grey.main,
        },
        '& $listActionSecondaryText': {
          color: theme.colors.grey.main,
        },
      },
    },
    listItemLink: {
      color: theme.colors.black.main,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: [[15, 80, 15, 20]],
      width: '100%',
    },
    listItemIcon: {
      color: theme.colors.black.main,
    },
    listItemText: {
      padding: 0,
    },
    listItemTextPrimary: {
      color: theme.colors.black.main,
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
    },
    listItemTextSecondary: {
      textTransform: 'none',
      fontSize: '0.875rem',
      fontWeight: theme.typography.fontWeightMedium,
    },
    listActionSecondary: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      right: 20,
    },
    listActionSecondaryText: {
      fontWeight: theme.typography.fontWeightRegular,
    },
  };

  // creates JSS formated styles
  return createStyles(styles);
};
