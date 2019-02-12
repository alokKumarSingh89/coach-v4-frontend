import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  WithStyles,
} from '@material-ui/core';
import React, { Fragment } from 'react';

import { KeyboardArrowRightRounded as ArrowRightIcon } from '@material-ui/icons';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { MenuDrawerStyleRules, createTheme, MenuDrawerStyles, MenuDrawerSectionStyles } from 'theme';
import { RouteConfig } from 'lib/routes';
import { DrawerProps } from '@material-ui/core/Drawer';

/**
 * Menu drawer props interfaces
 */
interface MenuDrawerProps {
  toggleDrawer: () => void;
  sections: Array<MenuDrawerSectionProps>;
  anchor: DrawerProps['anchor'];
  isOpen: boolean;
}

/**
 * Menu drawer section props interface
 */
interface MenuDrawerSectionProps extends RouteConfig {
  index: string;
  layout: 'jumbo' | 'basic';
  description?: string;
  divider?: boolean;
}

/**
 * Menu drawer section component
 */
const MenuDrawerSection: React.SFC<MenuDrawerSectionProps & WithStyles<MenuDrawerStyleRules>> = props => {
  const {
    classes,
    index,
    href,
    label,
    Icon,
    layout,
    description,
    divider,
  } = props;

  return (
    <Fragment>
      <ListItem className={classes.root} data-layout={layout} data-index={index}>
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
              secondary={description}
            />
            <ListItemSecondaryAction className={classes.actionSecondary}>
              <ArrowRightIcon />
            </ListItemSecondaryAction>
          </a>
        </Link>
      </ListItem>
      {divider ? (
        <Divider component="li" className={classes.divider} light />
      ) : (
        ''
      )}
    </Fragment>
  );
};

MenuDrawerSection.defaultProps = {
  layout : 'jumbo',
  description : null,
  divider : false,
}

/**
 * Menu drawer component
 */
const MenuDrawer: React.SFC<MenuDrawerProps & WithStyles<MenuDrawerStyleRules>> = props => {
  const {
    toggleDrawer, isOpen, classes, anchor, sections,
  } = props;
  const withSectionTheme = createTheme(MenuDrawerSectionStyles);

  return (
    <Drawer
      classes={{
        paper: classes.paper,
      }}
      open={isOpen}
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
      onClose={toggleDrawer}
      anchor={anchor}
    >
      <Typography component="div" variant="display4" className={classes.label}>
        YeahCoach
      </Typography>
      <List className={classes.list}>
        {sections.map((section: MenuDrawerSectionProps) => {
          const SectionComponent = withSectionTheme(MenuDrawerSection);
          return <SectionComponent key={section.index} {...section} />;
        })}
      </List>
    </Drawer>
  );
};

/**
 * Exports
 */
const withTheme = createTheme(MenuDrawerStyles);
const Component = withTheme(MenuDrawer);

export { Component as MenuDrawer, MenuDrawerProps, MenuDrawerSection, MenuDrawerSectionProps };
