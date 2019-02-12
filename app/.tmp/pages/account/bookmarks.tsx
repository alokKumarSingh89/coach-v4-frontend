import { LayoutProps, PageProps } from '@assets/declarations';
import { Paper, Typography, WithStyles } from '@material-ui/core';
import withLayout, { mapPageToLayoutProps } from '@lib/hoc/withLayout';

import { AccountRoutes } from '@lib/routes';
import Head from 'next/head';
import React from 'react';
import pageAccountStyles from '@assets/theme/jss/pages/pageAccountStyles';

/**
 * Page props
 */
const pageProps: PageProps = {
  theme: pageAccountStyles,
  section: 'Account',
  icon: AccountRoutes.bookmarks.icon,
  title: 'Bookmarks',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rutrum tortor. Sed vitae ultrices ipsum, id vulputate ex. Sed bibendum nunc in dolor pretium, interdum condimentum tortor venenatis. Pellentesque nec arcu sit amet arcu ultricies fringilla id ut risus. Ut feugiat leo in accumsan condimentum. Aenean nec tincidunt nibh, quis gravida purus. Praesent maximus, purus nec placerat mollis, nibh leo interdum dolor, at ullamcorper lorem arcu vitae libero. Phasellus maximus condimentum diam quis bibendum. Donec ultricies pharetra ante ac suscipit. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rutrum tortor. Sed vitae ultrices ipsum, id vulputate ex. Sed bibendum nunc in dolor pretium, interdum condimentum tortor venenatis. Pellentesque nec arcu sit amet arcu ultricies fringilla id ut risus. Ut feugiat leo in accumsan condimentum. Aenean nec tincidunt nibh, quis gravida purus. Praesent maximus, purus nec placerat mollis, nibh leo interdum dolor, at ullamcorper lorem arcu vitae libero. Phasellus maximus condimentum diam quis bibendum. Donec ultricies pharetra ante ac suscipit. Nulla facilisi.',
};

class Bookmarks extends React.Component<PageProps & WithStyles> {
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

        {/* MAIN SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Typography variant="headline" className={classes.paperHeadline}>
            Don't forget a thing
          </Typography>
          <Typography variant="subheading" className={classes.paperSubheading}>
            Anything you have ever bookmarked is listed in one place below
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withLayout(Bookmarks, mapPageToLayoutProps(pageProps));
