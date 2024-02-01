import Curseforge from "../images/Curseforge.png"
import RoadCode from "../images/Roadcode.png"
import Metruhnome from "../images/Metruhnome.png"
import Portfolio from "../images/Portfolio.png"
import React from "react"
import Project from "./Project"
import TherapalImg from "../images/Therapal.jpg"
import AvImg from "../images/Av.png"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Projects(){
    return(
        
            <div className="Projects" >
                <div>
                    
                </div>
                <h2 id="ProjectsTitle" style={{textAlign: "left"}}>My Projects</h2>
                <div className="ProjectsWrapper" >
                    <Project title="Minecraft Modding • Creator" date1="August 2021 - Present" subh="" desc="With over 200,000 total downloads, Combat Enchantments is my most downloaded mod and showcases my ability to successfully handle large, longterm projects. Written entirely in Java and utilizing the Fabric modloader, Combat Enchantments introduces more than 30 meticulously balanced enchantments, enhancing the game's combat system without alienating veteran players."/>
                    <Project title="Minecraft Modding" subh="Creator" desc="AOSIJFOAIJFO IASJDOFI JASEOFIJASOIFJASO EFIEJSO EFIFJO EFIFJSO EFIJS EOFIJ"/>
                    <Project title="Minecraft Modding" subh="Creator" desc="AOSIJFOAIJFO IASJDOFI JASEOFIJASOIFJASO EFIEJSO EFIFJO EFIFJSO EFIJS EOFIJ"/>
                    <Project title="Minecraft Modding" subh="Creator" desc="AOSIJFOAIJFO IASJDOFI JASEOFIJASOIFJASO EFIEJSO EFIFJO EFIFJSO EFIJS EOFIJ"/>
                </div>
                <div id="FrameWrapper">
                    hi
                    <div id="BigPictureFrame">
                    </div>
                    <div id="SmallFrameWrapper">
                        <div id="MedPictureFrame">
                        </div>
                        <div id="SmallPictureFrame">
                        </div>
                    </div>
                </div>
                
            </div>
        
    )
}