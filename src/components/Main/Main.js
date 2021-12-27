import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
    width: 100%;
    background-color: #121212;
    padding: 30px;
`;

const List = styled.ul`
    font-size: 20px;

    a{
        text-decoration: none;
        text-transform: uppercase;
        color: #f5f5f5;
        background-color: #121212;
        padding: 30px;
        
        &:hover{
            background-color: #f48fb2;
            color: #222f3a;
        }
    }
`;

export default function Main(){
    return(
        <Navbar>
            <List>
                <Link to="/reactjs-styled-components/sign-in">Sign In</Link>
                <Link to="/reactjs-styled-components/sign-up">Sign Up</Link>
            </List>
        </Navbar>    
    );
}