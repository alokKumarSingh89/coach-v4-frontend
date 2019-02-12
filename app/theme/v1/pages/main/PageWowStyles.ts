import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';
import { Covering } from 'theme/v1/Mixins';

/**
 * Styles interface
 */
interface PageWowStyleRules extends StyleRules {
  root?: CSSProperties;
}

/**
 * Styles definition
 */
const PageWowStyles = (theme: Theme) => {
  // defines custom styles
  const styles: PageWowStyleRules = {
    root: {
      paddingTop: 0,
      '&:after': {
        ...Covering(theme.gradients().purple.main, 'fixed'),
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
export { PageWowStyles, PageWowStyleRules };
