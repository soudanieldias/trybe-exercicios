import React from 'react';

class Header extends React.Component {
    render () {
        const allProps = this.props;
        return (
        
        <div>
            <h3> Teste de Props </h3>
            <p> Key propTexto: {allProps.propTexto} </p>
            <p> Key propNumber: {allProps.propNumber} </p>
        </div>
        
        );
    }
}

export default Header