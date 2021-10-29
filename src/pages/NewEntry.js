import { useState } from "react";
import { useLocation } from "react-router";
import EntryForm from '../components/EntryForm'
const { REACT_APP_BASE_URL } = process.env;

const NewEntry = () => {
  //Get token
  const location = useLocation();
  let token = location.state.token;

  //Set form state
  const [formState, setFormState] = useState({
    feeling: 0,
    emotion: '',
    intensity: 0,
    thought: '',
    rob: 0,
    situation: '',
    private: false
  });

  //Form helper functions
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleChange = (event) => {
    const value = event.target.name === 'private' 
    ? event.target.checked 
    : event.target.value

    console.log(value)

    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: value 
    }))
  }
    return (
    <main>
      <h1>NewEntry</h1>
      <EntryForm handleChange={handleChange} handleSubmit={handleSubmit} formState={formState}/>
    </main>
    );
  };

  export default NewEntry;