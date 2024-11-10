import styled from "styled-components"
import { Link } from 'react-router-dom';
import ExchangeableThree from "../Reusable/ExchangeableThree";
import ManageMoney from "../../Assets/JPG/ManageMoney.jpg"

const PageFour =()=>{
    return(
        <div>
            <ExchangeableThree header="It’s your money, we just help you manage it." paragraph="Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that." image={ManageMoney}/>
        </div>
    );
};
export default PageFour;