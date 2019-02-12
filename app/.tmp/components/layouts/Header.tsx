import {
  AccountCircleRounded as AccountIcon,
  NotificationsRounded as NotificationIcon,
  MenuRounded as MenuIcon
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
import { HeaderProps, HeaderState } from '@assets/declarations';
import { headerStyles, useTheme } from '@assets/theme';

import { HeaderStyles } from '@assets/theme/jss/layouts/headerStyles';
import React from 'react';

/**
 * Components specific theme styles
 */
const withTheme = useTheme(headerStyles);

/**
 * Header component inline styles
 */
const inlineStyles = {
  label: {
    fontWeight: 500,
    display: 'inline',
    fontSize: 18,
  },
};

/**
 * Header component contains top bars
 * ---
 * 1. Handles drawer menu
 * 2. Handles avatar menu
 * 3. Handles notification menu
 */
class Header extends React.Component<HeaderProps & WithStyles<HeaderStyles>, HeaderState> {
  /**
   * Render HTML
   */
  render() {
    // destructed variables
    const { classes, label, toggleDrawer, toggleAvatar } = this.props;

    return (
      <div className={classes.root}>
        <Toolbar disableGutters>
          {/* LEFT SIDE OF TOOLBAR */}
          <Grid container direction="row" alignItems="center" justify="flex-start" wrap="nowrap">
            <IconButton color="inherit" aria-label="Menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography
              //variant="title"
              color="inherit"
              noWrap
              style={inlineStyles.label}
            >
              {label}
            </Typography>
          </Grid>

          {/* RIGHT SIDE OF TOOLBAR */}
          <Grid container direction="row" alignItems="center" justify="flex-end" wrap="nowrap">
            <IconButton aria-label="Notifications">
              <NotificationIcon className={classes.appBarIcon} />
            </IconButton>
            <IconButton className={classes.appBarIcon} aria-label="Account" onClick={toggleAvatar}>
              <AccountIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </div>
    );
  }
}

export default withTheme(Header);
