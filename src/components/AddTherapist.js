import { useState, useEffect } from "react";
import Box from "@mui/system/Box";
import Skeleton from "@mui/material/Skeleton";

const AddTherapist = ({client, therapists}) => {
  useEffect(() => {
 
  }, [client, therapists])

  const noTherapists = () => {
    return(<>No Therapist</>);
  };

  const showTherapist = () => {
    return(<>This is my Therapist</>)
  };
  
  const loading = () => {
    return (
      <Box sx={{ width: 1000, pl: '30%', pt: 10}}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    );
  }

  const loaded = () => {
    return client[0].therapist.length ? showTherapist() : noTherapists()
  }

    return (client && therapists) ? loaded() : loading();
  };

  export default AddTherapist;