import DashBox from '../components/DashBox';
import Register from '../components/Register';
import EntryTable from '../components/EntryTable';
import { useState, useEffect, useRef } from 'react';
import { StyledDashBoardTop } from '../styles';

import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddTherapist from '../components/AddTherapist';

const {REACT_APP_CLIENT_URL} = process.env;

const ClientDashboard = ({user, entries}) => {

const getTherapists = async () => {
    if(!user) return;
    const token = await user.getIdToken();
    const response = await fetch(REACT_APP_THERAPIST_URL, {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer ' + token
        }
    });
    const data = await response.json(); //Therapists data passed to AddTherapist
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
        Hi {client[0].f_name}, what would you like to do today?
        </Typography>
        <AddTherapist client={client} 
                      therapists={therapists} 
                      addTherapist={addTherapist}
                      />
        <StyledDashBoardTop>
          <DashBox title='Create New Entry' 
                   createEntry={createEntry} 
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