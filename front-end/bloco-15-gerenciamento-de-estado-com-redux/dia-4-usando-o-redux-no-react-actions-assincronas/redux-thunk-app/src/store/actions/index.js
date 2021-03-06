import getCurrentISSLocation from '../../services/ISSApi';

export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const REQUEST_ISS_LOCATION_SUCCESS = 'REQUEST_ISS_LOCATION_SUCCESS';
export const REQUEST_ISS_LOCATION_ERROR = 'REQUEST_ISS_LOCATION_ERROR';

export function requestISSLocation() {
  return {
    type: REQUEST_ISS_LOCATION,
  };
}

export function requestISSLocationSuccess(payload) {
  return {
    type: REQUEST_ISS_LOCATION_SUCCESS,
    payload,
  };
}

export function requestISSLocationError(payload) {
  return {
    type: REQUEST_ISS_LOCATION_ERROR,
    payload,
  };
}

export function requestISSLocationThunk() {
  return (dispatch) => {
    getCurrentISSLocation()
      .then((response) => {
        const coordinates = {
          latitude: Number(response.iss_position.latitude),
          longitude: Number(response.iss_position.longitude),
        };

        dispatch(requestISSLocationSuccess(coordinates));
      });
  };
}