import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Mods from "./pages/Mods"
import React from "react";
import Metruhnome from "./pages/Metruhnome";
import Portfolio from "./pages/Portfolio";
import Roadcode from "./pages/Roadcode";
export default function App(){
    return(
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/mods" element={<Mods />} />
            <Route path="/roadcode" element={<Roadcode />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/metruhnome" element={<Metruhnome />} />
        </Routes>        
    )
}