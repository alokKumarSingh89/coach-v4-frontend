import React from 'react';

import { LayoutProps, createLayout } from 'containers';
import { AccountRoutes } from 'lib/routes';
import { PageAccountStyles, PageAccountStyleRules } from 'theme';
import {
  WithStyles,
  Paper,
  Button,
} from '@material-ui/core';
import { Label } from 'components';
import { Coloring } from 'lib/types';

/**
 * Page props
 */
const layoutProps: LayoutProps = {
  meta: {
    section: 'Account',
    title: AccountRoutes.settings.label,
    icon: AccountRoutes.settings.Icon,
  },
  theme: PageAccountStyles,
  header: {
    visible: true,
    coloring: Coloring.Blue,
  },
  breadcrumbs: {
    visible: true,
    coloring: Coloring.BlueDark,
  },
};

/**
 * Page class declaration
 * @description contains application timeline
 */
class Settings extends React.Component<WithStyles<PageAccountStyleRules>> {

  handleChange = name => event => {

  }

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
        {/* MAIN SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Label headline={'System adjustment'} description={'Be carefull all changes will be reflected immediately'} />
        </Paper>
        {/* Language  */}
        <Paper elevation={0} square className={classes.paper}>
          <Paper elevation={0} square className={classes.paper}>
            <Label headline={'Language'} description={''} />
          </Paper>
        </Paper>
        {/* PASSWORD SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Label headline={'Password change'} description={'Type your old password for security and set the new one carefully'} />
          <Button variant="contained" color="primary" fullWidth size="medium">
            Save new password
          </Button>
        </Paper>

        {/* VERIFICATION SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Label headline={'Verification'} description={'More you are verified more community trust you'} />
        </Paper>

        {/* VERIFICATION SECTION */}
        <Paper elevation={0} square className={classes.paper}>
          <Label headline={'Account cancellation'} description={'All data will be permanently deleted in 14 days after cancel request'} />
          <Button variant="contained" color="primary" fullWidth size="medium">
            Cancel account
          </Button>
        </Paper>
      </div>
    );
  }
}

const withLayout = createLayout(layoutProps);
export default withLayout(Settings);
