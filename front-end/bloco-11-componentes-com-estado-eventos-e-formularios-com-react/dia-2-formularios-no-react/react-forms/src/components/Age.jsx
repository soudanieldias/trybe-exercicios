import React from 'react';

class Age extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
        <div>
            <label htmlFor="age">Idade</label>
            <input
                type="number"
                name="age"
                id="age"
                min="14"
                max="55"
                autoComplete="off"
                placeholder="14"
                value={value}
                onChange={handleChange}
                required
            />
        </div>
    )
  }
}

export default Age;