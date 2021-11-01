import EntryTable from "../components/EntryTable";

const AllEntries = ({data}) => {
    return (
    <main>
      <h1>All entries</h1>  
      <EntryTable data={data}/>
    </main>
    );
  };

  export default AllEntries;