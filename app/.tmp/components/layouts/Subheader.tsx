import {
  AccountCircle as AccountIcon,
  Notifications as NotificationIcon,
} from '@material-ui/icons';
import {
  AppBar,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
  WithStyles,
} from '@material-ui/core';
import { subheaderStyles, useTheme } from '@assets/theme';

import React from 'react';
import { SubheaderProps } from '@assets/declarations';
import { SubheaderStyles } from '@assets/theme/jss/layouts/subheaderStyles';
import { SvgIcon } from 'material-ui';

/**
 * Components specific theme styles
 */
const withTheme = useTheme(subheaderStyles);

/**
 * Header component contains top bars
 * ---
 * 1. Handles drawer menu
 * 2. Handles avatar menu
 * 3. Handles notification menu
 */
class Subheader extends React.Component<SubheaderProps & WithStyles<SubheaderStyles>> {
  /**
   * Renders icons
   */
  renderTag(Icon) {
    const { classes } = this.props;
    return (
      <div className={classes.labelTag}>
        <Icon className={classes.labelTagIcon} />
      </div>
    );
  }
  /**
   * Render HTML
   */
  render() {
    // destructed variables
    const { classes, label, icon = null } = this.props;

    return (
      <Paper elevation={0} square className={classes.root}>
        <div className={classes.label}>
          {this.renderTag(icon)}
          <Typography component="div" className={classes.labelText}>
            {label}
          </Typography>
        </div>
      </Paper>
    );
  }
}

export default withTheme(Subheader);
