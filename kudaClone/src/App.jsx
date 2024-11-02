import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Static/Header';
import Footer from './Static/Footer';
import PlusMinus from "./Pages/PlusMinus"
import UseEffect from "./Pages/UseEffect"
import HomePage from './Pages/HomePage';

const App =()=>{
    return(
        <div>

            <BrowserRouter>
                
                <Header/>

                <Routes>

                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/PlusMinus" element={<PlusMinus/>}/>
                    <Route path="/UseEffect" element={<UseEffect/>}/>

                </Routes>
                
                
                <Footer/>

            </BrowserRouter>

        </div>
    );
};
export default App;