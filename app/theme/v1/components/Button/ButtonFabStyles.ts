import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';
import { Direction } from 'lib/types';

/**
 * Styles interface
 */
interface ButtonFabStyleRules extends StyleRules {
  root?: CSSProperties;
  button?: CSSProperties;
}

/**
 * Styles HOC component
 */
const ButtonFabStyles = (theme: Theme) => {
  // styles definition
  const styles: ButtonFabStyleRules = {
    root: {
      position: 'fixed',
      right: 15,
      bottom: 15,
      background: theme.gradients(Direction.Top).black.main,
      boxShadow: `0 0 35px 5px ${theme.colors.black.main}`,
      borderRadius: '100%',
      padding: 3,
    },
    button: {
      color: theme.colors.white.main,
      border: `1px solid ${theme.colors.black.main}`,
      background: theme.gradients().rainbow.main,
      // boxShadow: `0 0 15px 0px ${theme.colors.black.main}`,
    },
  };
  // create styles
  return createStyles(styles);
};

/**
 * Exports
 */
export { ButtonFabStyles, ButtonFabStyleRules };
