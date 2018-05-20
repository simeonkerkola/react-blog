import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// Props: component passed in AppRouter
const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest // Rest operator gives access to all of the other stuff we didn't destructure
}) => (
  <div>
    {/* Route is not getting isAuthenticated or component passed to it */}
    <Route
      {...rest}
      component={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)}
    />
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
