import { SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';
import { Direction } from 'lib/types';

// available theme colors
export interface ThemeColors {
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

// gradient options
export interface SimplePaletteGradientOptions {
  main: string;
  dark: string;
}

// available gradients
export interface ThemeGradients {
  blue: SimplePaletteGradientOptions;
  pink: SimplePaletteGradientOptions;
  green: SimplePaletteGradientOptions;
  orange: SimplePaletteGradientOptions;
  purple: SimplePaletteGradientOptions;
  black: SimplePaletteGradientOptions;
  rainbow: SimplePaletteGradientOptions;
}

export type ThemeGradientGenerator = (direction?: Direction) => ThemeGradients;

/**
 * Custom palette colors
 */
export const Colors: ThemeColors = {
  red: {
    light: '#f7b1a4',
    main: '#f06449',
    dark: '#773124',
  },
  green: {
    light: '#ace6c7',
    main: '#59cd90',
    dark: '#2c6647',
  },
  blue: {
    light: '#97cdf6',
    main: '#309bed',
    dark: '#174d76',
  },
  pink: {
    light: '#f7a3b7',
    main: '#ef476f',
    dark: '#772337',
  },
  purple: {
    light: '#c5c3ff',
    main: '#8c88ff',
    dark: '#9794ff',
  },
  yellow: {
    light: '#faf2b1',
    main: '#f5e663',
    dark: '#7a7231',
  },
  orange: {
    light: '#fad291',
    main: '#f5a623',
    dark: '#7a5211',
  },
  grey: {
    light: '#f6f6f6',
    main: '#767676',
    dark: '#d5d5d5',
  },
  black: {
    light: '#9a9fa5',
    main: '#353f4c',
    dark: '#1a1f25',
  },
  white: {
    light: '#ffffff',
    main: '#ffffff',
    dark: '#f1f1f1',
  },
};

/**
 * Custom palette gradients
 */
export const Gradients: ThemeGradientGenerator = (direction = Direction.Right) => ({
  blue: {
    main: `linear-gradient(to ${direction}, ${Colors.blue.main}, #5ecbf7)`,
    dark: `linear-gradient(to ${direction}, #2b8bd4, #56bfec)`,
  },
  pink: {
    main: `linear-gradient(to ${direction}, ${Colors.pink.main}, #f87da8)`,
    dark: `linear-gradient(to ${direction}, #d63f63, #ed739c)`,
  },
  green: {
    main: `linear-gradient(to ${direction}, ${Colors.green.main}, #92e8c3)`,
    dark: `linear-gradient(to ${direction}, #4fb881, #87ddb7)`,
  },
  orange: {
    main: `linear-gradient(to ${direction}, ${Colors.orange.main}, #fbd249)`,
    dark: `linear-gradient(to ${direction}, #dc951f, #f0c742)`,
  },
  purple: {
    main: `linear-gradient(to ${direction}, ${Colors.purple.main}, #c0bdff)`,
    dark: `linear-gradient(to ${direction}, #7d7ae5, #b4b2f4)`,
  },
  black: {
    main: `linear-gradient(to ${direction}, ${Colors.black.main}, #657383)`,
    dark: `linear-gradient(to ${direction}, #2F3844, #5C6979)`,
  },
  rainbow: {
    main: `conic-gradient(
      ${Colors.blue.main} 10%, 
      ${Colors.purple.main} 25%, 
      ${Colors.pink.main} 45%, 
      ${Colors.orange.main} 70%, 
      ${Colors.green.main} 85%,
      ${Colors.blue.main} 100% 
    )`,
    dark: `conic-gradient(
      ${Colors.blue.main} 10%, 
      ${Colors.purple.main} 25%, 
      ${Colors.pink.main} 45%, 
      ${Colors.orange.main} 70%, 
      ${Colors.green.main} 85%,
      ${Colors.blue.main} 100%
    )`,
  },
});
