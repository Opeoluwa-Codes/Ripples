import styled from "styled-components"
import { Link } from 'react-router-dom';

const PageTwoTiles =(props)=>{
    return(
        <TileWrapper>

            <section>
                {props.image}
            </section>
            
            <h1>{props.text}</h1>

        </TileWrapper>
    );
};
export default PageTwoTiles;

const TileWrapper = styled.div`
    
    box-sizing: border-box;
    padding: 25px;
    row-gap: 15px;

    width: 355px;
    height: 160px;
    
    background-color: white;
    border: transparent;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    @media (max-width: 772px) {

        width: inherit;
        height: fit-content;


        flex-direction: row;
        justify-content: start;
        align-items: center;
        column-gap: 20px;

    }

    @media (max-width: 548px) {

        padding-left: 5px;
        padding-right: 5px;

    }

    section{

        background-color: #dfe3ff;
        height: 36px;
        width: 36px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;

    }


    h1{

        font-size: 14px;
        font-weight: 900px;
        color: #40196d;

    }


`


