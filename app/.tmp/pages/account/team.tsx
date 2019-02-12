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
  icon: AccountRoutes.team.icon,
  title: 'Team',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rutrum tortor. Sed vitae ultrices ipsum, id vulputate ex. Sed bibendum nunc in dolor pretium, interdum condimentum tortor venenatis. Pellentesque nec arcu sit amet arcu ultricies fringilla id ut risus. Ut feugiat leo in accumsan condimentum. Aenean nec tincidunt nibh, quis gravida purus. Praesent maximus, purus nec placerat mollis, nibh leo interdum dolor, at ullamcorper lorem arcu vitae libero. Phasellus maximus condimentum diam quis bibendum. Donec ultricies pharetra ante ac suscipit. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rutrum tortor. Sed vitae ultrices ipsum, id vulputate ex. Sed bibendum nunc in dolor pretium, interdum condimentum tortor venenatis. Pellentesque nec arcu sit amet arcu ultricies fringilla id ut risus. Ut feugiat leo in accumsan condimentum. Aenean nec tincidunt nibh, quis gravida purus. Praesent maximus, purus nec placerat mollis, nibh leo interdum dolor, at ullamcorper lorem arcu vitae libero. Phasellus maximus condimentum diam quis bibendum. Donec ultricies pharetra ante ac suscipit. Nulla facilisi.',
};

/**
 * Page class declaration
 * @description contains application timeline
 */
class Team extends React.Component<PageProps & WithStyles> {
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
      <div className={classes.root}>
        <Head>
          <title>{pageProps.title}</title>
          <meta name="description" content={pageProps.description} />
        </Head>

        {/* MAIN SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Typography variant="headline" className={classes.paperHeadline}>
            Your ancestor
          </Typography>
          <Typography variant="subheading" className={classes.paperSubheading}>
            The member you can contact with any question about YeahCoach
          </Typography>
          <Button variant="contained" color="primary" fullWidth size="medium">
            Send message
          </Button>
        </Paper>

        {/* MEMBERS SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Typography variant="headline" className={classes.paperHeadline}>
            Members
          </Typography>
          <Typography variant="subheading" className={classes.paperSubheading}>
            Users you helped to find YeahCoach since you have joined
          </Typography>
          <Button variant="contained" color="primary" fullWidth size="medium">
            Show details
          </Button>
        </Paper>

        {/* CLOSEST MEMBERS SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Typography variant="headline" className={classes.paperHeadline}>
            Closest members
          </Typography>
          <Typography variant="subheading" className={classes.paperSubheading}>
            Users you should focus on to help YeahCoach vision to expand
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withLayout(Team, mapPageToLayoutProps(pageProps));
