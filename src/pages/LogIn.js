import { StyledMain } from '../styles'
import { signIn } from '../services/firebase';

const Login = (props) => {
    return (
    <StyledMain>
      <h1>Login</h1>
      <button onClick={signIn}>Sign in with Google</button>
    </StyledMain>
    );
  };

  export default Login;