import DashBox from '../components/DashBox';
import { StyledDashBoardTop } from '../styles';

const Dashboard = ({data}) => {
  console.log('This is the dashboard component')
    return (
    <main>
      <h1>Dashboard</h1>
      <StyledDashBoardTop>
        <DashBox title="New Entry" link="/entries/new"/>
        <DashBox title="View All Entries" link="/entries"/>
        <DashBox title="Resources/Helpful Tips" link="/"/>
      </StyledDashBoardTop>
    </main>
    );
  };

  export default Dashboard;