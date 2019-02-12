import { combineReducers } from 'redux';
import { EntryReducer } from 'lib/models/EntryModel';

export default combineReducers({
  entries: EntryReducer,
});
