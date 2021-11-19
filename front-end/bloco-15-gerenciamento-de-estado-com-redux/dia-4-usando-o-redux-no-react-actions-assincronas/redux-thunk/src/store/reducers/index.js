import { combineReducers } from 'redux';
import { CHANGE_DEFAULT } from '../actions';

const INITIAL_STATE = {
  // Add Initial State Here
  defaultState: 'Default',
}

const reducer = (state = INITIAL_STATE, action) => {
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

const rootReducer = combineReducers({reducer});

export default rootReducer;