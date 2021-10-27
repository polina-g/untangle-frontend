import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = (props) => {
  const StyledHeader = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    height: 5rem;
    background-color: purple;
    color: white;
    box-shadow: 1px 1px 3px 2px #808080;
    nav {
      display: flex;
      align-items: center;
      ul {
        display: flex;
        list-style: none;
        align-items: center;
        li {
          margin-right: 1.5rem;
          font-size: 1.5rem;
          font-weight: 500;
          a {
            text-decoration: none;
            color: inherit;
          }
          &::last-child:hover {
            cursor: pointer;
          }
        }
      }
    }
  `;
  return (
    <StyledHeader className="nav">
      <nav>
        <ul>
          <li>
            <Link to="/">
                <div>Home</div>
            </Link>
          </li>
          <li>
            <Link to="/login">
                <div>Log In</div>
            </Link>
          </li>
          <li>
            <Link to="/register">
                <div>Sign Up</div>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
                <div>Dashboard</div>
            </Link>
          </li>
          <li>
            <Link to="/entries/new">
                <div>New Entry</div>
            </Link>
          </li>
          <li>
            <Link to="/entries">
                <div>All Entries</div>
            </Link>
          </li>
          <li>
            <Link to="/">
                <div>Log Out</div>
            </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
);
  };

  export default Nav;