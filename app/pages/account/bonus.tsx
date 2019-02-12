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
    title: AccountRoutes.bonus.label,
    icon: AccountRoutes.bonus.Icon,
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
class Bonus extends React.Component<WithStyles<PageAccountStyleRules>> {
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
          <Label headline={'Private news'} description={'Road reports available only for memebers with bonus'} />
          <Button variant="contained" color="primary" fullWidth size="medium">
            Show older
          </Button>
        </Paper>

        {/* OVERVIEW SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Label headline={'Overview'} description={'Bonus you bought among world countries'} />
          <Button variant="contained" color="primary" fullWidth size="medium">
            Buy bonus
          </Button>
        </Paper>

        {/* INFO SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Label headline={'How does Bonus work?'} description={'Members who identify themselfs with the vision of yeahcoach wants more then basic membership.'} />
          <Button variant="contained" color="primary" fullWidth size="medium">
            Show more info
          </Button>
        </Paper>
      </div>
    );
  }
}

const withLayout = createLayout(layoutProps);
export default withLayout(Bonus);
