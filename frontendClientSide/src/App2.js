import React from 'react';
import Router from './Router';
import axios from 'axios';

axios.defaults.withCredentials = true;

function App2() {
  return (
    <>
    <Router />
    </>
  );
}

export default App2;
