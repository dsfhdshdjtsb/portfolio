import React from "react"
import { Link } from "react-router-dom"
export default function Navbar(){
    return (
        
        // create a div with a class of navbar that has my Nick Suh in the left corner and a React link to the homepage on the right corner
        <div className="Navbar">
            <div className="NickSuh">
                <Link to="/"><h1>Nick Suh</h1></Link>
            </div>

        </div>
            

    )
}