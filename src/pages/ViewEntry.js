import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import NewEntry from './NewEntry';

import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';

const ViewEntry = ({updateEntry, deleteEntry, data}) => {
  const {id} = useParams();
  const history = useHistory();
  const [ entry, setEntry ] = useState(null);
  const [ action, setAction ] = useState('view')

  //Smiley face images:
  const images = ['https://i.imgur.com/kj80WQP.png', 
                  'https://i.imgur.com/dPeJdMK.png', 
                  'https://i.imgur.com/X3Oeeja.png', 
                  'https://i.imgur.com/Wkm4rbM.png', 
                  'https://i.imgur.com/9DlOwAL.png'];
 
  const getEntry = () => {
    if(data.length) {
      const foundEntry = data.find(entry => entry._id === id);

      //Format timestamp
      const date = new Date(foundEntry.createdAt);
      const formattedDate = new Intl.DateTimeFormat('en', {
        dateStyle: 'short'
      }).format(date);
      foundEntry.formattedDate = formattedDate;
      
      setEntry(foundEntry);
    } else {
      loading();
    }
  };

    const handleDelete = () => {
      deleteEntry(id);
      history.push('/dashboard');
    }

  const view = () => {
    return(
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{width: '100%', mt: 5}}
      >
      <Paper elevation={5} sx={{width: '70%', mb: '2rem'}}>
        <List>
          <ListItem>
            <ListItemText 
              primary={entry.formattedDate}
            />
            <ListItemIcon>
              <img src={images[entry.feeling-1]} />
            </ListItemIcon>
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemText 
              secondary={`${entry.emotion}  (Intensity:  ${entry.intensity}/100)`}
              primary='My emotions'
            />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemText 
              secondary={`${entry.thought} (Rate of belief: ${entry.rob}/100)`}
              primary="My Most Distressing Thought"
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              secondary={entry.situation}
              primary='Brief Description'
              sx={{mb: 5}}
            />
          </ListItem>
        </List>
        <Box
          display='flex'
          alignItems='flex-start'>
          <Button
            type='button'
            onClick={() => setAction('edit')}
            color='primary'
            variant='contained'
            sx={{width:'20%', mr:5, mb:3, ml:2}}
          >
            Edit Entry
          </Button>

          <Button
            type='button'
            onClick={handleDelete}
            color='secondary'
            variant='contained'
            sx={{width:'20%', mr:5, mb:3}}
          >
            Delete Entry
          </Button>
        </Box>
      </Paper>
    </Box>
    );
  };

  const edit = () => {
    return(    
    <main>
      <section className="editEntry">
        <button type="button" onClick={() => setAction('view')}>Cancel</button>
        <NewEntry status="edit" data={entry} updateEntry={updateEntry} id={id}/>
      </section>
    </main>
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
    return action === 'view' ? view() : edit()
  }

  useEffect(() => {
    getEntry();
  }, [data]);

  return entry ? loaded() : loading();
};

  export default ViewEntry;