import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  createStyles,
  withStyles,
} from '@material-ui/core';
import {
  BeachAccess as BeachAccessIcon,
  Image as ImageIcon,
  Work as WorkIcon,
} from '@material-ui/icons';
import { LayoutProps, PageProps } from '@assets/declarations';

import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import withLayout from '@lib/hoc/withLayout';

/**
 * Page props
 */
const pageProps: PageProps = {
  title: 'Tribute',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rutrum tortor. Sed vitae ultrices ipsum, id vulputate ex. Sed bibendum nunc in dolor pretium, interdum condimentum tortor venenatis. Pellentesque nec arcu sit amet arcu ultricies fringilla id ut risus. Ut feugiat leo in accumsan condimentum. Aenean nec tincidunt nibh, quis gravida purus. Praesent maximus, purus nec placerat mollis, nibh leo interdum dolor, at ullamcorper lorem arcu vitae libero. Phasellus maximus condimentum diam quis bibendum. Donec ultricies pharetra ante ac suscipit. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rutrum tortor. Sed vitae ultrices ipsum, id vulputate ex. Sed bibendum nunc in dolor pretium, interdum condimentum tortor venenatis. Pellentesque nec arcu sit amet arcu ultricies fringilla id ut risus. Ut feugiat leo in accumsan condimentum. Aenean nec tincidunt nibh, quis gravida purus. Praesent maximus, purus nec placerat mollis, nibh leo interdum dolor, at ullamcorper lorem arcu vitae libero. Phasellus maximus condimentum diam quis bibendum. Donec ultricies pharetra ante ac suscipit. Nulla facilisi.',
  section: null,
};

/**
 * Layout props
 */
const layoutProps: LayoutProps = {
  headerProps: {
    label: pageProps.section ? pageProps.section : pageProps.title,
  },
};

/**
 * CSS styles
 */
const styles = createStyles({
  root: {
    width: 500,
  },
  body: {
    textAlign: 'center',
    margin: '0 20px',
  },
  title: {
    margin: '45px auto',
    fontSize: '44px',
    fontWeight: 400,
  },
  description: {
    margin: '20px auto',
    fontSize: '26px',
    fontWeight: 400,
    textAlign: 'left',
  },
});

const leaders = {
  today: [
    {
      name: 'John Doe',
      pts: 50,
    },
    {
      name: 'Caroline Blake',
      pts: 100,
    },
    {
      name: 'JereDough',
      pts: 10,
    },
  ],
  yesterday: [
    {
      name: 'Mark Zuckerberg',
      pts: 349,
    },
    {
      name: 'Steve Jobs',
      pts: 550,
    },
    {
      name: 'Bill Gates',
      pts: 10,
    },
  ],
  week: [
    {
      name: 'Martha Black',
      pts: 980,
    },
    {
      name: 'Theresa Blue',
      pts: 1000,
    },
    {
      name: 'Bobby Brown',
      pts: 876,
    },
  ],
  month: [
    {
      name: 'Batman',
      pts: 1890,
    },
    {
      name: 'Superman',
      pts: 2450,
    },
    {
      name: 'Bill Gates',
      pts: 1780,
    },
  ],
  year: [
    {
      name: 'Arnold Schwarzenegger',
      pts: 10450,
    },
    {
      name: 'Silvester Stallone',
      pts: 10449,
    },
    {
      name: 'Karel Roden',
      pts: 9998,
    },
  ],
};

function getAllLeaders(): Array<Object> {
  let data = [];
  data = data.concat(leaders.today);
  data = data.concat(leaders.yesterday);
  data = data.concat(leaders.week);
  data = data.concat(leaders.month);
  data = data.concat(leaders.year);
  return data;
}

function getLeaders(period = 'all'): Array<Object> {
  if (!leaders[period] && period !== 'all') {
    return [];
  }

  let data = period === 'all' ? getAllLeaders() : leaders[period];

  if (data.length) {
    data = data.sort((a, b) => b.pts - a.pts);
  }

  return data;
}

function FolderList(props) {
  const { data } = props;
  return (
    <List>
      {data.map((item, index) => {
        return (
          <ListItem key={index}>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <ListItemText primary={item.name} secondary={item.pts} />
          </ListItem>
        );
      })}
    </List>
  );
}

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

/**
 * Page class declaration
 * @description contains application timeline
 */
class Tribute extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
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
      <div className={classes.body}>
        <Head>
          <title>{pageProps.title}</title>
          <meta name="description" content={pageProps.description} />
        </Head>
        <Toolbar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="on"
          >
            <Tab label="Today" />
            <Tab label="Yesterday" />
            <Tab label="Week" />
            <Tab label="Month" />
            <Tab label="Year" />
          </Tabs>
        </Toolbar>
        <SwipeableViews axis={'x'} index={this.state.value} onChangeIndex={this.handleChangeIndex}>
          <TabContainer dir={'ltr'}>
            <FolderList data={getLeaders('today')} />
          </TabContainer>
          <TabContainer dir={'ltr'}>
            <FolderList data={getLeaders('yesterday')} />
          </TabContainer>
          <TabContainer dir={'ltr'}>
            <FolderList data={getLeaders('week')} />
          </TabContainer>
          <TabContainer dir={'ltr'}>
            <FolderList data={getLeaders('month')} />
          </TabContainer>
          <TabContainer dir={'ltr'}>
            <FolderList data={getLeaders('year')} />
          </TabContainer>
        </SwipeableViews>
        <h2>Overal Best</h2>
        <FolderList data={getLeaders('all')} />
      </div>
    );
  }
}

Tribute.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withLayout(withStyles(styles)(Tribute), layoutProps);
