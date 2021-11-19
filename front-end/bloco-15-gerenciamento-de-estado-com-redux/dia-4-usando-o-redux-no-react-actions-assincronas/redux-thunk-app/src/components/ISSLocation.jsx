import React, { Component } from 'react';
import { Map, Marker } from 'pigeon-maps';

class ISSLocation extends Component {
  render() {
    const {
      latitude,
      longitude,
    } = this.props;

    return (
        <main>
          <div className="Header">
            LATITUDE: { latitude }
            LONGITUDE: { longitude }
          </div>
          <div className="map">
            <Map
              center={ [0, 0] }
              defaultWidth={ 450 }
              height={ 450 }
              minZoom={ 1.5 }
              maxZoom={ 8 }
              zoom={ 1.5 }
            >
              <Marker anchor={ [latitude, longitude] } />
            </Map>
            
          </div>
        </main>
    )
  }
}

const mapStateToProps = (state) => ({
  latitude: state.coordinatesReducer.longitude,
  longitude: state.coordinatesReducer.longitude
})
export default ISSLocation;