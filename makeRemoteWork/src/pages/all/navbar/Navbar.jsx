import NavbarLeft from "../../../../components/navbar/navbarLeft/NavbarLeft";
import NavbarRight from "../../../../components/navbar/navbarRight/NavbarRight";
import "./Navbar.css"

const Navbar = () =>{
    return(
        <div>

            <div className="navAll">
                
                <div>
                    <NavbarLeft/>
                </div>

                <div>
                    <NavbarRight/>
                </div>

            </div>

        </div>
    );
};

export default Navbar;
