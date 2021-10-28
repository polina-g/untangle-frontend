import './App.css';
import {Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Landing from './pages/Landing'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';
import NewEntry from './pages/NewEntry';
import ViewEntry from './pages/ViewEntry';
import EditEntry from './pages/EditEntry';
import AllEntries from './pages/AllEntries';
import Footer from './components/Footer' 

import { auth } from './services/firebase';
const {REACT_APP_BASE_URL, REACT_APP_CLIENT_URL} = process.env;

function App() {
  console.log("APP.js rendered")
  const [user, setUser] = useState(null);
  const [ clients, setClients ] = useState([])
  const [ entries, setEntries ] = useState([])

  //Get data
  const getEntries = async () => {
    console.log('rendering getEntries');
    const response = await fetch(REACT_APP_BASE_URL);
    const data = await response.json();
    setEntries(data);
  }

  //Contacts helper functions
  const getClients = async() => {
    console.log('rendering getClients');
    //get a secure id token from our firebase user
    console.log('user in getClients ', user);
    console.log(!user);
    if(!user) return;
    const token = await user.getIdToken();
    console.log(token);
    console.log(REACT_APP_CLIENT_URL);

    const response = await fetch (REACT_APP_CLIENT_URL, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        }
    });

    console.log('response after client fetch ', response);
    const clients = await response.json();
    setClients(clients)
  }

  const createClient = async (person) => {
    const data = {...person, managedBy: user.uid};
    await fetch(REACT_APP_CLIENT_URL, {
      method: 'POST',
      headers: {'Content-tyoe': 'Application/json'},
      body: JSON.stringify(data)
    })
    getClients();
  }

  useEffect(() => {
    console.log('refresh');
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    getClients();
    getEntries();
    return () => unsubscribe();
  }, [user]);

  return (
    <div className="App">
      <Nav user={user}/>
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
        <Route path="/dashboard" render={() => (
          user ? <Dashboard 
                    data={entries} 
                    createClient={createClient}
                  /> : <Redirect to="/login" />
          )} />
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
      <Footer />
    </div>
  );
}

export default App;


