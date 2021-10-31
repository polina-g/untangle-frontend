import { useState } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react/cjs/react.development";
import EntryForm from '../components/EntryForm'
const { REACT_APP_BASE_URL } = process.env;

const NewEntry = (props) => {
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

  useEffect(() => {
    if(props.status === 'edit') {
      setFormState(props.data)
    }
  })

  //Form helper functions
  const handleSubmit = (event) => {
    event.preventDefault();
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
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    props.updateEntry(formState);
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
    console.log(event);
    const value = event.target.name === 'private' 
    ? event.target.checked 
    : event.target.value

    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: value 
    }));
  };

  const newProps = {
    handleChange: () => handleChange(),
    handleSumbit: () => handleSubmit(),
    formState: formState
  }

  const editProps = {
    hanldeChange: () => handleChange(),
    handleSubmit: () => handleUpdate(),
    formState: formState,
    isEdit: true
  }

    return (
    <main>
      <EntryForm {...(props.status ? {...editProps} : {...newProps})}/>
    </main>
    );
  };

  export default NewEntry;