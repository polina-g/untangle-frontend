import { StyledTable } from '../styles';
import { Link } from 'react-router-dom';

const EntryTable = ({data, user}) => {
  console.log('user in entrytable', user);
    return (
      <section>
        <StyledTable>
        <tr>
          <th>Date</th>
          <th>Feeling</th>
          <th>Emotion</th>
          <th>Thought</th>
        </tr>
        {
          data.map(entry => {
            const { createdAt, feeling, emotion, thought } = entry;
            const date = new Date(createdAt);
            const formattedDate = new Intl.DateTimeFormat('en', {
              timeStyle: 'short',
              dateStyle: 'short'
            }).format(date);

            return (
              <tr>
                <td>
                  <Link to={{
                    pathname: `/entries/${entry._id}`,
                    state: {
                      user: user
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
      </StyledTable>
    </section>
    )
  };

  export default EntryTable;