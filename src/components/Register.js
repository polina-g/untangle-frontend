import RegisterTherapist from './RegisterTherapist';
import RegisterClient from './RegisterClient';

const Register = ({createClient, createTherapist, user, typeOfUser}) => {
    return (
      typeOfUser === 'client' ? <RegisterClient user={user} 
                                                createClient={createClient}
                                                /> 
                              : <RegisterTherapist user={user} 
                                                   createTherapist={createTherapist}
                                                   />
    );
  };

  export default Register;