import { CSSProperties, StyleRules } from '@material-ui/core/styles/withStyles';
import { Theme, createStyles } from '@material-ui/core';

/**
 * Scroller styles interface
 */
export interface ScrollerStyles extends StyleRules {
  root: CSSProperties;
  data?: CSSProperties;
  indicator?: CSSProperties;
  indicatorMessage?: CSSProperties;
}

/**
 * Styles HOC component
 */
export default (theme: Theme) => {
  // styles definition
  const styles: ScrollerStyles = {
    root: {
      background: 'transparent',
    },
    indicatorRoot: {
      textAlign: 'center',
    },
    indicatorMessage: {
      color: theme.colors.white.main,
      textAlign: 'center',
    },
  };

  // create styles
  return createStyles(styles);
};
