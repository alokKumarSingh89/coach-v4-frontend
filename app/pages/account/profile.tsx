import React from 'react';

import { LayoutProps, createLayout } from 'containers';
import { AccountRoutes } from 'lib/routes';
import { PageAccountStyles, PageAccountStyleRules } from 'theme';
import { WithStyles, Paper } from '@material-ui/core';
import { Coloring } from 'lib/types';
import { Label } from 'components';

/**
 * Page props
 */
const layoutProps: LayoutProps = {
  meta: {
    section: 'Account',
    title: AccountRoutes.profile.label,
    icon: AccountRoutes.profile.Icon,
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
class Profile extends React.Component<WithStyles<PageAccountStyleRules>> {
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
          <Label headline={'Jirka Svoboda'} description={'"I am not here to survive but to live."'} />
        </Paper>

        {/* MAIN SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Label headline={'About me'} description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'} />
        </Paper>
      </div>
    );
  }
}

const withLayout = createLayout(layoutProps);
export default withLayout(Profile);
