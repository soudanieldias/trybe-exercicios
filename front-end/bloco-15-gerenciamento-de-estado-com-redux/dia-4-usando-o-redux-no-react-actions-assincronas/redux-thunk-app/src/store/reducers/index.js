import { combineReducers } from 'redux';
import coordinatesReducer from './coordinates';

const rootReducer = combineReducers({
  coordinates: coordinatesReducer,
});

export default rootReducer;