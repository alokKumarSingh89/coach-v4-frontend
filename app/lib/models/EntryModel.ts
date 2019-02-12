import _ from 'lodash';
import { createResource } from 'redux-rest-resource';

import { Model, ModelInterface } from 'lib/models/Model';

/**
 * Entry interfaces
 */
interface EntryModelInterface extends ModelInterface {
  getTitle: () => string;
  getPurpose: () => string;
  getContent: () => string;
  getCover: (size: string) => string;
}

/**
 * Entry model class
 */
class EntryModel extends Model implements EntryModelInterface {
  /**
   * Resource name
   */
  static resourceName = 'entry';

  /**
   * Constructor
   */
  constructor(props) {
    super(props);
  }

  /**
   * Retrieves entry title
   */
  getTitle(): string {
    return this.getAttribute('title');
  }

  /**
   * Retrieves purpose
   */
  getPurpose(): string {
    return this.getAttribute('purpose');
  }

  /**
   * Retrieves purpose
   */
  getContent(): string {
    return this.getAttribute('content');
  }

  /**
   * Retrieves entry cover
   */
  getCover(size: string): string {
    const cover = this.getAttribute('cover', {});
    return cover[size] ? cover[size] : null;
  }
}

/**
 * Resources
 */
const hostUrl = 'https://my-json-server.typicode.com/svobik7/json-server';

const { types, actions, rootReducer } = createResource({
  name: EntryModel.resourceName,
  url: `${hostUrl}/entries/:id`,
  pluralName: 'entries',
  actions: {
    fetch: {
      reduce: (state, action) => {
        switch (action.status) {
          case 'pending':
            return {
              ...state,
              isFetching: true,
              didInvalidate: false,
            };
          case 'resolved':
            return {
              ...state,
              isFetching: false,
              didInvalidate: false,
              items: _.concat(state.items, action.body.items || action.body),
              lastUpdated: action.receivedAt,
            };
          case 'rejected':
            return {
              ...state,
              isFetching: false,
              didInvalidate: false,
            };
          default:
            return state;
        }
      },
    },
  },
});

/**
 * Exports
 */
export { EntryModel, EntryModelInterface, rootReducer as EntryReducer };
