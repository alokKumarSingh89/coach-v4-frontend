import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Styles interface
 */
export interface EntryDialogStyles extends StyleRules {
  root?: CSSProperties;
}

/**
 * Styles HOC component
 */
export default (theme: Theme) => {
  // styles definition
  const styles: EntryDialogStyles = {
    root: {},
    content: {},
    media: {},
    type: {},
    typeIcon: {},
    typeText: {},
    headline: {},
  };

  // create styles
  return createStyles(styles);
};
