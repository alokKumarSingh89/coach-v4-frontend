import { WithStyles, Typography, Button } from '@material-ui/core';
import { DetailContentStyleRules, DetailContentStyles, createTheme } from 'theme';

/**
 * Single menu section interface
 */
interface DetailContentProps {
  content: string;
  collapsed: boolean;
}

/**
 * Single menu section component
 */
const DetailContent: React.SFC<
DetailContentProps & WithStyles<DetailContentStyleRules>
> = (props) => {
  const { classes, content, collapsed } = props;

  return (
    <div className={classes.root}>
      <Typography variant="body1" className={classes.content}>
        {content}
      </Typography>
    </div>
  );
};

/**
 * Exports
 */
const withTheme = createTheme(DetailContentStyles);
const Component = withTheme(DetailContent);

export { Component as DetailContent, DetailContentProps };
