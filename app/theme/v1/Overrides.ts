import { Overrides } from '@material-ui/core/styles/overrides';
import { StyleRules } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import _ from 'lodash';
import color from 'color';

/**
 * Default MUI Theme overrides
 * @see https://material-ui.com/customization/overrides/#5-global-theme-variation
 */
export function ThemeOverrides(theme: ThemeOptions): Overrides {
  return {
    MuiCard: {
      root: {
        marginBottom: 15,
        borderRadius: theme.shape.borderRadius,
        maxWidth: 345,
      },
    },
    MuiButton: {
      contained: {
        paddingTop: 15,
        paddingBottom: 15,
      },
      containedPrimary: {
        color: theme.colors.white.main,
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: color(theme.colors.blue.main)
          .alpha(0.9)
          .hsl()
          .string(),
      },
    },
    MuiInput: {
      root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        padding: [[0, 10]],
        marginBottom: 10,
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
    },
  };
}

/**
 * No Scroller Tabs Overrides props interface
 */
export interface NoScrollerTabsOverridesProps {
  height: number;
  indicatorHeight: number;
}

/**
 * Hides horizontal scroll bar from Tabs component
 * by pushing the bar under the visible edge
 */
export function NoScrollerTabsOverrides(props: NoScrollerTabsOverridesProps): StyleRules {
  const { height, indicatorHeight } = props;

  return {
    root: {
      height,
      overflowY: 'hidden',
    },
    flexContainer: {
      height,
    },
    scroller: {
      height: height + 10 * indicatorHeight,
    },
    indicator: {
      top: height - indicatorHeight,
      height: indicatorHeight,
    },
  };
}
