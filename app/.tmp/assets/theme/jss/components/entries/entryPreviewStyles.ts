import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';
import { txtEllipsis } from '@assets/theme/mixins';

/**
 * Style constants
 */
const rowHeight = 90;
const mediaMargin = 3;
const typeHeight = 34;

/**
 * Styles interface
 */
export interface EntryPreviewStyles extends StyleRules {
  root?: CSSProperties;
}

/**
 * Styles HOC component
 */
export default (theme: Theme) => {
  // styles definition
  const styles: EntryPreviewStyles = {
    root: {
      display: 'flex',
      color: theme.colors.grey.dark,
      marginLeft: 'auto',
      marginRight: 'auto',
      '&[data-layout="row"]': {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: rowHeight,
        '& $media': {
          width: '40%',
          clipPath: 'ellipse(60% 150% at 40% 50%)',
          height: rowHeight - 6,
        },
        '& $content': {
          width: '60%',
          justifyContent: 'left',
          padding: [[10, 10, 10, 20]],
          '& $headline': {
            ...txtEllipsis(3),
          },
        },
        '& $type': {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: typeHeight,
          height: typeHeight,
          left: -20,
          top: '50%',
          marginTop: -typeHeight / 2,
        },
        '& $typeText': {
          display: 'none',
        },
      },
      '&[data-layout="grid"]': {
        flexDirection: 'column',
        '& $media': {
          clipPath: 'ellipse(150% 60% at 50% 40%)',
          paddingTop: theme.aspects.wide.percentage, // 16:9
        },
        '& $content': {
          justifyContent: 'center',
        },
        '& $type': {
          top: -20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: typeHeight + 1,
          paddingLeft: 10,
          paddingRight: 10,
          '& $typeIcon': {
            display: 'none',
          },
        },
      },
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      textAlign: theme.direction == 'ltr' ? 'left' : 'right',
      position: 'relative',
    },
    media: {
      height: 0,
      margin: mediaMargin,
      borderRadius: [[theme.shape.borderRadius, theme.shape.borderRadius, 0, 0]],
    },
    type: {
      display: 'flex',
      background: theme.colors.pink.main,
      color: theme.colors.white.main,
      border: [[2, 'solid', theme.colors.white.main]],
      borderRadius: 25,
      position: 'absolute',
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightMedium,
    },
    typeIcon: {
      fontSize: theme.typography.display2.fontSize,
    },
    typeText: {
      fontSize: '0.75rem',
    },
    headline: {},
  };

  // create styles
  return createStyles(styles);
};
