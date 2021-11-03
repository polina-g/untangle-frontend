import { LinkStyle, StyledBoxLinkText } from "../styles";
import { Link } from "react-router-dom";

//Material UI imports
import Box from '@mui/material/Box'
import Paper from "@mui/material/Paper";

const DashBox = ({title, link, color}) => {
    console.log(color);
    return (
    <Box
        sx={{
            width: 250,
            height: 250,
            typography: 'h4',
            fontWeight: 'light',
            wordWrap: 'break-word',
            '&:hover': {
                opacity: [0.9, 0.8, 0.7],
            }
        }}
    >
        <LinkStyle>
            <Link to={`${link}`}>
                <Paper 
                    elevation={10} 
                    sx={{ width: 250, height: 250, bgcolor: `${color}.light`}}
                    >
                    <StyledBoxLinkText className="BoxLinkText">{title}</StyledBoxLinkText>
                </Paper>
            </Link>
        </LinkStyle>
    </Box>
    );
  };

  export default DashBox;