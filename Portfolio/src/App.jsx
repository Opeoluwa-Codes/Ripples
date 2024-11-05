import styled from "styled-components"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Static/Header"
import Contact from "./Components/HomePage/Contact"
import Hero from "./Components/HomePage/Hero";
import About from "./Pages/About";
import Footer from "./Static/Footer";
import Projects from "./Pages/Projects"
import HomePage from "./Pages/HomePage";

const App =()=>{
    return(
        <div>

            <BrowserRouter>
            
                <Header/>

                <Routes>

                    <Route path="/" element={<HomePage/>}/>

                    <Route path="/About" element={<About/>}/>

                    <Route path="/Projects" element={<Projects/>}/>

                    <Route path="/Contact" element={<Contact/>}/>

                </Routes>

                <Footer/>
            
            </BrowserRouter>

        </div>
    );
};
export default App;