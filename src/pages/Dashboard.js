import DashBox from '../components/DashBox';
import Register from '../components/Register';
import EntryTable from '../components/EntryTable';
import { useState, useEffect } from 'react';
import { StyledDashBoardTop } from '../styles';
const {REACT_APP_CLIENT_URL} = process.env;

const Dashboard = ({data, createClient, createEntry, token}) => {
 
  const [client, setClient] = useState([])
  const [response, setResponse] = useState(null);

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
    return <h1>Loading...</h1>;
  };

  const loaded = () => {
    return (
    client.length ? 
      <main>
        <h1>Dashboard</h1>
        <StyledDashBoardTop>
          <DashBox title="New Entry" token={token} createEntry={createEntry} link="/entries/new"/>
          <DashBox title="View All Entries" token={token} data={data} link="/entries"/>
          <DashBox title="Resources/Helpful Tips" link="/" token={token}/>
        </StyledDashBoardTop>
        <EntryTable data={data} token={token} dashboard/>
      </main>
    : <Register createClient={createClient}/> 
    );
  };

  return response ? loaded() : loading()
  };

  export default Dashboard;