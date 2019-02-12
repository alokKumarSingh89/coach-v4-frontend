import { WithStyles } from '@material-ui/core';
import { AxisDirection } from 'lib/types';
import {
  ScrollerIndicatorStyleRules,
  ScrollerStyleRules,
  ScrollerStyles,
  createTheme,
  ScrollerIndicatorStyles,
} from 'theme';
import Waypoint from 'react-waypoint';
import { Fragment, ReactNode } from 'react';

// TYPES
type ScrollerMessageCallback = (page) => ReactNode;

/**
 * SCROLLER FETCHER interface
 */
interface ScrollerFetcher {
  page: number;
  items: Array<ScrollerItem>;
  isFetching: boolean;
  isFailed: boolean;
  isFinished: boolean;
}

/**
 * SCROLLER MESSAGES interface
 */
interface ScrollerMessages {
  finished: ScrollerMessageCallback | string;
  empty: ScrollerMessageCallback | string;
  loading?: ScrollerMessageCallback | string;
  error?: ScrollerMessageCallback | string;
}

/**
 * SCROLLER EVENTS inteface
 */
interface ScrollerEvents {
  onRefresh?: () => void;
  onNext: () => void;
}

/**
 * SCROLLER ITEM interface
 */
interface ScrollerItem {
  id: number;
  [key: string]: any;
}

/**
 * SCROLLER INDICATOR props interface
 */
interface ScrollerIndicatorProps {
  fetcher: ScrollerProps['fetcher'];
  messages: ScrollerProps['messages'];
}

/**
 * Scroller indicator component
 */
const ScrollerIndicator: React.SFC<
ScrollerIndicatorProps & WithStyles<ScrollerIndicatorStyleRules>
> = (props) => {
  const { fetcher, messages } = props;

  // message helper
  const getMessage = () => {
    // if not loading and error - show error
    if (!fetcher.isFetching && fetcher.isFailed) {
      return messages.error;
    }

    // if not loading and finished - show finished
    if (!fetcher.isFetching && fetcher.isFinished) {
      return messages.finished;
    }

    // if not loading and empty - show empty
    if (!fetcher.isFetching && !fetcher.items.length) {
      return messages.empty;
    }

    return messages.loading;
  };

  // layout helper
  const getLayout = () => {
    // if loading initial - show loading in block
    if (fetcher.isFetching && !fetcher.page) {
      return 'block';
    }

    return 'inline';
  };

  // cache indicator message
  const message = getMessage();

  return (
    <div data-layout={getLayout()}>
      <div>
        {typeof message === 'string' ? message : message(fetcher.page)}
      </div>
    </div>
  );
};

/**
 * SCROLLER WAYPOINT props interface
 */
interface ScrollerWaypointProps {
  onEnter: () => void;
  fetcher: ScrollerProps['fetcher'];
}

/**
 * Scroller waypoint component
 */
const ScrollerWaypoint: React.SFC<ScrollerWaypointProps> = (props) => {
  const { fetcher, onEnter } = props;

  // render condition helper
  const shouldRender = () => {
    // prevents waypoint from rendering when fetcher is in progress
    if (fetcher.isFetching) {
      return false;
    }

    // prevents waypoint from rendering when end is reached
    if (fetcher.isFinished) {
      return false;
    }

    // prevents waypoint from rendering when error is occured
    if (fetcher.isFailed) {
      return false;
    }

    // prevents waypoint from rendering when no data was found
    if (!fetcher.items.length) {
      return false;
    }

    return true;  
  };

  // render waypoint
  return shouldRender() ? <Waypoint onEnter={onEnter} /> : null;
};

/**
 * SCROLLER LIST props interface
 */
interface ScrollerListProps {
  items: ScrollerFetcher['items'];
  template: ScrollerProps['template'];
}

/**
 * SCROLLER LIST component
 */
const ScrollerList: React.SFC<ScrollerListProps> = (props) => {
  const { items, template } = props;

  return (
    <Fragment>
      {items.map(item => template(item))}
    </Fragment>
  );
};

/**
 * SCROLLER props interfaces
 */
interface ScrollerProps {
  template: (item: ScrollerItem) => ReactNode;
  direction: AxisDirection;
  fetcher: ScrollerFetcher;
  events?: ScrollerEvents;
  messages?: ScrollerMessages;
}

/**
 * SCROLLER component
 */
const Scroller: React.SFC<ScrollerProps & WithStyles<ScrollerStyleRules>> = (props) => {
  const {
    classes, direction, fetcher, messages, template, events,
  } = props;

  const withIndicatorTheme = createTheme(ScrollerIndicatorStyles);
  const ScrollerIndicatorComponent = withIndicatorTheme(ScrollerIndicator);

  return (
    <div className={classes.root} data-direction={direction}>
      <ScrollerList key="items" items={fetcher.items} template={template} />
      <ScrollerWaypoint key="waypoint" fetcher={fetcher} onEnter={events.onNext} />
      <ScrollerIndicatorComponent key="indicator" fetcher={fetcher} messages={messages} />
    </div>
  );
};

Scroller.defaultProps = {
  messages: {
    error: 'Looks like an error. Try it again.',
    loading: 'Loading...',
    finished: 'Wow! Your reached the end of this list.',
    empty: 'Booo. No data found.',
  },
};

/**
 * Exports
 */
const withTheme = createTheme(ScrollerStyles);
const Component = withTheme(Scroller);

export { Component as Scroller, ScrollerProps };