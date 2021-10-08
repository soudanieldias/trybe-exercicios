import React from 'react';
import PropTypes from 'prop-types';

class HeaderClass extends React.Component {
    render () {
        const allProps = this.props;
        const { propTexto, propNumber } = allProps;
        return (
        
        <div>
            <h3> Teste de Props </h3>
            <p> Key propTexto: {propTexto} </p>
            <p> Key propNumber: {propNumber} </p>
        </div>
        
        );
    }
}

HeaderClass.propTypes = {
    allProps: PropTypes.shape({
        propTexto: PropTypes.string.isRequired,
        propNumber: PropTypes.number.isRequired,
    }),
}

export default HeaderClass