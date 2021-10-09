import React from 'react';

class Fixone extends React.Component {
  
  // Constructor
  constructor() {
    super();
    console.log("Componente sendo construído. [Fix One]");
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
  }

  // Functions
  handleClickOne() {
    console.log('Clicou no botão 1!');
    console.log(this);
  }
  handleClickTwo() {
    console.log('Clicou no botão 2!');
    console.log(this);
  }
  handleClickThree() {
    console.log('Clicou no botão 3!');
    console.log(this);
  }
  render() {
    console.log(this);
    return (
        <div>
            <h3>This & Bind</h3>
            <button onClick={this.handleClickOne}>Botão 1</button>
            <button onClick={this.handleClickTwo}>Botão 2</button>
            <button onClick={this.handleClickThree}>Botão 3 </button>
        </div>
    )
  }
}

export default Fixone;
