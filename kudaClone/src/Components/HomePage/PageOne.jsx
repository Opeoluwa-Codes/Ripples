import styled from "styled-components"
import { Link } from 'react-router-dom';
import ExchangeableOne from "../Reusable/ExchangeableOne";
import Buy from "../../Assets/JPG/Buy.jpg"

const PageOne =()=>{
    return(
        <div>
            <ExchangeableOne header="The money app for Africans." paragraph="Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda." buttonOne="Download for Android" buttonTwo="Download for iOS" image={Buy}/>
        </div>
    );
};
export default PageOne;
