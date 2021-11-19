import { combineReducers } from 'redux';


const INITIAL_STATE = {
  // Add Initial State Here
  defaultState: 'Default',
}

const reducer = () => {
  // Add Action Switchers Here
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({reducer});

export default rootReducer;