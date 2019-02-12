import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Styles interface
 */
interface PageAccountStyleRules extends StyleRules {
  root?: CSSProperties;
  paper?: CSSProperties;
  content?: CSSProperties;
}

/**
 * Styles definition
 */
const PageAccountStyles = (theme: Theme) => {
  // defines custom styles
  const styles: PageAccountStyleRules = {
    root: {
      maxWidth: theme.breakpoints.width('sm'),
      // @ts-ignore
      margin: [[0, 'auto']],
      // @ts-ignore
      [theme.breakpoints.up('sm')]: {
        marginTop: 10,
      },
    },
    paper: {
      textAlign: 'center',
      marginTop: 5,
      '&:first-child': {
        marginTop: 0,
      },
      // @ts-ignore
      padding: [[25, 20]],
    },
    content: {
      // @ts-ignore
      margin: [[0, 'auto']],
    },
  };

  // creates JSS formated styles
  return createStyles(styles);
};

/**
 * Exports
 */
export { PageAccountStyles, PageAccountStyleRules };
