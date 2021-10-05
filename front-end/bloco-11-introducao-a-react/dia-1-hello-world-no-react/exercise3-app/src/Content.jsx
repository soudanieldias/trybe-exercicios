import React from 'react';

const conteudos =
[
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
];

const renderContent = ({ conteudo, status, bloco }) => {
    return (
        // Deve retornar uma div com todos os dados na tela da pessoa usuária
        /**
         * EX:
         * Conteúdo: Nome
         * Bloco: Número
         * Status: Status Atual
         */
        <section>
            {/* <p>------</p> */}
            <p>Conteúdo: {conteudo}</p>
            <p>Bloco: {bloco}</p>
            <p>Status: {status}</p>
        </section>
    );
  }

class ContentClass extends React.Component {
    render() {
      return (
          <div className="content">
            {conteudos.map( (conteudo) => renderContent(conteudo))}
          </div>
      );
    }
  }
  
export default ContentClass;