import React, { Component } from 'react';
import ContextTest from './context/contextTest';

class Test01Child extends Component {

  componentDidMount() {
    // console.log('Context: ');
    // console.log(this.context);
    // console.log('Money Context: ');
    // console.log(MoneyContext);
  }

  render() {
    // const { money } = this.context;
    return (
      <div>
        <p>ARQUIVO: Test01_Child</p>
        <ContextTest.Consumer>
          {(value) => { /* value = 1000000 */
          /* renderiza algo utilizando o valor recebido do contexto */
          return (
            <div>
              Teste { value.toFixed(2) }
            </div>
          );
          }}
        </ContextTest.Consumer>
      </div>
    )
  }
}

export default Test01Child;