import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Styles interface
 */
interface FieldControlStyleRules extends StyleRules {
  adornmentStart?: CSSProperties;
  adornmentEnd?: CSSProperties;
}

/**
 * Styles HOC component
 */
const FieldControlStyles = (theme: Theme) => {
  // styles definition
  const styles: FieldControlStyleRules = {
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
export { FieldControlStyles, FieldControlStyleRules };
