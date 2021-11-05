import { StyledFooter } from '../styles';

const Footer = () => {
    return (
        <StyledFooter>
            <p>Copyright &copy; {new Date().getFullYear()} Untangle. All Rights Reserved. Developed By: Polina Gorbunova</p>
        </StyledFooter>
    );
};

export default Footer;