import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  WithStyles,
  Divider,
  Paper,
} from '@material-ui/core';

import { AddRounded as AddIcon } from '@material-ui/icons';

import Link from 'next/link';
import { Fragment } from 'react';
import {
  createTheme,
  MenuActionsStyles,
  MenuActionsStyleRules,
  MenuActionsSectionStyles,
  MenuActionsSectionStyleRules,
} from 'theme';
import { RouteConfig } from 'lib/routes';

/**
 * Main Component props interface
 */
interface MenuActionsProps {
  onSectionClick: () => void;
  sections: Array<MenuActionsSectionProps>;
}

/**
 * Single menu section interface
 */
interface MenuActionsSectionProps extends RouteConfig {
  onSectionClick?: () => void;
  index: string;
}

/**
 * Single menu section component
 */
const MenuActionsSection: React.SFC<
MenuActionsSectionProps & WithStyles<MenuActionsSectionStyleRules>
> = (props) => {
  const {
    classes, index, href, label, onSectionClick, Icon,
  } = props;

  return (
    <Fragment>
      <ListItem onClick={onSectionClick} className={classes.root} data-index={index}>
        <Link href={href} passHref>
          <a className={classes.link}>
            <ListItemText
              classes={{
                root: classes.text,
                primary: classes.textPrimary,
                secondary: classes.textSecondary,
              }}
              primary={label}
            />
            <ListItemSecondaryAction className={classes.actionSecondary}>
              <AddIcon />
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
const MenuActions: React.SFC<MenuActionsProps & WithStyles<MenuActionsStyleRules>> = (props) => {
  const { classes, sections, onSectionClick } = props;
  const withSectionTheme = createTheme(MenuActionsSectionStyles);

  return (
    <Paper className={classes.paper}>
      <List className={classes.list}>
        {sections.map((section: MenuActionsSectionProps) => {
          const SectionComponent = withSectionTheme(MenuActionsSection);
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
const withTheme = createTheme(MenuActionsStyles);
const Component = withTheme(MenuActions);

export {
  Component as MenuActions, MenuActionsProps, MenuActionsSection, MenuActionsSectionProps,
};
