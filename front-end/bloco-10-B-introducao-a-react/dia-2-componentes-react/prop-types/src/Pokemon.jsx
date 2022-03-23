import React from "react";
// import PropTypes from "prop-types"

class Pokemon extends React.Component {
    render() {
        const {pokemon} = this.props;
        const {id, name, type, averageWeight, image} = pokemon;
        return (
            
            <div className="pokemon-rendered">
                {/* <div>Div que Renderiza o Pokémon</div> */}
                <img src={image} alt="" srcset="" />
                {/* <div>Id: {id}</div> */}
                {/* <div>Nome: {name}</div> */}
                {/* <div>Tipo: {type}</div> */}
                {/* <div>Peso: {averageWeight.value} {averageWeight.measurementUnit}</div> */}
                <div>{id}</div>
                <div>{name}</div>
                <div>{type}</div>
                <div>{averageWeight.value} {averageWeight.measurementUnit}</div>
            </div>
        );
    }
}

export default Pokemon;
