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
  icon: AccountRoutes.settings.icon,
  title: 'Settings',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rutrum tortor. Sed vitae ultrices ipsum, id vulputate ex. Sed bibendum nunc in dolor pretium, interdum condimentum tortor venenatis. Pellentesque nec arcu sit amet arcu ultricies fringilla id ut risus. Ut feugiat leo in accumsan condimentum. Aenean nec tincidunt nibh, quis gravida purus. Praesent maximus, purus nec placerat mollis, nibh leo interdum dolor, at ullamcorper lorem arcu vitae libero. Phasellus maximus condimentum diam quis bibendum. Donec ultricies pharetra ante ac suscipit. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rutrum tortor. Sed vitae ultrices ipsum, id vulputate ex. Sed bibendum nunc in dolor pretium, interdum condimentum tortor venenatis. Pellentesque nec arcu sit amet arcu ultricies fringilla id ut risus. Ut feugiat leo in accumsan condimentum. Aenean nec tincidunt nibh, quis gravida purus. Praesent maximus, purus nec placerat mollis, nibh leo interdum dolor, at ullamcorper lorem arcu vitae libero. Phasellus maximus condimentum diam quis bibendum. Donec ultricies pharetra ante ac suscipit. Nulla facilisi.',
};

/**
 * Page class declaration
 * @description contains application timeline
 */
class Settings extends React.Component<PageProps & WithStyles> {
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
            System adjustment
          </Typography>
          <Typography variant="subheading" className={classes.paperSubheading}>
            Changes will be reflected immediately
          </Typography>
        </Paper>

        {/* PASSWORD SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Typography variant="headline" className={classes.paperHeadline}>
            Password change
          </Typography>
          <Typography variant="subheading" className={classes.paperSubheading}>
            Change your password carefully
          </Typography>
          <Button variant="contained" color="primary" fullWidth size="medium">
            Save new password
          </Button>
        </Paper>

        {/* VERIFICATION SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Typography variant="headline" className={classes.paperHeadline}>
            Verification
          </Typography>
          <Typography variant="subheading" className={classes.paperSubheading}>
            More you are verified more community trust you
          </Typography>
        </Paper>

        {/* VERIFICATION SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Typography variant="headline" className={classes.paperHeadline}>
            Account cancelation
          </Typography>
          <Typography variant="subheading" className={classes.paperSubheading}>
            All data will be permanently deleted in 14 days after cancel request
          </Typography>
          <Button variant="contained" color="primary" fullWidth size="medium">
            Cancel account
          </Button>
        </Paper>
      </div>
    );
  }
}

export default withLayout(Settings, mapPageToLayoutProps(pageProps));
