import "./RightNav.css"
import Buttons from "../../../../Components/Reusable/Buttons/Buttons";

const RightNav =()=>{
    return(
        <div>

            <div className="right">

                <Buttons properties = "buttonNavBlack" words = "Tools" disappear = "none"/>

                <Buttons properties = "buttonNavRed" words = "Go Pro" disappear = "none"/>

                <Buttons properties = "buttonNavBlack" words = "Sign in" disappear = "none"/>

                <Buttons properties = "buttonNavBlue" words = " Sign up" disappear = "none"/>

            </div>

        </div>
    );
};

export default RightNav;