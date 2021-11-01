import { LinkStyle, StyledBoxLinkText } from "../styles";
import { Link } from "react-router-dom";

//Material UI imports
import Box from '@mui/material/Box'
import Paper from "@mui/material/Paper";

const DashBox = ({title, link, token, data}) => {
    return (
    <Box
        sx={{
            width: 250,
            height: 250,
            typography: 'h4',
            fontWeight: 'light',
            backgroundColor: 'whitesmoke',
            wordWrap: 'break-word',
            '&:hover': {
                backgroundColor: 'whitesmoke',
                opacity: [0.9, 0.8, 0.7],
            }
        }}
    >
        <LinkStyle>
            <Link to={{
                pathname: `${link}`,
                state: {
                    token: token,
                    data: data
                }
            }}>
                <Paper elevation={10} sx={{ width: 250, height: 250}}>
                    <StyledBoxLinkText className="BoxLinkText">{title}</StyledBoxLinkText>
                </Paper>
            </Link>
        </LinkStyle>
    </Box>
    );
  };

  export default DashBox;