import React from 'react';
import '../Form.css';

class Form extends React.Component {

  constructor() {
    super();

    // this.function = this.function.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      aboutme: '',
      age: '',
      check: false,
      fullname: '',
      gender: 'male',
    };
  }

  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });

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
            <input type="number" name="age" id="age" min="13" max="100" value={this.state.age} onChange={this.handleChange} />
            </div>

            <div>
            {/* <span>Sexo: </span> */}
            <label htmlFor="gender">Sexo: </label>
            <select name="gender" value={this.state.gender} onChange={this.handleChange}>
            <option value="male" selected>Masculino</option>
            <option value="female">Feminino</option>
            </select>
            </div>

            <div>
            <label htmlFor="aboutme">Sobre você: </label>
            <textarea name="aboutme" id="aboutme" value={this.state.aboutme} onChange={this.handleChange} cols="30" rows="10"></textarea>
            </div>

            <div>
            <label htmlFor="check">Finalizado?</label>
            <input type="checkbox" name="check" id="check" value={this.state.check} onChange={this.handleChange} />
            </div>

            <input type="submit" value="Enviar" />
          </form>
        </div>
      );
  }
}

export default Form;