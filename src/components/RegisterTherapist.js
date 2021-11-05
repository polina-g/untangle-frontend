import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const RegisterTherapist = ({createTherapist, user, setClient}) => {
  const [newClient, setNewClient] = useState(user);
  const [formState, setFormState] = useState({
    acct: 'therapist',
    f_name: '',
    l_name: '',
    email: newClient.email,
    license: '',
    city: '',
    state: '',
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
    await createTherapist(formState);
    setFormState({
      acct: 'therapist',
      f_name: '',
      l_name: '',
      email: newClient.email,
      license: '',
      city: '',
      state: '',
    });
    setClient('true');
  };

  useEffect(() => {
    setNewClient(user)
  }, [user]);

  return (
    <Box         
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{width: '50%', ml:'25%', mt:5}}
    >
      <Paper elevation={5} sx={{width: '100%', p: '1rem'}}>
        <form onSubmit={handleSumbit}>
          <FormControl>
            <Typography
              variant='h3'
              color='primary'
              fontWeight='light'
              sx={{mt: 3, mb: 3}}
            >
              Welcome to Untangle! Please register below to continue. 
            </Typography>
            <TextField
              type='text'
              label='First Name'
              autoComplete='off'
              margin='normal'
              onChange={handleChange}
              value={formState.f_name}
              name='f_name'
              required
            />
            <TextField
              type='text'
              label='Last Name'
              name='l_name' 
              autoComplete='off'
              margin='normal'
              fullWidth
              required
              onChange={handleChange}
              value={formState.l_name}
            />
            <TextField
              type='text'
              label='E-mail'
              name='email'
              autoComplete='off'
              margin='normal'
              fullWidth
              required
              onChange={handleChange}
              value={formState.email}
              sx={{mb: 3}}
            />
            <FormControl>
              <InputLabel id='demo-simple-select-label'>License</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  value={formState.license}
                  label='License'
                  onChange={handleChange}
                  name='license'
                >
                  <MenuItem value='None'>None</MenuItem>
                  <MenuItem value='Licensed Psychologist'>Licensed Psychologist</MenuItem>
                  <MenuItem value='Psychiatrist'>Psychiatrist</MenuItem>
                  <MenuItem value='Advanced Nurse Practitioner'>Advanced Nurse Practitioner</MenuItem>
                  <MenuItem value='Licensed Psychological Associate'>Licensed Psychological Associate</MenuItem>
                  <MenuItem value='Licensed Professional Counselor'>Licensed Professional Counselor</MenuItem>
                  <MenuItem value='Licensed Clinical Social Worker'>Licensed Clinical Social Worker</MenuItem>
                  <MenuItem value='Licensed Marriage and Family Therapist'>Licensed Marriage and Family Therapist</MenuItem>
                  <MenuItem value='Licensed Mental Health Counselor'>Licensed Mental Health Counselor</MenuItem>
                  <MenuItem value='Other'>Other</MenuItem>
                </Select>
              </FormControl>

              <Box display='flex' justifyContent='space-between'>
                <FormControl>
                    <TextField
                        type='text'
                        label='City'
                        name='city'
                        autoComplete='off'
                        margin='normal'
                        required
                        onChange={handleChange}
                        value={formState.city}
                    />
                </FormControl>
                <FormControl>
                    <TextField
                        type='text'
                        label='State'
                        name='state'
                        autoComplete='off'
                        margin='normal'
                        required
                        onChange={handleChange}
                        value={formState.state}
                    />
                </FormControl>
                <FormControl>
                  <TextField
                      type='text'
                      label='Country'
                      name='country'
                      autoComplete='off'
                      margin='normal'
                      onChange={handleChange}
                      value={formState.country}
                  />
                </FormControl>
              </Box>
              <TextField
                  type='text'
                  label='Photo URL'
                  name='img'
                  autoComplete='off'
                  margin='normal'
                  fullWidth
                  onChange={handleChange}
                  value={formState.img}
                  sx={{mb: 3}}
                />

              <Button 
                type='submit' 
                variant='contained' 
                sx={{mt: '1rem', width:'30%', ml: '35%'}}
              >
                Register!
            </Button>
          </FormControl>
        </form>
      </Paper>
    </Box>
  );
};

  export default RegisterTherapist;