import React from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from  './components/TopBar/TopBar'
import './App.css'
import Home from './pages/Home/Home';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import UserList from './pages/UserList/UserList';
import UserPage from './pages/UserPage/UserPage';
import NewUser from './pages/NewUser/NewUser';


function App() {
  return (

    <Router>

        <TopBar/>

        <div className="container">
          <Sidebar/> 

          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/users">
              <UserList/>
            </Route>

            <Route path="/user/:userId">
              <UserPage/>
            </Route>

            <Route path="/newUSer">
              <NewUser/>
            </Route>

          </Switch>
        </div>
        </Router>
  );
}

export default App;
