import { StyledMain } from '../styles'
import { signIn } from '../services/firebase';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import GoogleIcon from '@mui/icons-material/Google';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';

const Login = (props) => {
    return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >   
        <Paper sx={{width:'70%'}}>
          <img src="https://i.imgur.com/dAi63Ss.png" width="100%"/>
        </Paper>
        <Paper 
          sx={{
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexGrow: 1
            }}
          >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            variant="h2"
            color='secondary'
          >
          Log in
          </Typography>
          <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Box>
          <Button 
          onClick={signIn}
          variant="contained"
          color='primary'
          size="large"
          sx={{mb: 2, mt: 2}}
        >
        <GoogleIcon 
          sx={{mr:3}}
        />  
          Sign in with Google
        </Button>
      </Paper>
    </Box>
    );
  };

  export default Login;