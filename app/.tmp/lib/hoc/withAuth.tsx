import React from 'react';
import Router from 'next/router';

/**
 * HOC authentication
 * @param BaseComponent
 */
function withAuth(BaseComponent, { loginRequired = true, logoutRequired = false } = {}) {
  /**
   * HOC class definition
   */
  class App extends React.Component {
    /**
     * Retrieves current logged in user from store
     */
    currentUser() {
      // TODO: implement getting current user from MobX store
      return false;
    }

    /**
     * Indicates if logout is required
     */
    isLogoutRequired() {
      return logoutRequired && this.currentUser();
    }

    /**
     * Indicates if login is required
     */
    isLoginRequired() {
      return loginRequired && !logoutRequired && !this.currentUser();
    }

    /**
     * After component is mounted into DOM
     * @see https://reactjs.org/docs/react-component.html#componentdidmount
     */
    componentDidMount() {
      // Redirect to login page when login is required
      if (this.isLoginRequired()) {
        Router.push('/login');
        return;
      }

      // Redirect to index page
      if (this.isLogoutRequired()) {
        Router.push('/logout');
        return;
      }
    }

    /**
     * Render method
     */
    render() {
      // prevent rendering when login / logout is required
      if (this.isLoginRequired() || this.isLogoutRequired()) {
        return null;
      }

      return <BaseComponent {...this.props} />;
    }
  }

  return App;
}

/**
 * Export HOC function
 */
export default withAuth;
