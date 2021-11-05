import RegisterTherapist from './RegisterTherapist';
import RegisterClient from './RegisterClient';

const Register = ({createClient, createTherapist, user, setClient, clientType}) => {
    return (
      clientType === 'client' ? <RegisterClient user={user} 
                                                createClient={createClient}
                                                setClient={setClient}
                                                /> 
                              : <RegisterTherapist user={user} 
                                                   createTherapist={createTherapist}
                                                   setClient={setClient}
                                                   />
    );
  };

  export default Register;