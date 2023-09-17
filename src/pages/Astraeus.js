import React from "react"
import "../style.css"
import AvImg from "../images/Av.png"
import AvGIF from "../images/Av.gif"
import ProjectEntry from "../components/ProjectEntry"
import Navbar from "../components/Navbar"

export default function Astraeus(){
    React.useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div className="Astraeus">
            <Navbar />
            <div className = "Landing">
                <img src={AvGIF}/>
                <h1>Astraeus View</h1>
            </div>
            <ProjectEntry title="AstraeusEntry" name="Nasa Space Apps Challenge 2022" roles="Developer"
                technologies="Javascript, HTML, CSS, GraphQL, Python, Flask, LightKurve" dates="October 1-3, 2022" github="https://github.com/dsfhdshdjtsb/astraeus-view"
                project="https://docs.google.com/presentation/d/1MgMf3gE1zxXEE9U2Lmfs124hrsaqTpvqUZS_8OiC57M/edit?usp=sharing" desc={"Developed for the NASA Space" + 
                " Apps Challenge, Astraeus View is a web app that allows users to view and analyze data from the Kepler space telescope. Users can either select " + 
                "from 4 preselected stars or enter their own star ID to view the star's light curve, as well as a 3D model of the star's change in brightness over time." + 
                " The light curve is generated using LightKurve, a Python library for analyzing light curves, as well as data from the Kepler space telescope," + 
                " which is publicly available on the NASA Exoplanet Archive. " + 
                
                'Unfortunately, the hosting platform (heroku) removed their free tier, so the web app is no longer available. However, the source code is still available on GitHub,' + 
                " and if you would like to try it out, you can run it locally by cloning the git repository and running the command python -m flask run in the root directory."}
            />
            
            <div className="Spacer"></div>
        </div>
    )
}