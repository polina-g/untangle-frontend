import DashBox from '../components/DashBox';
import Register from '../components/Register';
import EntryTable from '../components/EntryTable';
import { StyledDashBoardTop } from '../styles';


const Dashboard = ({data, createClient, createEntry, checkIfClient, token}) => {
  return (
    checkIfClient.length ? <Register createClient={createClient}/> : 
    <main>
      <h1>Dashboard</h1>
      <StyledDashBoardTop>
        <DashBox title="New Entry" token={token} createEntry={createEntry} link="/entries/new"/>
        <DashBox title="View All Entries" token={token} data={data} link="/entries"/>
        <DashBox title="Resources/Helpful Tips" link="/" token={token}/>
      </StyledDashBoardTop>
      <EntryTable data={data} token={token} dashboard/>
    </main>
    );
  };

  export default Dashboard;