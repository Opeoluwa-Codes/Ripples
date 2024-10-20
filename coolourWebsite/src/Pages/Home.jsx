import AllNavbar from "../Static/Navbar/AllNavbar"
import AllFooter from "../Static/Footer/AllFooter"
import AllOne from "../../Components/Non-reusable/SectionOne/AllOne"
import SectionTwo from "../../Components/Non-reusable/SectionTwo/SectionTwo"
import SectionThree from "../../Components/Non-reusable/SectionThree/SectionThree"
import SectionFour from "../../Components/Non-reusable/SectionFour/SectionFour"
import "./Home.css"


const Home = () =>{
    return(
        <div>
            <AllNavbar/>
            <AllOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <AllFooter/>
        </div>
    );
};

export default Home;
