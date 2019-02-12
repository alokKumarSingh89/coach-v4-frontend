import { Theme, ThemeOptions } from '../../node_modules/@material-ui/core/styles/createMuiTheme';

import { Overrides } from '@material-ui/core/styles/overrides';
import { OverridesProps } from '@assets/theme/jss';
import { StyleRules } from '@material-ui/core/styles';
import _ from 'lodash';

/**
 * Default MUI Theme overrides
 * @see https://material-ui.com/customization/overrides/#5-global-theme-variation
 */
export default (theme: ThemeOptions): Overrides => ({
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
});

/**
 * Creates prefixed style rules
 * ---
 * Updates all rules object keys with given prefix
 * Example: 'root' became 'prefixRoot'
 * @param prefix
 * @param rules
 */
export function createOverrides(prefix: string, rules: StyleRules): StyleRules {
  // fill overrides with prefixed keys & input values
  return _.mapKeys(rules, (value, key) => prefix + _.upperFirst(key));
}

/**
 * Creates overrides HOC
 * ---
 * Merges predefined styles with specific styles.
 * This keeps your styles DRY as you can create a bunch of predefined styles
 * and use them on component in different places/situations.
 *
 * Work with MUI overriding with classes
 * @see https://material-ui.com/customization/overrides/#overriding-with-classes
 *
 * @param props
 */
export function useOverrides(props: OverridesProps) {
  // overrides cache
  let overrides: StyleRules = {};

  // loops all props and creates overrides
  for (let key in props) {
    overrides = _.assign(overrides, createOverrides(key, props[key]));
  }

  // retrieve HOC function
  return (rules: StyleRules): StyleRules => _.defaultsDeep(rules, overrides);
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
      height: height,
      overflowY: 'hidden',
    },
    flexContainer: {
      height: height,
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
