import Curseforge from "../images/Curseforge.png"
import RoadCode from "../images/Roadcode.png"
import Metruhnome from "../images/Metruhnome.png"
import Portfolio from "../images/Portfolio.png"
import React, { useEffect, useState } from "react"
import Project from "./Project"
import TherapalImg from "../images/Therapal.jpg"
import AvImg from "../images/Av.png"
import $ from 'jquery';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion, useScroll } from "framer-motion"

export default function Projects(){
    const { scrollYProgress } = useScroll();
    const [imagesSticky, setImagesSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(scrollYProgress);
            window.addEventListener('scroll', () => {
                document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
            }, false);
        }); 
        var pos = $('#FrameWrapper').offset();
        $(window).scroll(function(){
            console.log(imagesSticky);
            if ($(window).scrollTop() > pos.top) {
                setImagesSticky(true);
            } else {
                setImagesSticky(false);
            }
        });
    }, []);
    return( 
        
            <div className="Projects">
                
                    <h2 id="ProjectsTitle" style={{textAlign: "left"}}>My Projects</h2>
                    <div id="PFrameWrapper">
                        <div className="ProjectsWrapper">
                            <Project title="Minecraft Modding • Creator" date1="August 2021 - Present" subh="" desc="With over 200,000 total downloads, Combat Enchantments is my most downloaded mod and showcases my ability to successfully handle large, longterm projects. Written entirely in Java and utilizing the Fabric modloader, Combat Enchantments introduces more than 30 meticulously balanced enchantments, enhancing the game's combat system without alienating veteran players."/>
                            <Project title="Minecraft Modding" subh="Creator" desc="AOSIJFOAIJFO IASJDOFI JASEOFIJASOIFJASO EFIEJSO EFIFJO EFIFJSO EFIJS EOFIJ"/>
                            <Project title="Minecraft Modding" subh="Creator" desc="AOSIJFOAIJFO IASJDOFI JASEOFIJASOIFJASO EFIEJSO EFIFJO EFIFJSO EFIJS EOFIJ"/>
                            <Project title="Minecraft Modding" subh="Creator" desc="AOSIJFOAIJFO IASJDOFI JASEOFIJASOIFJASO EFIEJSO EFIFJO EFIFJSO EFIJS EOFIJ"/>
                        </div>
                        <div id="FrameWrapper" >
                            <div id="Frame" >
                                {/* <div id="BigPictureFrame">
                                </div>
                                <div id="SmallFrameWrapper">
                                    <div id="MedPictureFrame">
                                    </div>
                                    <div id="SmallPictureFrame">
                                        
                                    </div>
                                </div> */}
                            </div>
                        </div>
                       
                    </div>                
                
                
            </div>
        
    )
}