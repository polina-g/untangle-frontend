import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";


const EntryForm = ({handleChange, handleSubmit, formState, isEdit}) => {
  return (
    <Box 
    sx={{width: '70%', mt:5, ml:'15%'}}
    justifyContent="center"
    alignItems="center">
      <Paper 
        elevation={10} 
        sx={{width: '100%', p: '2rem'}}
      >
        <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <Typography
            variant="h4"
            color='primary'
            textAlign='center'
            sx={{mb: 5, mt: 3}}
          >
            How are you feeling right now? 
          </Typography>
    
          <RadioGroup 
            row
            sx={{pl: '27%', mb: 8}}>
            <FormControlLabel 
              value="1" 
              control={<Radio />}
              onChange={handleChange}
              label={<img src='https://i.imgur.com/kj80WQP.png' alt='smile face 1'/>}
              labelPlacement='top'
              name="feeling"
              checked={formState.feeling==1}
            />
            <FormControlLabel 
              value="2" 
              control={<Radio />}
              onChange={handleChange}
              label={<img src='https://i.imgur.com/dPeJdMK.png' alt='smile face 2'/>}
              labelPlacement='top'
              name="feeling"
              checked={formState.feeling==2}
            />
            <FormControlLabel 
              value="3" 
              control={<Radio />}
              onChange={handleChange}
              label={<img src='https://i.imgur.com/X3Oeeja.png' alt='smile face 3'/>}
              labelPlacement='top'
              name="feeling"
              checked={formState.feeling==3}
            />
            <FormControlLabel 
              value="4" 
              control={<Radio />}
              onChange={handleChange}
              label={<img src='https://i.imgur.com/Wkm4rbM.png' alt='smile face 4'/>}
              labelPlacement='top'
              name="feeling"
              checked={formState.feeling==4}
            />
            <FormControlLabel 
              value="5" 
              control={<Radio />}
              onChange={handleChange}
              label={<img src='https://i.imgur.com/9DlOwAL.png' alt='smile face 5'/>}
              labelPlacement='top'
              name="feeling"
              checked={formState.feeling==5}
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
            <FormGroup sx={{flexGrow: 1, mr: 5, gap:'10px'}}>
              <Typography
                variant="h6"
                color='primary'
                textAlign='left'
              >
                Intensity
              </Typography>
              <Slider 
                valueLabelDisplay="auto" 
                min={0}
                max={100}
                onChange={handleChange}
                value={formState.intensity}
                name="intensity"
                fullWidth
              />
            </FormGroup>
          </FormGroup>

          <FormGroup row> 
            <TextField
              onChange={handleChange}
              value={formState.thought}
              name="thought"
              type="text"
              placeholder="Thought"
              label="Most Distressing Thought"
              sx={{width:'50%', mr:5 }}
              
            />
            <FormGroup sx={{flexGrow: 1, mr: 5, mb: 5}}>
              <Typography
                variant="h6"
                color='primary'
                textAlign='left'
              >
                Rate of Belief
              </Typography>
              <Slider
                valueLabelDisplay="auto" 
                min={0}
                max={100}
                onChange={handleChange}
                value={formState.rob}
                name="rob"
                fullWidth
                ValueLabelDisplay='on'
              />
            </FormGroup>
          </FormGroup>
          <TextField
            onChange={handleChange}
            value={formState.situation}
            name="situation"
            placeholder="Briefly Describe The Situation"
            label="Situation"
            fullWidth
            multiline
            rows={8}
          />

          <FormControlLabel
            onChange={handleChange}
            name="private"
            checked={formState.private}
            control={<Checkbox />}
            label="Mark Private"
            labelPlacement="left"
          />
      <Button type="submit" variant="contained" sx={{mt: '1rem', width:'30%'}}>{isEdit ? 'Submit Changes' : 'Add Entry'}</Button>
      </FormControl>
    </form>
    </Paper>
    </Box>
    );
  };

  export default EntryForm;