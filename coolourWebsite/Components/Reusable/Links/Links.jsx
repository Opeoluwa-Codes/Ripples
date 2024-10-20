import "./Links.css"
import New from "../New/New"

const Links = (props) =>{
    return(
       <div className="links">

            <div className= "properties">

                    <h2>{props.h1}</h2>
                    <a href="#">{props.p1}</a>
                    <a href="#">{props.p2}</a>
                    <a href="#">{props.p3}</a>
                    <a href="#">{props.p4}</a>
                    <a href="#">{props.p5}</a>
                    <a href="#">{props.p6}</a>
                    <a href="#">{props.p7}</a>
                    <a href="#">{props.p8}</a>
                    <a href="#">{props.p9}</a>
                    <a href="#">{props.p10}</a>
                               
            </div>

       </div> 
    );
};

export default Links;