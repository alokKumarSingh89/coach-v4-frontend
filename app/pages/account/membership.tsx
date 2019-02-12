import React from 'react';

import { LayoutProps, createLayout } from 'containers';
import { AccountRoutes } from 'lib/routes';
import { PageAccountStyles, PageAccountStyleRules } from 'theme';
import { WithStyles, Paper, Button } from '@material-ui/core';
import { Coloring } from 'lib/types';
import { Label } from 'components';

/**
 * Page props
 */
const layoutProps: LayoutProps = {
  meta: {
    section: 'Account',
    title: AccountRoutes.membership.label,
    icon: AccountRoutes.membership.Icon,
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
class Membership extends React.Component<WithStyles<PageAccountStyleRules>> {
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
          <Label headline={'Current setting'} description={'Choose your degree, price and amount of rewards'} />
          <Button variant="contained" color="primary" fullWidth size="medium">
            Confirm
          </Button>
        </Paper>

        {/* INFO SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Label headline={'Why should I pay?'} description={'Whole system is free to use but with advantage you are not limited anymore.'} />
          <Button variant="contained" color="primary" fullWidth size="medium">
            Show more info
          </Button>
        </Paper>
      </div>
    );
  }
}

const withLayout = createLayout(layoutProps);
export default withLayout(Membership);
