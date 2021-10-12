import React from 'react';
import '../Form.css';
import Estados from './Data.json';

class Form extends React.Component {
  
  constructor() {
    super();

    this.state = ({
      name: '',
      email: '',
      cpf: '',
      age: '',
      address: '',
    });
  }

  render() {
    // EStrutura HTML do Form
    return (
        <div className="formClass">
            <form>
              <fieldset>
                <legend>Dados Pessoais</legend>

                <label htmlFor="name">
                Nome: <input type="text" name="name" id="name" required />
                </label>
              
                <label htmlFor="email">
                  Email:
                  <input type="email" name="email" id="email" required />
                </label>

                <label htmlFor="cpf">
                  CPF:
                  <input type="number" name="cpf" id="cpf" required />
                </label>

                <label htmlFor="address">
                  Endereço: 
                  <input type="text" name="address" id="address" required />
                </label>

                <label htmlFor="state">
                  Estado:
                  <input type="text" name="state" id="state" required />
                </label>

                <label htmlFor="city">
                  Cidade: 
                  <input type="text" name="city" id="city" required />
                </label>

                <label htmlFor="type">
                  Tipo:
                  <input type="text" name="type" id="type" required />
                </label>

              </fieldset>

              <fieldset>
                <legend>Dados do Último Emprego</legend>

                <label htmlFor="">
                  <input type="text" name="" id="" />
                </label>

                <label htmlFor="">
                  <input type="text" name="" id="" />
                </label>

                <label htmlFor="">
                  <input type="text" name="" id="" />
                </label>
              </fieldset>

              <button type="submit">Enviar</button>
              <button type="reset">Limpar</button>
            </form>
        </div>
    );
  }
}

export default Form;
