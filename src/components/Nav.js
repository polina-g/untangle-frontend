import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="nav">
        <Link to="/">
            <div>Home</div>
        </Link>
        <Link to="/login">
            <div>Log In</div>
        </Link>
        <Link to="/register">
            <div>Sign Up</div>
        </Link>
        <Link to="/dashboard">
            <div>Dashboard</div>
        </Link>
        <Link to="/entries/new">
            <div>New Entry</div>
        </Link>
        <Link to="/entries">
            <div>All Entries</div>
        </Link>
        <Link to="/">
            <div>Log Out</div>
        </Link>
    </nav>
);
  };

  export default Nav;