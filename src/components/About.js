import CSSIcon from "../images/CSSIcon.png"
import HTMLIcon from "../images/HTMLIcon.png"
import GitIcon from "../images/GitIcon.png"
import JavaIcon from "../images/JavaIcon.png"
import JavascriptIcon from "../images/JavascriptIcon.png"
import ReactIcon from "../images/ReactIcon.png"
import Instagram from "../images/Instagram.png"
import Discord from "../images/Discord.png"
import Github from "../images/Github.png"
import Linkedin from "../images/Linkedin.png"
import Outlook from "../images/Outlook.png"
import portrait from "../images/portrait.jpg"
import React from "react"
import Resume from "../media/Resume.pdf"

export default function About(){
    return(
        <div className="About">
            
            <div className="Content">
                <h2 id="AboutMe">About me</h2>
                <p>I am a first year student studying Computer Science. I have a interest
                in game design, web development, web3, ML, and basically anything related
                to programming. </p>
                

                <h2 id="MySkills">My Skills</h2>
                <div className="LogoImages">
                    <img src={JavaIcon} id="javaIcon"></img>
                    <img src={HTMLIcon}></img>
                    <img src={CSSIcon}></img>
                    <img src={JavascriptIcon}></img>
                    <img src={ReactIcon}></img>
                    <img src={GitIcon}></img>
                </div>
                
            </div>
            <div className="imageAndSocials">
                <img id="portrait" loading="lazy" src= {portrait}></img>
                
                <div className="Socials">
                    <a href='https://github.com/dsfhdshdjtsb' target="_blank"><img src={Github}/></a>
                    <a href='https://www.linkedin.com/in/nicholas-suh-5ba013274/' target="_blank"><img src={Linkedin}/></a>
                    <img src={Outlook} onClick={()=>window.location = 'mailto:nicksuh@gatech.edu'}/>
                    <a href='https://www.instagram.com/nick_suh/' target="_blank"><img src={Instagram}/></a>
                    <a href='https://discordapp.com/users/395005138000936960' target="_blank"><img src={Discord}/></a>
                </div>
                <a href={Resume}><button className="Resume">Resume</button></a>
                
            </div>

            
        </div>
    )
}