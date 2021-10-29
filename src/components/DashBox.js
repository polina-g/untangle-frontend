import { StyledDashBox } from "../styles";
import { Link } from "react-router-dom";

const DashBox = ({title, link, createEntry, token}) => {
    return (
    <Link to={{
        pathname: `${link}`,
        createEntry: createEntry,
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