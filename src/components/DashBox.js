import { StyledDashBox, LinkStyle } from "../styles";
import { Link } from "react-router-dom";

//Material UI imports
import Box from '@mui/material/Box'
import Paper from "@mui/material/Paper";

const DashBox = ({title, link, createEntry, token, data}) => {
    return (
    <Paper elevation={10} sx={{ width: 250, height: 250}}>
        <LinkStyle>
            <Link to={{
                pathname: `${link}`,
                createEntry: createEntry,
                state: {
                    token: token,
                    data: data
                }
            }}>
                <Box
                    sx={{
                        width: 250,
                        height: 250,
                        backgroundColor: '#eeb1b1',
                        '&:hover': {
                            backgroundColor: '#eeb1b1',
                            opacity: [0.9, 0.8, 0.7],
                        }
                    }}>
                    {title}
                </Box>
            </Link>
        </LinkStyle>
    </Paper>
    );
  };

  export default DashBox;