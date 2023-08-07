import React from "react"
import "../style.css"
import MetruhnomeImg from "../images/Metruhnome.png"
import ProjectEntry from "../components/ProjectEntry"
import Navbar from "../components/Navbar"
export default function Metruhnome(){
    React.useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div className="Metruhnome">
            <Navbar />
            <div className = "Landing">
                <img src={MetruhnomeImg}/>
                <h1>Metruhnome</h1>
            </div>"
            <ProjectEntry title="MetruhnomeEntry" name="A Syncronized Metronome" roles="Backend Dev"
                technologies="Javascript, HTML, CSS, NTP, Node.js," dates="May-September 2022" github="https://github.com/dsfhdshdjtsb/synced-metronome"
                project="http://www.metruhnome.com/" desc="Metruhnome is a web app that allows users to syncronize their metronomes. Simply enter the BPM you want to play at, 
                have other users enter the room code, and Metruhnome will synchronize  your metronome with everyone else's. Originally an idea given to me by my band director,
                Metruhnome was created for my high school's music department and was used in both full orchestra and small group settings. Metruhnome uses vanilla HTML and
                CSS for the frontend, and Javascript along with node.js for the backend. The backend uses Network Time Protocol (NTP) to sync the metronomes, although syncronization
                is subject to ping and latency spikes. Metruhnome was developed in conjunction with 1 other student."
            />
            <div className="Spacer"></div>
        </div>
    )
}