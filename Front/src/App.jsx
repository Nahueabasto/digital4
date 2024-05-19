import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './Pages/Home';
import { DolarProvider } from './DolarContext';
import './App.css';

function App() {
  return (
    <DolarProvider>
      <HashRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </HashRouter>
    </DolarProvider>
  );
}

export default App;



