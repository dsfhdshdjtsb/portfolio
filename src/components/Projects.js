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
        $(function() {
            $('#Aabilities').hover(function() {
              $('#ArmorAbilitiesImg').css('max-height', '100%');
              console.log('kys')
            }, function() {
              // on mouseout, reset the background colour
              $('#ArmorAbilitiesImg').css('max-height', '');
            });
          });
        $(function() {
            $('#GTReviews').hover(function() {
            $('#GTReviewsImg').css('max-height', '100%');
            console.log('kys')
            }, function() {
            // on mouseout, reset the background colour
            $('#GTReviewsImg').css('max-height', '');
            });
        });
        $(function() {
            $('#Roadcode').hover(function() {
            $('#RoadcodeImg').css('max-height', '100%');
            console.log('kys')
            }, function() {
            // on mouseout, reset the background colour
            $('#RoadcodeImg').css('max-height', '');
            });
        });
        $(function() {
            $('#Therapal').hover(function() {
            $('#TherapalImg').css('max-height', '100%');
            console.log('kys')
            }, function() {
            // on mouseout, reset the background colour
            $('#TherapalImg').css('max-height', '');
            });
        });
        $(function() {
            $('#Metruhnome').hover(function() {
            $('#MetruhnomeImg').css('max-height', '100%');
            console.log('kys')
            }, function() {
            // on mouseout, reset the background colour
            $('#MetruhnomeImg').css('max-height', '');
            });
        });
    }, []);
    return( 
            <div className="Projects">
                    <h2 id="ProjectsTitle" style={{textAlign: "left"}}>My Projects</h2>
                    <div id="PFrameWrapper">
                        <div className="ProjectsWrapper">
                            <Project id="Cenchants" title="Combat Enchantments • Creator" subh1="Downloads" subp1="200k" subh2="Technologies" subp2="Java, Fabric" subh3="Dates" subp3="August 2021 - Present"  desc="With over 200,000 total downloads, Combat Enchantments is my most downloaded mod and showcases my ability to successfully handle large, longterm projects. Written entirely in Java and utilizing the Fabric modloader, Combat Enchantments introduces more than 30 meticulously balanced enchantments, enhancing the game's combat system without alienating veteran players."/>
                            <Project id="Aabilities" title="Armor Abilities • Creator" subh1="Downloads" subp1="9k" subh2="Technologies" subp2="Java, Fabric, Forge" subh3="Dates" subp3="June 2023 - Present" desc="While not as popular as my previous mod, Armor Abilities is a more expansive mod that introduces activatable abilities, giving players the ability to teleport, double jump, and transform into TNT (among other things). Featuring 12 unique abilities, Armor Abilities currently sits at 9k downloads, and is a mod I plan on continuing to work on."/>
                            <Project id="GTReviews" title="GT Reviews • Project Manager" subh1="Technologies" subp1="React, JS, ChakraUI, Firebase, Rust" subh2="Dates" subp2="August 2023 - December 2023" desc="Created as part of the GT Web Dev Club, GT Reviews is a full stack web application that allows GT Students to review anything GT Related. It features a front end built with React and ChakraUI, and a backend webscraper developed in Rust. As Project Manager, I oversaw development and managed a team of 8 people.   "/>
                            <Project id="Roadcode" title="Roadcode • Developer" subh1="Awards" subp1="Best Overall" subp12="Best Use of Digital Ocean" subh2="Technologies" subp2="JS, HTML, CSS, node.js, Google Maps, OpenTripMap" subh3="Dates" subp3="June 2022" desc="Ever wanted to go on a roadtrip without planning for one? Introducing Roadcode, a web app that can procedurally plan a roadtrip for you based on inputted criteria. Developed for Freyhacks Hackathon with 1 other person, Roadcode took home Best Overall as well as Best use of Digital Ocean"/>
                            <Project id="Therapal" title="Therapal • Developer" subh1="Awards" subp1="First place" subh2="Technologies" subp2="React, JS, Material UI, node.js, Firebase, GPT-3.5" subh3="Dates" subp3="August 2023" desc="Created during United Hacks Hackathon, Therapal connects users with similar mental health struggles in a chat platform assisted by GPT-3.5. Users can select their issues, and are matched with similar users in an Omegle-like platform. If the conversation runs dry, GPT can interject to keep it afloat. Developed in a team of 2, Therapal won First place in the mental health category at United Hacks."/>
                            <Project id="Metruhnome" title="Metruhnome • Developer" subh1="Technologies" subp1="JS, HTML, CSS, node.js, WebSocket, NTP" subh2="Dates" subp2="May 2022" desc="Metruhnome is a web app that allows users to syncronize their metronomes together. Intended to be used in a rehearsal setting, Metruhnome was developed for the Woodbridge High School Music Department and saw usage in orchestral and band rehearsals. Metruhnome utilizes Network Time Protocol (NTP) and websockets to syncronize metronome timings."/>

                        </div>
                        <div id="FrameWrapper" >
                            <div id="Frame" >
                                <img id="MetruhnomeImg" src={Metruhnome} />
                                <img id="TherapalImg" src={TherapalImg} />
                                <img id="RoadcodeImg" src={RoadCode} /> 
                                <img id="GTReviewsImg" src={Portfolio} /> 
                                <img id="ArmorAbilitiesImg" src={Curseforge} />
                                <img id="CenchantsImg" src={Curseforge} />
                                
                            </div>
                        </div>
                       
                    </div>                
                
                
            </div>
        
    )
}