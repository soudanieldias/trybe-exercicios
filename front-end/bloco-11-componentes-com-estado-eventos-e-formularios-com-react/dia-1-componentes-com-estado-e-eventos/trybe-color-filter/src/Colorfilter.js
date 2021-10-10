import React from 'react';
import colors from './colors';
import imagem from './virginia-bg.jpg';

class Colorfilter extends React.Component {
  constructor () {
    super();
    
    this.state = {
      typedText: '',
      bgColor: 'none',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // console.log(event);
    this.setState({
      typedText: event.target.value,
      backgroundColor: 'none',
    })
  }

  render() {
    return (
      <div className="main">
        <input onChange={this.handleChange} value={this.state.typedText} type="text" />
        <div style={{backgroundColor: this.state.backgroundColor }} className="virginia">
        <img src={imagem} alt="Fundo Virgínia"></img>
        </div>
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