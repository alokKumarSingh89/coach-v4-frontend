import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

const iconSize = 50;

/**
 * Styles interface
 */
export interface IndicatorStyles extends StyleRules {
  root?: CSSProperties;
  message?: CSSProperties;
  icon?: CSSProperties;
}

/**
 * Styles HOC component
 */
export default (theme: Theme) => {
  // styles definition
  const styles: IndicatorStyles = {
    root: {
      textAlign: 'center',
      margin: [[0, 'auto']],
    },
    message: {
      color: theme.colors.white.main,
      fontWeight: theme.typography.fontWeightHeavy,
    },
    icon: {
      width: iconSize,
      height: iconSize,
      margin: [[25, 'auto']],
      color: theme.colors.white.main,
    },
  };

  // create styles
  return createStyles(styles);
};
