import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogin } from '../../actions/auth';

class Header extends Component {
  handleAuthentication = () => {
    this.props.startLogin();
  };
  render() {
    return (
      <header>
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
          <button onClick={this.handleAuthentication}>Login</button>
        </nav>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(Header);
