import { Theme, createMuiTheme, withStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { FontStyle } from '../../node_modules/@material-ui/core/styles/createTypography';
import { SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';
import { StyleRules } from '@material-ui/core/styles';
import { ThemeOptions } from '../../node_modules/@material-ui/core/styles/createMuiTheme';
import colors from './colors';
import { default as getOverrides } from './overrides';

// available theme colors
interface ThemeColors {
  red: SimplePaletteColorOptions;
  green: SimplePaletteColorOptions;
  blue: SimplePaletteColorOptions;
  pink: SimplePaletteColorOptions;
  purple: SimplePaletteColorOptions;
  yellow: SimplePaletteColorOptions;
  orange: SimplePaletteColorOptions;
  grey: SimplePaletteColorOptions;
  black: SimplePaletteColorOptions;
  white: SimplePaletteColorOptions;
}

// available theme aspect
interface ThemeAspects {
  normal: {
    percentage: string;
    ratio: Array<number>;
  };
  wide: {
    percentage: string;
    ratio: Array<number>;
  };
}

// available theme header
interface ThemeHeader {
  background: CSSProperties['background'];
}

/**
 * Declares Material UI Typography augmented interfaces
 */
declare module '@material-ui/core/styles/createTypography' {
  interface FontStyle {
    fontWeightHeavy: CSSProperties['fontWeight'];
  }
}

/**
 * Declares Material UI Theme augmented interfaces
 */
declare module '@material-ui/core/styles/createMuiTheme' {
  // extended theme
  interface Theme {
    header: ThemeHeader;
    colors: ThemeColors;
    aspects: ThemeAspects;
  }

  // extended theme options
  interface ThemeOptions {
    header?: ThemeHeader;
    colors?: ThemeColors;
    aspects?: ThemeAspects;
  }
}

/**
 * Custom font weights
 */
const fontWeights: Partial<FontStyle> = {
  fontWeightRegular: 400,
  fontWeightLight: 200,
  fontWeightMedium: 600,
  fontWeightHeavy: 700,
};

/**
 * Custom theme options
 */
const themeOptions: ThemeOptions = {
  // Theme aspects ratios
  aspects: {
    normal: {
      percentage: '75%', // 4:3
      ratio: [4, 3],
    },
    wide: {
      percentage: '56.25%', // 16:9
      ratio: [16, 9],
    },
  },
  // MUI Palette definition
  palette: {
    primary: {
      light: colors.blue.light,
      main: colors.blue.main,
      dark: colors.blue.dark,
    },
    secondary: {
      light: colors.white.light,
      main: colors.white.main,
      dark: colors.white.dark,
    },
    background: {
      default: colors.grey.light,
      paper: colors.white.main,
    },
    text: {
      primary: colors.black.main,
      secondary: colors.blue.main,
      hint: colors.grey.light,
      disabled: colors.grey.light,
    },
    error: {
      light: colors.red.light,
      main: colors.red.main,
      dark: colors.red.dark,
    },
    common: {
      black: colors.black.main,
      white: colors.white.main,
    },
  },
  shape: {
    borderRadius: 4,
  },
  /**
   * Typography
   * ---
   * Font relative sizes when default size is 16px:
   * 0.625rem   = 10px
   * 0.750rem   = 12px
   * 0.875rem   = 14px
   * 1rem       = 16px
   * 1.0625rem  = 17px
   * 1.125rem   = 18px
   * 1.5rem     = 24px
   * ---
   * @see http://www.standardista.com/px-to-rem-conversion-if-root-font-size-is-16px/
   */
  typography: {
    ...fontWeights,
    fontSize: 16,
    fontFamily: 'Nunito, Helvetica, Arial, sans-serif',
    display4: {
      fontSize: '1.5rem',
      fontWeight: fontWeights.fontWeightHeavy,
    },
    display3: {
      fontSize: '1.125rem',
      fontWeight: fontWeights.fontWeightHeavy,
    },
    display2: {
      fontSize: '1rem',
      fontWeight: fontWeights.fontWeightHeavy,
    },
    display1: {
      fontSize: '0.875rem',
      fontWeight: fontWeights.fontWeightHeavy,
    },
    headline: {
      fontSize: '1rem',
      fontWeight: fontWeights.fontWeightHeavy,
      textTransform: 'uppercase',
    },
    title: {
      fontSize: '1.125rem',
      fontWeight: fontWeights.fontWeightHeavy,
    },
    subheading: {
      fontSize: '1rem',
      fontWeight: fontWeights.fontWeightRegular,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: fontWeights.fontWeightLight,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: fontWeights.fontWeightMedium,
    },
    caption: {
      fontSize: '0.625rem',
      fontWeight: fontWeights.fontWeightMedium,
    },
    button: {
      fontSize: '1rem',
      fontWeight: fontWeights.fontWeightMedium,
      textTransform: 'uppercase',
    },
  },
  // Theme colors definition
  colors: colors,
  // Header component theme definitions
  header: {
    background: colors.black.main,
  },
};

// Global theme overrides
themeOptions.overrides = getOverrides(themeOptions);

/**
 * Retrieves Mui theme based
 * on augmented theme options
 */
export function getTheme() {
  return createMuiTheme(themeOptions);
}

/**
 * Shortcut for using withStyles HOC
 * with injected theme
 */
export function useTheme(styles: (theme: Theme) => StyleRules) {
  const rules = (theme: Theme) => styles(theme);
  return withStyles(rules);
}

/**
 * Styles exports
 */
export { default as headerStyles } from './jss/layouts/headerStyles';
export { default as subheaderStyles } from './jss/layouts/subheaderStyles';
// menus
export { default as menuDrawerStyles } from './jss/components/menus/menuDrawerStyles';
export { default as menuAvatarStyles } from './jss/components/menus/menuAvatarStyles';
// pages
export { default as pageIndexStyles } from './jss/pages/pageIndexStyles';
// entries
export {default as entryPreviewStyles} from './jss/components/entries/entryPreviewStyles';
export {default as entryDialogStyles} from './jss/components/entries/entryDialogStyles';
// others
export { default as filterStyles } from './jss/components/filterStyles';
export { default as indicatorStyles } from './jss/components/indicatorStyles';
/**
 * Colors export
 */
export { default as colors } from './colors';
