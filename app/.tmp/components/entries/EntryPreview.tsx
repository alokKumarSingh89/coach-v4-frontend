import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  WithStyles,
} from '@material-ui/core';
import { entryPreviewStyles, useTheme } from '@assets/theme';

import { EntryPreviewProps } from '@assets/declarations';
import { Favorite as FavoriteIcon } from '@material-ui/icons';
import React from 'react';
import EntryModel from '@lib/models/EntryModel';
import { EntryPreviewStyles } from '@assets/theme/jss/components/entries/entryPreviewStyles';

/**
 * Components specific theme styles
 */
const withTheme = useTheme(entryPreviewStyles);

/**
 * Entry preview
 */
class EntryPreview extends React.Component<EntryPreviewProps & WithStyles<EntryPreviewStyles>> {
  /**
   * Handles card click
   */
  handleCardClick() {
    const { item } = this.props;
    this.props.onOpen(item);
  }

  render() {
    const { classes, layout = 'grid' } = this.props;
    const model = new EntryModel(this.props.item);
    
    return (
      <Card className={classes.root} data-layout={layout} onClick={this.handleCardClick.bind(this)}>
        <CardMedia
          className={classes.media}
          image={model.getCover('xs')}
          title={model.getTitle()}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.type} variant="caption">
            <FavoriteIcon className={classes.typeIcon} />
            <span className={classes.typeText}>
              {model.getType()}
            </span>
          </Typography>
          <Typography className={classes.headline} variant="headline" component="h2">
            {model.getTitle()}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withTheme(EntryPreview);
