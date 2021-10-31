import { StyledDashBox, LinkStyle } from "../styles";
import { Link } from "react-router-dom";

const DashBox = ({title, link, createEntry, token, data}) => {
    return (
    <LinkStyle>
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
    </LinkStyle>
    );
  };

  export default DashBox;