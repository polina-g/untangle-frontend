import { StyledDashBox } from "../styles";
import { Link } from "react-router-dom";

const DashBox = ({title, link, createEntry, token, data}) => {
    return (
    <Link to={{
        pathname: `${link}`,
        createEntry: createEntry,
        data: data,
        state: {
            token: token
        }
        }}>
        <StyledDashBox>
            <h2>{title}</h2>
        </StyledDashBox>
    </Link>
    );
  };

  export default DashBox;