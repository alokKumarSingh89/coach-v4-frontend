import React from 'react';
import { Paper, WithStyles } from '@material-ui/core';
import { createTheme, DetailStyles, DetailStyleRules } from 'theme';
import { EntryModel, ModelResource } from 'lib/models';
import { DetailHeader, DetailContent } from 'components';

/**
 * DETAIL PROPS interface
 */
interface DetailProps {
  onClose: () => void;
  item: ModelResource;
}

/**
 * DETAIL
 */
class Detail extends React.Component<DetailProps & WithStyles<DetailStyleRules>> {
  /**
   * Model
   */
  private model: EntryModel;

  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.model = new EntryModel(props.item);
  }

  /**
   * Render method
   */
  render() {
    const { onClose, classes } = this.props;
    return (
      <Paper elevation={0} className={classes.paper}>
        <DetailHeader
          title={this.model.getTitle()}
          subtitle="Author name"
          media={this.model.getCover('xs')}
          coloring={this.model.getColoring()}
          Icon={this.model.getPictogram()}
          onCloseClick={onClose}
        />
        <DetailContent content={this.model.getContent()} collapsed={false} />
      </Paper>
    );
  }
}

/**
 * Exports
 */
const withTheme = createTheme(DetailStyles);
const Component = withTheme(Detail);

export { Component as Detail, DetailProps };
