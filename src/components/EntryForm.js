import { StyledForm } from "../styles";

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Slider from "@mui/material/Slider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormGroup } from "@mui/material";



const EntryForm = ({handleChange, handleSubmit, formState, isEdit}) => {
    return (
      <Box 
      sx={{width: '70%', mt:5, ml:'15%'}}
      justifyContent="center"
      alignItems="center">

      <Paper 
        elevation={5} 
        sx={{width: '100%', p: '1rem', flexDirection: 'column',
        alignItems: 'center'}}>
        
    <form onSubmit={handleSubmit}>
      <RadioGroup row>
        <FormControlLabel 
          value="1" 
          control={<Radio />}
          onChange={handleChange}
          label={<img src='https://i.imgur.com/kj80WQP.png'/>}
          labelPlacement='top'
          name="feeling"
        />
        <FormControlLabel 
          value="2" 
          control={<Radio />}
          onChange={handleChange}
          label={<img src='https://i.imgur.com/dPeJdMK.png' />}
          labelPlacement='top'
          name="feeling"
        />
        <FormControlLabel 
          value="3" 
          control={<Radio />}
          onChange={handleChange}
          label={<img src='https://i.imgur.com/X3Oeeja.png'/>}
          labelPlacement='top'
          name="feeling"
        />
        <FormControlLabel 
          value="4" 
          control={<Radio />}
          onChange={handleChange}
          label={<img src='https://i.imgur.com/Wkm4rbM.png'/>}
          labelPlacement='top'
          name="feeling"
        />
        <FormControlLabel 
          value="5" 
          control={<Radio />}
          onChange={handleChange}
          label={<img src='https://i.imgur.com/9DlOwAL.png'/>}
          labelPlacement='top'
          name="feeling"
        />
      </RadioGroup>
       
      <FormGroup row>
        <TextField
          onChange={handleChange}
          value={formState.emotion}
          name="emotion"
          type="text"
          placeholder="Emotions"
          label="List your emotions"
          sx={{width:'50%', mr:5}}
        />
        <Slider 
          valueLabelDisplay="auto" 
          min={0}
          max={100}
          onChange={handleChange}
          value={formState.intensity}
          name="intensity"
          sx={{width:'30%'}}
        />
      </FormGroup>

      <FormGroup row> 
        <TextField
          onChange={handleChange}
          value={formState.thought}
          name="thought"
          type="text"
          placeholder="Thought"
          label="Most distressing thought"
          sx={{width:'50%', mr:5 }}
          
        />
        <Slider
          valueLabelDisplay="auto" 
          min={0}
          max={100}
          onChange={handleChange}
          value={formState.rob}
          name="rob"
          sx={{width:'30%'}}
        />
      </FormGroup>
      <TextField
        onChange={handleChange}
        value={formState.situation}
        name="situation"
        placeholder="Briefly Describe The Situation"
        label="Situation"
        fullWidth
        multiline
        rows={6}
      />
      <div className="markPrivate">
        <label htmlFor="private">Mark Private</label>
        <input
          onChange={handleChange}
          name="private"
          type="checkbox"
          checked={formState.private}
        />
      </div>
      <input type="submit" value={isEdit ? "Submit" : "Add Entry" }/>
    </form>

    </Paper>

    </Box>
    );
  };

  export default EntryForm;