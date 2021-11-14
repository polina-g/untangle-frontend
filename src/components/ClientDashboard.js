import DashBox from '../components/DashBox';
import EntryTable from '../components/EntryTable';
import { useState, useEffect, useRef } from 'react';
import { StyledDashBoardTop } from '../styles';

import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddTherapist from '../components/AddTherapist';

const {REACT_APP_CLIENT_URL, REACT_APP_THERAPIST_URL} = process.env;

const ClientDashboard = ({user, entries}) => {
  const [therapists, setTherapists] = useState(null)
  const [client, setClient] = useState(null)

  const fetchTherapists = useRef(null);
  const fetchClient = useRef(null);

  const getClient = async () => {
    if(!user) return;
    const token = await user.getIdToken();
    const response = await fetch(REACT_APP_CLIENT_URL+'/client', {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer ' + token
        }
    });
    const data = await response.json();
    setClient(data[0]);
  }

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

  const addTherapist = async (id) => {
    if(!user) return;
    const data = {therapistId: id};
    const token = await user.getIdToken();
    await fetch(REACT_APP_CLIENT_URL+'/client', {
      method: 'PUT',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(data)
    });
    window.location.reload();
  };

  useEffect(() => {
    fetchTherapists.current = getTherapists;
    fetchClient.current = getClient
  }, [])

  useEffect(() => {
    fetchTherapists.current()
    fetchClient.current()
  }, [therapists, client])


  const loading = () => {
    return (
      <Box sx={{ width: 1000, pl: '30%', pt: 10}}>
        <Skeleton />
        <Skeleton animation='wave' />
        <Skeleton animation={false} />
      </Box>
    );
  };

  const loaded = () => {
    return (
      <main>
        <Typography
          variant='h2'
          color='primary'
          sx={{mt: 5}}
        >
        Hi, what would you like to do today?
        </Typography>
        <AddTherapist therapists={therapists} 
                      addTherapist={addTherapist}
                      client={client}
                      />
        <StyledDashBoardTop>
          <DashBox title='Create New Entry' 
                   link='/entries/new'
                   color='success'
                   />
          <DashBox title='View All Entries' 
                    entries={entries} link='/entries' 
                    color='primary'
                    />
          <DashBox title='Resources / Helpful Tips' 
                   link='/' 
                   color='secondary'
                   />
        </StyledDashBoardTop>
        <EntryTable entries={entries} dashboard/>
      </main>
      );
    };

    return user ? loaded() : loading();
  };

  export default ClientDashboard;