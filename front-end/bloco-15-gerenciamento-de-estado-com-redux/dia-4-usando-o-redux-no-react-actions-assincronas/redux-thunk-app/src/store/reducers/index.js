import { combineReducers } from 'redux';
import { REQUEST_ISS_LOCATION, REQUEST_ISS_LOCATION_SUCCESS, REQUEST_ISS_LOCATION_ERROR } from '../actions';
import coordinatesReducer from './coordinates';

const INITIAL_STATE = {
  // Add Initial State Here
  defaultState: 'Default',
}

const mainReducer = (state = INITIAL_STATE, action) => {
  // Add Action Switchers Here
  switch (action.type) {
    case REQUEST_ISS_LOCATION_SUCCESS:
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers(mainReducer, coordinatesReducer);

export default rootReducer;