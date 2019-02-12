import { CSSProperties, StyleRules } from '@material-ui/core/styles/withStyles';
import { Theme, createStyles } from '@material-ui/core';

const indicatorIconSize = 50;

/**
 * Styles interface
 */
interface ScrollerIndicatorStyleRules extends StyleRules {
  root?: CSSProperties;
  message?: CSSProperties;
  icon?: CSSProperties;
}

/**
 * Styles HOC component
 */
const ScrollerIndicatorStyles = (theme: Theme) => {
  // styles definition
  const styles: ScrollerIndicatorStyleRules = {
    root: {
      textAlign: 'center',
      margin: [[0, 'auto']],
    },
    message: {
      color: theme.colors.white.main,
      fontWeight: theme.typography.fontWeightHeavy,
    },
    icon: {
      width: indicatorIconSize,
      height: indicatorIconSize,
      margin: [[25, 'auto']],
      color: theme.colors.white.main,
    },
  };

  // create styles
  return createStyles(styles);
};

/**
 * Scroller styles interface
 */
interface ScrollerStyleRules extends StyleRules {
  root: CSSProperties;
  data?: CSSProperties;
}

/**
 * Styles HOC component
 */
const ScrollerStyles = (theme: Theme) => {
  // styles definition
  const styles: ScrollerStyleRules = {
    root: {
      background: 'transparent',
    },
  };

  // create styles
  return createStyles(styles);
};

/**
 * Exports
 */
export {
  ScrollerStyles, ScrollerStyleRules, ScrollerIndicatorStyles, ScrollerIndicatorStyleRules,
};
