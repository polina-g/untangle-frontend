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

const Dashboard = ({user, data, therapists, clientType, setClientType, getTherapists, createTherapist, createEntry, createClient,}) => {

  const [client, setClient] = useState([])
  const fetchData = useRef(null);

  const checkIfClient = async () => {
    const token = await user.getIdToken();
    const response = await fetch(REACT_APP_CLIENT_URL+'/client', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });

    response.json().then(foundClient => {
      console.log(foundClient);
      setClient(foundClient);
      if (foundClient.length) {
        setClientType(foundClient[0].acct);
      } 
    });    
  };

  async function check () {
    await checkIfClient();
    if(clientType === 'client') {
      getTherapists();
    };
  };

  useEffect(() => {
    fetchData.current = check;
  });

  useEffect(() => {
      fetchData.current();
  }, [user]);

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
  };

  const loading = () => {
    return (
      <Box sx={{ width: 1000, pl: '30%', pt: 10}}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    );
  };

  const loaded = () => {
    return (
    client.length ? 
      <main>
        <Typography
          variant="h2"
          color='primary'
          sx={{mt: 5}}
        >
        Hi {client[0].f_name}, what would you like to do today?
        </Typography>
        <AddTherapist client={client} therapists={therapists} addTherapist={addTherapist}/>
        <StyledDashBoardTop>
          <DashBox title="Create New Entry" createEntry={createEntry} link="/entries/new" color='success'/>
          <DashBox title="View All Entries" data={data} link="/entries" color='primary'/>
          <DashBox title="Resources / Helpful Tips" link="/" color='secondary'/>
        </StyledDashBoardTop>
        <EntryTable data={data} dashboard/>
      </main>
    : <Register createClient={createClient} createTherapist={createTherapist} user={user} setClient={setClient} clientType={clientType} /> 
    );
  };

  return user ? loaded() : loading()
  };

  export default Dashboard;