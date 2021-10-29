import DashBox from '../components/DashBox';
import { StyledDashBoardTop } from '../styles';
import { useState } from 'react/cjs/react.development';
import EntryTable from '../components/EntryTable';


const Dashboard = ({data, createClient, token}) => {
  console.log('dashboard user token: ', token);
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
      <EntryTable data={data} token={token}/>
    </main>
    );
  };

  export default Dashboard;