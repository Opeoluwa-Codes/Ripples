import "./SectionThree.css"
import Icons from "../../Reusable/Icons/Icons";
import One from "../../../src/assets/SVG/one.svg"
import Two from "../../../src/assets/SVG/two.svg"
import Three from "../../../src/assets/SVG/three.svg"
import Four from "../../../src/assets/SVG/four.svg"
import Five from "../../../src/assets/SVG/five.svg"
import Six from "../../../src/assets/SVG/six.svg"
import Seven from "../../../src/assets/SVG/seven.svg"
import Eight from "../../../src/assets/SVG/eight.svg"
import Nine from "../../../src/assets/SVG/nine.svg"
import Ten from "../../../src/assets/SVG/ten.svg"
import Eleven from "../../../src/assets/SVG/eleven.svg"


const SectionThree = () =>{
    return(
        <div className="divThree">

            <div className="iconia">

                <p>Used by 5+ million designers and top companies.</p>

                <div className="divIcons">
                    <Icons iconic = {One}/>
                    <Icons iconic = {Two}/>
                    <Icons iconic = {Three}/>
                    <Icons iconic = {Four}/>
                    <Icons iconic = {Five}/>
                    <Icons iconic = {Six}/>
                    <Icons iconic = {Seven}/>
                    <Icons iconic = {Eight}/>
                    <Icons iconic = {Three}/>
                    <Icons iconic = {Ten}/>
                    <Icons iconic = {Eleven}/>
                </div>

            </div>

        </div>

    );
};

export default SectionThree;