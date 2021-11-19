import React, { Component } from 'react';

class Header extends Component {
  render () {
    const {
      defaultState,
    } = this.props;
    return (
      <div>
        DEFAULT REDUX STATE: { defaultState }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  defaultState: state.reducer.defaultState,
});

export default Header;