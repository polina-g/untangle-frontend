import EntryTable from "../components/EntryTable";
import { useLocation } from "react-router";

const AllEntries = (props) => {
  const location = useLocation();
  const data = location.data;
    return (
    <main>
      <h1>All entries</h1>  
      <EntryTable data={data}/>
    </main>
    );
  };

  export default AllEntries;