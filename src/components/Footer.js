import { StyledFooter } from '../styles';

const Footer = (props) => {
    return (
        <StyledFooter>
            <p>Copyright &copy; {new Date().getFullYear()} Untsngle. All Rights Reserved. Developed By: Polina Gorbunova</p>
        </StyledFooter>
    );
};

export default Footer;