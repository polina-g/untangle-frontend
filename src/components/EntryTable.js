import { Link } from 'react-router-dom';
//Material UI imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Skeleton from '@mui/material/Skeleton';

const EntryTable = ({data, dashboard}) => {
  const loading = () => {
    return (
      <Box sx={{ width: 1000, pl: '30%', pt: 10}}>
        <Skeleton />
        <Skeleton animation='wave' />
        <Skeleton animation={false} />
      </Box>
    );
  };

  const noEntries = () => {
    return (
      <Box
        sx={{width:'80%', ml:'10%', mt:10}}
      >
        <Typography
        variant='h3'
        color='primary'
        sx={{mt: 3}}
        fontWeight='light'
      >
        No entries to see yet...
      </Typography>
      <Typography
        variant='h3'
        color='primary'
        fontWeight='light'
      >
        Click "Create New Entry" to add your first one!
      </Typography>
        <img src='https://i.imgur.com/qs9rHvq.png' width='80%' alt='confused people'/>
      </Box>
    );
  };

  const showEntries = () => {
    return(
      <TableContainer 
        component={Paper}
        sx={{width: '90%', mt: 8, ml: '5%'}}  
        elevation={10}
      >
        <Table aria-label='simple table' 
               sx={{width: '100%'}} 
               size='medium' 
               padding='normal' 
               stickyHeader
        >
          <TableHead>
            <TableRow>
              <TableCell align='center'>Date</TableCell>
              <TableCell align='center'>Feeling</TableCell>
              <TableCell align='center'>Emotion</TableCell>
              <TableCell align='center'>Thought</TableCell>
              <TableCell align='center'>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              data.map((entry, index) => {
                if (dashboard && index > 4) return null;
                const { createdAt, feeling, emotion, thought } = entry;
                const date = new Date(createdAt);
                const formattedDate = new Intl.DateTimeFormat('en', {
                  timeStyle: 'short',
                  dateStyle: 'short'
                }).format(date);
                return (            
                  <TableRow key={index} hover='true'>
                    <TableCell align='center'>{formattedDate}</TableCell>
                    <TableCell align='center'>{feeling}</TableCell>
                    <TableCell align='center'>{emotion}</TableCell>
                    <TableCell align='center'>{thought}</TableCell>
                    <TableCell align='center'>
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
  }

  const loaded = () => {
    return data.length ? showEntries() : noEntries();
  };

    return data ? loaded() : loading();
  };

  export default EntryTable;