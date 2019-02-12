import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Styles interface
 */
export interface PageAccountStyles extends StyleRules {
  root?: CSSProperties;
  paper?: CSSProperties;
  paperHeadline?: CSSProperties;
  paperSubheading?: CSSProperties;
}

/**
 * Styles definition
 */
export default (theme: Theme) => {
  // defines custom styles
  const styles: PageAccountStyles = {
    root: {
      //background: theme.colors.white.main,
    },
    paper: {
      padding: [[25, 20]],
      textAlign: 'center',
      marginTop: 5,
    },
    paperHeadline: {
      paddingBottom: 10,
    },
    paperSubheading: {
      paddingBottom: 20,
      color: theme.colors.grey.dark,
    },
  };

  // creates JSS formated styles
  return createStyles(styles);
};
