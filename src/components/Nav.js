import { Link } from 'react-router-dom';
import { logOut } from '../services/firebase'
import { StyledHeader } from '../styles';

const Nav = ({user, token, data, createEntry}) => {
  return (
    <StyledHeader className="nav">
      <nav>
        <ul>
          { user ? 
            <>
              <li onClick={logOut}>
                  Log Out
              </li>
              <li>
                <Link to="/dashboard">
                    Dashboard
                </Link>
              </li>
              <li>
                <Link to={{
                  pathname: '/entries/new',
                }}>
                New Entry
                </Link>
              </li>
              <li>
              <Link to={{
                  pathname: '/entries',
                }}>
                All Entries
                </Link>
              </li>
            </>
           :
            <> 
              <li>
                <Link to="/">
                    Home
                </Link>
              </li>
              <li>
                <Link to="/login">
                    Log In
                </Link>
              </li>
              <li>
                <Link to="/register">
                    Sign Up
                </Link>
              </li>
            </>
        }
        </ul>
      </nav>
    </StyledHeader>
);
  };

  export default Nav;