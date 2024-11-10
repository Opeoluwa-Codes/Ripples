import styled from "styled-components"
import { Link } from 'react-router-dom';
import PageOne from "../Components/HomePage/PageOne";
import PageTwo from "../Components/HomePage/PageTwo";
import PageThree from "../Components/HomePage/PageThree";
import PageFour from "../Components/HomePage/PageFour"
import PageFive from "../Components/HomePage/PageFive"
import PageSix from "../Components/HomePage/PageSix"
import PageSeven from "../Components/HomePage/PageSeven"
import PageEight from "../Components/HomePage/PageEight"

const HomePage =()=>{
    return(
        <div>
            <PageOne/>
            <PageTwo/>
            <PageThree/>
            <PageFour/>
            <PageFive/>
            <PageSix/>
            <PageSeven/>
            <PageEight/>
        </div>
    );
};
export default HomePage;