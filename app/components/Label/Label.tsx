import { WithStyles, Typography } from '@material-ui/core';
import { LabelStyles, LabelStyleRules, createTheme } from 'theme';

interface LabelProps {
  headline: string;
  description: string;
}

/**
 * Label block with headline and description
 */
const Label: React.SFC<LabelProps & WithStyles<LabelStyleRules>> = (props) => {
  const { headline, description, classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="headline" className={classes.title} component="div">
        {headline}
      </Typography>
      <Typography variant="subheading" className={classes.description} component="div">
        {description}
      </Typography>
    </div>
  );
};

const withTheme = createTheme(LabelStyles);
const Component = withTheme(Label);

export { Component as Label, LabelProps };
