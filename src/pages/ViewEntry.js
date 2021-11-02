import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import NewEntry from './NewEntry';

import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';

const ViewEntry = ({updateEntry, deleteEntry, data}) => {
  const {id} = useParams();
  const history = useHistory();
  const [ entry, setEntry ] = useState(null);
  const [ action, setAction ] = useState('view')
 
  const getEntry = () => {
    console.log('this is the data:', data)
    if(data.length) {
      const foundEntry = data.find(entry => entry._id === id);
      console.log(foundEntry);
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
      <main>
      <section className="viewEntry">
        <h1>{entry.formattedDate}</h1>
        <h1>{entry.feeling}</h1>
        <h1>{entry.emotion} | {entry.intensity}</h1>
        <h1>{entry.thought} | {entry.rob}</h1>
        <p>{entry.situation}</p>
        <button type="button" onClick={() => setAction('edit')}>Edit</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </section>
    </main>
    );
  };

  const edit = () => {
    return(    
    <main>
      <section className="editEntry">
        <NewEntry status="edit" data={entry} updateEntry={updateEntry} id={id}/>
        <button type="button" onClick={() => setAction('view')}>Cancel</button>
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