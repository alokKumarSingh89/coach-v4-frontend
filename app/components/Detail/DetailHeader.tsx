import { WithStyles, Typography, Button } from '@material-ui/core';
import { DetailHeaderStyleRules, DetailHeaderStyles, createTheme } from 'theme';
import { Coloring } from 'lib/types';
import { ButtonClose } from 'components';

/**
 * Single menu section interface
 */
interface DetailHeaderProps {
  onCloseClick?: () => void;
  title: string;
  subtitle: string;
  media: string;
  coloring: Coloring;
  Icon: any;
}

/**
 * Single menu section component
 */
const DetailHeader: React.SFC<DetailHeaderProps & WithStyles<DetailHeaderStyleRules>> = (props) => {
  const {
    classes, title, subtitle, media, coloring, Icon, onCloseClick
  } = props;

  const styles = {
    root: {
      backgroundImage: `url(${media})`,
    },
  };

  return (
    <div
      className={classes.root}
      data-coloring={coloring}
      data-coloring-mode="gradient"
      style={styles.root}
    >
      <div className={classes.label}>
        <Icon className={classes.icon} />
        <Typography variant="display3" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="display1" className={classes.subtitle} component="div">
          {subtitle}
        </Typography>
      </div>

      <ButtonClose onClick={onCloseClick} />
    </div>
  );
};

/**
 * Exports
 */
const withTheme = createTheme(DetailHeaderStyles);
const Component = withTheme(DetailHeader);

export { Component as DetailHeader, DetailHeaderProps };
