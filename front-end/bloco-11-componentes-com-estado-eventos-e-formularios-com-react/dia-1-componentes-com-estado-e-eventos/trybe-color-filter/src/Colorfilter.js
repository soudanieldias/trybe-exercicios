import React from 'react';
import colors from './colors';
import imagem from './virginia-bg.jpg';

class Colorfilter extends React.Component {
  constructor () {
    super();
    
    this.state = {
      typedText: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // console.log(event);
    this.setState({
      typedText: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.typedText} type="text" />
        <img src={imagem}></img>
        <ul>
          { colors.filter( color => color.name.includes(this.state.typedText))
          .map( color =>
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