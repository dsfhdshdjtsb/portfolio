import Curseforge from "../images/Curseforge.png"
import RoadCode from "../images/Roadcode.png"
import Metruhnome from "../images/Metruhnome.png"
import Portfolio from "../images/Portfolio.png"
import React from "react"
import Project from "./Project"
import TherapalImg from "../images/Therapal.jpg"

export default function Projects(){
    
    



    return(
        <div className="Projects">
            <h2>My Projects</h2>
            <div className="Images">
                <Project img={Curseforge} page= "/mods" text={"Minecraft Mods"} delay="0" id="ModsImage"/>
                <Project img={RoadCode} page= "/roadcode" text={"Roadcode"} delay="1000" id="RoadcodeImage"/>
                <Project img={TherapalImg} page= "/therapal" text={"TheraPal"} delay="0" id="TherapalImage" />
                <Project img={Metruhnome} page= "/metruhnome" text={"Metruhnome"} delay="0" id="MetruhnomeImage"/>
                
            </div>
            
        </div>
    )
}