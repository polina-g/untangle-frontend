import EntryTable from "../components/EntryTable";
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const AllEntries = ({data}) => {
    const loading = () => {
      return (
        <Box sx={{ width: 300 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      );
    };

    const loaded = () => {
      return (
        <main>
          <h1>All entries</h1>  
          <EntryTable data={data}/>
        </main>
      );
    }

    return data ? loaded() : loading();
  };

  export default AllEntries;