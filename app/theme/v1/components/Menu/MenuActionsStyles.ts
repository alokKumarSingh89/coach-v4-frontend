import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Style rules interface
 */
interface MenuActionsSectionStyleRules extends StyleRules {
  root?: CSSProperties;
}

/**
 * Styles definition
 */
const MenuActionsSectionStyles = (theme: Theme) => {
  // defines custom styles
  const styles: MenuActionsSectionStyleRules = {
    root: {
      padding: 0,
      marginBottom: 0,
    },
  };

  // creates JSS formated styles
  return createStyles(styles);
};

/**
 * Style rules interface
 */
interface MenuActionsStyleRules extends StyleRules {
  paper?: CSSProperties;
  list?: CSSProperties;
}

/**
 * Styles definition
 */
const MenuActionsStyles = (theme: Theme) => {
  // defines custom styles
  const styles: MenuActionsStyleRules = {
    paper: {},
    list: {
      padding: 0,
    },
  };

  // creates JSS formated styles
  return createStyles(styles);
};

/**
 * Exports
 */
export {
  MenuActionsStyles,
  MenuActionsStyleRules,
  MenuActionsSectionStyles,
  MenuActionsSectionStyleRules,
};
