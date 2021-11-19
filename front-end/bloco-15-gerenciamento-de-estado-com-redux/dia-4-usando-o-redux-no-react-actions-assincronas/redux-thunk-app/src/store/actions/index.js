export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const REQUEST_ISS_LOCATION_SUCCESS = 'REQUEST_ISS_LOCATION_SUCCESS';
export const REQUEST_ISS_LOCATION_ERROR = 'REQUEST_ISS_LOCATION_ERROR';

export function requestISSLocation( ) {
  return {
    type: REQUEST_ISS_LOCATION,
  };
}

export function requestISSLocationSuccess( ) {
  return {
    type: REQUEST_ISS_LOCATION_SUCCESS,
  };
}

export function requestISSLocationError( ) {
  return {
    type: REQUEST_ISS_LOCATION_ERROR,
  };
}