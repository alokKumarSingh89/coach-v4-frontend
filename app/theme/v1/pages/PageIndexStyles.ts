import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';
import { Covering } from 'theme/v1/Mixins';

/**
 * Styles interface
 */
interface PageIndexStyleRules extends StyleRules {
  root?: CSSProperties;
  timelineRoot?: CSSProperties;
  timelineFilter?: CSSProperties;
  timelineScroller?: CSSProperties;
}

/**
 * Styles definition
 */
const PageIndexStyles = (theme: Theme) => {
  // defines custom styles
  const styles: PageIndexStyleRules = {
    root: {
      paddingTop: 0,
      '&:after': {
        ...Covering(theme.gradients().blue.main, 'fixed'),
        zIndex: -5,
      },
    },
    panelLeft: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    panelCenter: {
      display: 'flex',
      padding: [[0, 10]],
      // minWidth: 400,
      justifyContent: 'center',
    },
    panelRight: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
  };

  // creates JSS formated styles
  return createStyles(styles);
};

/**
 * Exports
 */
export { PageIndexStyles, PageIndexStyleRules };
