import { combineReducers } from 'redux';
import { rootReducer as entriesReducer } from '@lib/models/EntryModel';

export default combineReducers({
  entries: entriesReducer,
});
