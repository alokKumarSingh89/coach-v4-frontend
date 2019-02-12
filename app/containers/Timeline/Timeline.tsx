import React from 'react';
import { Scroller, Preview, Detail } from 'components';
import { ScrollerFetcher, ScrollerItem } from 'components/Scroller/Scroller';

import _ from 'lodash';
import { Dialog, Hidden } from '@material-ui/core';

import data from 'tests/data.json';
import { AxisDirection } from 'lib/types';

/**
 * Website home page component
 * ---
 * This is the first page user will see when visit project url.
 * @version 1.0
 * @namespace pages
 */
class Timeline extends React.Component {
  /**
   * Timeline state
   */
  state = {
    selectedId: null,
  };

  /**
   * Constructor
   */
  constructor(props) {
    super(props);

    // bind this to all pagination handlers
    this.handleDataNext = this.handleDataNext.bind(this);
    this.handleDataRefresh = this.handleDataRefresh.bind(this);

    // bind this to all detail handler
    this.handleDialogOpen = this.handleDialogOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
  }

  /**
   * Handles detail open
   */
  handleDialogOpen(id) {
    this.setState({
      selectedId: id,
    });
  }

  /**
   * Handles detail open
   */
  handleDialogClose() {
    this.setState({
      selectedId: null,
    });
  }

  /**
   * Handles data refresh with current fetcher query
   */
  handleDataRefresh() {
    console.log('Handling data REFRESH');
  }

  /**
   * Handles data next page load
   */
  handleDataNext() {
    console.log('Handling data NEXT');
  }

  /**
   * Render method
   */
  render() {
    const { fetcher } = this.props;

    // TODO: replace this with store value
    const selectedId = this.state.selectedId;
    // TODO: replace me with store load when connected to store
    const selectedItem = _.find(fetcher.items, item => item.id === selectedId);

    /**
     * Render method
     */
    return (
      <div>
        <Scroller
          direction={AxisDirection.Y}
          template={(item: ScrollerItem) => (
            <Preview key={item.id} item={item} onOpen={this.handleDialogOpen} />
          )}
          events={{
            onRefresh: this.handleDataRefresh,
            onNext: this.handleDataNext,
          }}
          fetcher={fetcher}
        />

        <Dialog
          open={Boolean(selectedId && selectedItem)}
          onClose={this.handleDialogClose}
          scroll="paper"
          fullScreen
        >
          <Detail item={selectedItem} onClose={this.handleDialogClose} />
        </Dialog>
      </div>
    );
  }
}

// TODO: remove default items when connected to store
Timeline.defaultProps = {
  fetcher: {
    page: 0,
    isFetching: false,
    isFailed: false,
    isFinished: false,
    items: data.timeline,
  } as ScrollerFetcher,
};

// TODO: connect me to redux store
export { Timeline };
