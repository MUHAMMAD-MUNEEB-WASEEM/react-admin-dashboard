import React from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from  './components/TopBar/TopBar'
import './App.css'


function App() {
  return (
    <div className="App">

        <TopBar/>

        <div className="container">
          <Sidebar/> 
          <div className="other">Other Pages</div>
        </div>

    </div>
  );
}

export default App;
