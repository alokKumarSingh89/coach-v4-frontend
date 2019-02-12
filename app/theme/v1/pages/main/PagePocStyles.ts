import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';
import { Covering } from 'theme/v1/Mixins';

/**
 * Styles interface
 */
interface PagePocStyleRules extends StyleRules {
  root?: CSSProperties;
}

/**
 * Styles definition
 */
const PagePocStyles = (theme: Theme) => {
  // defines custom styles
  const styles: PagePocStyleRules = {
    root: {
      paddingTop: 0,
      '&:after': {
        ...Covering(theme.gradients().pink.main, 'fixed'),
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
export { PagePocStyles, PagePocStyleRules };
