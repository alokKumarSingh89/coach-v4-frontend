import React, { Fragment } from 'react';
import { ScrollerProps, ScrollerState } from '@assets/declarations';
import { Typography, WithStyles } from '@material-ui/core';
import scrollerStyles, { ScrollerStyles } from '@assets/theme/jss/components/scrollerStyles';

import Waypoint from 'react-waypoint';
import { useTheme } from '@assets/theme';

/**
 * Component default theme styles
 */
const withTheme = useTheme(scrollerStyles);

/**
 * Scroller component handling lazy loading list pagination
 * ---
 * 1. Handles vertical infinite loading
 */
class Scroller extends React.Component<ScrollerProps & WithStyles<ScrollerStyles>, ScrollerState> {
  /**
   * After component is mounted into DOM
   * ---
   * 1. invokes initial data load
   */
  componentDidMount() {
    const { events } = this.props;
    events.onInitial();
  }

  /**
   * Handles waypoint screen enter
   * ---
   * Invokes data fetch when another fetching is not in progress
   */
  private handleWaypointEnter() {
    const { events } = this.props;
    events.onNext();
  }

  /**
   * Renders data
   * ---
   * Checks if data can be rendered otherwise
   * prevents rendering or show empty message
   */
  private renderData() {
    const { fetcher, messages, views, pagination } = this.props;

    // shows empty message when no data found
    if (!fetcher.inProgress && !fetcher.data.length && pagination.current > 0) {
      return views.empty(messages.empty);
    }

    // renders data using given view
    return fetcher.data.map(item => views.item(item));
  }

  /**
   * Render waypoint
   * ---
   * Checks if waypoint can be rendered
   */
  private renderWaypoint() {
    const { fetcher, pagination } = this.props;

    // prevents waypoint from rendering when fetcher is in progress
    if (fetcher.inProgress) {
      return;
    }

    // prevents waypoint from rendering when no page was fetched
    if (!pagination.current) {
      return;
    }

    // prevents waypoint from rendering when no page was fetched
    if (pagination.last == pagination.current) {
      return;
    }

    // prevents waypoint from rendering when no data found
    if (!fetcher.data.length) {
      return;
    }

    // render waypoint
    return <Waypoint onEnter={this.handleWaypointEnter.bind(this)} />;
  }

  /**
   * Renders indicator
   */
  private renderIndicator() {
    const { classes, messages, views, pagination } = this.props;

    const hasNextPage = pagination.last > pagination.current;

    return (
      <div className={classes.indicatorRoot}>
        {hasNextPage ? views.loading(messages.loading, pagination.current) : views.finished(messages.finished)}
      </div>
    );
  }

  /**
   * Render component
   */
  render() {
    const { classes, direction } = this.props;

    return (
      <div className={classes.root} data-direction={direction}>
        <Fragment key="data">{this.renderData()}</Fragment>
        <Fragment key="waypoint">{this.renderWaypoint()}</Fragment>
        <Fragment key="indicator">{this.renderIndicator()}</Fragment>
      </div>
    );
  }
}

export default withTheme(Scroller);
