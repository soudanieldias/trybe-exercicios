import React from 'react';

class Email extends React.Component {
  render() {
      const { value, handleChange } = this.props;
    return (
      <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={value}
            onChange={handleChange}
            placeholder="email@dominio.com"
            autoComplete="off"
            required
          />
      </div>
    )
  }
}

export default Email;