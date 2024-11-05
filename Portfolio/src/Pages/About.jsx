import styled from "styled-components"
import { Link } from 'react-router-dom';
import Icons from "../Components/Reusable/Icons";import StackIcons from "../Components/Reusable/StackIcons"
import Experience from "../Components/Reusable/Experience"
import Contact from "../Components/HomePage/Contact";
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

const About =()=>{
    return(

        <AllAbout>

            <Top>

                <KnowMe>
                    Me
                </KnowMe>

                <MeInfo>

                    <Title>

                        I am a front-end developer based in Lagos, Nigeria.

                    </Title>


                    <Paragraph>

                        I am a front-end developer based in Lagos, Nigeria.

                    </Paragraph>


                    <ButtonIcon>

                        <button>DOWNLOAD RESUME</button>
                        <Icons image={<LinkedIn/>}/>
                        <Icons image={<GitHub/>}/>

                    </ButtonIcon>

                </MeInfo>

            </Top>

            <TechStack>

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

            </TechStack>

            <ExperienceContainer>

                <MyExperience>

                    My Experience

                </MyExperience>


                <Description>

                    <Experience role="Software Intern" date="July 2024 - Jan 2025" company="SAIL" description="Lorem Ipsum"/>

                </Description>

            </ExperienceContainer>


        </AllAbout>

    );
};
export default About;

const AllAbout = styled.div`
    
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    padding: 150px 100px 150px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Top = styled.div`
    
    width: inherit;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
    
`

const KnowMe = styled.div`

    font-size: 80px;
    font-weight: 500;
    font-family: Bebas Neue;
    letter-spacing: 2px;
    color: #1E3A8A;
    margin-bottom: 30px;
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: center;

`

const MeInfo = styled.div`
    
    width: inherit;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 100px;
    
`

const Title = styled.div`
    
    font-size: 32px;
    font-weight: 600;
    font-family: Manrope;
    color: #1E3A8A;
    width: inherit;
    margin-bottom: 20px;
    
`

const Paragraph = styled.div`
    
    font-size: 16px;
    font-weight: 300;
    font-family: Manrope;
    color: #1E3A8A;
    width: inherit;
    margin-bottom: 40px;
    
`

const ButtonIcon = styled.div`
    
    width: 300px;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    button{

        font-size: 14px;
        font-weight: 700;
        font-family: Manrope;
        color: #1E3A8A;
        border: 1px #1E3A8A solid;
        background-color: transparent;
        width: 200px;
        height: 35px;
        border-radius: 100px;

    }

`


const LinkedIn = styled(FaLinkedinIn)`
    
    font-size: 20px;
    color: #1E3A8A;
    
`


const GitHub = styled(FaGithub)`
    
    font-size: 20px;
    color: #1E3A8A;
    
`



const TechStack = styled.div`
    
    width: inherit;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
        
`


const TechHeader = styled.div`
    
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    
    h2{

        font-size: 50px;
        font-weight: 800;
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


const ExperienceContainer = styled.div`
    
    width: inherit;
    display: flex;
    justify-content: space-between;
    align-items: start;
    
`


const MyExperience = styled.div`
    
    font-size: 50px;
    font-weight: 800;
    font-family: Bebas Neue;
    letter-spacing: 2px;
    color: #1E3A8A;

`

const Description = styled.div`
    
    box-sizing: border-box;
    padding-top: 10px;
    
`