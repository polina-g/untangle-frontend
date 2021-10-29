import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
const { REACT_APP_BASE_URL } = process.env;

const ViewEntry = (props) => {
  const {id} = useParams();
  // const [ entry, setEntry ] = useState(null);

  // const getEntry = async() => {
  //   const token = await user.getIdToken();
  //   const response = await fetch(REACT_APP_BASE_URL+'/'+id, {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Bearer ' + token
  //     }
  //   });
  //   const data=response.json();
  //   console.log(data);
  //   setEntry(data);
  // }

  // useEffect(() => {
  //   getEntry();
  // }, []);

  return (
    <main>
      <h1></h1>
    </main>
  );
};

  export default ViewEntry;