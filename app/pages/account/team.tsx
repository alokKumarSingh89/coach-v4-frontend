import React from 'react';

import { LayoutProps, createLayout } from 'containers';
import { AccountRoutes } from 'lib/routes';
import { PageAccountStyles, PageAccountStyleRules } from 'theme';
import { WithStyles, Paper, Button } from '@material-ui/core';
import { Label } from 'components';
import { Coloring } from 'lib/types';

/**
 * Page props
 */
const layoutProps: LayoutProps = {
  meta: {
    section: 'Account',
    title: AccountRoutes.team.label,
    icon: AccountRoutes.team.Icon,
  },
  theme: PageAccountStyles,
  header: {
    visible: true,
    coloring: Coloring.Blue,
  },
  breadcrumbs: {
    visible: true,
    coloring: Coloring.BlueDark,
  },
};

/**
 * Page class declaration
 * @description contains application timeline
 */
class Team extends React.Component<WithStyles<PageAccountStyleRules>> {
  /**
   * Render method
   */
  render() {
    // load style classes
    const { classes } = this.props;
    /**
     * Render method
     */
    return (
      <div className={classes.root}>
        {/* MAIN SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <div className={classes.content}>
            <Label
              headline="Your ancestor"
              description="The member you can contact with any question about YeahCoach"
            />
            <Button variant="contained" color="primary" fullWidth size="medium">
              Send message
            </Button>
          </div>
        </Paper>

        {/* MEMBERS SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <div className={classes.content}>
            <Label
              headline="Members"
              description="Users you helped to find YeahCoach since you have joined"
            />
            <Button variant="contained" color="primary" fullWidth size="medium">
              Show details
            </Button>
          </div>
        </Paper>

        {/* CLOSEST MEMBERS SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <div className={classes.content}>
            <Label
              headline="Closest members"
              description="Users you should focus on to help YeahCoach vision to expand"
            />
          </div>
        </Paper>
      </div>
    );
  }
}

const withLayout = createLayout(layoutProps);
export default withLayout(Team);
