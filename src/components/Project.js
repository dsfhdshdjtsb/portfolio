import { ParallaxLayer } from "@react-spring/parallax";
import React from "react"
import { Link } from "react-router-dom";
export default function Project(props){
    return (
        <Link to={props.link}>
            <div className="ProjectSlide">
            {/* <div className="Divider"></div> */}
            <div className="DateWrapper">
                <div className="ProjectInfo">
                    <div>
                        <h4>Downloads</h4>
                        <p>200k</p>
                    </div>
                    <div>
                        <h4>Technologies</h4>
                        <p>Java, Fabric Modloader</p>
                    </div>
                    <div>
                        <h4>Dates</h4>
                        <p>August 2021 - Present</p>
                    </div>
                </div>
                
                <div className="ProjectTextWrapper">
                    <div>
                        <h3>{props.title}</h3>
                        <p className="Subheading">{props.subh}</p>
                        <p className="Description">{props.desc}</p>
                    </div>
                    
                </div>
            </div>
                
            
            {/* <div className="Divider"></div> */}
        </div>
        </Link >
    )
}