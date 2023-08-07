import React from "react"
import "../style.css"
import TherapalImg from "../images/Therapal.jpg"
import Navbar from "../components/Navbar"
import ProjectEntry from "../components/ProjectEntry"
export default function Therapal(){
    React.useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div className="Roadcode">
            <Navbar />
            <div className = "Landing">
                <img src={TherapalImg}/>
                <h1>Therapal</h1>
            </div>
            <ProjectEntry title="TherapalEntry" name="Omegle with GPT-3" awards="First Place" roles="Backend Dev"
                technologies="Javascript, React, Firebase, GPT-3, MaterialUI, node.js" dates="August 4-6, 2023" github="/"
                youtube="https://www.youtube.com/watch?v=ZHJzjuDPha8" project="/" desc="Created during a 48 hour hackathon, Therapal is a web app that
                connects users with similar mental health challenges. Users select their issues, such as depression or anxiety, and are paired to share
                experiences and offer mutual aid through a chat interface inspired by Omegle. At any time, users can request a response from GPT-3 to help them continue the conversation, 
                and GPT-3 will take into account the users' shared mental health issues and the chat history to generate a relevant response. I worked mainly on the backend, single-handedly
                implementing the chat, matchmaking, history, authentication, and openAI systems using javascript, firebase, node.js, and GPT-3.5. Therapal was developed in conjunction with 
                1 other student at Hack United, an online mental health hackathon with over 400 participants. Therapal took home First Place for the mental health category, 
                but had the highest score across all categories."
            />
            <iframe className="Video" width="560" height="315" src="https://www.youtube.com/embed/ZHJzjuDPha8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            <p className="MediaDesc">Our hackathon submission video</p>
            <div className="Spacer"></div>
        </div>
    )
}