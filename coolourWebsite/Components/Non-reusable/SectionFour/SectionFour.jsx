import "./SectionFour.css"
import Link from "../../Reusable/Links/Links";

const SectionFour = () =>{
    return(
        <div className="allFour">
            
            <div className="sectionFour">


                <div>
                    <Link h1 = "Tools" p1 ="Generate your palettes" p2 = "Explore popular palettes" p3 = "Extract palette from image" p4 = "Contrast checker" p5 = "Preview palettes on designs" p6 = "Recolor your own design" p7 = "Color picker" p8 = "Browse free fonts" noneTwo = "none"/>
                </div>

                <div>
                    <Link h1 = "More" p1 = "List of colors" p2 = "Browse gradients" p3 = "Create a gradient" p4 = "Make a gradient palette" p5 = "Image converter" p6 = "Create a collage" p7 = "Font Generator"/>
                </div>

                <div className="column">
                    
                    <div className="problem">
                        <Link h1 = "Jobs" p1 = "Find your next job" p2 = "Post a job"/>
                    </div>

                    <div className="nuisance">
                        <Link h1 = "Apps" p1 = "iOS App" p2 = "Android App" p3 = "Figma Plugin" p4 = "Adobe Extension" p5 = "Chrome Extension" p6 = "Instagram Page"/>
                    </div>
                    

                </div>

                <div>
                    <Link h1 = "Company" p1 = "Pricing" p2 = "License" p3 = "Privacy policy" p4 = "Cookie policy" p5 = "Manage cookies" p6 = "Help center" p7 = "Advertise" p8 = "Affiliate" p9 = "Contact"/>
                </div>
            

            </div>

        </div>
    );
};


export default SectionFour;