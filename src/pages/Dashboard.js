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

const Dashboard = ({data, createClient, createTherapist, createEntry, token, user, clientType, therapists, getTherapists, setClientType}) => {

  const [client, setClient] = useState([])
  const [response, setResponse] = useState(null);
  const fetchData = useRef(null);

  const checkIfClient = async () => {
    const response = await fetch(REACT_APP_CLIENT_URL+'/client', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    response.json().then(foundClient => {
      setResponse('true');
      setClient(foundClient);
      setClientType(foundClient[0].acct)
    });    
  };

  const addTherapist = async (id) => {
    if(!user) return;
    const data = {therapistId: id};
    token = await user.getIdToken();
    await fetch(REACT_APP_CLIENT_URL+'/client', {
      method: 'PUT',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(data)
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
  }, [token, clientType]);

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
          <DashBox title="Create New Entry" token={token} createEntry={createEntry} link="/entries/new" color='success'/>
          <DashBox title="View All Entries" token={token} data={data} link="/entries" color='primary'/>
          <DashBox title="Resources / Helpful Tips" link="/" token={token} color='secondary'/>
        </StyledDashBoardTop>
        <EntryTable data={data} token={token} dashboard/>
      </main>
    : <Register createClient={createClient} createTherapist={createTherapist} user={user} setClient={setClient} clientType={clientType} /> 
    );
  };

  return response ? loaded() : loading()
  };

  export default Dashboard;