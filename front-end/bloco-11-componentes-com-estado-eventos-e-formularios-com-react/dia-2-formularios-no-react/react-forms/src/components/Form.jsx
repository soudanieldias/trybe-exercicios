import React from 'react';
import '../Form.css';

class Form extends React.Component {

  constructor() {
    super();

    // this.function = this.function.bind(this);

    this.state = {
      estadoFavorito: '',
    };
  }

  // handleChange(event) {
  //   this.setState({
  //     estadoFavorito: event.target.value,
  //   });

  // Estrutura do Formulário
  render() {
      return (

        <div className="container">
          <form>
            <span>Formulário React!</span>

            <div>
            <label htmlFor="name">Nome Completo: </label>
            <input type="text" name="name" id="name" />
            </div>

            <div>
            <label htmlFor="age">Idade: </label>
            <input type="number" name="age" id="age" />
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
            <textarea name="aboutme" id="aboutme" cols="30" rows="10"></textarea>
            </div>

            <input type="submit" value="Enviar" />
          </form>
        </div>
      );
  }
}

export default Form;