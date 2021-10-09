import React from "react";
import PropTypes from "prop-types"

class Pokemon extends React.Component {
    render() {
        const {pokemon} = this.props;
        const {id, name, type, averageWeight} = pokemon;
        return (
            
            <div>
                <div>Div que Renderiza o Pokémon</div>
                <div>Id: {id}</div>
                <div>Nome: {name}</div>
                <div>Tipo: {type}</div>
                {/* <div>Peso: {averageWeight.value} {averageWeight.measurementUnit}</div> */}
                ------
            </div>
        );
    }
}

export default Pokemon;
