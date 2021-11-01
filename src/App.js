import './App.css';
import {Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
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
  const [ user, setUser ] = useState(null);
  const [ entries, setEntries ] = useState([])
  const fetchData = useRef(null);

  //========== GET DATA ============================
  const getEntries = async () => {
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

  //====================== CLIENT FUNCTIONS======================= 
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
  }

    //=============== ENTRY FUNCTIONS=================
    const createEntry = async (entry) => {
      if(!user) return;
      const data = {...entry, client: user.uid};
      token = await user.getIdToken();
      await fetch(REACT_APP_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
      })
      getEntries();
    }

    const updateEntry = async (entry, id) => {
      if(!user) return;
      const data = {...entry, client: user.uid};
      token = await user.getIdToken();
      await fetch(REACT_APP_BASE_URL+'/'+id, {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
      })
      getEntries();
    }

    //=================================================
    useEffect(() => {
      fetchData.current = getEntries
    });

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setUser(user)
        if(user) {
          fetchData.current();
        } else {
          setEntries([]);
        }
      });

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
        <Route path="/login" render={() => (
            user ? <Redirect to="/dashboard" /> : <Login />
          )} />
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
              user={user}
            /> : 
            <Redirect to="/login" />
          )} />
        <Route exact path="/entries">
          <AllEntries data={entries}/>
        </Route>
        <Route exact path="/entries/new">
          <NewEntry createEntry={createEntry} user={user}/>
        </Route>
        <Route exact path="/entries/:id">
          <ViewEntry updateEntry={updateEntry} user={user}/>
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


