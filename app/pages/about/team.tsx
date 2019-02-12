import React from 'react';

import { LayoutProps, createLayout } from 'containers';
import { AboutRoutes } from 'lib/routes';
import { PageAboutStyles, PageAboutStyleRules } from 'theme';
import { WithStyles, Paper, Typography } from '@material-ui/core';
import { Coloring } from 'lib/types';
import Head from 'next/head';

/**
 * Page props
 */
const layoutProps: LayoutProps = {
  meta: {
    section: 'About',
    title: AboutRoutes.team.label,
    icon: AboutRoutes.team.Icon,
  },
  theme: PageAboutStyles,
  header: {
    visible: true,
    coloring: Coloring.Transparent,
  },
  breadcrumbs: {
    visible: false,
  },
};

/**
 * Page class declaration
 * @description contains application timeline
 */
class Vision extends React.Component<WithStyles<PageAboutStyleRules>> {
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
        <Head>
          <link rel="stylesheet" href="/static/css/pages/page.about.css" />
        </Head>

        {/* MAIN SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Typography color="secondary" variant="display4">Meet YeahCoach Team</Typography>
        </Paper>
      </div>
    );
  }
}

const withLayout = createLayout(layoutProps);
export default withLayout(Vision);
