import React from "react";
import pokemons from "./Data";
import Pokemon from "./Pokemon";
import './pokedex.css'

class Pokedex extends React.Component {
    render() {
        return (
            <div>
                {/* <div>Div que Renderiza os dados dos Pokémons</div> */}
                {/* <div>{pokemons}</div> */}
                <div id="pokemon-container">
                    { pokemons.map( pokemon => <Pokemon pokemon={pokemon}/>) }
                </div>
            </div>
        );
    }
}

export default Pokedex;
