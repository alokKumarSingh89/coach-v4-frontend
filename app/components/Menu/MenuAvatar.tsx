import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  WithStyles,
  Divider,
  Paper,
} from '@material-ui/core';

import Link from 'next/link';
import { Fragment } from 'react';
import {
  MenuAvatarStyleRules,
  MenuAvatarStyles,
  MenuAvatarSectionStyleRules,
  createTheme,
  MenuAvatarSectionStyles,
} from 'theme';
import { RouteConfig } from 'lib/routes';

/**
 * Main Component props interface
 */
interface MenuAvatarProps {
  onSectionClick: () => void;
  sections: Array<MenuAvatarSectionProps>;
}

/**
 * Single menu section interface
 */
interface MenuAvatarSectionProps extends RouteConfig {
  onSectionClick?: () => void;
  index: string;
  status: string;
}

/**
 * Single menu section component
 */
const MenuAvatarSection: React.SFC<
MenuAvatarSectionProps & WithStyles<MenuAvatarSectionStyleRules>
> = (props) => {
  const {
    classes, index, status, href, label, onSectionClick, Icon,
  } = props;

  return (
    <Fragment>
      <ListItem onClick={onSectionClick} className={classes.root} data-index={index}>
        <Link href={href} passHref>
          <a className={classes.link}>
            <ListItemIcon className={classes.icon}>
              <Icon />
            </ListItemIcon>
            <ListItemText
              classes={{
                root: classes.text,
                primary: classes.textPrimary,
                secondary: classes.textSecondary,
              }}
              primary={label}
            />
            <ListItemSecondaryAction className={classes.actionSecondary}>
              <Typography variant="body1" className={classes.actionSecondaryText}>
                {status}
              </Typography>
            </ListItemSecondaryAction>
          </a>
        </Link>
      </ListItem>
      <Divider component="div" inset />
    </Fragment>
  );
};

/**
 * Main component implementation
 */
const MenuAvatar: React.SFC<MenuAvatarProps & WithStyles<MenuAvatarStyleRules>> = (props) => {
  const { classes, sections, onSectionClick } = props;
  const withSectionTheme = createTheme(MenuAvatarSectionStyles);

  return (
    <Paper className={classes.paper}>
      <List className={classes.list}>
        {sections.map((section: MenuAvatarSectionProps) => {
          const SectionComponent = withSectionTheme(MenuAvatarSection);
          return (
            <SectionComponent key={section.index} onSectionClick={onSectionClick} {...section} />
          );
        })}
      </List>
    </Paper>
  );
};

/**
 * Exports
 */
const withTheme = createTheme(MenuAvatarStyles);
const Component = withTheme(MenuAvatar);

export { Component as MenuAvatar, MenuAvatarProps, MenuAvatarSection, MenuAvatarSectionProps };