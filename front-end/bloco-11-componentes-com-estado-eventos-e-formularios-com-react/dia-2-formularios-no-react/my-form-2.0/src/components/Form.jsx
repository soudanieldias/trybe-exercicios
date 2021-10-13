import React from 'react';
import '../Form.css';
import Estados from './Data.json';

class Form extends React.Component {
  
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = ({
      name: '',
      email: '',
      cpf: '',
      age: '',
      address: '',
    });
  }

  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
    console.log("That's Working!");
  }

  render() {
    // EStrutura HTML do Form
    return (
        <div className="formClass">
            <form>
              <fieldset>
                <legend>Dados Pessoais</legend>

                <label htmlFor="name">
                Nome: <input
                        type="text"
                        name="name"
                        id="name"
                        maxLength="40"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                        />
                </label>
              
                <label htmlFor="email">
                  Email: <input
                          type="email"
                          name="email"
                          id="email"
                          maxLength="50"
                          required
                        />
                </label>

                <label htmlFor="cpf">
                  CPF: <input
                        type="number"
                        name="cpf"
                        id="cpf"
                        maxLength="11"
                        value={this.state.cpf}
                        onChange={this.handleChange}
                        required
                      />
                </label>

                <label htmlFor="address">
                  Endereço: <input
                              type="text"
                              name="address"
                              id="address"
                              maxLength="200"
                              value={this.state.address}
                              onChange={this.handleChange}
                              required
                            />
                </label>

                <label htmlFor="state">
                  Estado: <input
                            type="text"
                            name="state"
                            id="state"
                            required
                          />
                </label>

                <label htmlFor="city">
                  Cidade: <input
                            type="text"
                            name="city"
                            id="city"
                            maxLength="28"
                            required
                          />
                </label>

                <fieldset>
                  <legend>Tipo</legend>

                  <div className="label-radio">
                    <div>
                      <label htmlFor="house">Casa</label>
                      <input type="radio" name="type" id="house" checked />
                    </div>
                    <div>
                      <label htmlFor="apartment">Apartamento</label>
                      <input type="radio" name="type" id="apartment" />
                    </div>
                  </div>

                </fieldset>
              </fieldset>

              <fieldset>
                <legend>Dados do Último Emprego</legend>

                <label htmlFor="resume">
                  Resumo do currículo:<textarea name="resume" id="resume" cols="30" rows="10" maxLength="1000" required ></textarea>
                </label>

                <label htmlFor="office">
                  Cargo:<textarea name="office" id="office" cols="30" rows="10" maxLength="40" required ></textarea>
                </label>

                <label htmlFor="description">
                  Descrição do Cargo:<input type="text" name="description" id="description" maxLength="500" required />
                </label>

                {/* <label htmlFor="">
                  <input type="text" name="" id="" />
                </label> */}
              </fieldset>

              <button type="submit">Enviar</button>
              <button type="reset">Limpar</button>
            </form>
        </div>
    );
  }
}

export default Form;
