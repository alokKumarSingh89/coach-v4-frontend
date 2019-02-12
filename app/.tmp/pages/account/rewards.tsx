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
  icon: AccountRoutes.rewards.icon,
  title: 'Rewards',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rutrum tortor. Sed vitae ultrices ipsum, id vulputate ex. Sed bibendum nunc in dolor pretium, interdum condimentum tortor venenatis. Pellentesque nec arcu sit amet arcu ultricies fringilla id ut risus. Ut feugiat leo in accumsan condimentum. Aenean nec tincidunt nibh, quis gravida purus. Praesent maximus, purus nec placerat mollis, nibh leo interdum dolor, at ullamcorper lorem arcu vitae libero. Phasellus maximus condimentum diam quis bibendum. Donec ultricies pharetra ante ac suscipit. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rutrum tortor. Sed vitae ultrices ipsum, id vulputate ex. Sed bibendum nunc in dolor pretium, interdum condimentum tortor venenatis. Pellentesque nec arcu sit amet arcu ultricies fringilla id ut risus. Ut feugiat leo in accumsan condimentum. Aenean nec tincidunt nibh, quis gravida purus. Praesent maximus, purus nec placerat mollis, nibh leo interdum dolor, at ullamcorper lorem arcu vitae libero. Phasellus maximus condimentum diam quis bibendum. Donec ultricies pharetra ante ac suscipit. Nulla facilisi.',
};

/**
 * Page class declaration
 * @description contains application timeline
 */
class Rewards extends React.Component<PageProps & WithStyles> {
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
            Summary
          </Typography>
          <Typography variant="subheading" className={classes.paperSubheading}>
            All rewards you get by sharing YeahCoach vision
          </Typography>
          <Button variant="contained" color="primary" fullWidth size="medium">
            Pay out
          </Button>
        </Paper>

        {/* DETAILS SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Typography variant="headline" className={classes.paperHeadline}>
            Details
          </Typography>
          <Typography variant="subheading" className={classes.paperSubheading}>
            Explore where and why you got all your rewards
          </Typography>
          <Button variant="contained" color="primary" fullWidth size="medium">
            Show more
          </Button>
        </Paper>

        {/* CALCULATOR SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Typography variant="headline" className={classes.paperHeadline}>
            Calculator
          </Typography>
          <Typography variant="subheading" className={classes.paperSubheading}>
            See how rewards work and how much you can earn
          </Typography>
          <Button variant="contained" color="primary" fullWidth size="medium">
            How does it work?
          </Button>
        </Paper>

        {/* PAYOUT SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Typography variant="headline" className={classes.paperHeadline}>
            Payout history
          </Typography>
          <Typography variant="subheading" className={classes.paperSubheading}>
            Find your previous pay outs with invoices and details
          </Typography>
          <Button variant="contained" color="primary" fullWidth size="medium">
            Show more
          </Button>
        </Paper>
      </div>
    );
  }
}

export default withLayout(Rewards, mapPageToLayoutProps(pageProps));
