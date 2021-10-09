import React from 'react';
import './Fixtwo.css';

class Fixtwo extends React.Component {
  
  // Constructor
  constructor() {
    super();    
    // console.log("Componente sendo construído. [Fix Two]");
    this.state = {
      numberClicks: 0,
      clickState: "Nulo",
    }
    this.handleClick = this.handleClick.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  // Functions
  handleClick() {
    // this.setState({
    //   numberClicks: 1,
    // });
    const actualNumber = this.state.numberClicks;
    // console.log("Previous State:", actualNumber);
    console.log("Actual State:", actualNumber+1);
    
    if( actualNumber % 2 === 0) {

      this.setState((prevState, _props) => ({
        numberClicks: prevState.numberClicks + 1,
        clickState: "Ímpar",
      }));

    } else if( actualNumber % 2 !== 0){

      this.setState((prevState, _props) => ({
        numberClicks: prevState.numberClicks + 1,
        clickState: "Par",
      }));
    }
  }

  resetState() {
    this.setState({
      numberClicks: 0,
      clickState: "Nulo",
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
            <p className="numberDefault">{this.state.numberClicks}</p>
            <p>{this.state.clickState}</p>
        </div>
    )
  }
}

export default Fixtwo;
