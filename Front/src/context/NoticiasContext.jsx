import React, { createContext, useState, useEffect, useContext } from 'react';
import { noticiasAxios } from '../api/auth';

// Create a context for news data
const NoticiasContext = createContext();

// Custom hook to consume the NoticiasContext
export const useNoticias = () => useContext(NoticiasContext);

// Provider component to wrap the app and provide news data
export const NoticiasProvider = ({ children }) => {
  const [noticiasData, setNoticiasData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await noticiasAxios();
        setNoticiasData(data.data);
      } catch (error) {
        console.error('Error fetching noticias data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <NoticiasContext.Provider value={{ noticiasData }}>
      {children}
    </NoticiasContext.Provider>
  );
};

