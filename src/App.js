import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ?
    <Loader isLoading={isLoading} /> :
    <>
      <Navbar />
      <Main />
    </>
}

export default App;
