import { LayoutProps, PageProps } from '@assets/declarations';
import { Paper, Typography, WithStyles } from '@material-ui/core';
import withLayout, { mapPageToLayoutProps } from '@lib/hoc/withLayout';

import { AccountRoutes } from '@lib/routes';
import Head from 'next/head';
import React from 'react';
import pageAccountStyles from '@assets/theme/jss/pages/pageAccountStyles';
import { useTheme } from '@assets/theme';

/**
 * Page props
 */
const pageProps: PageProps = {
  theme: pageAccountStyles,
  section: 'Account',
  icon: AccountRoutes.messages.icon,
  title: 'Messages',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rutrum tortor. Sed vitae ultrices ipsum, id vulputate ex. Sed bibendum nunc in dolor pretium, interdum condimentum tortor venenatis. Pellentesque nec arcu sit amet arcu ultricies fringilla id ut risus. Ut feugiat leo in accumsan condimentum. Aenean nec tincidunt nibh, quis gravida purus. Praesent maximus, purus nec placerat mollis, nibh leo interdum dolor, at ullamcorper lorem arcu vitae libero. Phasellus maximus condimentum diam quis bibendum. Donec ultricies pharetra ante ac suscipit. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rutrum tortor. Sed vitae ultrices ipsum, id vulputate ex. Sed bibendum nunc in dolor pretium, interdum condimentum tortor venenatis. Pellentesque nec arcu sit amet arcu ultricies fringilla id ut risus. Ut feugiat leo in accumsan condimentum. Aenean nec tincidunt nibh, quis gravida purus. Praesent maximus, purus nec placerat mollis, nibh leo interdum dolor, at ullamcorper lorem arcu vitae libero. Phasellus maximus condimentum diam quis bibendum. Donec ultricies pharetra ante ac suscipit. Nulla facilisi.',
};

/**
 * Page class declaration
 * @description contains application timeline
 */
class Messages extends React.Component<PageProps & WithStyles> {
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
            Talk to community
          </Typography>
          <Typography variant="subheading" className={classes.paperSubheading}>
            Bring life to YeahCoach and message anybody in community
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withLayout(Messages, mapPageToLayoutProps(pageProps));
