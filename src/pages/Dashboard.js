import DashBox from '../components/DashBox';
import { StyledDashBoardTop } from '../styles';
import { useState } from 'react/cjs/react.development';
import EntryTable from '../components/EntryTable';


const Dashboard = ({data, createClient, token}) => {
  console.log('dashboard user token: ', token);

  //If No Client Created - RENDER FORM
  const [formState, setFormState] = useState({
    acct: 'client',
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
        acct: 'client',
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
        <form onSubmit={handleSumbit}>
          <input
            onChange={handleChange}
            value={formState.f_name}
            name="f_name"
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={handleChange}
            value={formState.l_name}
            name="l_name"
            type="text"
            placeholder="Last Name"
          />
          <input
            onChange={handleChange}
            value={formState.email}
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <input type="submit" value="Create Profile"/>
        </form>
      </section>
      <StyledDashBoardTop>
        <DashBox title="New Entry" token={token} link="/entries/new"/>
        <DashBox title="View All Entries" token={token} link="/entries"/>
        <DashBox title="Resources/Helpful Tips" link="/" token={token}/>
      </StyledDashBoardTop>
      <EntryTable data={data} token={token}/>
    </main>
    );
  };

  export default Dashboard;