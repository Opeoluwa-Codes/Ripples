import styled from "styled-components"
import { Link } from 'react-router-dom';
import ExchangeableTwo from "../Reusable/ExchangeableTwo";
import CS from "../../Assets/JPG/CS.jpg"

const PageSeven =()=>{
    return(
        <div>
            <ExchangeableTwo header="We’re always happy to help you." paragraph="You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy." link="Get Help" image={CS}/>
        </div>
    );
};
export default PageSeven;