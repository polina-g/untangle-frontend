import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewEntry from './NewEntry';
const { REACT_APP_BASE_URL } = process.env;

const ViewEntry = ({updateEntry, user}) => {
  const {id} = useParams();

  const [ entry, setEntry ] = useState(null);
  const [ action, setAction ] = useState('view')
 
  const getEntry = async() => {
    let token = await user.getIdToken();
    const response = await fetch(REACT_APP_BASE_URL+'/'+id, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });

    const data = await response.json();
    //Format timestamp
    const date = new Date(data.createdAt);
    const formattedDate = new Intl.DateTimeFormat('en', {
      dateStyle: 'short'
    }).format(date);
    data.formattedDate = formattedDate;

    //Set state
    setEntry(data);
  };

  const handleDelete = async () => {
    let token = await user.getIdToken();
    await fetch(REACT_APP_BASE_URL+'/'+id, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
  };

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
    return (<h1>Loading...</h1>);
  }

  const loaded = () => {
    return action === 'view' ? view() : edit()
  }

  useEffect(() => {
    getEntry();
  }, []);

  return entry ? loaded() : loading();
};

  export default ViewEntry;