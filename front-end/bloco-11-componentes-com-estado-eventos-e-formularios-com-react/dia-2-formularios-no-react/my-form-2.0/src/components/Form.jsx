import React from 'react';

class Form extends React.Component {
  render() {
    return (
        <div>
            <form>
              <button type="submit">Enviar</button>
              <button type="reset">Limpar</button>
            </form>
        </div>
    );
  }
}

export default Form;
