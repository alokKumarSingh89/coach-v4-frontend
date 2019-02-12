import Document, { Head, Main, NextScript } from 'next/document';

import React from 'react';
import flush from 'styled-jsx/server';

/**
 * Custom document component
 */
class MyDocument extends Document {
  /**
   * Initial props population
   */
  static getInitialProps(ctx) {
    // Render app and page and get the context of the page with collected side effects.
    let pageContext;

    const page = ctx.renderPage((Component) => {
      const WrappedComponent = (props) => {
        pageContext = props.pageContext;
        return <Component {...props} />;
      };

      return WrappedComponent;
    });

    return {
      ...page,
      pageContext,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <React.Fragment>
          <style
            id="jss-server-side"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
          />
          {flush() || null}
        </React.Fragment>
      ),
    };
  }

  /**
   * Render method
   */
  render() {
    const { pageContext } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
          {/* Use utf-8 charset */}
          <meta charSet="utf-8" />

          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, '
              + 'minimum-scale=1, width=device-width, height=device-height'
            }
          />

          {/* PWA primary color */}
          <meta name="theme-color" content={pageContext.theme.palette.primary.main} />

          {/* Google Font */}
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,400,700&amp;subset=latin-ext"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

/**
 * Exports
 */
export default MyDocument;
