import databiz from "../../../src/assets/svg/client-databiz.svg"
import audiophile from "../../../src/assets/svg/client-audiophile.svg"
import meet from "../../../src/assets/svg/client-meet.svg"
import maker from "../../../src/assets/svg/client-maker.svg"
import "./MainsectionLeft.css"

const MainsectionLeft = () =>{
    return(
        <div>
            
            <div className="mainLeft">

                <h1>Make remote work</h1>

                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>

                <button>Learn more</button>

                <div className="images">
                    <img src={databiz} alt="databiz" />
                    <img src={audiophile} alt="audiophile" />
                    <img src={meet} alt="meet" />
                    <img src={maker} alt="maker" />
                </div>

            </div>

        </div>
    );
};

export default MainsectionLeft;