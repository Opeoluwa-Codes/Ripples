import styled from "styled-components"
import { Link } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Header =()=>{
    return(
        <Heading>

            <NameDiv>
                OPEOLUWA O.
            </NameDiv>

            <NavBar>

                <Links to="/"><Nav>Home</Nav></Links>
                <Links to="/About"><Nav>About</Nav></Links>
                <Links to="/Projects"><Nav>Projects</Nav></Links>
                <Links to="/Contact"><Nav>Contact</Nav></Links>
                <DarkMode/>
                <LightMode/>
            </NavBar>

        </Heading>
    );
};
export default Header;

const Heading = styled.div`
    
    width: 100%;
    height: fit-content;
    position: fixed;
    top: 0px;
    z-index: 10000;
    box-sizing: border-box;
    padding-top: 20px; 
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    box-shadow: 0px 0px 5px 5px #eff1ff;
`

const NameDiv = styled.div`
    
    width: fit-content;
    font-size: 30px;
    font-weight: 400;
    font-family: Bebas Neue;
    letter-spacing: 1px;
    color: #1E3A8A;

`

const NavBar = styled.div`

    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`

const Nav = styled.div`
    
    font-size: 14px;
    font-weight: 400;
    font-family: Manrope;
    color: #1E3A8A;

`

const Links = styled(Link)`
    
    text-decoration: none;

`

const DarkMode = styled(MdDarkMode)`
    
    font-size: 30px;
    color: #3B82F6;
    display: none;

`

const LightMode = styled(MdLightMode)`
    
    font-size: 30px;
    color: #1E3A8A;

`
