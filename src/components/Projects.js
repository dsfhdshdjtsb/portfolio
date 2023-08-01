import Curseforge from "../images/Curseforge.png"
import RoadCode from "../images/Roadcode.png"
import Metruhnome from "../images/Metruhnome.png"
import Portfolio from "../images/Portfolio.png"
import React from "react"
import Project from "./Project"

export default function Projects(){
    
    



    return(
        <div className="Projects">
            <h2>My Projects</h2>
            <div className="Images">
                <Project img={Curseforge} page= "/mods" text={"Minecraft Mods"} delay="0" id="ModsImage"/>
                <Project img={RoadCode} page= "/roadcode" text={"Roadcode"} delay="1000" id="RoadcodeImage"/>
                <Project img={Portfolio} page= "/portfolio" text={"Portfolio Website"} delay="0" id="PortfolioImage" />
                <Project img={Metruhnome} page= "/metruhnome" text={"Metruhnome"} delay="0" id="MetruhnomeImage"/>
                
            </div>
            
        </div>
    )
}