import React, { createContext, useState, useEffect, useContext } from 'react';
import { dolarAxios } from '../api/auth';

const DolarContext = createContext();

export const useDolar = () => useContext(DolarContext);

export const DolarProvider = ({ children }) => {
  const [dolarData, setDolarData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dolarAxios();
        setDolarData(response.data);
      } catch (error) {
        console.error('Error fetching dolar data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DolarContext.Provider value={{ dolarData }}>
      {children}
    </DolarContext.Provider>
  );
};