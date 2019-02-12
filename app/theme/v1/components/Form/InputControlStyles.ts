import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Styles interface
 */
interface InputControlStyleRules extends StyleRules {
  root?: CSSProperties;
  // keyword input
  keywordRoot?: CSSProperties;
  keywordInput?: CSSProperties;
  keywordFormLabel?: CSSProperties;
}

/**
 * Styles HOC component
 */
const InputControlStyles = (theme: Theme) => {
  // styles definition
  const styles: InputControlStyleRules = {
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      padding: [[0, 10]],
      backgroundColor: theme.colors.white.dark,
      borderRadius: theme.shape.borderRadius,
    },
    input: {
      fontSize: '1rem',
      padding: [[13, 0, 11]],
      fontWeight: theme.typography.fontWeightRegular,
    },
    label: {
      display: 'none',
    },
    adornmentStart: {
      color: theme.colors.grey.dark,
    },
    adornmentEnd: {
      color: theme.colors.black.main,
    },
  };

  // create styles
  return createStyles(styles);
};

/**
 * Exports
 */
export { InputControlStyles, InputControlStyleRules };
