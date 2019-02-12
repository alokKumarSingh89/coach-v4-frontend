import { LayoutProps, PageProps } from '@assets/declarations';
import { createStyles, withStyles } from '@material-ui/core';

import Head from 'next/head';
import React from 'react';
import withLayout from '@lib/hoc/withLayout';

/**
 * Page props
 */
const pageProps: PageProps = {
  title: 'Contact',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rutrum tortor. Sed vitae ultrices ipsum, id vulputate ex. Sed bibendum nunc in dolor pretium, interdum condimentum tortor venenatis. Pellentesque nec arcu sit amet arcu ultricies fringilla id ut risus. Ut feugiat leo in accumsan condimentum. Aenean nec tincidunt nibh, quis gravida purus. Praesent maximus, purus nec placerat mollis, nibh leo interdum dolor, at ullamcorper lorem arcu vitae libero. Phasellus maximus condimentum diam quis bibendum. Donec ultricies pharetra ante ac suscipit. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rutrum tortor. Sed vitae ultrices ipsum, id vulputate ex. Sed bibendum nunc in dolor pretium, interdum condimentum tortor venenatis. Pellentesque nec arcu sit amet arcu ultricies fringilla id ut risus. Ut feugiat leo in accumsan condimentum. Aenean nec tincidunt nibh, quis gravida purus. Praesent maximus, purus nec placerat mollis, nibh leo interdum dolor, at ullamcorper lorem arcu vitae libero. Phasellus maximus condimentum diam quis bibendum. Donec ultricies pharetra ante ac suscipit. Nulla facilisi.',
  section: 'About',
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

/**
 * Page class declaration
 * @description contains contact form
 */
class Contact extends React.Component {
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
        <h1 className={classes.title}>{pageProps.title}</h1>
        <div className={classes.description}>{pageProps.description}</div>
      </div>
    );
  }
}

export default withLayout(withStyles(styles)(Contact), layoutProps);
