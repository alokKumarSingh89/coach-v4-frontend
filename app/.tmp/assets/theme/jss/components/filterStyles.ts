import { NoScrollerTabsOverrides, useOverrides } from '@assets/theme/overrides';
import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Styles constants
 */
const presetsHeight = 48;
const presetsIndicatorHeight = 3;

/**
 * Styles interface
 */
export interface FilterStyles extends StyleRules {
  root?: CSSProperties;
  // keyword input
  keywordRoot?: CSSProperties;
  keywordInput?: CSSProperties;
  keywordFormLabel?: CSSProperties;
  // presets tabs
  presetsRoot?: CSSProperties;
  presetsFlexContainer?: CSSProperties;
  presetsScroller?: CSSProperties;
  presetsIndicator?: CSSProperties;
  presetsItemLabel?: CSSProperties;
}

/**
 * Styles HOC component
 */
export default (theme: Theme) => {
  // creates overrides HOC
  const withOverrides = useOverrides({
    // search box overrides
    presets: NoScrollerTabsOverrides({
      height: presetsHeight,
      indicatorHeight: presetsIndicatorHeight,
    }),
  });
  // styles definition
  const styles: FilterStyles = {
    root: {
      overflowY: 'hidden',
    },
    formControlRoot: {
      padding: [[0, 10]],
      backgroundColor: theme.colors.white.main,
    },
    // keyword input
    keywordRoot: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      padding: [[0, 10]],
      backgroundColor: theme.colors.white.dark,
      borderRadius: theme.shape.borderRadius,
    },
    keywordInput: {
      fontSize: '1rem',
      padding: [[13, 0, 11]],
      fontWeight: theme.typography.fontWeightRegular,
    },
    keywordFormLabel: {
      display: 'none',
    },
    inputAdornmentStart: {
      color: theme.colors.grey.dark,
    },
    inputAdornmentEnd: {
      color: theme.colors.black.main,
    },
    // presets tabs
    presetsRoot: {
      backgroundColor: theme.colors.white.main,
    },
    presetsIndicator: {
      backgroundColor: theme.colors.blue.main,
    },
    presetsSelectedItem: {
      '& $presetsItemLabel': {
        color: theme.colors.blue.main,
        fontWeight: theme.typography.fontWeightHeavy,
      },
    },
    presetsItemLabel: {
      color: theme.colors.black.main,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '0.750rem',
    },
  };

  // create styles
  return createStyles(withOverrides(styles));
};
