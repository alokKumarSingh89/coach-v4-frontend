import { Button, WithStyles } from '@material-ui/core';
import { PlaylistAddRounded as AddIcon } from '@material-ui/icons';
import { createTheme, ButtonFabStyles, ButtonFabStyleRules } from 'theme';

/**
 * Single menu section interface
 */
interface ButtonFabProps {
  onClick?: () => void;
}

/**
 * Close button wrapper used on overlays or popups
 * ---
 * 1. Adds possibility to render children element only when badgeContent is false
 */
const ButtonClose: React.SFC<ButtonFabProps & WithStyles<ButtonFabStyleRules>> = (props) => {
  const { onClick, classes } = props;
  return (
    <div className={classes.root}>
      <Button variant="fab" className={classes.button} onClick={onClick}>
        <AddIcon />
      </Button>
    </div>
  );
};

/**
 * Exports
 */
const withTheme = createTheme(ButtonFabStyles);
const Component = withTheme(ButtonClose);

export { Component as ButtonFab, ButtonFabProps };
