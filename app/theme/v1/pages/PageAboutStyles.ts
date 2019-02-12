import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';
import { Covering } from 'theme/v1/Mixins';

/**
 * Styles interface
 */
interface PageAboutStyleRules extends StyleRules {
  root?: CSSProperties;
  paper?: CSSProperties;
}

/**
 * Styles definition
 */
const PageAboutStyles = (theme: Theme) => {
  // defines custom styles
  const styles: PageAboutStyleRules = {
    root: {
      textAlign: 'center',
      '&:after': {
        ...Covering(theme.gradients().blue.main, 'fixed'),
        zIndex: -5,
      },
    },
    paper: {
      padding: 25,
      '&:first-child': {
        background: 'transparent',
      },
    },
  };

  // creates JSS formated styles
  return createStyles(styles);
};

/**
 * Exports
 */
export { PageAboutStyles, PageAboutStyleRules };
