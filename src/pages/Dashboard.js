import DashBox from '../components/DashBox';
import { StyledDashBoardTop, StyledTable } from '../styles';
import { Link } from 'react-router-dom';

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
      <StyledTable>
        <tr>
          <th>Date</th>
          <th>Feeling</th>
          <th>Emotion</th>
          <th>Thought</th>
        </tr>
        {
          data.map(entry => {
            const { createdAt, feeling, emotion, thought } = entry;
            const date = new Date(createdAt);
            const formattedDate = new Intl.DateTimeFormat('en', {
              timeStyle: 'short',
              dateStyle: 'short'
            }).format(date);

            return (
              <tr>
                <td>
                  <Link to={`/entries/${entry._id}`}>
                    {formattedDate}
                  </Link>
                </td>
                <td>{feeling}</td>
                <td>{emotion}</td>
                <td>{thought}</td>
              </tr>
            );
          })

        }
      </StyledTable>
    </main>
    );
  };

  export default Dashboard;