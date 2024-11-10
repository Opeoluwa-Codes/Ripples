import styled from "styled-components"
import PageTwoTiles from "../Reusable/PageTwoTiles";

import { FaCreditCard } from "react-icons/fa";
import { RiPieChartFill } from "react-icons/ri";
import { FcFlowChart } from "react-icons/fc";
import { IoIosJet } from "react-icons/io";
import { FaPiggyBank } from "react-icons/fa";

const PageTwo =()=>{
    return(
        <Tiles>
        
            <PageTwoTiles image={<FaCreditCard/>} text="Order a Kuda card on the app with pickup and delivery options."/>
            <PageTwoTiles image={<RiPieChartFill/>} text="Enjoy cashless payment options online and offline."/>
            <PageTwoTiles image={<FcFlowChart/>} text="Pay your essential bills and buy gift cards easily."/>
            <PageTwoTiles image={<IoIosJet/>} text="Get 25 free transfers to Nigerian banks every month."/>
            <PageTwoTiles image={<FaPiggyBank/>} text="Save money automatically any time you spend."/>

        </Tiles>
    );
};
export default PageTwo;

const Tiles = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;
    
    width: 100%;
    height: fit-content;
    row-gap: 40px;
    column-gap: 20px;

    box-sizing: border-box;
    padding-left: 120px;
    padding-right: 120px;

    margin-bottom: 80px;

    @media (max-width: 772px) {

        padding-left: 100px;
        padding-right: 100px;

    }

    @media (max-width: 743px) {

        padding-left: 70px;
        padding-right: 70px;

    }

    @media (max-width: 683px) {

        padding-left: 50px;
        padding-right: 50px;

    }

    @media (max-width: 683px) {

        padding-left: 30px;
        padding-right: 30px;

    }

    @media (max-width: 590px) {

        padding-left: 10px;
        padding-right: 10px;

    }

    @media (max-width: 562px) {

        padding-left: 0px;
        padding-right: 0px;

    }

`