import { WithStyles } from '@material-ui/core';
import { LayoutProps, PageProps } from '@assets/declarations';

import Head from 'next/head';
import { PageIndexStyles } from '@assets/theme/jss/pages/pageIndexStyles';
import React from 'react';
import Timeline from '@components/Timeline';
import { pageIndexStyles } from '@assets/theme';
import withLayout from '@lib/hoc/withLayout';

/**
 * Page props
 */
const pageProps: PageProps = {
  title: 'Timeline',
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
  theme: pageIndexStyles,
};

/**
 * Website home page component
 * ---
 * This is the first page user will see when visit project url.
 * @version 1.0
 * @namespace pages
 */
class Index extends React.Component<PageProps & WithStyles<PageIndexStyles>> {
  
  /**
   * Render method
   */
  render() {
    const { classes } = this.props;

    /**
     * Render method
     */
    return (
      <div className={classes.root}>
        <Head>
          <title>{pageProps.title}</title>
          <meta name="description" content={pageProps.description} />
          <link rel="stylesheet" href="/static/css/pages/index.css" />
        </Head>

        <Timeline classes={{
          root: classes.timelineRoot,
          filter: classes.timelineFilter,
          scroller: classes.timelineScroller,
        }} />

      </div>
    );
  }
}
export default withLayout(Index, layoutProps);
