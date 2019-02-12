import { createTheme } from 'theme';
import { WithStyles, Typography, Paper } from '@material-ui/core';
import { BreadcrumbsStyles, BreadCrumbsStyleRules } from 'theme';
import { Coloring } from 'lib/types';

/**
 * Component props interface
 */
interface BreadcrumbsProps {
  label: string;
  coloring: Coloring;
}

/**
 * Component implementation
 */
const Breadcrumbs = (props: BreadcrumbsProps & WithStyles<BreadCrumbsStyleRules>) => {
  const { classes, label, coloring = Coloring.Blue } = props;
  return (
    <Paper
      elevation={0}
      square
      className={classes.root}
      data-coloring={coloring}
      data-coloring-mode="gradient"
    >
      <div className={classes.label}>
        <Typography component="div" className={props.classes.labelText}>
          {label}
        </Typography>
      </div>
    </Paper>
  );
};

/**
 * Exports
 */
const withTheme = createTheme(BreadcrumbsStyles);
const Component = withTheme(Breadcrumbs);

export { Component as Breadcrumbs, BreadcrumbsProps };
