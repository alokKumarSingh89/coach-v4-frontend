import { KeyboardArrowDownRounded as ArrowIcon } from '@material-ui/icons';
import { FieldControl } from 'components';
import { MenuItem } from '@material-ui/core';

type SelectControlOption = {
  label: string;
  value: string | number;
};

interface SelectControlProps {
  label: string;
  name: string;
  value: string | number;
  options: Array<SelectControlOption>;
  helper?: string;
  onChange: (name) => void;
}

const SelectOption: React.SFC<SelectControlOption> = props => (
  <MenuItem key={props.value} value={props.value}>
    {props.label}
  </MenuItem>
);
const SelectControl: React.SFC<SelectControlProps> = (props) => {
  const { options, ...others } = props;
  return (
    <FieldControl
      select
      SelectProps={{
        IconComponent: ArrowIcon,
      }}
      {...others}
    >
      {options.map(option => (
        <SelectOption {...option} />
      ))}
    </FieldControl>
  );
};

SelectControl.defaultProps = {
  // placeholder: 'Search...',
};

// exports
// const withTheme = createTheme(SelectControlStyles);
// export default withTheme(SelectControl);

/*
import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  WithStyles,
  TextField,
  MenuItem,
} from '@material-ui/core';
import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@material-ui/icons';
import { SelectControlStyles, createTheme, SelectControlStyleRules } from 'theme';


export interface SelectControlProps {
}
const SelectControl: React.SFC<
SelectControlProps & WithStyles<SelectControlStyleRules>
> = (props) => {
  const {
    classes, label, name, value, options, onChange, helper,
  } = props;
  return (
    <TextField
      fullWidth
      id={name}
      select
      label={label}
      className={classes.root}
      value={value}
      onChange={onChange(name)}
      InputProps={{
        disableUnderline: true,
        classes: {
          root: classes.root,
          input: classes.input,
        },
      }}
      SelectProps={{
        MenuProps: {
          className: classes.menu,
        },
        IconComponent: KeyboardArrowDownIcon,
      }}
      helperText={helper}
      margin="normal"
    >
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

SelectControl.defaultProps = {
  helper: false,
};

const withTheme = createTheme(SelectControlStyles);
export default withTheme(SelectControl);
*/
