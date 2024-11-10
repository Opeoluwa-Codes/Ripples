import styled from "styled-components"
import { Link } from 'react-router-dom';
import ExchangeableTwo from "../Reusable/ExchangeableTwo";
import Save from "../../Assets/JPG/Save.jpg"

const PageFive =()=>{
    return(
        <div>
            <ExchangeableTwo header="Save money as you spend it, seriously." paragraph="You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow." link="See all our Savings" image={Save}/>
        </div>
    );
};
export default PageFive;