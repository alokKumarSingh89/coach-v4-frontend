import React from 'react';
import {
  WithStyles, Grid, Hidden, Paper, Typography,
} from '@material-ui/core';
import { PageIndexStyleRules, PageIndexStyles } from 'theme';
import { MenuAvatar } from 'components';
import { LayoutPassedDownProps, LayoutProps, createLayout } from 'containers/Layout/Layout';
import { menuAvatarSections } from 'lib/config';
import { Timeline } from 'containers';
import Head from 'next/head';

/**
 * Left panel
 */
const LeftPanel = () => (
  <Paper elevation={0} style={{ maxWidth: 280, position: 'fixed' }}>
    <Typography variant="headline">Welcome to YeahCoach!</Typography>
    <Typography variant="body1">
      You found yourself in community where good deeds happen every day! Yeah!
    </Typography>
    <Typography variant="body2">How to start?</Typography>
  </Paper>
);

/**
 * Right panel
 */
const RightPanel = () => (
  <div style={{ position: 'fixed' }}>
    <MenuAvatar onSectionClick={() => {}} sections={menuAvatarSections} />
  </div>
);

/**
 * Website home page component
 * ---
 * This is the first page user will see when visit project url.
 * @version 1.0
 * @namespace pages
 */
class Index extends React.Component<WithStyles<PageIndexStyleRules> & LayoutPassedDownProps> {
  /**
   * Render method
   */
  render() {
    const { classes, toggleMenuDrawer, toggleMenuAvatar } = this.props;

    /**
     * Render method
     */
    return (
      <div className={classes.root}>
        <Head>
          <link rel="stylesheet" href="/static/css/pages/page.index.css" />
        </Head>

        {/* PANEL LEFT */}
        <Grid direction="row" justify="center" alignItems="flex-start" container>
          <Hidden smDown>
            <Grid item md className={classes.panelLeft}>
              <LeftPanel />
            </Grid>
          </Hidden>

          {/* PANEL CENTER */}
          <Grid item md className={classes.panelCenter}>
            <Timeline />
          </Grid>

          {/* PANEL RIGHT */}
          <Hidden smDown>
            <Grid item md className={classes.panelRight}>
              <RightPanel />
            </Grid>
          </Hidden>
        </Grid>
      </div>
    );
  }
}

/**
 * Page props
 */
const layoutProps: LayoutProps = {
  meta: {
    title: 'Timeline',
  },
  theme: PageIndexStyles,
};

/**
 * Layout
 */
const withLayout = createLayout(layoutProps);

/**
 * Exports
 */
export default withLayout(Index);
