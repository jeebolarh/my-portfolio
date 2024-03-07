import React from 'react';
import Navbar from './Component/Navbar';
import './Component/App.css'
import MainSection from './Component/MainSection';

function App() {
  const links = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Services", url: "/contact" },
    { text: "Portfolio", url: "/contact" },
    { text: "Contact", url: "/contact" }

  ];

  return (
    <div className='container'>
      <Navbar links={links} />
      <MainSection/>
    </div>
  );
}

export default App;
