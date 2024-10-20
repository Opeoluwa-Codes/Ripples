import "./Left.css"
import Buttons from "../../../Reusable/Buttons/Buttons"

const Left = () =>{
    return(
        <div>

            <div className="left">

                <h1>The super fast color palettes generator!</h1>

                <p>Create the perfect palette or get inspired by thousands of beautiful color schemes</p>

                <Buttons properties = "buttonSectionOneBlue" disappear = "none" words = "Start the generator!"/>

                <Buttons properties = "buttonSectionOneWhite" disappear = "none" words = "Explore trending palettes"/>

                <Buttons properties = "buttonSectionOneRed" disappear = "appear" header = "PRODUCT HUNT" text = "#1 Product of the Month"/>

            </div>

        </div>
    );
};

export default Left;