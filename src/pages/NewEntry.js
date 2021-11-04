import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import EntryForm from '../components/EntryForm'

const NewEntry = (props) => {
  const history = useHistory();
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
  }, [props.status, props.data]);

  //Form helper functions
  const handleSubmit = async (event) => {
    event.preventDefault();
    await props.createEntry(formState);
    setFormState({
      feeling: 0,
      emotion: '',
      intensity: 0,
      thought: '',
      rob: 0,
      situation: '',
      private: false
    });
    history.push('/dashboard');
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    await props.updateEntry(formState, props.id);
    setFormState({
      feeling: 0,
      emotion: '',
      intensity: 0,
      thought: '',
      rob: 0,
      situation: '',
      private: false
    });
    history.push('/dashboard')
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