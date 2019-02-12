import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Styles interface
 */
interface LabelStyleRules extends StyleRules {
  root?: CSSProperties;
  title?: CSSProperties;
  description?: CSSProperties;
}

/**
 * Styles HOC component
 */
const LabelStyles = (theme: Theme) => {
  // styles definition
  const styles: LabelStyleRules = {
    root: {
      // @ts-ignore
      margin: [[0, 'auto', 20]],
    },
    title: {
      marginBottom: 6,
    },
    description: {
      color: theme.colors.black.light,
    },
  };
  // create styles
  return createStyles(styles);
};

/**
 * Exports
 */
export { LabelStyles, LabelStyleRules };
