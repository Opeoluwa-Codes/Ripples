import { useState } from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import Hero from '../Components/HomePage/Hero';
import TechStack from "../Components/HomePage/TechStack"
import ProjectShow from "../Components/HomePage/ProjectShow"
import Contact from "../Components/HomePage/Contact"

const HomePage =()=>{
    return(
        <div>
            <Hero/>
            <TechStack/>
            <ProjectShow/>
            <Contact/>
        </div>
    );
};
export default HomePage;
