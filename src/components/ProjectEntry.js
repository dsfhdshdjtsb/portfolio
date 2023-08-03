import React from "react"

export default function ProjectEntry(props){
    return(
            <div className={props.title}>
            <div className="ProjectEntry">
                <div className="Sidebar">
                {props.downloads && <div>
                    <h3>Downloads</h3>
                    <p>{props.downloads}</p>
                </div>}
                {props.awards && <div>
                    <h3>Awards</h3>
                    <p>{props.awards}</p>
                    <p>{props.awards2 && props.awards2}</p>
                </div>
                }
                <div>
                    <h3>My Role</h3>
                    <p>{props.roles}</p>
                </div>
                <div>
                    <h3>Technologies</h3>
                    <p>{props.technologies}</p>
                </div>
                <div>
                    <h3>Dates</h3>
                    <p>{props.dates}</p>
                </div>
                <div>
                    <h3>Links</h3>
                    {props.project && <a target="_blank" href={props.project}><p>Project</p></a>}
                    {props.youtube && <a target="_blank" href={props.youtube}><p>Youtube</p></a>}
                    {props.github && <a target="_blank" href={props.github}><p>Github</p></a>}
                    {props.github2 && <a target="_blank" href={props.github2}><p>Github 2</p></a>}
                </div>
                    
                    
                    
                    
                    
                </div>
                <div className="Main">
                    <h2>{props.name}</h2>
                    <p>{props.desc}</p>
                    </div>
            </div>
        </div>
        
    )
}