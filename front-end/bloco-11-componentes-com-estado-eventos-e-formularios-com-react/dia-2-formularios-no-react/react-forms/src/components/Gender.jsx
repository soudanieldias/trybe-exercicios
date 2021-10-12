import React from 'react';

class Gender extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <div>
        <label htmlFor="gender">Sexo</label>
        <select name="gender" value={value} onChange={handleChange}>
        <option value="male" selected>Masculino</option>
        <option value="female">Feminino</option>
        </select>
      </div>
    )
  }
}

export default Gender;