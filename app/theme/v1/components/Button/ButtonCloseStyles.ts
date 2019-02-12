import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Styles interface
 */
interface ButtonCloseStyleRules extends StyleRules {
  root?: CSSProperties;
  button?: CSSProperties;
}

/**
 * Styles HOC component
 */
const ButtonCloseStyles = (theme: Theme) => {
  // styles definition
  const styles: ButtonCloseStyleRules = {
    root: {
      position: 'fixed',
      right: 0,
      top: 0,
    },
    button: {
      // background: theme.colors.black.main,
      color: theme.colors.white.main,
      // opacity: 0.75,
    },
  };
  // create styles
  return createStyles(styles);
};

/**
 * Exports
 */
export { ButtonCloseStyles, ButtonCloseStyleRules };
