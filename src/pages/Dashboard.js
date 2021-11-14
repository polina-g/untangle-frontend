import ClientDashboard from '../components/ClientDashboard';
import TherapistDashboard from '../components/TherapistDashboard'

import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';


const Dashboard = ({user, typeOfUser, entries}) => {
  console.log('dashboard: ', typeOfUser)
  const loading = () => {
    return (
      <Box sx={{ width: 1000, pl: '30%', pt: 10}}>
        <Skeleton />
        <Skeleton animation='wave' />
        <Skeleton animation={false} />
      </Box>
    );
  };

  const loaded = () => {
    return typeOfUser === 'client' 
            ? <ClientDashboard user={user}
                               entries={entries}/> 
            : <TherapistDashboard user={user}/>
    };

    return user ? loaded() : loading();
  };

  export default Dashboard;