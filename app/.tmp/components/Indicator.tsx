import { IndicatorProps } from '@assets/declarations';
import { IndicatorStyles } from '@assets/theme/jss/components/indicatorStyles';
import React from 'react';
import { WithStyles } from '@material-ui/core';
import { indicatorStyles } from '@assets/theme';
import { useTheme } from '@assets/theme';

/**
 * Indicator styles
 */
const withTheme = useTheme(indicatorStyles);

/**
 * Indicator component
 */
class Indicator extends React.Component<IndicatorProps & WithStyles<IndicatorStyles>> {
  /**
   * Renders indicator icon
   * @param Icon
   */
  renderIcon(Icon) {
    const { classes } = this.props;

    if (!Icon) {
      return;
    }

    return <Icon className={classes.icon} />;
  }

  /**
   * Renders indicator
   */
  render() {
    const {
      classes, message, icon, isInline,
    } = this.props;

    return (
      <div className={classes.root} data-as-inline={isInline}>
        {this.renderIcon(icon)}
        <div className={classes.message}>
          {message}
        </div>
      </div>
    );
  }
}

export default withTheme(Indicator);
