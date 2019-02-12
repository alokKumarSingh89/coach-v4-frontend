import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Styles interface
 */
export interface HeaderStyles extends StyleRules {
  root?: CSSProperties;
  appBarIcon?: CSSProperties;
  toolbarGutters?: CSSProperties;
}

/**
 * Styles HOC component
 */
export default (theme: Theme) => {
  // styles definition
  const styles: HeaderStyles = {
    root: {
      flexGrow: 1,
      color: theme.colors.black.main,
    },
    // app bar styles
    appBarIcon: {
      color: theme.colors.black.main,
    },
    // toolbar styles
    toolbarGutters: {
      paddingLeft: 8,
      paddingRight: 8,
    },
  };
  // create styles
  return createStyles(styles);
};
