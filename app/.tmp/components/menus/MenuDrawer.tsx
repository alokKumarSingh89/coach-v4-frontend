import { AboutRoutes, default as MainRoutes } from '@lib/routes';
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
import { MenuDrawerProps, MenuDrawerSection } from '@assets/declarations';
import React, { Fragment } from 'react';
import { menuDrawerStyles, useTheme } from '@assets/theme';

import { KeyboardArrowRight as ArrowRightIcon } from '@material-ui/icons';
import Link from 'next/link';
import { MenuDrawerStyles } from '@assets/theme/jss/components/menus/menuDrawerStyles';
import { Typography } from '@material-ui/core';

/**
 * Component specific styles
 */
const withTheme = useTheme(menuDrawerStyles);

/**
 * Menu sections
 */
const sections: Array<MenuDrawerSection> = [
  {
    ...MainRoutes.wisdom,
    layout: 'jumbo',
    index: 'wisdom',
    description: 'Learn all about health, money and relations',
  },
  {
    ...MainRoutes.tools,
    layout: 'jumbo',
    index: 'tools',
    description: 'Track your visions, goals or daily activities',
  },
  {
    ...MainRoutes.community,
    layout: 'jumbo',
    index: 'community',
    description: 'Connect with others and solve your life obstacles',
    divider: true,
  },
  {
    ...MainRoutes.home,
    layout: 'basic',
    index: 'home',
  },
  {
    ...MainRoutes.tribute,
    layout: 'basic',
    index: 'tribute',
  },
  {
    ...AboutRoutes.cooperation,
    layout: 'basic',
    index: 'cooperation',
    divider: true,
  },
  {
    ...AboutRoutes.about,
    layout: 'basic',
    index: 'about',
  },
  {
    ...AboutRoutes.contact,
    layout: 'basic',
    index: 'contact',
  },
  {
    ...AboutRoutes.faq,
    layout: 'basic',
    index: 'faq',
    divider: true,
  },
  {
    ...MainRoutes.account,
    layout: 'basic',
    index: 'account',
  },
];

/**
 * MenuDrawer component
 */
class MenuDrawer extends React.Component<MenuDrawerProps & WithStyles<MenuDrawerStyles>> {
  /**
   * Renders item icon
   */
  renderItemIcon(Icon) {
    return <Icon />;
  }
  /**
   * Render menu items
   * @param sections
   */
  renderItems(sections: Array<MenuDrawerSection>) {
    const { classes } = this.props;

    return sections.map((section: MenuDrawerSection, index) => (
      <Fragment key={index}>
        <ListItem
          className={classes.listItem}
          data-layout={section.layout}
          data-index={section.index}
        >
          <Link href={section.href} key={index} passHref>
            <a className={classes.listItemLink}>
              <ListItemIcon className={classes.listItemIcon}>
                {this.renderItemIcon(section.icon)}
              </ListItemIcon>
              <ListItemText
                classes={{
                  root: classes.listItemText,
                  primary: classes.listItemTextPrimary,
                  secondary: classes.listItemTextSecondary,
                }}
                primary={section.label}
                secondary={section.description || false}
              />
              <ListItemSecondaryAction className={classes.listActionSecondary}>
                <ArrowRightIcon />
              </ListItemSecondaryAction>
            </a>
          </Link>
        </ListItem>
        {section.divider ? (
          <Divider component="li" light className={classes.listItemDivider} />
        ) : (
          ''
        )}
      </Fragment>
    ));
  }

  /**
   * Render method
   */
  render() {
    const { toggleDrawer, isOpen, classes, anchor } = this.props;

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
        <List className={classes.list}>{this.renderItems(sections)}</List>
      </Drawer>
    );
  }
}

export default withTheme(MenuDrawer);
