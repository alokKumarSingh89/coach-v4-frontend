import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';
import { BgColoring } from 'theme/v1/Mixins';

/**
 * Styles interface
 */
interface BreadCrumbsStyleRules extends StyleRules {
  root?: CSSProperties;
  label?: CSSProperties;
  labelTag?: CSSProperties;
  labelTagIcon?: CSSProperties;
  labelText?: CSSProperties;
}

/**
 * Styles HOC component
 */
const BreadcrumbsStyles = (theme: Theme) => {
  // styles definition
  const styles: BreadCrumbsStyleRules = {
    root: {
      padding: [[12, 15]],
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'transparent',
      ...BgColoring(theme),
    },
    label: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      position: 'relative',
    },
    labelText: {
      textTransform: 'uppercase',
      fontSize: theme.typography.display1.fontSize,
      fontWeight: theme.typography.display1.fontWeight,
      color: theme.colors.white.main,
    },
  };
  // create styles
  return createStyles(styles);
};

/**
 * Exports
 */
export { BreadcrumbsStyles, BreadCrumbsStyleRules };
