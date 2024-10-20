import heroImage from "../../../src/assets/png/image-hero-desktop.png"
import "./MainsectionRight.css"

const MainsectionRight = () =>{
    return(
        <div className="mainRight">
            <img src={heroImage} alt="heroImage" />
        </div>
    );
};

export default MainsectionRight;