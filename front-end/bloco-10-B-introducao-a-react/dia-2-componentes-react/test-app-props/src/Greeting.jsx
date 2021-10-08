import React from 'react';

class Greeting extends React.Component {
  render() {
    const { name, lastName, array } = this.props;

    return <h1>Hello, {name} {lastName} {JSON.stringify(array, null)}</h1>;
  }
}

export default Greeting;