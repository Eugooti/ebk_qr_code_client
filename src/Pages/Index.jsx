import { Route, Routes } from "react-router-dom";
import {LandingProvider} from "../Context/LandingContext.jsx";
import Home from "./Landing/Landing.jsx";
import QRGenerator from "./QR/Generator.jsx";
import AntDQRGenerator from "./QR/AntDQRGenerator.jsx";


const Pages = () => {
    return (
        <Routes>
            <Route element={<LandingProvider/>}>
                <Route path="/" element={<Home/>}/>
                <Route path='/generate' element={<QRGenerator/>}/>
                <Route path='/antDgenerate' element={<AntDQRGenerator/>}/>
            </Route>
        </Routes>
    )
}

export default Pages;
