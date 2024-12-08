import React from 'react';
import Navbar from './components/nav/Navbar';
import './App.css';
import Title from './components/Title/Title';
import LifestylePillars from './components/LifestylePillars/LifestylePillars';

function App() {
  return(
    <>
      <Navbar />
      <Title />
      <LifestylePillars />
    </>
  );
}

export default App
