import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './Pages/Home';
import { DolarProvider } from './context/DolarContext';
import { NoticiasProvider } from './context/NoticiasContext';
import './App.css';

function App() {
  return (
    <DolarProvider>
      <NoticiasProvider>
      <HashRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </HashRouter>
      </NoticiasProvider>
    </DolarProvider>
  );
}

export default App;



