import _ from 'lodash';
import { createResource } from 'redux-rest-resource';
import { viewLayout } from '@assets/declarations';

const hostUrl = 'https://my-json-server.typicode.com/svobik7/json-server';

/**
 * Entry interfaces
 */
export interface EntryInterface {
  getId: () => number;
  getType: () => string;
  getCover: (size: string) => string;
  getTitle: () => string;
  getLayout: () => viewLayout;
}

/**
 * Entry model class
 */
export default class EntryModel implements EntryInterface {
  /**
   * Properties
   */
  private id: number;

  private type: string;

  private attributes: Record<string, any>;

  // api resource name
  static resourceName = 'entry';

  constructor(props) {
    const { id = null, type = null } = props;
    this.id = id;
    this.type = type;
    this.attributes = props;
  }

  /**
   * Retrieves model primary identification
   */
  getId(): number {
    return this.id;
  }

  /**
   * Return entry type
   */
  getType(): string {
    return this.type;
  }

  /**
   * Retrieves entry title
   */
  getTitle(): string {
    return this.attributes.title ? this.attributes.title : '';
  }

  /**
   * Retrieves entry cover
   */
  getCover(size: string): string {
    const cover = this.attributes.cover || {};
    return cover[size] ? cover[size] : null;
  }

  /**
   * Retrieves entry layout
   */
  getLayout(): viewLayout {
    return this.attributes.layout ? this.attributes.layout : 'grid';
  }
}

/**
 * Resources
 */
export const { types, actions, rootReducer } = createResource({
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
