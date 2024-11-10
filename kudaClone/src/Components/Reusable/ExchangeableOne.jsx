import styled from "styled-components"
import { Link } from 'react-router-dom';

const ExchangeableOne =(props)=>{

    return(
        <ContentImageWrapper>

            <Content>

                <h1>{props.header}</h1>
                <p>{props.paragraph}</p>

                <Buttons>

                    <button>{props.buttonOne}</button>
                    <button>{props.buttonTwo}</button>

                </Buttons>

                <a>{props.link}</a>

            </Content>

            <Image>

                <img src={props.image} alt="#" />

            </Image>

        </ContentImageWrapper>
    );
};
export default ExchangeableOne;



const ContentImageWrapper = styled.div`
    
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 200px 120px 150px 120px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 919px) {

        flex-direction: column;
        row-gap: 50px;
        padding-top: 100px;
        margin-bottom: 200px;

    }

`

const Content = styled.div`
    
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: start;
    align-items: start;
    width: 390px;
    row-gap: 10px;

    @media (max-width: 919px) {

        text-align: center;
        justify-content: center;
        align-items: center;

    }

    h1{

        font-size: 40px;
        font-weight: 800;
        color: #40196d;
        margin-bottom: 0px;

    }

    p{

        font-size: 16px;
        font-weight: 400;
        color: black;

    }

    a{

        font-size: 16px;
        font-weight: 400;
        color: #40196d;

    }
    
`

const Buttons = styled.div`
    

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;


    button{

        width: fit-content;
        height: 40px;
        border-radius: 5px;
        background-color: #40196d;
        font-size: 14px;
        font-weight: 600;
        color: white;
        border: transparent;

    }
    
`

const Image = styled.div`
    
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1273px) {

        width: 250px;

    }

    img{

        width: inherit;
        height: 500px;

        @media (max-width: 1273px) {

            width: 250px;
            height: 350px;

        }

    }
    
`

