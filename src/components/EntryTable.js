import { LinkStyle } from '../styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';

//Material UI imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const EntryTable = ({data, token, dashboard}) => {
  const [entries, setEntries] = useState(data);

  const loading = () => {
    return <h1>Loading</h1>
  }

  const loaded = () => {
    return(
      <TableContainer 
        component={Paper}
        sx={{width: '90%', mt: 8, ml: '5%'}}  
        elevation={10}
      >
        <Table aria-label="simple table" sx={{width: '100%'}} size='medium' padding='normal' stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Feeling</TableCell>
              <TableCell align="center">Emotion</TableCell>
              <TableCell align="center">Thought</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
          entries.map((entry, index) => {
            if (dashboard && index > 4) return null;
            const { createdAt, feeling, emotion, thought } = entry;
            const date = new Date(createdAt);
            const formattedDate = new Intl.DateTimeFormat('en', {
              timeStyle: 'short',
              dateStyle: 'short'
            }).format(date);
            return (            
              <TableRow key={index} hover='true'>
                <TableCell align="center">{formattedDate}</TableCell>
                <TableCell align="center">{feeling}</TableCell>
                <TableCell align="center">{emotion}</TableCell>
                <TableCell align="center">{thought}</TableCell>
                <TableCell align="center">
                  <Link to={`/entries/${entry._id}`}>
                    <Button
                      type='button'
                      color='secondary'
                      variant='contained'
                      fullWidth
                      sx={{mt:1}}
                    >
                      View
                    </Button>
                  </Link>
                </TableCell>  
                </TableRow>
              );
            })
          }
          </TableBody>
        </Table>
      </TableContainer>
    )
  };

    return entries ? loaded() : loading()
  };

  export default EntryTable;