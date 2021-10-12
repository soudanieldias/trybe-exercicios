import React from 'react';
import '../Form.css';

class Form extends React.Component {

  constructor() {
    super();

    // this.function = this.function.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      fullname: '',
      age: 0,
      aboutme: '',
    };
  }

  handleChange(event) {

    this.setState({ [event.target.id]: event.target.value });

    // this.setState({
    //   event.target.id: event.target.value,
    // });
    // console.log('This: ', this);
    // console.log('Event: ', event);
    // console.log('Event: ', event.target.id);
  }

  // Estrutura do Formulário
  render() {
      return (

        <div className="container">
          <form>
            <span>Formulário React!</span>

            <div>
            <label htmlFor="fullname">Nome Completo: </label>
            <input type="text" name="fullname" id="fullname" value={this.state.fullname} onChange={this.handleChange} />
            </div>

            <div>
            <label htmlFor="age">Idade: </label>
            <input type="number" name="age" id="age" value={this.state.age} onChange={this.handleChange} />
            </div>

            <div>
            {/* <span>Sexo: </span> */}
            <label htmlFor="gender">Sexo: </label>
            <select name="gender">
            <option value="male" selected>Masculino</option>
            <option value="Female">Feminino</option>
            </select>
            </div>

            <div>
            <label htmlFor="aboutme">Sobre você: </label>
            <textarea name="aboutme" id="aboutme" value={this.state.aboutme} onChange={this.handleChange} cols="30" rows="10"></textarea>
            </div>

            <input type="submit" value="Enviar" />
          </form>
        </div>
      );
  }
}

export default Form;