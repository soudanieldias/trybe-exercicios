import React, { Component } from 'react';
import MoneyContext from './moneyContext';

class Test01Child extends Component {
  static contextType = MoneyContext;

  componentDidMount() {
    // const money = this.context;

    // console.log(money) // { value: 1000000, currency: 'R$' }
    console.log('Context: ');
    console.log(this.context);
    console.log(MoneyContext);
  }

  render() {
    const { money } = this.context;

    return (
        <div>
          <p>ARQUIVO: Test01_Child</p>
          { ' ' }
          {/* { money['currency'] } */}
          { money.currency }
          { ' ' }
          {/* { money['value'] } */}
          { money.value }
          { ' ' }
        </div>
    )
  }
}

export default Test01Child;