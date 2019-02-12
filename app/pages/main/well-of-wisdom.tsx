import React from 'react';
import {
  WithStyles, Tab, Tabs, Typography,
} from '@material-ui/core';
import { PageWowStyleRules, PageWowStyles } from 'theme';
import { LayoutProps, createLayout } from 'containers';
import Head from 'next/head';

/**
 * Wow tab section container
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
 * Well Of Wisdom - page component
 * ---
 * This is main page of Well Of Wisdom
 * @version 1.0
 * @namespace pages
 */
class Wow extends React.Component<WithStyles<PageWowStyleRules>> {
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
          <link rel="stylesheet" href="/static/css/pages/main/page.main.wow.css" />
        </Head>
        <Tabs
          value={selectedTab}
          onChange={this.handleTabChange}
          indicatorColor="secondary"
          textColor="secondary"
          fullWidth
        >
          <Tab label="Life" />
          <Tab label="Mind" />
          <Tab label="Langs" />
        </Tabs>
        {selectedTab === 0 && <TabContainer>Life section content</TabContainer>}
        {selectedTab === 1 && <TabContainer>Mind section content</TabContainer>}
        {selectedTab === 2 && <TabContainer>Lang section content</TabContainer>}
      </div>
    );
  }
}

/**
 * Page props
 */
const layoutProps: LayoutProps = {
  meta: {
    title: 'Well Of Wisdom',
  },
  theme: PageWowStyles,
};

/**
 * Layout
 */
const withLayout = createLayout(layoutProps);

/**
 * Exports
 */
export default withLayout(Wow);
