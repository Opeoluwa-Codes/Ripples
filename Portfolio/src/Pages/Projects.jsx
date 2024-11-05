import styled from "styled-components";
import { Link } from 'react-router-dom';
import ProjectTiles from "../Components/Reusable/ProjectTiles";
import Pasteries from "../assets/JPG/Pasteries.jpg";
import Flag from "../assets/JPG/Flag.jpg";

const Projects =()=>{
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

        </ProjectsWrapper>
    );
};
export default Projects;

const ProjectsWrapper = styled.div`
    
    box-sizing: border-box;
    padding: 150px 100px 150px 100px;
    width: 100%;
    height: fit-content;

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
    


`