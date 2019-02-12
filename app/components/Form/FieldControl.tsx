import { TextField, InputAdornment, WithStyles } from '@material-ui/core';
import { createTheme, FieldControlStyles, FieldControlStyleRules } from 'theme';
import { ComponentType } from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';

interface FieldControlProps extends TextFieldProps {
  AdornmentStart: ComponentType;
  AdornmentEnd: ComponentType;
}

const FieldControl: React.SFC<FieldControlProps & WithStyles<FieldControlStyleRules>> = (props) => {
  const {
    classes, AdornmentStart, AdornmentEnd, ...others
  } = props;
  return (
    <TextField
      {...others}
      fullWidth
      InputProps={{
        disableUnderline: true,
        classes: {
          root: classes.root,
          input: classes.input,
        },
        startAdornment: AdornmentStart ? (
          <InputAdornment className={classes.adornmentStart} position="start">
            <AdornmentStart />
          </InputAdornment>
        ) : (
          ''
        ),
        endAdornment: AdornmentEnd ? (
          <InputAdornment className={classes.adornmentEnd} position="end">
            <AdornmentEnd />
          </InputAdornment>
        ) : (
          ''
        ),
      }}
      InputLabelProps={{
        shrink: true,
        className: classes.label,
      }}
    />
  );
};

/**
 * Exports
 */
const withTheme = createTheme(FieldControlStyles);
const Component = withTheme(FieldControl);

export { Component as FieldControl, FieldControlProps };
