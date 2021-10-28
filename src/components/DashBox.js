import { StyledDashBox } from "../styles";
import { Link } from "react-router-dom";

const DashBox = ({title, link}) => {
    console.log(title)
    console.log(link);
    return (
    <Link to={link}>
        <StyledDashBox>
            <h2>{title}</h2>
        </StyledDashBox>
    </Link>
    );
  };

  export default DashBox;