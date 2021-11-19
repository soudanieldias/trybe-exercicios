import React, { Component } from 'react';
import { Map, Marker } from 'pigeon-maps';

class ISSLocation extends Component {
  render() {
    const Latitude = 0;
    const Longitude = 0;

    return (
        <main>
          <div className="map">
            <Map
              center={ [0, 0] }
              defaultWidth={ 450 }
              height={ 450 }
              minZoom={ 1.5 }
              maxZoom={ 8 }
              zoom={ 1.5 }
            >
              <Marker anchor={ [Latitude, Longitude] } />
            </Map>
            
          </div>
        </main>
    )
  }
}

export default ISSLocation;