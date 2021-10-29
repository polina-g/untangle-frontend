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
let token;

function App() {
  console.log("APP.js rendered")
  const [user, setUser] = useState(null);
  const [ clients, setClients ] = useState([])
  const [ entries, setEntries ] = useState([])

  //========== GET DATA ============================
  const getEntries = async () => {
    console.log('rendering getEntries');
    if(!user) return;
    token = await user.getIdToken();
    const response = await fetch(REACT_APP_BASE_URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const data = await response.json();
    setEntries(data);
  }

  //======= CLIENT CREATE/SET STATE FUNCTIONS======= 
  const getClients = async() => {
    console.log('rendering getClients');
    //get a secure id token from our firebase user
    console.log('user in getClients ', user);
    if(!user) return;

    token = await user.getIdToken();
    console.log('token: ', token);

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
    if(!user) return;
    const data = {...person, managedBy: user.uid};
    token = await user.getIdToken();
    await fetch(REACT_APP_CLIENT_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(data)
    })
    getClients();
  }

    //=============== CREATE ENTRY =================
    const createEntry = async (entry) => {
      if(!user) return;
      console.log("entry in app.js: ", entry)
      token = await user.getIdToken();
      console.log('token in createEntry: ', token)
      await fetch(REACT_APP_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(entry)
      })
      getEntries();
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
      <Nav 
        user={user} 
        data={entries}
        createEntry={createEntry}
        token={token} />
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
          user ? 
            <Dashboard 
              data={entries} 
              createClient={createClient}
              createEntry={createEntry}
              token={token}
            /> : 
            <Redirect to="/login" />
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


