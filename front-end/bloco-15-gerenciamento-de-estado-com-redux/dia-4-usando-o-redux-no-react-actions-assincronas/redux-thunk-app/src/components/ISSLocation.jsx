import React, { Component } from 'react';
import { Map, Marker } from 'pigeon-maps';
import { connect } from 'react-redux';
import { requestISSLocationThunk } from '../store/actions';
import getCurrentISSLocation from '../services/ISSApi';

class ISSLocation extends Component {
  componentDidMount() {
    const { requestISSLocation } = this.props;
    const ONE_SECOND = 1000;

    setInterval(() => {
      requestISSLocation();
    }, ONE_SECOND);
  }
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
  latitude: state.coordinates.longitude,
  longitude: state.coordinates.longitude,
})

const mapDispatchToProps = (dispatch) => ({
  requestISSLocation: () => dispatch(requestISSLocationThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);