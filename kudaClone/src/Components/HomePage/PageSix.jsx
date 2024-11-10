import styled from "styled-components"
import { Link } from 'react-router-dom';
import ExchangeableThree from "../Reusable/ExchangeableThree";
import Safety from "../../Assets/JPG/Safety.jpg"

const PageSix =()=>{
    return(
        <div>
            <ExchangeableThree header="Turn off access, turn on safety." paragraph="Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try." link="Learn more about Cards" image={Safety}/>
        </div>
    );
};
export default PageSix;