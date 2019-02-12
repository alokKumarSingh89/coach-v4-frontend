import { CSSProperties } from '@material-ui/core/styles/withStyles';

/**
 * Multi-line text ellipsis
 * @param lines
 */
export function txtEllipsis(lines): CSSProperties {
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
