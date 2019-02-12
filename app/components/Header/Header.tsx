import {
  AccountCircleRounded as AccountIcon,
  NotificationsRounded as NotificationIcon,
  MenuRounded as MenuIcon,
  SearchRounded as SearchIcon,
} from '@material-ui/icons';

import {
  AppBar,
  WithStyles,
  Grid,
  IconButton,
  Typography,
  Paper,
  List,
  ListItem,
} from '@material-ui/core';
import {
  HeaderStyleRules,
  createTheme,
  HeaderStyles,
  HeaderNotificationTogglerStyleRules,
  HeaderNotificationTogglerStyles,
} from 'theme';
import {
  NotificationPopover,
  NotificationPopoverContentProps,
  NotificationPopoverTogglerProps,
} from 'containers';
import { Badger } from 'components';
import { Coloring } from 'lib/types';

/**
 * Header notification toggler
 */
const HeaderNotificationToggler: React.SFC<
NotificationPopoverTogglerProps & WithStyles<HeaderNotificationTogglerStyleRules>
> = props => (
  <IconButton className={props.classes.root} aria-label="Notifications" onClick={props.onClick}>
    <Badger
      classes={{ root: props.classes.badgeRoot, badge: props.classes.badge }}
      badgeContent={props.unreadCount}
      data-visibility={props.unreadCount ? 'visible' : 'hidden'}
    >
      <NotificationIcon className={props.classes.icon} />
    </Badger>
  </IconButton>
);

/**
 * Header notification content
 */
const HeaderNotificationContent: React.SFC<NotificationPopoverContentProps> = (props) => {
  const { notifications } = props;
  return (
    <Paper>
      <List>
        {notifications.map((notification, index) => (
          <ListItem key={index}>{notification.text}</ListItem>
        ))}
      </List>
    </Paper>
  );
};

/**
 * Component props
 */
interface HeaderProps {
  toggleDrawer?: () => void;
  toggleAvatar?: () => void;
  toggleSearch?: () => void;
  label: string;
  coloring: Coloring;
}

/**
 * Component implementation
 */
const Header: React.SFC<HeaderProps & WithStyles<HeaderStyleRules>> = (props) => {
  const {
    classes,
    label,
    toggleAvatar,
    toggleDrawer,
    toggleSearch,
    children,
    coloring = Coloring.Transparent,
  } = props;

  const withTogglerTheme = createTheme(HeaderNotificationTogglerStyles);
  const NotificationTogglerComponent = withTogglerTheme(HeaderNotificationToggler);

  return (
    <AppBar
      className={classes.bar}
      color="inherit"
      position="static"
      elevation={0}
      data-coloring={coloring}
      data-coloring-mode="gradient"
    >
      <div className={classes.root}>
        <Grid container direction="row" alignItems="center" justify="space-between">
          {/* LEFT BAR */}
          <Grid item xs={6} md className={classes.leftContainer}>
            <IconButton color="inherit" aria-label="Menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography color="inherit" variant="display2" component="div" noWrap>
              {label}
            </Typography>
          </Grid>

          {/* CENTER BAR */}
          <Grid item xs={12} md={6} className={classes.centerContainer}>
            {children}
          </Grid>

          {/* RIGHT BAR */}
          <Grid item xs={6} md className={classes.rightContainer}>
            <IconButton aria-label="Search" onClick={toggleSearch}>
              <SearchIcon className={classes.iconSearch} />
            </IconButton>

            <NotificationPopover
              TogglerComponent={NotificationTogglerComponent}
              ContentComponent={HeaderNotificationContent}
            />

            <IconButton aria-label="Account" onClick={toggleAvatar}>
              <AccountIcon className={classes.iconAccount} />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </AppBar>
  );
};

/**
 * Exports<
 */
const withTheme = createTheme(HeaderStyles);
const Component = withTheme(Header);

export { Component as Header, HeaderProps };
