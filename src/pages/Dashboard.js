import DashBox from '../components/DashBox';
import { StyledDashBoardTop, StyledTable } from '../styles';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';


const Dashboard = ({data}, clients, createClient) => {
  const [formState, setFormState] = useState({
    acct: '',
    f_name: '',
    l_name: '',
    email: '',
    therapist: [],
    entry: []
  });

    //Form helper functions
    const handleChange = (event) => {
      setFormState(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    };

    const handleSumbit = (event) => {
      event.preventDefault();
      createClient(formState);
      setFormState({
        acct: '',
        f_name: '',
        l_name: '',
        email: '',
        therapist: [],
        entry: []
      })
    }
  
    return (
    <main>
      <h1>Dashboard</h1>
      <section>
        <form>
          <input
            onChange={handleChange}
            value={formState.f_name}
            name="f_name"
            type="text"
          />
          <input
            onChange={handleChange}
            value={formState.l_name}
            name="l_name"
            type="text"
          />
          <input
            onChange={handleChange}
            value={formState.email}
            name="email"
            type="email"
          />
          <input type="submit" value="Create Profile"/>
        </form>
      </section>
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