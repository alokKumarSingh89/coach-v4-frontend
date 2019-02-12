import { SentimentDissatisfiedRounded as EmptyIcon, SentimentSatisfiedRounded as FinishedIcon } from '@material-ui/icons';

import { CircularProgress } from '@material-ui/core';
import EntryPreview from '@components/entries/EntryPreview';
import Filter from '@components/Filter';
import { FilterQuery } from '@assets/declarations';
import Indicator from '@components/Indicator';
import React from 'react';
import Scroller from '@components/Scroller';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as entriesActions } from '@lib/models/EntryModel';
import EntryDialog from '@components/entries/EntryDialog';

/**
 * Tabs
 */
const filterPresets = [
  {
    label: 'All',
    value: 'any',
  },
  {
    label: 'Map',
    value: 'localizable',
  },
  {
    label: 'Magazine',
    value: 'blog',
  },
  {
    label: 'Comments',
    value: 'comment',
  },
  {
    label: 'Wisdoms',
    value: 'wisdom',
  },
  {
    label: 'Help',
    value: 'help',
  },
  {
    label: 'Jobs',
    value: 'job',
  },
];

/**
 * Website home page component
 * ---
 * This is the first page user will see when visit project url.
 * @version 1.0
 * @namespace pages
 */
class Timeline extends React.Component {

  state = {
    detail: {
      id: null,
      isOpen: false,
    },
    query: {
      keyword: '',
      preset: 'any',
    },
    pagination: {
      current: 0,
      last: 4,
      first: 1,
    },
  }

  /**
   * Constructor
   */
  constructor(props) {
    super(props);

    // bind this to all pagination handlers
    this.handleDataNext = this.handleDataNext.bind(this);
    this.handleDataRefresh = this.handleDataRefresh.bind(this);
    this.handleDataSearch = this.handleDataSearch.bind(this);

    // bind this to all detail handler
    this.handleDetailOpen = this.handleDetailOpen.bind(this);
    this.handleDetailClose = this.handleDetailClose.bind(this);
  }

  /**
   * Handles detail open
   */
  handleDetailOpen(item) {
    this.setState({
      detail: {
        isOpen: true,
        item: item,
      }
    });
  }

  /**
   * Handles detail open
   */
  handleDetailClose() {
    this.setState({
      detail: {
        isOpen: false,
      }
    });
  }

  /**
   * Handles data refresh with current fetcher query
   */
  handleDataRefresh() {
    const { actions } = this.props;
    const { pagination } = this.state;

    pagination.current = 1;

    actions.fetchEntries(false, {
      query: {
        ...this.state.query,
        _page: 1,
        _limit: 3,
      },
    });

    this.setState({pagination});
  }

  /**
   * Handles data search based on given fetcher query
   */
  handleDataSearch(query: FilterQuery) {
    const { actions } = this.props;
    const { pagination } = this.state;

    pagination.current = 1;

    actions.fetchEntries(false, {
      query: {
        ...query,
        _page: 1,
        _limit: 3,
      },
    });

    this.setState({
      query,
      pagination
    });
  }

  /**
   * Handles data next page load
   */
  handleDataNext() {
    const { actions } = this.props;
    const { pagination } = this.state;

    const nextPage = pagination.current + 1;

    pagination.current = nextPage;

    actions.fetchEntries(false, {
      query: {
        ...this.state.query,
        _page: nextPage,
        _limit: 3,
      },
    });

    this.setState({
      pagination
    });
  }

  /**
   * Render method
   */
  render() {
    const { classes, entries } = this.props;

    /**
     * Render method
     */
    return (
      <div className={classes.root}>
        
        <Filter
          classes={{root: classes.filter}}
          events={{
            onSubmit: this.handleDataSearch,
          }}
          placeholder="Search..."
          presets={filterPresets}
        />

        <Scroller
          classes={{root: classes.scroller}}
          messages={{
            error: 'Looks like an error. Try it again.',
            loading: 'Loading...',
            finished: 'Wow! Your reached the end of this list.',
            empty: 'Booo. No data found.',
          }}
          events={{
            onInitial: this.handleDataRefresh,
            onRefresh: this.handleDataRefresh,
            onNext: this.handleDataNext,
          }}
          views={{
            item: (item: any) => <EntryPreview key={item.id} item={item} onOpen={this.handleDetailOpen} />,
            loading: (msg, page) => <Indicator message={msg} isInline={page <= this.state.pagination.first} icon={CircularProgress} />,
            finished: (msg) => <Indicator message={msg} isInline={true} icon={FinishedIcon} />,
            empty: (msg) => <Indicator message={msg} isInline={false} icon={EmptyIcon} />,
          }}
          fetcher={{
            data: entries.items,
            inProgress: entries.isFetching,
          }}
          pagination={this.state.pagination}
          direction="y"
        />

        <EntryDialog item={this.state.detail.item} isOpen={this.state.detail.isOpen} onClose={this.handleDetailClose} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { entries: state.entries };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...entriesActions }, dispatch),
});

const withConnect = connect(
  // mapStateToProps
  mapStateToProps,
  // mapDispatchToProps
  mapDispatchToProps,
);

export default withConnect(Timeline);
