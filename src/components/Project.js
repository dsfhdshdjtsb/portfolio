import { ParallaxLayer } from "@react-spring/parallax";
import React from "react"
import { Link } from "react-router-dom";
export default function Project(props){
    return (
        <Link id={props.id} to={props.link}>
            <div className="ProjectSlide">
            {/* <div className="Divider"></div> */}
            <div className="DateWrapper">
                <div className="ProjectInfo">
                    <div>
                        <h4>{props.subh1}</h4>
                        <p>{props.subp1}</p>
                    </div>
                    <div>
                        <h4>{props.subh2}</h4>
                        <p>{props.subp2}</p>
                    </div>
                    <div>
                        <h4>{props.subh3}</h4>
                        <p>{props.subp3}</p>
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