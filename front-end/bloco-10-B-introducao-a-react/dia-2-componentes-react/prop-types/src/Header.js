import React from 'react';

class Header extends React.Component {
    render () {
        const allProps = this.props;
        return (
        
        <h3> Teste {allProps.propTexto} </h3>
        
        );
    }
}

export default Header