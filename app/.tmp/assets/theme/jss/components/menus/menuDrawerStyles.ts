import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Styles interface
 */
export interface MenuDrawerStyles extends StyleRules {
  paper?: CSSProperties;
  label?: CSSProperties;
  list?: CSSProperties;
  listItem?: CSSProperties;
  listItemLink?: CSSProperties;
  listItemIcon?: CSSProperties;
  listItemText?: CSSProperties;
  listItemTextPrimary?: CSSProperties;
  listItemTextSecondary?: CSSProperties;
  listActionSecondary?: CSSProperties;
  listItemDivider?: CSSProperties;
}

/**
 * Styles definition
 */
export default (theme: Theme) => {
  // defines custom styles
  const styles: MenuDrawerStyles = {
    paper: {
      maxWidth: '95%',
      background: theme.colors.black.main,
      color: theme.colors.white.main,
      padding: [[0, 15, 25]],
    },
    label: {
      color: theme.colors.white.main,
      textAlign: 'center',
      padding: [[30, 25, 25]],
    },
    list: {
      padding: 0,
    },
    listItem: {
      padding: 0,
      marginBottom: 10,
      border: [[1, 'solid', theme.colors.black.light]],
      borderRadius: theme.shape.borderRadius,
      // applies only for JUMBO list items
      '&[data-layout="jumbo"]': {
        border: 'none',
        '& $listItemLink': {
          padding: [[15, 30, 15, 15]],
        },
        '& $listItemIcon': {
          fontSize: '2.5rem',
        },
      },
      // applies only for WISDOM list items
      '&[data-index="wisdom"]': {
        background: theme.colors.purple.main,
        '& $listItemTextSecondary': {
          color: theme.colors.purple.dark,
        },
      },
      // applies only for TOOLS list items
      '&[data-index="tools"]': {
        background: theme.colors.orange.main,
        '& $listItemTextSecondary': {
          color: theme.colors.orange.dark,
        },
      },
      // applies only for COMMUNITY list items
      '&[data-index="community"]': {
        background: theme.colors.pink.main,
        '& $listItemTextSecondary': {
          color: theme.colors.pink.dark,
        },
      },
    },
    listItemLink: {
      color: theme.colors.white.main,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
      width: '100%',
    },
    listItemIcon: {
      color: theme.colors.white.main,
    },
    listItemText: {
      padding: 0,
    },
    listItemTextPrimary: {
      color: theme.colors.white.main,
      textTransform: 'none',
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
    },
    listItemDivider: {
      width: 20,
      height: 20,
      background: theme.colors.black.light,
      borderRadius: '100%',
      margin: [[25, 'auto']],
    },
  };

  // creates JSS formated styles
  return createStyles(styles);
};
