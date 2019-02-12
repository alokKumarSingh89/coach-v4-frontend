import { StyleRules } from '@material-ui/core/styles';
import _ from 'lodash';

/**
 * Overrides props interface
 */
export type OverridesProps<ClassKey extends string = string> = Record<ClassKey, StyleRules>;

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
