import styled from "styled-components"
import { Link } from 'react-router-dom';
import ProjectButtons from "./ProjectButtons";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";


const ProjectTiles =(props)=>{
    return(
        <DivWrapper>

            <DivOne>

                <img src={props.image} alt="#" />

            </DivOne>

            <DivTwo>

                <ProjectHeader>
                    {props.ProjectHeader}
                </ProjectHeader>
                <ProjectInfo>
                    {props.ProjectInfo}
                </ProjectInfo>

                <InnerDiv>

                   <ProjectInfoSubHeader>
                        <p>PROJECT INFO</p>
                   </ProjectInfoSubHeader>

                    <ClientName>
                        <p>Client</p>
                        <p>{props.client}</p>
                    </ClientName>

                    <Date>
                        <p>Year</p>
                        <p>{props.year}</p>
                    </Date>

                    <Role>
                        <p>Role</p>
                        <p>{props.role}</p>
                    </Role>

                </InnerDiv>

                    <ProjectButtons textOne="Live Demo" imageOne={<Live/>} textTwo="View on GitHub" imageTwo={<GitHub/>}/>

            </DivTwo>

        </DivWrapper>
    );
};
export default ProjectTiles;

const DivWrapper = styled.div`
    
    width: 100%;
    height: fit-content;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const DivOne = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1E3A8A;
    border: transparent;
    border-radius: 12px;
    width: 500px;
    height: 491px;

    img{

        width: 400px;
        border-radius: 12px;
    }

`

const DivTwo = styled.div`
    
    width: 576px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

`

const ProjectHeader = styled.div`
    
    font-size: 32px;
    font-weight: 500;
    font-family: Manrope;
    color: #1E3A8A;
    margin-bottom: 16px;
    width: inherit;
    height: fit-content;

`

const ProjectInfo = styled.div`
    
    font-size: 14px;
    font-weight: 300;
    font-family: Manrope;
    color: #1E3A8A;
    width: inherit;
    height: fit-content;
    margin-bottom: 32px;

`

const InnerDiv = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: fit-content;
    margin-bottom: 48px;

`

const ProjectInfoSubHeader = styled.div`

        font-size: 16px;
        font-weight: 600;
        font-family: Manrope;
        color: #1E3A8A;
        width: inherit;
        display: flex;
        justify-content: start;
        align-items: center;
        border-bottom: 1px #1E3A8A solid;

`

const ClientName = styled.div`
    
    width: inherit;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px #1E3A8A solid;

    p{
        font-size: 14px;
        font-weight: 600;
        font-family: Manrope;
        color: #1E3A8A;
    }

`

const Date = styled.div`
    
    width: inherit;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px #1E3A8A solid;

    p{
        font-size: 14px;
        font-weight: 600;
        font-family: Manrope;
        color: #1E3A8A;
    }

`

const Role = styled.div`
    
    width: inherit;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px #1E3A8A solid;

    p{
        font-size: 14px;
        font-weight: 600;
        font-family: Manrope;
        color: #1E3A8A;
    }

`


const Live = styled(MdArrowOutward)`
    
    color: #1E3A8A;

`

const GitHub = styled(FaGithub)`
    
    color: #1E3A8A;

`