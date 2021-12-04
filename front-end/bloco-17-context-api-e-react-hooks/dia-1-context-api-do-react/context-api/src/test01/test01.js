import { Component } from 'react'
import Test01Child from './test01_child';
import { MoneyProvider } from './moneyContext';

class Test01 extends Component {

  // Método Render
  render() {
    const money = { value: 1000000, currency: 'R$' };
    return(
      <MoneyProvider value={money}>
        <div>
          <p>ARQUIVO: Test01</p>
          <Test01Child />
      </div>
      </MoneyProvider>
    );
  }
}

export default Test01;