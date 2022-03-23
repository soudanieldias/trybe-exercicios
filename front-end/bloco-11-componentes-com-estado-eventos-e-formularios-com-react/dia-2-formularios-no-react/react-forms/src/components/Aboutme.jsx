import React from "react";

class Aboutme extends React.Component {
  render() {
    const { value, handleChange} = this.props
    
    return (
      <div>
        <label htmlFor="aboutme">Sobre você</label>
        <textarea name="aboutme" id="aboutme" value={value} onChange={handleChange} cols="30" rows="10" required></textarea>
      </div>
    )
  }
}
export default Aboutme;