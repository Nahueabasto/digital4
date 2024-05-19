import React from 'react';
import { useDolar } from '../DolarContext';
import './SubNavBar.css';

const SubNavBar = () => {
  const { dolarData } = useDolar();

  if (!dolarData) {
    return <div>Loading...</div>; // Mostrar un mensaje de carga mientras los datos están siendo recuperados
  }

  const { official, blue, official_euro, blue_euro } = dolarData;

  return (
    <div className="subnavbar">
      <div className='dolar'>
      <h3>Dólar Oficial: ${official.value_sell}</h3>
      <h3>Dólar Blue: ${blue.value_sell}</h3>
      <h3>Euro Oficial: ${official_euro.value_sell}</h3>
      <h3>Euro Blue: ${blue_euro.value_sell}</h3>
      </div>
    </div>
  );
}

export default SubNavBar;

