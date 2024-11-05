import styled from "styled-components";
import { Link } from 'react-router-dom';
import ProjectTiles from "../Reusable/ProjectTiles";
import Pasteries from "../../assets/JPG/Pasteries.jpg"
import Flag from "../../assets/JPG/Flag.jpg"

const ProjectShow =()=>{
    return(
        <ProjectsWrapper>

            <Header>

                <h2>FEATURED PROJECTS</h2>
                <p>Find below selected projects that showcase my passion for front-end development</p>

            </Header>


            <Lists>

                <ProjectTiles image={Pasteries} ProjectHeader="Website for ordering various pastries" ProjectInfo="Website for ordering various pastries" client="Personal" year="2024" role="Front-End Engineer"/>

                <ProjectTiles image={Flag} ProjectHeader="The Flags of All Countries" ProjectInfo="The Flags of All Countries" client="Personal" year="2024" role="Front-End Engineer"/>

            </Lists>

            <ButtonWrapper>

                <Button>

                    View All

                </Button>

            </ButtonWrapper>

        </ProjectsWrapper>
    );
};
export default ProjectShow;

const ProjectsWrapper = styled.div`
    
    box-sizing: border-box;
    padding: 10px 100px 10px 100px;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;

`
const ButtonWrapper = styled.div`
    
    width: inherit;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

`

const Button = styled.div`

    width: 100px;
    height: 30px;
    border: 1px #1E3A8A solid;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    color: #1E3A8A;
    border-radius: 20px;

    font-size: 14px;
    font-weight: 500;
    font-family: Manrope;

    &:hover{

    background-color: #1E3A8A;
    border: transparent;
    color: white;

    }

`

const Header = styled.div`
    
    
    margin-bottom: 80px;

    h2{

        font-size: 50px;
        font-weight: 500;
        font-family: Bebas Neue;
        margin-top: 0px;
        margin-bottom: 20px;
        color: #1E3A8A;

    }

    p{

        font-size: 16px;
        font-weight: 300;
        font-family: Manrope;
        color: #1E3A8A;

    }


`

const Lists = styled.div`
    
    display: flex;
    flex-direction: column;

`