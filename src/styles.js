import styled from 'styled-components';

export const StyledHeader = styled.nav`
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

export const StyledMain = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
`;

export const StyledDashBoardTop = styled.section`
    margin: 50px 60px 20px 60px;
    display: flex;
    justify-content: center;
    gap: 30px;
`;


export const LinkStyle = styled.div`
    a {
        text-decoration: none;
    }
`;

export const StyledBoxLinkText = styled.p`
    padding: 80px 15px 0 15px; 
    margin: 0; 
`;

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    height: 5rem;
    justify-content: center;
   
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 20px auto;
    p {
        text-align: left;
        font-size: 24px;
    }
    div {
        margin-bottom: 10px; 
        display: flex;
        .column {
            display: flex;
            flex-direction: column;
            width: 10%;
            align-items: flex-start;
            justify-content: flex-start;
            input {
                width: 40px; 
            }
        }
    }
    label {
        text-align: left;
        width: 50%;
        font-size: 1.5rem;
    }
    input {
        height: 2.5rem;
        width: 50%;
        margin-bottom: 20px; 
    }
    input[type="range"] {
        width: 30%;
    }
    input[type="radio"] {
        height: 1rem; 
    }
    input[type="submit"], button {
        width: 100px;
        height: 50px; 
        font-size: 18px;
        background-color: lightblue;
        color: darkblue;
        cursor: pointer;
    }
    textarea {
        width: 80%;
        height: 200px; 
    }
    .markPrivate {
        margin-top: 20px; 
        input {
            width: 20px; 
        }
        label {
            width: 140px; 
        }
    }
`;
