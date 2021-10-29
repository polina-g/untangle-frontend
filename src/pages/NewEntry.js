import { useState } from "react";
import { useLocation } from "react-router";
import EntryForm from '../components/EntryForm'
const { REACT_APP_BASE_URL } = process.env;

const NewEntry = () => {
  //Get token
  const location = useLocation();
  const createEntry = location.createEntry;

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
    console.log('Form state in new entry page: ', formState);
    createEntry(formState);
    setFormState({
      feeling: 0,
      emotion: '',
      intensity: 0,
      thought: '',
      rob: 0,
      situation: '',
      private: false
    });
  }

  const handleChange = (event) => {
    const value = event.target.name === 'private' 
    ? event.target.checked 
    : event.target.value

    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: value 
    }));
  };

    return (
    <main>
      <h1>NewEntry</h1>
      <EntryForm handleChange={handleChange} handleSubmit={handleSubmit} formState={formState}/>
    </main>
    );
  };

  export default NewEntry;