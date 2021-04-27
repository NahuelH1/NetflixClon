import './App.css';
import ProfileChoser from './pages/ProfileChoser'
import Home from './pages/Home'
import {  BrowserRouter  , Switch, Route } from 'react-router-dom'
import React from 'react';
function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ProfileChoser}/>
            <Route exact path='/home' component={Home}/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
