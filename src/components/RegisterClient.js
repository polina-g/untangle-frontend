import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";

const RegisterClient = ({createClient, user, setClient}) => {
  const [newClient, setNewClient] = useState(user);
  const [formState, setFormState] = useState({
    acct: 'client',
    f_name: '',
    l_name: '',
    email: newClient.email,
    therapist: [],
  });

    //Form helper functions
    const handleChange = (event) => {
      setFormState(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    };

    const handleSumbit = async (event) => {
      event.preventDefault();
      await createClient(formState);
      setFormState({
        acct: 'client',
        f_name: '',
        l_name: '',
        email: newClient.email,
        therapist: [],
      })
      setClient('true');
    }

    useEffect(() => {
      setNewClient(user)
    }, [user])

    return (
      <Box         
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{width: '50%', ml:'25%', mt:5}}>
        <Paper elevation={5} sx={{width: '100%', p: '1rem'}}>
          <form onSubmit={handleSumbit}>
            <FormControl>
              <Typography
                variant="h3"
                color='primary'
                fontWeight='light'
                sx={{mt: 3, mb: 3}}
              >
                Welcome to Untangle! Please register below to continue
              </Typography>
              <TextField
                type="text"
                label="First Name"
                autoComplete='off'
                margin="normal"
                onChange={handleChange}
                value={formState.f_name}
                name="f_name"
                required
              />
              <TextField
                type="text"
                label="Last Name"
                name="l_name" 
                autoComplete='off'
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                value={formState.l_name}
              />
              <TextField
                type="text"
                label="E-mail"
                name="email"
                autoComplete='off'
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                value={formState.email}
              />
              <Button 
                type="submit" 
                variant="contained" 
                sx={{mt: '1rem', width:'30%', ml: '35%'}}
              >
                Register!
              </Button>
            </FormControl>
          <Redirect to="/dashboard" />
          </form>
        </Paper>
      </Box>
    );
  };

  export default RegisterClient;