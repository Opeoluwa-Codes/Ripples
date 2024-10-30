import { useState } from 'react'
import styled from "styled-components"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BiLogoKickstarter } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";

const Header =()=>{
    return(
        <div>

            <NavWrapper>

                <div className='navLeft'>

                    <div className='icon'>

                        <BiLogoKickstarter/>
                        <p>Kuda</p>

                    </div>

                    <div className='links'>

                        <p>Personal</p>
                        <p>Business</p>
                        <p>Company</p>
                        <p>Help</p>

                    </div>

                </div>

                <div className='navRight'>

                    <div className='action'>

                        <p>Sign In</p>
                        <button>Join Kuda</button>
                        
                        <div>
                            <GiWorld/> 
                        </div>

                    </div>

                </div>

            </NavWrapper>

        </div>
    );
};
export default Header;

const NavWrapper = styled.div`
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 10px 20px 10px 20px;
    display: flex;
    justify-content: space-between;
    border: 1px black solid;
`