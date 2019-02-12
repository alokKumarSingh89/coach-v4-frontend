import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';
import { Covering } from 'theme/v1/Mixins';

/**
 * Styles interface
 */
interface PageTosStyleRules extends StyleRules {
  root?: CSSProperties;
}

/**
 * Styles definition
 */
const PageTosStyles = (theme: Theme) => {
  // defines custom styles
  const styles: PageTosStyleRules = {
    root: {
      paddingTop: 0,
      '&:after': {
        ...Covering(theme.gradients().orange.main, 'fixed'),
        zIndex: -5,
      },
    },
  };

  // creates JSS formated styles
  return createStyles(styles);
};

/**
 * Exports
 */
export { PageTosStyles, PageTosStyleRules };
