import { Component } from 'react'
import Test01Child from './test01_child';
import ContextTest from './context/contextTest';

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
    return(
      <ContextTest.Provider value={money.value}>
        <div>
          <p>ARQUIVO: Test01</p>
          <Test01Child />
      </div>
      </ContextTest.Provider>
    );
  }
}

export default Test01;