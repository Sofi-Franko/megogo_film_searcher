import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/auth-context';

import Login from '../components/login';
import Homepage from '../components/homepage';

function RouteResolver() {
  let auth = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(async () => {
    let result = await auth.verifyToken();
    setIsAuthenticated(result);
  }, []);

  return isAuthenticated ? <Homepage /> : <Login />;
}

export default RouteResolver;
