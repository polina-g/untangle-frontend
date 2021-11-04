import { useState, useEffect } from "react";
import Box from "@mui/system/Box";
import Skeleton from "@mui/material/Skeleton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const AddTherapist = ({client, therapists}) => {
  const [formState, setFormState] = useState({
    therapist: ''
  })

  useEffect(() => {}, [client, therapists]);

  console.log(therapists);

  const handleChange = (event) => {
    setFormState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = () => {
    console.log('yay');
  }

  const noTherapists = () => {
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
    })
    return(    
      <Box width='80%' sx={{ml:'10%', mt:5}}>
        <Paper className='AddTherapistBox' width='100%' elevation={8} sx={{p:5}}>
          <Typography
          variant="h5"
          color='primary'
          textAlign='left'
          >
          Looks like you haven't added a therapist yet!
          </Typography>
          <FormControl>
              <InputLabel id="demo-simple-select-label">Chose a Therapist:</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    value={formState.therapist}
                    label="Therapists"
                    fullwidth
                    onChange={handleChange}
                    name='therapist'
                    sx={{width:'300px'}}
                >
                    {therapistOptions}
                </Select>
            </FormControl>
            <Button 
                type="button" 
                variant="contained" 
                onClick={handleSubmit}
                sx={{ width:'30%'}}
              >
                Add Therapist
              </Button>
        </Paper>
    </Box>
    );
  }
  const showTherapist = () => {
    return(
      <h1>You therapist is...</h1>
      );
  };
  
  const loading = () => {
    return (
      <Box sx={{ width: 1000, pl: '30%', pt: 10}}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    );
  }

  const loaded = () => {
    return client[0].therapist.length ? showTherapist() : noTherapists()
  }

    return (client && therapists) ? loaded() : loading();
  };

  export default AddTherapist;