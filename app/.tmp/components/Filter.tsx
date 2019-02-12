import { FilterPreset, FilterProps, FilterState } from '@assets/declarations';
import {
  InputAdornment,
  Tab,
  Tabs,
  TextField,
} from '@material-ui/core';
import { SearchRounded as SearchIcon, TuneRounded as TuneIcon, CancelRounded as CancelIcon } from '@material-ui/icons';
import { filterStyles, useTheme } from '@assets/theme';

import React from 'react';

/**
 * Component custom theme
 */
const withTheme = useTheme(filterStyles);

/**
 * Filter component
 * ---
 * 1. Handles data filtering & sorting
 */
class Filter extends React.Component<FilterProps, FilterState> {
  /**
   * Component internal state
   */
  state: FilterState = {
    currentPreset: 'any',
    query: {
      keyword: null,
      params: {},
    },
  };

  constructor(props) {
    super(props);

    this.handlePresetChange = this.handlePresetChange.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Handles presets tabs change
   */
  handlePresetChange(event, value) {
    this.setState({ currentPreset: value });
  }

  /**
   * Handles keyword input change
   */
  handleKeywordChange(event) {
    const { query } = this.state;
    query.keyword = event.target.value;

    this.setState({ query });
  }

  /**
   * Handles filter submit
   */
  handleSubmit() {
    const { events } = this.props;
    events.onSubmit(this.state.query);
  }

  /**
   * Render method
   */
  render() {
    // props destruction
    const { classes, placeholder, presets } = this.props;

    return (
      <div className={classes.root}>
        {/* KEYWORD SECTION */}
        <TextField
          classes={{
            root: classes.formControlRoot,
          }}
          fullWidth
          placeholder={placeholder}
          InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.keywordRoot,
              input: classes.keywordInput,
            },
            startAdornment: (
              <InputAdornment className={classes.inputAdornmentStart} position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <div>
              <InputAdornment className={classes.inputAdornmentEnd} position="end">
                <TuneIcon />
              </InputAdornment>
              </div>
            ),
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.keywordFormLabel,
          }}
          onChange={this.handleKeywordChange}
        />

        {/* PRESET SECTION */}
        <Tabs
          value={this.state.currentPreset}
          onChange={this.handlePresetChange}
          scrollable
          scrollButtons="off"
          indicatorColor="secondary"
          classes={{
            root: classes.presetsRoot,
            scroller: classes.presetsScroller,
            indicator: classes.presetsIndicator,
            flexContainer: classes.presetsFlexContainer,
          }}
        >
          {presets.map((preset: FilterPreset, index) => (
            <Tab
              key={index}
              label={preset.label}
              value={preset.value}
              classes={{
                label: classes.presetsItemLabel,
                selected: classes.presetsSelectedItem,
              }}
            />
          ))}
        </Tabs>
      </div>
    );
  }
}

export default withTheme(Filter);
