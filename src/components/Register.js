import { useState } from "react";

const Register = ({createClient}) => {
  const [formState, setFormState] = useState({
    acct: 'client',
    f_name: '',
    l_name: '',
    email: '',
    therapist: [],
  });

    //Form helper functions
    const handleChange = (event) => {
      setFormState(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    };

    const handleSumbit = (event) => {
      event.preventDefault();
      createClient(formState);
      setFormState({
        acct: 'client',
        f_name: '',
        l_name: '',
        email: '',
        therapist: [],
      })
    }
    return (
      <section>
        <form onSubmit={handleSumbit}>
          <input
            onChange={handleChange}
            value={formState.f_name}
            name="f_name"
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={handleChange}
            value={formState.l_name}
            name="l_name"
            type="text"
            placeholder="Last Name"
          />
          <input
            onChange={handleChange}
            value={formState.email}
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <input type="submit" value="Create Profile"/>
        </form>
      </section>
    );
  };

  export default Register;