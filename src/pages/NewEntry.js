import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import EntryForm from '../components/EntryForm'

const NewEntry = (props) => {
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
  }, [])

  //Form helper functions
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createEntry(formState);
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
    props.updateEntry(formState, props.id);
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
    console.log ([event.target.name], value);
    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: value 
    }));
  };

  const newProps = {
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    formState: formState
  }

  const editProps = {
    handleChange: handleChange,
    handleSubmit: handleUpdate,
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