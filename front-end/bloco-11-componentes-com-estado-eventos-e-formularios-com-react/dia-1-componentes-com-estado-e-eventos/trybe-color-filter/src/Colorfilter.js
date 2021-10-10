import React from 'react';
import colors from './colors';

class Colorfilter extends React.Component {
  constructor () {
    super();
    
  }
  render() {
    return (
      <div>
        <input type="text" />
        <ul>
          { colors.map( color =>
            <li key={color.hex}>
            <div style={{backgroundColor: color.hex }} className="display-color"></div>
            { color.name }
            </li>
            )}
        </ul>
      </div>
    )}
}

export default Colorfilter;