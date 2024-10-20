import "./SectionTwo.css"
import Tiles from "../../Reusable/Tiles/Tiles"
import Apple from "../../../src/assets/PNG/Apple.png"
import Android from "../../../src/assets/PNG/Android.png"
import Figma from "../../../src/assets/PNG/Figma.png"
import Chrome from "../../../src/assets/PNG/Chrome.png"
import Adobe from "../../../src/assets/PNG/Adobe.png"


const SectionTwo = () =>{
    return(
        <div className="divTwo">
            

            <div className="sectionTwo">
                <Tiles image = {Apple} h2 = "iOS App" para = "Create, browser, and save palettes on the go." hover = "View on the App Store" color = "colorOne"/>
                <Tiles image = {Android} h2 = "Android App" para = "Thousands of palettes in your pocket." hover = "View on the Play Store" color = "colorTwo"/>
                <Tiles image = {Figma} h2 = "Figma Plugin" para = "All palettes right in your workspace." hover = "Install now" color = "colorThree"/>
                <Tiles image = {Chrome} h2 = "Chrome Extension" para = "Get and edit a palette every new tab." hover = "Add to Chrome" color = "colorFour"/>
                <Tiles image = {Adobe} h2 = "Adobe Extension" para = "Use Coolers with your favourite tools" hover = "Download" color = "colorFive"/>
            </div>


        </div>
    );
};

export default SectionTwo;