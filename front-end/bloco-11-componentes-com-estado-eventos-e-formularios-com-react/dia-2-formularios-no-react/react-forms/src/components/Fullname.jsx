import React from 'react';

class Fullname extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <div>
        <label htmlFor="fullname">Nome Completo</label>
        <input
            type="text"
            name="fullname"
            id="fullname"
            autoComplete="off"
            placeholder="Nome Sobrenome"
            value={value}
            onChange={handleChange}
            maxLength="40"
        />
      </div>
    );
  }
}

export default Fullname;