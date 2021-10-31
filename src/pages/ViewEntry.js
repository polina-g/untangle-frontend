import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const { REACT_APP_BASE_URL } = process.env;
let token;

const ViewEntry = () => {
  const {id} = useParams();
  const location = useLocation();
  token = location.state.token;

  const [ entry, setEntry ] = useState(null);

  const getEntry = async() => {
    const response = await fetch(REACT_APP_BASE_URL+'/'+id, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    
    const data = await response.json();

    const date = new Date(data.createdAt);
    const formattedDate = new Intl.DateTimeFormat('en', {
      dateStyle: 'short'
    }).format(date);

    data.formattedDate = formattedDate;
    setEntry(data);
  };

  const handleDelete = async () => {
    const response = await fetch(REACT_APP_BASE_URL+'/'+id, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
  };

  const loading = () => {
    return (<h1>Loading...</h1>);
  }

  const loaded = () => {
    return (
      <main>
        <h1>{entry.formattedDate}</h1>
        <h1>{entry.feeling}</h1>
        <h1>{entry.emotion} | {entry.intensity}</h1>
        <h1>{entry.thought} | {entry.rob}</h1>
        <p>{entry.situation}</p>
        <Link to="entries/id/edit">
          <button type="button">Edit</button>
        </Link>
        <button type="submit" onClick={handleDelete}>Delete</button> 
      </main>
    )
  }

  useEffect(() => {
    getEntry();
  }, []);

  return entry ? loaded() : loading();
};

  export default ViewEntry;