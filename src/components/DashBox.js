import { StyledDashBox } from "../styles";
import { Link } from "react-router-dom";

const DashBox = ({title, link, token}) => {
    console.log('dashbox token: ', token);
    return (
    <Link to={{
        pathname: `${link}`,
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