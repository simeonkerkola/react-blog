import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogin, startLogout } from '../../actions/auth';

const Header = props => (
  <header>
    <h1>Blog</h1>
    <nav>
      <NavLink to="/" activeClassName="is-active" exact>
        Home
      </NavLink>
      {props.isAuthenticated && (
        <NavLink to="/create" activeClassName="is-active">
          Create new
        </NavLink>
      )}
      {props.isAuthenticated && (
        <NavLink to="/mypage/" activeClassName="is-active">
          My page
        </NavLink>
      )}
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
      {props.isAuthenticated ? (
        <button onClick={props.startLogout}>Logout</button>
      ) : (
        <button onClick={props.startLogin}>Login</button>
      )}
    </nav>
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth,
  userId: !!state.auth && state.auth.uid,
});

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
  startLogout: () => dispatch(startLogout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
