import { Button, Paper, Typography, WithStyles } from '@material-ui/core';
import withLayout, { mapPageToLayoutProps } from '@lib/hoc/withLayout';

import { AccountRoutes } from '@lib/routes';
import Head from 'next/head';
import { PageProps } from '@assets/declarations';
import React from 'react';
import pageAccountStyles from '@assets/theme/jss/pages/pageAccountStyles';

/**
 * Page props
 */
const pageProps: PageProps = {
  theme: pageAccountStyles,
  section: 'Account',
  icon: AccountRoutes.bonus.icon,
  title: 'Bonus',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rutrum tortor. Sed vitae ultrices ipsum, id vulputate ex. Sed bibendum nunc in dolor pretium, interdum condimentum tortor venenatis. Pellentesque nec arcu sit amet arcu ultricies fringilla id ut risus. Ut feugiat leo in accumsan condimentum. Aenean nec tincidunt nibh, quis gravida purus. Praesent maximus, purus nec placerat mollis, nibh leo interdum dolor, at ullamcorper lorem arcu vitae libero. Phasellus maximus condimentum diam quis bibendum. Donec ultricies pharetra ante ac suscipit. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rutrum tortor. Sed vitae ultrices ipsum, id vulputate ex. Sed bibendum nunc in dolor pretium, interdum condimentum tortor venenatis. Pellentesque nec arcu sit amet arcu ultricies fringilla id ut risus. Ut feugiat leo in accumsan condimentum. Aenean nec tincidunt nibh, quis gravida purus. Praesent maximus, purus nec placerat mollis, nibh leo interdum dolor, at ullamcorper lorem arcu vitae libero. Phasellus maximus condimentum diam quis bibendum. Donec ultricies pharetra ante ac suscipit. Nulla facilisi.',
};

/**
 * Page class declaration
 * @description contains application timeline
 */
class Bonus extends React.Component<PageProps & WithStyles> {
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
            Private news
          </Typography>
          <Typography variant="subheading" className={classes.paperSubheading}>
            Road reports available only for memebers with bonus
          </Typography>
          <Button variant="contained" color="primary" fullWidth size="medium">
            Show older
          </Button>
        </Paper>

        {/* OVERVIEW SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Typography variant="headline" className={classes.paperHeadline}>
            Overview
          </Typography>
          <Typography variant="subheading" className={classes.paperSubheading}>
            Bonus you bought among world countries
          </Typography>
          <Button variant="contained" color="primary" fullWidth size="medium">
            Buy bonus
          </Button>
        </Paper>

        {/* INFO SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Typography variant="headline" className={classes.paperHeadline}>
            How does Bonus work?
          </Typography>
          <Typography variant="subheading" className={classes.paperSubheading}>
            Members who identify themselfs with the vision of yeahcoach wants more then basic
            membership.
          </Typography>
          <Button variant="contained" color="primary" fullWidth size="medium">
            Show more info
          </Button>
        </Paper>
      </div>
    );
  }
}

export default withLayout(Bonus, mapPageToLayoutProps(pageProps));
