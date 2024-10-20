import LeftNav from "./LeftNav/LeftNav"
import RightNav from "./RIghtNav/RightNav"
import "./AllNavbar.css"

const AllNavbar = () =>{
    return(
        <div className="navAll">

            <div className="nav">
                <LeftNav/>
                <RightNav/>
            </div>

        </div>
    );
};

export default AllNavbar;