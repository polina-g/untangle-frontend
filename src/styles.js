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
    justify-content: center;
    align-items: center;    
`;