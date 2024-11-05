import styled from "styled-components"
import { Link } from 'react-router-dom';

const ProjectButtons =(props)=>{
    return(
        <ButtonWrapper>

            <button className="one">
                <Text>{props.textOne}</Text>   
                {props.imageOne}
            </button>
            
            <button className="two">
                <Text>{props.textTwo}</Text>
                {props.imageTwo}
            </button>

        </ButtonWrapper>
    );
};
export default ProjectButtons;

const ButtonWrapper = styled(Link)`
    
    height: fit-content;
    width: 300px;
    display: flex;
    justify-content: space-between;

    text-decoration: none;

    .one{

        width: 100px;
        border: transparent;
        background-color: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px #1E3A8A solid;

    }

    .two{

        width: 140px;
        border: transparent;
        background-color: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px #1E3A8A solid;

    }
    
`

const Text = styled.div`
    
    font-family: Manrope;
    font-size: 14px;
    font-weight: 700;
    color: #1E3A8A;

`

// import { FaGithub } from "react-icons/fa";
// import { MdArrowOutward } from "react-icons/md";