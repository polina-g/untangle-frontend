import styled from 'styled-components';

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

const StyledMain = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
`;

const StyledDashBoardTop = styled.section`
    margin: 50px 60px 20px 60px;
    display: flex;
    justify-content: space-around;
`;

const StyledDashBox = styled.div`
    border: 1px solid black;
    width: 300px;
    height: 300px; 
`;

const StyledTable = styled.table`
    th, td {
        text-align: left;
        padding: 5px;
    }
    tr:nth-child(even) {
        background-color:lightcyan;
    }
`;

export {
    StyledHeader,
    StyledMain,
    StyledDashBoardTop,
    StyledDashBox,
    StyledTable
}