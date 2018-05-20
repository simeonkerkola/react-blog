import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogin, startLogout } from '../../actions/auth';

class Header extends Component {
  handleAuthentication = () => {
    if (this.props.isAuthenticated) {
      this.props.startLogout();
    } else {
      this.props.startLogin();
    }
  };
  render() {
    return (
      <header>
        {console.log(this.props.isAuthenticated)}
        <h1>Blog</h1>
        <nav>
          <NavLink to="/" activeClassName="is-active" exact>
            Home
          </NavLink>
          <NavLink to="/create" activeClassName="is-active">
            Create new
          </NavLink>
          <NavLink to="/help" activeClassName="is-active">
            Help
          </NavLink>
          <button onClick={this.handleAuthentication}>
            {this.props.isAuthenticated ? 'Logout' : 'Login'}
          </button>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth,
});

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
  startLogout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
