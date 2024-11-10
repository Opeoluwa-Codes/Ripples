import styled from "styled-components"
import { Link } from 'react-router-dom';
import ExchangeableTwo from "../Reusable/ExchangeableTwo";
import Card from "../../Assets/JPG/Card.jpg"

const PageThree =()=>{
    return(
        <div>
            <ExchangeableTwo header="A Debit Card = A Simpler Life." paragraph="We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves." link="Open An Account in Minutes" image={Card}/>
        </div>
    );
};
export default PageThree;