import React from 'react';
import {
  WithStyles, Tab, Tabs, Typography,
} from '@material-ui/core';
import { PagePocStyleRules, PagePocStyles } from 'theme';
import { LayoutProps, createLayout } from 'containers';
import Head from 'next/head';

/**
 * Poc tab section container
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
 * Power Of Community - page component
 * ---
 * This is main page of Power Of Community
 * @version 1.0
 * @namespace pages
 */
class Poc extends React.Component<WithStyles<PagePocStyleRules>> {
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
          <link rel="stylesheet" href="/static/css/pages/main/page.main.poc.css" />
        </Head>
        <Tabs
          value={selectedTab}
          onChange={this.handleTabChange}
          indicatorColor="secondary"
          textColor="secondary"
          fullWidth
        >
          <Tab label="News" />
          <Tab label="Power map" />
        </Tabs>
        {selectedTab === 0 && <TabContainer>News section content</TabContainer>}
        {selectedTab === 1 && <TabContainer>Power map content</TabContainer>}
      </div>
    );
  }
}

/**
 * Page props
 */
const layoutProps: LayoutProps = {
  meta: {
    title: 'Power Of Community',
  },
  theme: PagePocStyles,
};

/**
 * Layout
 */
const withLayout = createLayout(layoutProps);

/**
 * Exports
 */
export default withLayout(Poc);
