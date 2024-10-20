import MainsectionLeft from "../../../../components/main section/mainsectionLeft/mainsectionLeft"
import MainsectionRight from "../../../../components/main section/mainsectionRight/mainsectionRight"
import "./Mainsection.css"

const Mainsection = () =>{
    return(
        <div>

            <div className="mainAll">

                <div>
                    <MainsectionLeft/>
                </div>

                <div>
                    <MainsectionRight/>
                </div>

            </div>

        </div>
    );
};

export default Mainsection;