import { combineReducers } from 'redux';
// eslint-disable-next-line
import logReducer from './logReducer';

export default combineReducers({
  log: logReducer,
});
