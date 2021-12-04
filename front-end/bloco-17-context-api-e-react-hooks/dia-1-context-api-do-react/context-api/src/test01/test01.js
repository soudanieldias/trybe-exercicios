import { Component } from 'react'
import Test01Child from './test01_child';
import { MoneyProvider } from './moneyContext';

class Test01 extends Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      state01: '01',
      state02: '02',
      // money,
    };
  }
  // Método Render
  render() {
    const money = { value: 1000000, currency: 'R$' };
    const testState = this.state;
    return(
      <MoneyProvider value={{testState, money}}>
        <div>
          <p>ARQUIVO: Test01</p>
          <Test01Child />
      </div>
      </MoneyProvider>
    );
  }
}

export default Test01;