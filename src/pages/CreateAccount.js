import { signIn, createUserWithPassword } from '../services/firebase';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import GoogleIcon from '@mui/icons-material/Google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';

const CreateAccount = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value 
    }));
  }

  const handleSubmit = () => {
    createUserWithPassword(user.email, user.password)
    history.push('/dashboard')

  }

    return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >   
        <Paper sx={{width:'70%'}}>
          <img src="https://i.imgur.com/feD6gWb.jpg" width="100%"/>
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
          Sign Up
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
                onChange={handleChange}
                value={user.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
                value={user.password}
              />
            </Box>
          <Button 
          onClick={handleSubmit}
          variant="contained"
          color='primary'
          size="large"
          sx={{mb: 2, mt: 2}}
        >
        <PersonAddAlt1OutlinedIcon 
          sx={{mr:3}}
        />  
          Create Account
          </Button>
          OR
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

  export default CreateAccount;