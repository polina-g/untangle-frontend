import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const { REACT_APP_BASE_URL } = process.env;

const ViewEntry = () => {
  const {id} = useParams();
  const [ entry, setEntry ] = useState(null);

  const getEntry = async() => {
    const data = await fetch(REACT_APP_BASE_URL+id).then(response => response.json());
    console.log(data);
    setEntry(data);
  }

  useEffect(() => {
    getEntry();
  }, []);

  return (
    <main>
      <h1></h1>
    </main>
  );
};

  export default ViewEntry;