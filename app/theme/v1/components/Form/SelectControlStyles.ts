import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Styles interface
 */
interface SelectControlStyleRules extends StyleRules {
  icon?: CSSProperties;
}

/**
 * Styles HOC component
 */
const SelectControlStyles = (theme: Theme) => {
  // styles definition
  const styles: SelectControlStyleRules = {
    icon: {
      right: 10,
      color: theme.colors.grey.dark,
    },
  };

  // create styles
  return createStyles(styles);
};

/**
 * Exports
 */
export { SelectControlStyles, SelectControlStyleRules };
