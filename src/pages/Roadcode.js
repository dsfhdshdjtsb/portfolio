import React from "react"
import "../style.css"
import Navbar from "../components/Navbar"
import RoadcodeImg from "../images/Roadcode.png"
import ProjectEntry from "../components/ProjectEntry"
export default function Roadcode(){
    React.useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div className="Roadcode">
            <Navbar />
            <div className = "Landing">
                <img src={RoadcodeImg}/>
                <h1>Roadcode</h1>
            </div>
            <ProjectEntry title="RoadcodeEntry" name="Randomized Roadtrips" awards="Best Overall" awards2="Best use of Digital Ocean" roles="Backend Dev"
                technologies="Javascript, HTML, CSS, Google Maps API, openTripMapAPI, Node.js" dates="June 24-26, 2022" github="https://github.com/dsfhdshdjtsb/roadcode"
                youtube="https://youtu.be/GGrPU_yO4Xo" project="/" desc="Ever wanted to go on a roadtrip without planning for one? Introducing Roadcode, a web app that
                can plan a roadtrip for you. Simply enter your starting location and the trip distance, and Roadcode will plan a cohesive roadtrip, complete
                with points of interest, hotels, restaurants, and more. As the backend developer, I was responsible for implementing the pathfinding algorithm, which 
                I implemented with Javascript, node.js, google maps API, and open trip map API. Roadcode was created at Freyhacks, a 48 hour online hackathon with over 500 participants. Developed in conjunction 
                with 1 other student, Roadcode won the award for Best Overall and Best use of Digital Ocean."
            />
            <iframe className="Video" width="560" height="315" src="https://www.youtube.com/embed/GGrPU_yO4Xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            
            <p className="MediaDesc">Our hackathon submission video</p>
            <div className="Spacer"></div>
        </div>
    )
}