import './App.css';
import {Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Landing from './pages/Landing'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';
import NewEntry from './pages/NewEntry';
import ViewEntry from './pages/ViewEntry';
import EditEntry from './pages/EditEntry';
import AllEntries from './pages/allEntries';
const {REACT_APP_BASE_URL} = process.env;

function App() {
  const [ entries, setEntries ] = useState(null)
  const getEntries = async () => {
    const data = await fetch(REACT_APP_BASE_URL).then(response => response.json());
    setEntries(data);
  }

  useEffect(() => getEntries, []);

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <CreateAccount />
        </Route>
        <Route path="/dashboard">
          <Dashboard data={entries}/>
        </Route>
        <Route exact path="/entries">
          <AllEntries />
        </Route>
        <Route exact path="/entries/new">
          <NewEntry />
        </Route>
        <Route exact path="/entries/:id">
          <ViewEntry />
        </Route>
        <Route exact path="/entries/:id/edit">
          <EditEntry />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
