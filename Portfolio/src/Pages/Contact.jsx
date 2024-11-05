import styled from "styled-components"
import { Link } from 'react-router-dom';
import Icons from "../Components/Reusable/Icons"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Contact =()=>{
    return(
        <ContactWrapper>

            <LeftDiv>

                <p>LET'S CONNECT</p>

                <P1>Email - opeoluwacodes@gmail.com</P1>
                <P2>Find my resume here.</P2>

                <IconDiv>

                    <Icons image={<GitHub/>}/>
                    <Icons image={<LinkedIn/>}/>
                    <Icons image={<X/>}/>

                </IconDiv>

            </LeftDiv>

            <RightDiv>
                <form action="post">

                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required/>

                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" required/>

                    <button>Submit</button>

                </form>
            </RightDiv>

        </ContactWrapper>
    );
};
export default Contact;

const ContactWrapper = styled.div`
    
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    padding: 100px 100px 100px 100px ;
    display: flex;
    justify-content: space-between;
    align-items: start;

`

const LeftDiv = styled.div`
    
    width: 500px;
    height: fit-content;

    p{
        font-size: 50px;
        font-weight: 500;
        font-family: Bebas Neue;
        margin-bottom: 15px;
        margin-top: 0px;
        color: #1E3A8A;
    }

`

const P1 = styled.div`
    
    font-size: 16px;
    font-weight: 500;
    font-family: Manrope;
    margin-bottom: 15px;
    color: #1E3A8A;

`

const P2 = styled.div`
    
    font-size: 16px;
    font-weight: 500;
    font-family: Manrope;
    margin-bottom: 40px;
    color: #1E3A8A;

`

const RightDiv = styled.div`
    
    width: 500px;
    height: fit-content;

    form{

        display: flex;
        flex-direction: column;
        row-gap: 10px;

        label{
            
            font-size: 16px;
            font-weight: 500;
            font-family: Manrope;
            color: #1E3A8A;

        }

        input{

            height: 30px;
            border: 1px #1E3A8A solid;
            border-radius: 5px;
            outline: none;
            color: #1E3A8A;

        }


        textarea{
            
            height: 150px;
            border: 1px #1E3A8A solid;
            border-radius: 5px;
            outline: none;
            color: #1E3A8A;

        }

        button{

            width: 150px;
            height: 50px;
            margin-top: 30px;
            border-radius: 5px;
            border: 1px #1E3A8A solid;
            color: #1E3A8A;
            background-color: transparent;

        }

        button:hover{

                border: transparent;
                color: white;
                background-color: #1E3A8A;
        }

    }

`

const IconDiv = styled.div`
    
    width: 100px;
    height: fit-content;
    display: flex;
    justify-content: space-between;

`

const GitHub = styled(FaGithub)`

    color: #1E3A8A;
    font-size: 20px;

`

const LinkedIn = styled(FaLinkedinIn)`
    
    color: #1E3A8A;
    font-size: 20px;

`

const X = styled(FaXTwitter)`
    
    color: #1E3A8A;
    font-size: 20px;

`