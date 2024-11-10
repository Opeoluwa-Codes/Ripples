import styled from "styled-components"
import { Link } from 'react-router-dom';
import ExchangeableThree from "../Reusable/ExchangeableThree";
import Free from "../../Assets/JPG/Free.jpg"

const PageEight =()=>{
    return(
        <div>
            <ExchangeableThree header="Fees as clear as glass." paragraph="We’re serious about free banking, and we will never, ever charge you for anything without your consent." link="See all our fees" image={Free}/>
        </div>
    );
};
export default PageEight;