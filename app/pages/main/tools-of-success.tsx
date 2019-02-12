import React from 'react';
import {
  WithStyles, Tab, Tabs, Typography,
} from '@material-ui/core';
import { PageTosStyleRules, PageTosStyles } from 'theme';
import { LayoutProps, createLayout } from 'containers';
import Head from 'next/head';

/**
 * Tos tab section container
 * TODO: implement my content
 */
function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

/**
 * Tools Of Success - page component
 * ---
 * This is main page of Tools Of Success
 * @version 1.0
 * @namespace pages
 */
class Tos extends React.Component<WithStyles<PageTosStyleRules>> {
  state = {
    selectedTab: 0,
  };

  handleTabChange = (event, value) => {
    this.setState({ selectedTab: value });
  };

  handleTabChangeIndex = (index) => {
    this.setState({ selectedTab: index });
  };

  /**
   * Render method
   */
  render() {
    const { classes } = this.props;
    const { selectedTab } = this.state;

    /**
     * Render method
     */
    return (
      <div className={classes.root}>
        <Head>
          <link rel="stylesheet" href="/static/css/pages/main/page.main.tos.css" />
        </Head>
        <Tabs
          value={selectedTab}
          onChange={this.handleTabChange}
          indicatorColor="secondary"
          textColor="secondary"
          fullWidth
        >
          <Tab label="Activities" />
          <Tab label="Compass" />
        </Tabs>
        {selectedTab === 0 && <TabContainer>Activities section content</TabContainer>}
        {selectedTab === 1 && <TabContainer>Compass section content</TabContainer>}
      </div>
    );
  }
}

/**
 * Page props
 */
const layoutProps: LayoutProps = {
  meta: {
    title: 'Tools Of Success',
  },
  theme: PageTosStyles,
};

/**
 * Layout
 */
const withLayout = createLayout(layoutProps);

/**
 * Exports
 */
export default withLayout(Tos);
