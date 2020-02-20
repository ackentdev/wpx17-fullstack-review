import React from 'react';
import './App.css';
import './reset.css';
import {Switch, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/main" component={Main}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </div>
  );
}

export default App;
