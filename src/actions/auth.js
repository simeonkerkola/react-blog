import { firebase, googleAuthProvider } from '../firebase/firebase';

// Login
export const login = user => ({
  type: 'LOGIN',
  user,
});

export const startLogin = () => dispatch => firebase.auth().signInWithPopup(googleAuthProvider);

// Logout
export const logout = () => ({
  type: 'LOGOUT',
});

export const startLogout = () => () => firebase.auth().signOut();
