import { Theme, withStyles } from '@material-ui/core';

import { StyleRules } from '@material-ui/core/styles';
import _ from 'lodash';

/**
 * Shortcut for using withStyles HOC
 * with injected theme
 */
export function createTheme(styles: (theme: Theme) => StyleRules) {
  const rules = (theme: Theme) => styles(theme);
  return withStyles(rules);
}

/**
 * Creates prefixed style rules overrides
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
export function useOverrides(props) {
  // overrides cache
  let overrides: StyleRules = {};

  // loops all props and creates overrides
  for (const key in props) {
    overrides = _.assign(overrides, createOverrides(key, props[key]));
  }

  // retrieve HOC function
  return (rules: StyleRules): StyleRules => _.defaultsDeep(rules, overrides);
}

// INDEX PAGE
export { PageIndexStyles, PageIndexStyleRules } from 'theme/v1/pages/PageIndexStyles';

// ACCOUNT PAGEs
export { PageAccountStyles, PageAccountStyleRules } from 'theme/v1/pages/PageAccountStyles';

// ABOUT PAGEs
export { PageAboutStyles, PageAboutStyleRules } from 'theme/v1/pages/PageAboutStyles';

// MAIN PAGEs
export { PageWowStyles, PageWowStyleRules } from 'theme/v1/pages/main/PageWowStyles';
export { PageTosStyles, PageTosStyleRules } from 'theme/v1/pages/main/PageTosStyles';
export { PagePocStyles, PagePocStyleRules } from 'theme/v1/pages/main/PagePocStyles';

// HEADER
export {
  HeaderStyles,
  HeaderStyleRules,
  HeaderNotificationTogglerStyles,
  HeaderNotificationTogglerStyleRules,
} from 'theme/v1/components/Header/HeaderStyles';

// BREADCRUMBS
export {
  BreadcrumbsStyles,
  BreadCrumbsStyleRules,
} from 'theme/v1/components/Breadcrumbs/BreadcrumbsStyles';

// MENU AVATAR
export {
  MenuAvatarStyles,
  MenuAvatarStyleRules,
  MenuAvatarSectionStyles,
  MenuAvatarSectionStyleRules,
} from 'theme/v1/components/Menu/MenuAvatarStyles';

// MENU DRAWER
export {
  MenuDrawerStyles,
  MenuDrawerStyleRules,
  MenuDrawerSectionStyles,
} from 'theme/v1/components/Menu/MenuDrawerStyles';

// MENU ACTIONS
export {
  MenuActionsStyles,
  MenuActionsStyleRules,
  MenuActionsSectionStyles,
  MenuActionsSectionStyleRules,
} from 'theme/v1/components/Menu/MenuActionsStyles';

// SCROLLER
export {
  ScrollerStyles,
  ScrollerStyleRules,
  ScrollerIndicatorStyles,
  ScrollerIndicatorStyleRules,
} from 'theme/v1/components/Scroller/ScrollerStyles';

// ENTRY PREVIEW
export {
  PreviewStyles,
  PreviewPictogramStyles,
  PreviewStyleRules,
  PreviewPictogramStyleRules,
} from 'theme/v1/components/Preview/PreviewStyles';

// ENTRY DETAIL
export { DetailStyles, DetailStyleRules } from 'theme/v1/components/Detail/DetailStyles';
export {
  DetailHeaderStyles,
  DetailHeaderStyleRules,
} from 'theme/v1/components/Detail/DetailHeaderStyles';
export {
  DetailContentStyles,
  DetailContentStyleRules,
} from 'theme/v1/components/Detail/DetailContentStyles';

// FORM CONTROLs
export {
  FieldControlStyles,
  FieldControlStyleRules,
} from 'theme/v1/components/Form/FieldControlStyles';

export {
  InputControlStyles,
  InputControlStyleRules,
} from 'theme/v1/components/Form/InputControlStyles';

export {
  SelectControlStyles,
  SelectControlStyleRules,
} from 'theme/v1/components/Form/SelectControlStyles';

// BUTTONs
export {
  ButtonCloseStyles,
  ButtonCloseStyleRules,
} from 'theme/v1/components/Button/ButtonCloseStyles';
export { ButtonFabStyles, ButtonFabStyleRules } from 'theme/v1/components/Button/ButtonFabStyles';

// LABELs
export { LabelStyles, LabelStyleRules } from 'theme/v1/components/Label/LabelStyles';
