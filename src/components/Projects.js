import Curseforge from "../images/Curseforge.png"
import RoadCode from "../images/Roadcode.png"
import Metruhnome from "../images/Metruhnome.png"
import Portfolio from "../images/Portfolio.png"
import React from "react"
import Project from "./Project"
import TherapalImg from "../images/Therapal.jpg"
import AvImg from "../images/Av.png"

export default function Projects(){
    return(
        <div className="Projects">
            <div className="ProjectsTitle">
                <h2>My Projects</h2>
            </div>
            
            <div className="Images">
                <div className="Left">
                    <Project img={Curseforge} page= "/mods" text={"Minecraft Mods"} delay="0" className="ModsImage"/>
                    <Project img={TherapalImg} page= "/therapal" text={"TheraPal"} delay="0" className="TherapalImage" />
                    <Project img={AvImg} page= "/astraeus" text={"Astraeus View"} delay="0" className="AvImage" />
                </div>
                <div className="Right">
                    <Project img={RoadCode} page= "/roadcode" text={"Roadcode"} delay="1000" className="RoadcodeImage"/>
                    <Project img={Metruhnome} page= "/metruhnome" text={"Metruhnome"} delay="0" className="MetruhnomeImage"/>
                </div>
                
                
            </div>
            
        </div>
    )
}