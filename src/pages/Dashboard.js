import DashBox from '../components/DashBox';
import Register from '../components/Register';
import EntryTable from '../components/EntryTable';
import { useState, useEffect } from 'react';
import { StyledDashBoardTop } from '../styles';

import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const {REACT_APP_CLIENT_URL} = process.env;

const Dashboard = ({data, createClient, createEntry, token}) => {
 
  const [client, setClient] = useState([])
  const [response, setResponse] = useState(null);
  console.log(client);

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
    });    
  };

  useEffect(() => {
    checkIfClient();
  }, [token]);

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
        <h1>Hi {client[0].f_name}, what would you like to do today?</h1>
        <StyledDashBoardTop>
          <DashBox title="Create New Entry" token={token} createEntry={createEntry} link="/entries/new" color='success'/>
          <DashBox title="View All Entries" token={token} data={data} link="/entries" color='primary'/>
          <DashBox title="Resources / Helpful Tips" link="/" token={token} color='secondary'/>
        </StyledDashBoardTop>
        <EntryTable data={data} token={token} dashboard/>
      </main>
    : <Register createClient={createClient}/> 
    );
  };

  return response ? loaded() : loading()
  };

  export default Dashboard;