import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar.js'
import Home from './components/Home.js'

function App() {
  return (
      <div className='root'>
        <Home></Home>
        <Sidebar></Sidebar>
      </div>
  );
}

export default App;
