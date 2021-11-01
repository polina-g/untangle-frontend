import { StyledTable } from '../styles';
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

const EntryTable = ({data, token, dashboard}) => {
  const [entries, setEntries] = useState(data);

  const loading = () => {
    return <h1>Loading</h1>
  }

  const loaded = () => {
    return(
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
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
              <TableRow key={index}>
                <TableCell align="center">{formattedDate}</TableCell>
                <TableCell align="center">{feeling}</TableCell>
                <TableCell align="center">{emotion}</TableCell>
                <TableCell align="center">{thought}</TableCell>
                <Link 
                    to={{
                    pathname: `/entries/${entry._id}`,
                    state: {
                      token: token
                    }
                  }}>
                    View
                  </Link>
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