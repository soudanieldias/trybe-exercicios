import React from "react";
import './RickAndMorty.css';

class RickAndMorty extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="main-content">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="characters-content" >
          { characters.map( character => {
            return (
              <div className="div-characters" key={character.name} >
                <h3> { character.name}</h3>
                <img src={character.image} alt={character.name} />
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Origin: {character.origin.name}</p>
                <p>Last Updated: {character.created}</p>
              </div>
            )
            })
          }
        </div>
      </div>
    );
  }
}

export default RickAndMorty;
