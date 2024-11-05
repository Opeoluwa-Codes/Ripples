import styled from "styled-components"
import { Link } from 'react-router-dom';
import StackIcons from "../../Components/Reusable/StackIcons"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJs } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { TbBrandVite } from "react-icons/tb";
import { IoLogoVercel } from "react-icons/io5";

const TechStack =()=>{
    return(
        <TechStackWrapper>

                <TechHeader>

                    <h2>MY TECH STACK</h2>
                    <p>Technologies I can work with...</p>

                </TechHeader>

                <TechIcons>

                    <StackIcons icons={<Github/>}/>
                    <StackIcons icons={<Figma/>}/>
                    <StackIcons icons={<VSC/>}/>
                    <StackIcons icons={<HTML/>}/>
                    <StackIcons icons={<CSS/>}/>
                    <StackIcons icons={<JS/>}/>
                    <StackIcons icons={<TS/>}/>
                    <StackIcons icons={<React/>}/>
                    <StackIcons icons={<GitAlt/>}/>
                    <StackIcons icons={<Vite/>}/>
                    <StackIcons icons={<Vercel/>}/>

                </TechIcons>

        </TechStackWrapper>
    );
};
export default TechStack;

const TechStackWrapper = styled.div`
    
    width: 100%;
    box-sizing: border-box;
    padding-left: 100px;
    padding-right: 100px;
    margin-bottom: 80px;

`

const TechHeader = styled.div`
    
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-bottom: 100px;
    
    h2{

        font-size: 50px;
        font-weight: 500;
        font-family: Bebas Neue;
        letter-spacing: 2px;
        color: #1E3A8A;
        margin-bottom: 10px;

    }

    p{

        font-size: 16px;
        font-weight: 400;
        font-family: Manrope;
        color: #1E3A8A;
        
    }
    
`

const TechIcons = styled.div`
    
    width: inherit;
    height: fit-content;
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
`

const Github =styled(FaGithub)`
    
    font-size: 70px;
    color: #44A8B3;

`

const Figma =styled(FaFigma)`
    
    font-size: 70px;
    color: #E70FAA;

`

const VSC =styled(BiLogoVisualStudio)`
    
    font-size: 70px;
    color: #1E3A8A;

`

const HTML =styled(FaHtml5)`
    
    font-size: 70px;
    color: #E44F26;

`

const CSS =styled(IoLogoCss3)`
    
    font-size: 70px;
    color: #1572B6;

`

const JS =styled(FaJs)`
    
    font-size: 70px;
    color: #F5DE19;
    background-color: black;

`

const React =styled(FaReact)`
    
    font-size: 70px;
    color: #1E3A8A;

`

const TS =styled(SiTypescript)`
    
    font-size: 70px;
    color: #1E3A8A;

`

const GitAlt =styled(FaGitAlt)`
    
    font-size: 70px;
    color: #DE4C36;

`

const Vite =styled(TbBrandVite)`
    
    font-size: 70px;
    color: #7883f5;

`

const Vercel =styled(IoLogoVercel)`
    
    font-size: 70px;

`
