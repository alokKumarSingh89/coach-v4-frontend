import { Button, WithStyles, IconButton } from '@material-ui/core';
import { CloseRounded as CloseIcon } from '@material-ui/icons';
import { ButtonCloseStyles, createTheme, ButtonCloseStyleRules } from 'theme';

/**
 * Single menu section interface
 */
interface ButtonCloseProps {
  onClick?: () => void;
}

/**
 * Close button wrapper used on overlays or popups
 * ---
 * 1. Adds possibility to render children element only when badgeContent is false
 */
const ButtonClose: React.SFC<ButtonCloseProps & WithStyles<ButtonCloseStyleRules>> = (props) => {
  const { onClick, classes } = props;
  return (
    <div className={classes.root}>
      <IconButton className={classes.button} onClick={onClick}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};

/**
 * Exports
 */
const withTheme = createTheme(ButtonCloseStyles);
const Component = withTheme(ButtonClose);

export { Component as ButtonClose, ButtonCloseProps };
