import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(Header);
// export default Header;