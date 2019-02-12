import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { FontStyle } from '@material-ui/core/styles/createTypography';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { ThemeOverrides } from './Overrides';
import {
  Colors, Gradients, ThemeColors, ThemeGradients, ThemeGradientGenerator,
} from './Palette';

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
    colors: ThemeColors;
    gradients: ThemeGradientGenerator;
    aspects: ThemeAspects;
  }

  // extended theme options
  interface ThemeOptions {
    colors?: ThemeColors;
    gradients?: ThemeGradientGenerator;
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
      light: Colors.blue.light,
      main: Colors.blue.main,
      dark: Colors.blue.dark,
    },
    secondary: {
      light: Colors.white.light,
      main: Colors.white.main,
      dark: Colors.white.dark,
    },
    background: {
      default: Colors.grey.light,
      paper: Colors.white.main,
    },
    text: {
      primary: Colors.black.main,
      secondary: Colors.blue.main,
      hint: Colors.grey.light,
      disabled: Colors.grey.light,
    },
    error: {
      light: Colors.red.light,
      main: Colors.red.main,
      dark: Colors.red.dark,
    },
    common: {
      black: Colors.black.main,
      white: Colors.white.main,
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
   * 2rem       = 32px
   * ---
   * @see http://www.standardista.com/px-to-rem-conversion-if-root-font-size-is-16px/
   */
  typography: {
    ...fontWeights,
    fontSize: 16,
    fontFamily: 'Nunito, Helvetica, Arial, sans-serif',
    display4: {
      fontSize: '1.5rem', // 24px
      fontWeight: fontWeights.fontWeightHeavy,
    },
    display3: {
      fontSize: '1.125rem', // 18px
      fontWeight: fontWeights.fontWeightHeavy,
    },
    display2: {
      fontSize: '1rem', // 16px
      fontWeight: fontWeights.fontWeightHeavy,
    },
    display1: {
      fontSize: '0.875rem', // 14px
      fontWeight: fontWeights.fontWeightHeavy,
    },
    headline: {
      fontSize: '1rem', // 16px
      fontWeight: fontWeights.fontWeightHeavy,
      textTransform: 'uppercase',
    },
    title: {
      fontSize: '1.125rem', // 18px
      fontWeight: fontWeights.fontWeightHeavy,
    },
    subheading: {
      fontSize: '1rem', // 16px
      fontWeight: fontWeights.fontWeightRegular,
    },
    body1: {
      fontSize: '1rem', // 16px
      fontWeight: fontWeights.fontWeightLight,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: fontWeights.fontWeightMedium,
    },
    caption: {
      fontSize: '0.625rem', // 10px
      fontWeight: fontWeights.fontWeightMedium,
    },
    button: {
      fontSize: '1rem', // 16px
      fontWeight: fontWeights.fontWeightMedium,
      textTransform: 'uppercase',
    },
  },
  // Theme Colors definition
  colors: Colors,
  // Theme Gradients definition
  gradients: Gradients,
};

// Global theme overrides
themeOptions.overrides = ThemeOverrides(themeOptions);

/**
 * Exports
 */
export default themeOptions;
