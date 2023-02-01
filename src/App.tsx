import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Color } from './components/color';
import { Inicio } from './components/inicio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>}></Route>
          <Route path='/color/:id' element={<Color/>}></Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
