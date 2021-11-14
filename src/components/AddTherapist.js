import { useState, useEffect } from 'react';
import Box from '@mui/system/Box';
import Skeleton from '@mui/material/Skeleton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const AddTherapist = ({therapists, addTherapist, client}) => {
  const [formState, setFormState] = useState({
    therapist: ''
  });

  // useEffect(() => {}, [therapists, client]);

  const noTherapists = () => {
    const handleChange = (event) => {
      setFormState(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    };
  
    const handleSubmit = () => {
      addTherapist(formState.therapist);
    };
    
    const therapistOptions = therapists.map((therapist, index) => {
      return(
        <MenuItem 
          value={therapist._id}
          key={index}
        >
          <Avatar alt={therapist.f_name} src={therapist.img} />
          {therapist.f_name} {therapist.l_name}, {therapist.city}, {therapist.state}
        </MenuItem>
      );
    });

    return(    
      <Box width='70%' sx={{ml:'15%', mt:5}}>
        <Paper width='100%' 
               elevation={8} 
               sx={{p:5, display:'flex', justifyContent:'center', alignItems:'center'}}
        >
          <Box sx={{width:'50%', mr:3}}>
            <Typography
              variant='h4'
              color='primary'
              textAlign='center'
            >
              Looks like you haven't added a therapist yet!
            </Typography>
          </Box>
          <Box sx={{flex:1}}>
          <FormControl sx={{width:'100%'}}>
            <InputLabel>Find Your Therapist:</InputLabel>
              <Select
                  value={formState.therapist}
                  label='Therapists'
                  onChange={handleChange}
                  name='therapist'
                  sx={{width:'100%', mb:2}}
              >
                {therapistOptions}
              </Select>
              <Button 
                type='button' 
                variant='contained' 
                onClick={handleSubmit}
                sx={{ width:'50%', ml:'25%'}}
              >
                Add Therapist
              </Button>
            </FormControl>
          </Box>
        </Paper>
      </Box>
    );
  };

  const showTherapist = () => {
    const therapistId = client.therapist[0];
    const foundTherapist = therapists.find(therapist => therapist._id === therapistId);

    return(
      <Box width='50%' sx={{ml:'25%', mt:5}}>
        <Paper width='100%' 
               elevation={8} 
               sx={{p:5, display:'flex'}}
        >
          <Typography
              variant='h4'
              color='primary'
              textAlign='center'
              sx={{width:'30%'}}
          >
            Your Therapist: 
          </Typography>
          <Box sx={{ flexGrow:1, 
                     display:'flex', 
                     flexDirection:'column', 
                     justifyContent:'center', 
                     alignItems:'center'}}
          >
            <Avatar alt={foundTherapist.f_name} src={foundTherapist.img} />
            <Typography
              variant='h5'
              color='primary'
              textAlign='left'
            >
              {foundTherapist.f_name} {foundTherapist.l_name}, {foundTherapist.city}, {foundTherapist.state} 
            </Typography> 
          </Box>
        </Paper>
      </Box>
    );
  };
  
  const loading = () => {
    return (
      <Box sx={{ width: 1000, pl: '30%', pt: 10}}>
        <Skeleton />
        <Skeleton animation='wave' />
        <Skeleton animation={false} />
      </Box>
    );
  }

  const loaded = () => {
    return client.therapist.length ? showTherapist() : noTherapists()
  }

    return (client && therapists) ? loaded() : loading();
  };

  export default AddTherapist;