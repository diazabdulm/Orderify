import React from 'react';
import Navbar from './components/Navbar';
import Menubar from './components/Menubar';
import FeaturesBox from './components/FeaturesBox';
import './App.css'

function App() {
  return (
    <div className='test'>
      <Navbar />
      <Menubar />
      <FeaturesBox />
    </div>
  );
}

export default App;
