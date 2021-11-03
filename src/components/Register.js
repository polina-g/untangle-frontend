import RegisterTherapist from './RegisterTherapist';
import RegisterClient from './RegisterClient';

import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";

const Register = ({createClient, createTherapist, user, setClient, clientType}) => {
    return (
      clientType === 'client' ? <RegisterClient user={user} 
                                                createClient={createClient}
                                                setClient={setClient}
                                                /> 
                              : <RegisterTherapist user={user} 
                                                    createTherapist={createTherapist}
                                                    setClient={setClient}
                                                    />
    );
  };

  export default Register;