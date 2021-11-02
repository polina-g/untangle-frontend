import { StyledMain } from '../styles'
import { signIn } from '../services/firebase';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import GoogleIcon from '@mui/icons-material/Google';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const Login = (props) => {
    return (
    <Box>
      <Typography
        variant="h2"
        color='secondary'
      >
      Log in
      </Typography>
      <Button 
        onClick={signIn}
        variant="contained"
        color='primary'
        size="large"
      >
      <GoogleIcon 
        sx={{mr:3}}
      />  
        Sign in with Google
      </Button>
    </Box>
    );
  };

  export default Login;