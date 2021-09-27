import React from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from  './components/TopBar/TopBar'
import './App.css'
import Home from './pages/Home';


function App() {
  return (
    <div className="App">

        <TopBar/>

        <div className="container">
          <Sidebar/> 
          <Home/>
        </div>

    </div>
  );
}

export default App;
