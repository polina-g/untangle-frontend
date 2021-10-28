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
  const [user, setUser] = useState(null);
  const [clients, setClients ] = useState([])
  const [ entries, setEntries ] = useState(null)

  //Get data
  const getEntries = async () => {
    const data = await fetch(REACT_APP_BASE_URL).then(response => response.json());
    setEntries(data);
  }

  //Contacts helper functions
  const getClients = async() => {
    //get a secure id token from our firebase user
    const token = await user.getIdToken();
    console.log(token);


    const response = await fetch (REACT_APP_CLIENT_URL, {
        headers: {
          'Authorization': 'Bearer' + token
        }
    })
    const client = await response.json();
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
    getEntries();
    getClients();
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    return () => unsubscribe();
  }, []);

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
                    clients={clients} 
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


