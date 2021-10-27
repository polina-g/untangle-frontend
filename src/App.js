import './App.css';
import {Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';
import NewEntry from './pages/NewEntry';
import ViewEntry from './pages/ViewEntry';
import EditEntry from './pages/EditEntry';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="">
          <Landing />
        </Route>
        <Route path="">
          <Logn />
        </Route>
        <Route path="">
          <CreateAccount />
        </Route>
        <Route path="">
          <Dashboard />
        </Route>
        <Route path="">
          <NewEntry />
        </Route>
        <Route path="">
          <ViewEntry />
        </Route>
        <Route path="">
          <EditEntry />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
