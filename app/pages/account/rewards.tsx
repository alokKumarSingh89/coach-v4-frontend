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
    title: AccountRoutes.rewards.label,
    icon: AccountRoutes.rewards.Icon,
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
class Rewards extends React.Component<WithStyles<PageAccountStyleRules>> {
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
          <Label headline={'Summary'} description={'All rewards you get by sharing YeahCoach vision'} />
          <Button variant="contained" color="primary" fullWidth size="medium">
            Pay out
          </Button>
        </Paper>

        {/* DETAILS SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Label headline={'Details'} description={'Explore where and why you got all your rewards'} />
          <Button variant="contained" color="primary" fullWidth size="medium">
            Show more
          </Button>
        </Paper>

        {/* CALCULATOR SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Label headline={'Calculator'} description={'See how rewards work and how much you can earn'} />
          <Button variant="contained" color="primary" fullWidth size="medium">
            How does it work?
          </Button>
        </Paper>

        {/* PAYOUT SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Label headline={'Payout history'} description={'Find your previous pay outs with invoices and details'} />
          <Button variant="contained" color="primary" fullWidth size="medium">
            Show more
          </Button>
        </Paper>
      </div>
    );
  }
}

const withLayout = createLayout(layoutProps);
export default withLayout(Rewards);

