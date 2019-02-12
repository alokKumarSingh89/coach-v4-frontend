import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { PositionProperty, FlexDirectionProperty } from 'csstype';
import { Theme } from '@material-ui/core';
import _ from 'lodash';

/**
 * Text coloring rules
 */
export function TxtColoring(theme: Theme) {
  return {
    '&[data-coloring="blue"]': {
      color: theme.colors.blue.main,
    },
    '&[data-coloring="pink"]': {
      color: theme.colors.pink.main,
    },
    '&[data-coloring="green"]': {
      color: theme.colors.green.main,
    },
    '&[data-coloring="purple"]': {
      color: theme.colors.purple.main,
    },
    '&[data-coloring="orange"]': {
      color: theme.colors.orange.main,
    },
  };
}

/**
 * Text coloring rules
 */
export function BgColoring(theme: Theme, transform: (result, value, key) => void = null) {
  const rules = {
    // stills
    '&[data-coloring="blue"][data-coloring-mode="still"]': {
      background: theme.colors.blue.main,
    },
    '&[data-coloring="pink"][data-coloring-mode="still"]': {
      background: theme.colors.pink.main,
    },
    '&[data-coloring="green"][data-coloring-mode="still"]': {
      background: theme.colors.green.main,
    },
    '&[data-coloring="purple"][data-coloring-mode="still"]': {
      background: theme.colors.purple.main,
    },
    '&[data-coloring="orange"][data-coloring-mode="still"]': {
      background: theme.colors.orange.main,
    },
    '&[data-coloring="black"][data-coloring-mode="still"]': {
      background: theme.colors.black.main,
    },
    // gradients
    '&[data-coloring="blue"][data-coloring-mode="gradient"]': {
      background: theme.gradients().blue.main,
    },
    '&[data-coloring="pink"][data-coloring-mode="gradient"]': {
      background: theme.gradients().pink.main,
    },
    '&[data-coloring="green"][data-coloring-mode="gradient"]': {
      background: theme.gradients().green.main,
    },
    '&[data-coloring="purple"][data-coloring-mode="gradient"]': {
      background: theme.gradients().purple.main,
    },
    '&[data-coloring="orange"][data-coloring-mode="gradient"]': {
      background: theme.gradients().orange.main,
    },
    '&[data-coloring="black"][data-coloring-mode="gradient"]': {
      background: theme.gradients().black.main,
    },
    // gradients dark
    '&[data-coloring="blue-dark"][data-coloring-mode="gradient"]': {
      background: theme.gradients().blue.dark,
    },
    '&[data-coloring="pink-dark"][data-coloring-mode="gradient"]': {
      background: theme.gradients().pink.dark,
    },
    '&[data-coloring="green-dark"][data-coloring-mode="gradient"]': {
      background: theme.gradients().green.dark,
    },
    '&[data-coloring="purple-dark"][data-coloring-mode="gradient"]': {
      background: theme.gradients().purple.dark,
    },
    '&[data-coloring="orange-dark"][data-coloring-mode="gradient"]': {
      background: theme.gradients().orange.dark,
    },
    '&[data-coloring="black-dark"][data-coloring-mode="gradient"]': {
      background: theme.gradients().black.dark,
    },
  };

  if (!transform) {
    return rules;
  }

  return _.transform(rules, transform, {});
}

/**
 * Multi-line text ellipsis
 * @param lines
 */
export function TxtEllipsis(lines): CSSProperties {
  return {
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: lines,
    fallbacks: {
      display: 'block',
    },
  };
}

/**
 * Covering over image
 * @param background
 * @param borderRadius
 * @param position
 */
export function Covering(background, position: PositionProperty = 'absolute'): CSSProperties {
  return {
    content: '""',
    opacity: 0.75,
    background,
    ...Stretched(position),
  };
}

/**
 * Slide shape of border radius
 */
export function SlideShape(): CSSProperties {
  return {
    // @ts-ignore
    borderRadius: [[0, 0, 0, '80%/7.5%']],
  };
}

/**
 * Makes element responsive in given aspect
 * @param aspect
 */
export function Responsive(aspect): CSSProperties {
  return {
    height: 0,
    paddingTop: aspect,
  };
}

/**
 * Makes element content flex centered
 * @param direction
 */
export function Centered(direction: FlexDirectionProperty): CSSProperties {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: direction,
  };
}

/**
 * Makes element positional stretched
 * @param position
 */
export function Stretched(position: PositionProperty = 'absolute'): CSSProperties {
  return {
    position,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  };
}
