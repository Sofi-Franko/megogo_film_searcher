import React from 'react';
import { AuthContext } from './auth-context';
import { login as logIn, logout as logOut, verifyToken as authenticate } from '../api';

// eslint-disable-next-line react/prop-types
export function ProvideAuth({ children }) {
  const auth = useAuthProvide();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuthProvide() {
  async function login(logInValues) {
    const loginResult = await logIn(logInValues);

    const { email, token } = loginResult;

    localStorage.setItem('email', email);
    localStorage.setItem('token', token);
  }

  async function logout() {
    const logoutResult = await logOut();

    localStorage.setItem('email', logoutResult.email);
    localStorage.setItem('token', logoutResult.token);
  }

  async function verifyToken() {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');

    let loginResult = await authenticate({ email, token });
    if (loginResult?.user === email) {
      localStorage.setItem('token', token);
      return true;
    } else {
      return false;
    }
  }

  return {
    login,
    logout,
    verifyToken
  };
}

export default ProvideAuth;
