import { ViewLayout, Coloring } from 'lib/types';
import {
  Card, CardMedia, CardContent, Typography, WithStyles,
} from '@material-ui/core';
import {
  PreviewStyleRules,
  createTheme,
  PreviewStyles,
  PreviewPictogramStyleRules,
  PreviewPictogramStyles,
} from 'theme';
import { EntryModel } from 'lib/models';

/**
 * ENTRY PREVIEW TAG props interface
 */
interface PreviewPictogramProps {
  coloring: Coloring;
  Icon: any;
}

const PreviewPictogram: React.SFC<PreviewPictogramProps & WithStyles<PreviewPictogramStyleRules>> = (props) => {
  const { classes, coloring, Icon } = props;
  return (
    <div data-coloring={coloring} data-coloring-mode="gradient" className={classes.root}>
      <Icon className={classes.icon} />
    </div>
  );
};

/**
 * ENTRY PREVIEW props interface
 */
interface PreviewProps {
  onOpen: (item: any) => void;
  item: any;
  layout?: ViewLayout;
}

/**
 * ENTRY PREVIEW component
 */
const Preview: React.SFC<PreviewProps & WithStyles<PreviewStyleRules>> = (props) => {
  const {
    classes, item, onOpen, layout = ViewLayout.Grid,
  } = props;
  const model = new EntryModel(item);

  const withPictogramTheme = createTheme(PreviewPictogramStyles);
  const Pictogram = withPictogramTheme(PreviewPictogram);

  return (
    <Card
      elevation={0}
      className={classes.root}
      data-layout={layout}
      onClick={() => onOpen(model.getId())}
    >
      <CardMedia className={classes.media} image={model.getCover('xs')} title={model.getTitle()} />
      <CardContent className={classes.content}>
        <Typography
          className={classes.purpose}
          variant="display1"
          component="div"
          data-coloring={model.getColoring()}
        >
          {model.getPurpose()}
        </Typography>
        <Typography className={classes.description} variant="display2" component="div">
          {model.getTitle()}
        </Typography>
        <Pictogram classes={{ root: classes.pictogram }} coloring={model.getColoring()} Icon={model.getPictogram()} />
      </CardContent>
    </Card>
  );
};

/**
 * Exports
 */
const withTheme = createTheme(PreviewStyles);
const Component = withTheme(Preview);

export { Component as Preview, PreviewProps, PreviewPictogram, PreviewPictogramProps };