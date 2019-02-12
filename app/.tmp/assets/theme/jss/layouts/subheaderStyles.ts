import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { JSS } from '../../../../node_modules/@types/jss';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Styles interface
 */
export interface SubheaderStyles extends StyleRules {
  root?: CSSProperties;
  label?: CSSProperties;
  labelText?: CSSProperties;
}

/**
 * Styles HOC component
 */
export default (theme: Theme) => {
  // styles definition
  const styles: SubheaderStyles = {
    root: {
      padding: [[12, 15]],
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      position: 'relative',
    },
    labelTag: {
      position: 'absolute',
      top: -26,
      background: theme.colors.white.main,
      height: 25,
      padding: [[6, 12]],
      borderRadius: [[25, 25, 0, 0]],
    },
    labelTagIcon: {
      fontSize: theme.typography.headline.fontSize,
      color: theme.colors.blue.main,
    },
    labelText: {
      textTransform: 'uppercase',
      fontSize: theme.typography.display1.fontSize,
      fontWeight: theme.typography.display1.fontWeight,
    },
  };
  // create styles
  return createStyles(styles);
};
