import logo from "../../../src/assets/svg/logo.svg"
import arrowDown from "../../../src/assets/svg/icon-arrow-down.svg"
import "./navbarLeft.css"

const NavbarLeft = () =>{
    return(
        <div>

            <div className="navLeft">

                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="button">

                    <div className="features">
                        <button>Features</button>
                        <img src={arrowDown} alt="arrowDown" />
                    </div>

                    <div className="company">
                        <button>Company</button>
                        <img src={arrowDown} alt="arrowDown" />
                    </div>

                    <button>Careers</button>

                    <button>About</button>

                </div>

            </div>


        </div>
    );
};

export default NavbarLeft;