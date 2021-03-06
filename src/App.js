import './App.css';
import {Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Nav from './components/Nav';
import Landing from './pages/Landing'
import LogIn from './pages/LogIn';
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';
import NewEntry from './pages/NewEntry';
import ViewEntry from './pages/ViewEntry';
import EditEntry from './pages/EditEntry';
import AllEntries from './pages/AllEntries';
import Footer from './components/Footer' ;

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { auth } from './services/firebase';

const {REACT_APP_BASE_URL, REACT_APP_CLIENT_URL, REACT_APP_THERAPIST_URL} = process.env;

function App() {
  const [ user, setUser ] = useState(null);
  const [ entries, setEntries ] = useState([]);
  const [ therapists, setTherapists ] = useState(null);
  const [ clientType, setClientType] = useState('client');
  const fetchData = useRef(null);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#186583',
        light: '#5193b3',
        dark: '#003b56'
      },
      secondary: {
        main: '#e38474',
        light: '#ffb5a3',
        dark: '#ae5648',
      },
      success: {
        main: '#837285'
      }
    }
  });
 
  //========== GET DATA ============================
  const getEntries = async () => {
    if(!user) return;
    const token = await user.getIdToken();
    const response = await fetch(REACT_APP_BASE_URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const data = await response.json();
    setEntries(data);
  };

  //====================== CLIENT FUNCTIONS======================= 
    const createClient = async (person) => {
      if(!user) return;
      const data = {...person, managedBy: user.uid};
      const token = await user.getIdToken();
      await fetch(REACT_APP_CLIENT_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
      });
    };

    //===================THERAPIST FUNCTIONS========================
    const createTherapist = async (person) => {
      if(!user) return;
      const data = {...person, managedBy: user.uid};
      const token = await user.getIdToken();
      await fetch(REACT_APP_THERAPIST_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
      });
    };

    const getTherapists = async () => {
      if(!user) return;
      const token = await user.getIdToken();
      const response = await fetch(REACT_APP_THERAPIST_URL, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });

      const data = await response.json();
      setTherapists(data);
    };

    //=============== ENTRY FUNCTIONS=================
    const createEntry = async (entry) => {
      if(!user) return;
      const data = {...entry, client: user.uid};
      const token = await user.getIdToken();
      await fetch(REACT_APP_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
      });
      getEntries();
    };

    const updateEntry = async (entry, id) => {
      if(!user) return;
      const data = {...entry, client: user.uid};
      const token = await user.getIdToken();
      await fetch(REACT_APP_BASE_URL+'/'+id, {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
      });
      getEntries();
    };

    const deleteEntry = async (id) => {
      const token = await user.getIdToken();
      await fetch(REACT_APP_BASE_URL+'/'+id, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      getEntries();
    };

    //=================================================
    useEffect(() => {
      fetchData.current = getEntries;
    });

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setUser(user);
        if(user) {
          fetchData.current();
        } else {
          setEntries([]);
        };
      });
      return () => unsubscribe();
    }, [user]);

  return (
    <div className='App'>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Nav 
          user={user} 
          data={entries}
          createEntry={createEntry}
          />
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/login' 
                render={() => (
              user ? <Redirect to='/dashboard' /> 
                   : <LogIn />
            )} />
          <Route path='/register'  
                 render={() => (
            user ? <Redirect to='/dashboard' /> 
                 : <CreateAccount setClientType={setClientType} />
            )}/>
          <Route path='/dashboard' render={() => (
            user ? 
              <Dashboard 
                data={entries} 
                createClient={createClient}
                createTherapist={createTherapist}
                createEntry={createEntry}
                user={user}
                clientType={clientType}
                therapists={therapists}
                getTherapists={getTherapists}
                setClientType={setClientType}
                /> 
                 : <Redirect to='/login' />
            )} />
          <Route exact path='/entries'>
            <AllEntries data={entries}/>
          </Route>
          <Route exact path='/entries/new'>
            <NewEntry createEntry={createEntry} 
                      user={user} 
                      />
          </Route>
          <Route exact path='/entries/:id'>
            <ViewEntry updateEntry={updateEntry} 
                       deleteEntry={deleteEntry} 
                       user={user} 
                       data={entries}
                       />
          </Route>
          <Route exact path='/entries/:id/edit'>
            <EditEntry />
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;


