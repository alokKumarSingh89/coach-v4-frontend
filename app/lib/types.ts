/**
 * Directions
 */
export enum Direction {
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Bottom = 'bottom',
}
export enum AxisDirection {
  X,
  Y,
}

/**
 * Layout
 */
export enum ViewLayout {
  Row = 'row',
  Grid = 'grid',
}

/**
 * Coloring types
 */
export enum Coloring {
  Blue = 'blue',
  Purple = 'purple',
  Pink = 'pink',
  Green = 'green',
  Orange = 'orange',
  Black = 'black',
  // dark coloring
  BlueDark = 'blue-dark',
  PurpleDark = 'purple-dark',
  PinkDark = 'pink-dark',
  GreenDark = 'green-dark',
  OrangeDark = 'orange-dark',
  BlackDark = 'black-dark',
  // others
  Transparent = 'transparent',
}

/**
 * Media types
 */
export type imageThumbs < Version extends string = string > = Record<Version, string>;

/**
 * Exports
 */
export { ModelType } from 'lib/models';
