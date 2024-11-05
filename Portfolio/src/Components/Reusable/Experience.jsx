import styled from "styled-components"
import { Link } from 'react-router-dom';

const Experience =(props)=>{
    return(
        <ExperienceContainer>

            <Top>

                <RoleDate>

                    <Role>

                        {props.role}

                    </Role>

                    <Date>

                        {props.date}

                    </Date>

                </RoleDate>

                <Company>

                    {props.company}

                </Company>


            </Top>

            <BottomDescription>

                {props.description}

            </BottomDescription>

        </ExperienceContainer>
    );
};
export default Experience;

const ExperienceContainer = styled.div`

    width: 600px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`

const Top = styled.div`

    width: inherit;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

`

const BottomDescription = styled.div`

    width: inherit;
    text-align: justify;
    font-size: 14px;
    font-weight:400;
    font-family: Manrope;
    color: #1E3A8A;

`


const RoleDate = styled.div`

    width: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

`


const Role = styled.div`

    width: fit-content;
    font-size: 25px;
    font-weight: 700;
    font-family: Manrope;
    color: #1E3A8A;

`


const Date = styled.div`

    width: fit-content;
    font-size: 14px;
    font-weight: 200;
    font-family: Manrope;
    color: #1E3A8A;

`


const Company = styled.div`

    width: inherit;
    font-size: 15px;
    font-weight: 700;
    font-family: Manrope;
    margin-bottom: 30px;
    color: #1E3A8A;
`