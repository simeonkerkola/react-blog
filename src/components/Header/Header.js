import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogin, startLogout } from '../../actions/auth';

const Header = props => (
  <header>
    {console.log(props)}
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
        <NavLink to={`/user/${props.userId}`} activeClassName="is-active">
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
