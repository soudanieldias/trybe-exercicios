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
          <fieldset>
            <legend>Candidate-se à Vaga</legend>
            {/* <span>Formulário React!</span> */}

            <div>
              <label htmlFor="fullname">Nome Completo</label>
              <input type="text" name="fullname" id="fullname" autoComplete="off" placeholder="Nome Sobrenome" value={this.state.fullname} onChange={this.handleChange} />
            </div>

            <div>
              <label htmlFor="age">Idade</label>
              <input type="number" name="age" id="age" min="14" max="55" autoComplete="off" placeholder="14" value={this.state.age} onChange={this.handleChange} />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="email@dominio.com"/>
            </div>

            <div>
              <label htmlFor="gender">Sexo</label>
              <select name="gender" value={this.state.gender} onChange={this.handleChange}>
              <option value="male" selected>Masculino</option>
              <option value="female">Feminino</option>
              </select>
            </div>

            <div>
              <label htmlFor="aboutme">Sobre você</label>
              <textarea name="aboutme" id="aboutme" value={this.state.aboutme} onChange={this.handleChange} cols="30" rows="10"></textarea>
            </div>

            <div>
              <label htmlFor="check">Finalizado?</label>
              <input type="checkbox" name="check" id="check" value={this.state.check} onChange={this.handleChange} />
            </div>

            <div>
              <label htmlFor="file">Envie seu Currículo</label>
              <input type="file" name="file" id="file"/>
            </div>
            
            <input type="submit" value="Enviar" />
          </fieldset>
          </form>
        </div>
      );
  }
}

export default Form;