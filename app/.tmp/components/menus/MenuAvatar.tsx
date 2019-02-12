/* eslint-disable react/no-multi-comp */
import {
  Dialog,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Slide,
  Typography,
  WithStyles,
} from '@material-ui/core';
import { MenuAvatarProps, MenuAvatarSection } from '@assets/declarations';
import React, { Fragment } from 'react';
import { menuAvatarStyles, useTheme } from '@assets/theme';

import { AccountRoutes } from '@lib/routes';
import Link from 'next/link';
import { MenuAvatarStyles } from '@assets/theme/jss/components/menus/menuAvatarStyles';

/**
 * Components specific theme styles
 */
const withTheme = useTheme(menuAvatarStyles);

/**
 * Menu sections
 */
const sections: Array<MenuAvatarSection> = [
  {
    ...AccountRoutes.profile,
    status: '30%',
    index: 'profile',
  },
  {
    ...AccountRoutes.membership,
    status: 'knight',
    index: 'membership',
  },
  {
    ...AccountRoutes.team,
    status: '1 340',
    index: 'team',
  },
  {
    ...AccountRoutes.rewards,
    status: '$ 1320',
    index: 'rewards',
  },
  {
    ...AccountRoutes.bonus,
    status: '2%',
    index: 'bonus',
  },
  {
    ...AccountRoutes.bookmarks,
    status: '325',
    index: 'bookmarks',
  },
  {
    ...AccountRoutes.messages,
    status: '4',
    index: 'messages',
  },
  {
    ...AccountRoutes.settings,
    status: null,
    index: 'settings',
  },
];

/**
 * Menu open transition
 * @param props
 */
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

/**
 * Client specific avatar menu
 * ---
 * 1. Contains link to all Account pages
 */
class MenuAvatar extends React.Component<MenuAvatarProps & WithStyles<MenuAvatarStyles>> {
  /**
   * Handler list item click
   */
  handleListItemClick = (event: any) => {
    this.props.onClose();
  };

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
  renderItems(sections: Array<MenuAvatarSection>) {
    const { classes } = this.props;

    return sections.map((section: MenuAvatarSection, index) => (
      <Fragment key={index}>
        <ListItem
          onClick={this.handleListItemClick.bind(this)}
          className={classes.listItem}
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
              />
              <ListItemSecondaryAction className={classes.listActionSecondary}>
                <Typography variant="body1" className={classes.listActionSecondaryText}>
                  {section.status}
                </Typography>
              </ListItemSecondaryAction>
            </a>
          </Link>
        </ListItem>
        <Divider inset component="li" />
      </Fragment>
    ));
  }
  /**
   * Render method
   */
  render() {
    // props destruction
    const { classes, onClose, isOpen } = this.props;

    return (
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="menu-avatar-title"
        scroll="body"
        TransitionComponent={Transition}
        BackdropProps={{
          classes: {
            root: classes.dialogBackdrop,
          },
        }}
        PaperProps={{
          classes: {
            root: classes.dialogPaper,
          },
        }}
        //fullScreen
        maxWidth="xs"
      >
        <DialogTitle id="menu-avatar-title" classes={{ root: classes.dialogTitle }}>
          Account overview
        </DialogTitle>
        <List className={classes.list}>{this.renderItems(sections)}</List>
      </Dialog>
    );
  }
}

export default withTheme(MenuAvatar);
