import { combineReducers } from 'redux';
import { CHANGE_DEFAULT } from '../actions';
import coordinatesReducer from './coordinates';

const INITIAL_STATE = {
  // Add Initial State Here
  defaultState: 'Default',
}

const mainReducer = (state = INITIAL_STATE, action) => {
  // Add Action Switchers Here
  switch (action.type) {
    case CHANGE_DEFAULT:
      return {
        ...state,
        defaultState: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers(mainReducer, coordinatesReducer);

export default rootReducer;