import React from 'react';
import Router, { withRouter } from 'next/router';

import NProgress from 'nprogress';
import { StyleRules, WithStyles } from '@material-ui/core/styles';
import { Theme, Dialog, Slide, Button } from '@material-ui/core';
import {
  ButtonFab, MenuDrawer, MenuAvatar, Header, MetaData, MetaDataProps, Breadcrumbs, MenuActions,
} from 'components';
import { createTheme } from 'theme';
import { menuAvatarSections, menuDrawerSections, menuActionsSections } from 'lib/config';
import { Coloring } from 'lib/types';

/**
 * Layout props interface
 */
interface LayoutProps {
  theme?: (theme: Theme) => StyleRules;
  header?: {
    visible: boolean,
    coloring?: Coloring,
  };
  breadcrumbs?: {
    visible: boolean,
    coloring?: Coloring,
  },
  fab?: {
    visible: boolean,
  },
  meta?: MetaDataProps;
}

/**
 * Layout state interface
 */
interface LayoutState {
  isDrawerOpen: boolean;
  isAvatarOpen: boolean;
  isSearchOpen: boolean;
  isQamOpen: boolean;
}

/**
 * Interface of props passed down to base component
 */
interface LayoutPassedDownProps {
  toggleMenuDrawer: () => void;
  toggleMenuAvatar: () => void;
}

/**
 * Default props used when no layout props are explicitly given
 */
const initialProps: LayoutProps = {
  header: {
    visible: true,
    coloring: Coloring.Transparent
  },
  breadcrumbs: {
    visible: false,
    coloring: Coloring.Black
  },
  fab: {
    visible: true,
  },
  theme: null,
  meta: {
    title: 'YeahCoach',
  },
};

/**
 * Menu open transition
 * @param props
 */
function DialogTransition(props) {
  return <Slide direction="up" {...props} />;
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
function createLayout(props: LayoutProps) {
  // progress bar timeout
  let timeoutProgressBar: NodeJS.Timer;

  // @ts-ignore
  Router.onRouteChangeStart = () => {
    timeoutProgressBar = setTimeout(() => {
      NProgress.start();
    }, 100);
  };

  // @ts-ignore
  Router.onRouteChangeComplete = (url) => {
    NProgress.done();
    clearTimeout(timeoutProgressBar);
  };

  // @ts-ignore
  Router.onRouteChangeError = () => {
    NProgress.done();
    clearTimeout(timeoutProgressBar);
  };

  return (BaseComponent) => {
    /**
     * HOC class definition
     */
    class Layout extends React.Component<LayoutProps & WithStyles, LayoutState> {
      /**
       * Private state of component
       */
      state = {
        isDrawerOpen: false,
        isAvatarOpen: false,
        isSearchOpen: false,
        isQamOpen: false,
      };

      /**
       * Constructor
       */
      constructor(props) {
        super(props);

        // AVATAR handlers binds
        this.handleAvatarToggle = this.handleAvatarToggle.bind(this);
        this.handleAvatarOpen = this.handleAvatarOpen.bind(this);
        this.handleAvatarClose = this.handleAvatarClose.bind(this);

        // DRAWER handlers binds
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);

        // QAM handlers binds
        this.handleQamToggle = this.handleQamToggle.bind(this);
        this.handleQamOpen = this.handleQamOpen.bind(this);
        this.handleQamClose = this.handleQamClose.bind(this);
      }

      /**
       * Drawer toggle
       */
      handleSearchToggle() {
        this.setState({
          isSearchOpen: !this.state.isSearchOpen,
        });
      }

      /**
       * Drawer toggle
       */
      handleDrawerToggle() {
        this.setState({
          isDrawerOpen: !this.state.isDrawerOpen,
        });
      }

      /**
       * Drawer open
       */
      handleDrawerOpen() {
        this.setState({
          isDrawerOpen: true,
        });
      }

      /**
       * Drawer close
       */
      handleDrawerClose() {
        this.setState({
          isDrawerOpen: false,
        });
      }

      /**
       * Avatar menu toggle
       */
      handleAvatarToggle() {
        this.setState({
          isAvatarOpen: !this.state.isAvatarOpen,
        });
      }

      /**
       * Avatar menu close
       */
      handleAvatarOpen() {
        this.setState({
          isAvatarOpen: true,
        });
      }

      /**
       * Avatar menu close
       */
      handleAvatarClose() {
        this.setState({
          isAvatarOpen: false,
        });
      }

      /**
       * Quick actions menu toggle
       */
      handleQamToggle() {
        this.setState({
          isQamOpen: !this.state.isQamOpen,
        });
      }

      /**
       * Quick actions menu close
       */
      handleQamOpen() {
        this.setState({
          isQamOpen: true,
        });
      }

      /**
       * Quick actions menu close
       */
      handleQamClose() {
        this.setState({
          isQamOpen: false,
        });
      }

      /**
       * Render method
       */
      render() {
        const { meta, header, breadcrumbs } = {...initialProps, ...props}; // HOC component Props
        const { classes } = this.props; // Layout class props

        return (
          <div>
            <MetaData {...meta} />

            {header.visible ? (
              <Header
                label={meta.section ? meta.section : meta.title}
                toggleAvatar={this.handleAvatarToggle}
                toggleDrawer={this.handleDrawerToggle}
                coloring={header.coloring}
              />
            ) : (
              ''
            )}

            {breadcrumbs.visible ? (
              <Breadcrumbs
                label={meta.title}
                coloring={breadcrumbs.coloring}
              />
            ) : (
              ''
            )}

            <BaseComponent
              toggleMenuDrawer={this.handleDrawerToggle}
              toggleMenuAvatar={this.handleAvatarToggle}
              classes={classes}
            />

            <ButtonFab onClick={this.handleQamToggle} />

            <MenuDrawer
              anchor="left"
              isOpen={this.state.isDrawerOpen}
              toggleDrawer={this.handleDrawerToggle}
              sections={menuDrawerSections}
            />

            <Dialog
              open={this.state.isAvatarOpen}
              onClose={this.handleAvatarClose}
              scroll="body"
              maxWidth="xs"
              TransitionComponent={DialogTransition}
            >
              <MenuAvatar onSectionClick={this.handleAvatarClose} sections={menuAvatarSections} />
            </Dialog>

            <Dialog
              open={this.state.isQamOpen}
              onClose={this.handleQamClose}
              scroll="body"
              maxWidth="xs"
              TransitionComponent={DialogTransition}
            >
              <MenuActions onSectionClick={this.handleQamClose} sections={menuActionsSections} />
            </Dialog>
          </div>
        );
      }
    }

    // layout component cache
    let LayoutComponent: any = Layout;

    // use theme when is given
    if (props.theme) {
      const withPageTheme = createTheme(props.theme);
      LayoutComponent = withPageTheme(LayoutComponent);
    }

    LayoutComponent = withRouter(LayoutComponent);

    return LayoutComponent;
  };
}

/**
 * Exports
 */
export {LayoutProps, LayoutState, LayoutPassedDownProps, createLayout}