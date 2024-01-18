import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Login from "./login"
import Register from './register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './products';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/Dash' element={<Dashboard />} />
      <Route path='/products' element={<Products />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
