import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Styles interface
 */
export interface PageIndexStyles extends StyleRules {
  root?: CSSProperties;
  timelineRoot?: CSSProperties;
  timelineFilter?: CSSProperties;
  timelineScroller?: CSSProperties;
}

/**
 * Styles definition
 */
export default (theme: Theme) => {
  // defines custom styles
  const styles: PageIndexStyles = {
    root: {
      // no styles
    },
    timelineRoot: {},
    timelineFilter: {},
    timelineScroller: {
      padding: [[10, 10]],
    },
  };

  // creates JSS formated styles
  return createStyles(styles);
};
