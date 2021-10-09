import React from "react";
import pokemons from "./Data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render() {
        return (
            <div>
                <div>Div que Renderiza os dados dos Pokémons</div>
                {/* <div>{pokemons}</div> */}
                <div>
                    { pokemons
                    .map( pokemon => {
                    <Pokemon pokemon={pokemon}/>
                    }

                )}
                </div>
            </div>
        );
    }
}

export default Pokedex;
