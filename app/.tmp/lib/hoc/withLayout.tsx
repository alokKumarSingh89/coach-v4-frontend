import { Confirm, Notifier } from '@components/notifications';
import { LayoutProps, LayoutState, PageProps } from '@assets/declarations';
import { MenuAvatar, MenuDrawer } from '@components/menus';
import Router, { withRouter } from 'next/router';

import { AppBar } from '@material-ui/core';
import { Header } from '@components/layouts';
import NProgress from 'nprogress';
import React from 'react';
import Subheader from '@components/layouts/Subheader';
import { useTheme } from '@assets/theme';

/**
 * Progress bar config
 */
let timeoutProgressBar;

Router.onRouteChangeStart = () => {
  timeoutProgressBar = setTimeout(() => {
    NProgress.start();
  }, 100);
};

Router.onRouteChangeComplete = url => {
  NProgress.done();
  clearTimeout(timeoutProgressBar);
};

Router.onRouteChangeError = () => {
  NProgress.done();
  clearTimeout(timeoutProgressBar);
};

/**
 * Helps map page props to layout props
 */
export function mapPageToLayoutProps(props: PageProps): LayoutProps {
  return {
    headerProps: {
      label: props.section ? props.section : props.title,
    },
    subheaderProps: {
      label: props.section ? props.title : '',
      icon: props.icon ? props.icon : null,
      isVisible: props.section ? true : false,
    },
    theme: props.theme || null,
  };
}

/**
 * HOC handling page layouts
 * ---
 * Controls all layout components states and props.
 * ---
 * 1. Handles Header component
 * 2. Handles MenuDrawer component
 * 3. Handles MenuAvatar component
 * ---
 * @param BaseComponent
 * @param LayoutProps
 */
function withLayout(BaseComponent: React.ComponentType, layoutProps?: LayoutProps) {
  /**
   * Default props used when no layout props are explicitly given
   */
  const layoutDefaultProps: LayoutProps = {
    headerProps: {
      label: '',
    },
    subheaderProps: {
      label: '',
      isVisible: false,
    },
  };

  /**
   * HOC class definition
   */
  class WithLayout extends React.Component<any, LayoutState> {
    /**
     * Private state of component
     */
    state = {
      isDrawerOpen: false,
      isAvatarOpen: false,
    };

    /**
     * Calculates root element (content) top padding based on current props
     * @param props
     */
    private getRootPaddingTop(props) {
      const {appBarPosition, subheaderProps} = props;

      // when app bar is not fixed then no padding is required
      if(appBarPosition !== 'fixed') {
        return 0;
      }
      
      // when app bar is fixed and subheader is ocurred
      if(subheaderProps.isVisible) {
        return 100;
      }

      // when app bar is fixed and no subheader is ocurred
      return 56;
    }

    /**
     * Drawer toggle
     */
    handleDrawerToggle = () => {
      this.setState({
        isDrawerOpen: !this.state.isDrawerOpen,
      });
    };

    /**
     * Avatar menu toggle
     */
    handleAvatarToggle = () => {
      this.setState({
        isAvatarOpen: !this.state.isAvatarOpen,
      });
    };

    /**
     * Avatar menu close
     */
    handleAvatarClose = () => {
      this.setState({
        isAvatarOpen: false,
      });
    };

    /**
     * Render method
     */
    render() {
      const {
        headerProps = layoutDefaultProps.headerProps,
        subheaderProps = layoutDefaultProps.subheaderProps,
        appBarPosition = 'fixed',
      } = layoutProps;

      const rootPaddingTop = this.getRootPaddingTop({appBarPosition, subheaderProps});

      return (
        <div style={{paddingTop: rootPaddingTop}}>
          <AppBar color="secondary" position={appBarPosition} elevation={0}>
            <Header
              {...headerProps}
              toggleDrawer={this.handleDrawerToggle}
              toggleAvatar={this.handleAvatarToggle}
            />

            {subheaderProps.isVisible ? <Subheader {...subheaderProps} /> : ''}
            
          </AppBar>

          <MenuDrawer
            anchor="left"
            isOpen={this.state.isDrawerOpen}
            toggleDrawer={this.handleDrawerToggle}
          />

          <MenuAvatar isOpen={this.state.isAvatarOpen} onClose={this.handleAvatarClose} />

          <BaseComponent {...this.props} />

          <Notifier />
          <Confirm />
        </div>
      );
    }
  }

  /**
   * Retrieves WithLayout component
   * enhaced with theme when is specified
   * in layout properties
   */
  if (!layoutProps.theme) {
    return withRouter(WithLayout);
  }

  const withTheme = useTheme(layoutProps.theme);
  return withRouter(withTheme(WithLayout));
}

/**
 * Exports
 */
export default withLayout;
