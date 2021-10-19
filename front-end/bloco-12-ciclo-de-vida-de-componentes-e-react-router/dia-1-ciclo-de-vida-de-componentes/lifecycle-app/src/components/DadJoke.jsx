import React from 'react';

class DadJoke extends React.Component {
    constructor() {
      super();
  
      this.clearJokes = this.clearJokes.bind(this);
      this.saveJoke = this.saveJoke.bind(this);
      this.renderJokeElement = this.renderJokeElement.bind(this);
  
      this.state = {
        jokeObj: undefined,
        loading: true,
        storedJokes: [],
      }
    }
  
    async fetchJoke() {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        jokeObj: requestObject,
      })
    }
  
    componentDidMount() {
      this.fetchJoke();
    }
  
    saveJoke() {
      //Salvando a piada no array de piadas existentes
      const { jokeObj, storedJokes } = this.state;
      this.setState({
        jokeObj: '',
        storedJokes: [...storedJokes, jokeObj],
      }, this.componentDidMount() )
      // storedJokes.push(jokeObj);
    }

    clearJokes() {
      const { storedJokes } = this.state;
      this.setState({ storedJokes: [] }, this.componentDidMount() )
    }

    renderJokeElement() {
      return (
        <div>
          <p>{this.state.jokeObj.joke}</p>
          <button type="button" onClick={this.saveJoke}>
            Salvar piada!
          </button>
          <button type="button" onClick={this.clearJokes}>
            Limpar piadas!
          </button>
        </div>
      );
    }
  
    render() {
      const { storedJokes, jokeObj } = this.state;
      const loadingElement = <span>Loading...</span>;

      return (
        <div>
          <span>
            {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
          </span>
  
        <span>RENDERIZAÇÃO CONDICIONAL</span>
        {/* {!this.state.jokeObj } */}
        { jokeObj && this.renderJokeElement() }
        { !jokeObj && loadingElement }
        </div>
      );
    }
  }

export default DadJoke;
