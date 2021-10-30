import { StyledTable } from '../styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const EntryTable = ({data, token, dashboard}) => {
  const [entries, setEntries] = useState(data);
  const loading = () => {
    return <h1>Loading</h1>
  }

  const loaded = () => {
    return (
      <section>
      <StyledTable>
      <thead>
          <tr>
            <th>Date</th>
            <th>Feeling</th>
            <th>Emotion</th>
            <th>Thought</th>
          </tr>
      </thead>
      <tbody>
      {
        entries.map((entry, index) => {
          if (dashboard && index > 4) return;
          const { createdAt, feeling, emotion, thought } = entry;
          const date = new Date(createdAt);
          const formattedDate = new Intl.DateTimeFormat('en', {
            timeStyle: 'short',
            dateStyle: 'short'
          }).format(date);
          return (            
            <tr key={index}>
              <td>
                <Link 
                  to={{
                  pathname: `/entries/${entry._id}`,
                  state: {
                    token: token
                  }
                }}>
                  {formattedDate}
                </Link>
              </td>
              <td>{feeling}</td>
              <td>{emotion}</td>
              <td>{thought}</td>
            </tr>
          );
        })
      }
      </tbody>
      </StyledTable>
    </section>
    );
  };

    return entries ? loaded() : loading()
  };

  export default EntryTable;