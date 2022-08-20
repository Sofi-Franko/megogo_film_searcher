import React from 'react';
import { Navigate } from 'react-router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ProvideAuth } from './context';
import RouteResolver from './routes/route-resolver';
import Login from './components/login';

function App() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={'Nothing here'} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/filmList" element={<RouteResolver />} />
        </Routes>
      </BrowserRouter>
    </ProvideAuth>
  );
}

export default App;
