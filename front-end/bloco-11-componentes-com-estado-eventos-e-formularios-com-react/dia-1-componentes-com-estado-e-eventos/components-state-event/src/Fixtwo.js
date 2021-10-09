import React from 'react';

class Fixtwo extends React.Component {
  
  // Constructor
  constructor() {
    super();    
    // console.log("Componente sendo construído. [Fix Two]");
    this.state = {
      numberClicks: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  // Functions
  handleClick() {
    // this.setState({
    //   numberClicks: 1,
    // });
    this.setState((prevState, _props) => ({
      numberClicks: prevState.numberClicks + 1
    }));
  }
  resetState() {
    this.setState({
      numberClicks: 0,
    })
  }
  
  render() {
    // console.log(this);
    return (
        <div>
            <h3>Componentes com Estados e Eventos</h3>
            <button onClick={this.handleClick}>Botão ClickListener</button>
            <button onClick={this.resetState}>Reset ClickListener</button>
            <h1>Número Clicks</h1>
            <p>{this.state.numberClicks}</p>
        </div>
    )
  }
}

export default Fixtwo;
