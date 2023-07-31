import Curseforge from "../images/Curseforge.png"
import RoadCode from "../images/Roadcode.png"
import Metruhnome from "../images/Metruhnome.png"
import Portfolio from "../images/Portfolio.png"

export default function Projects(){
    return(
        <div className="Projects">
            <h2>My Projects</h2>
            <div className="Images">
                <div className="Slide">
                    <img className="cenchantsImg" src={Curseforge}/>
                    <div class="overlay">
                        <div class="text">Minecraft Modding</div>
                    </div>
                </div>
                <div className="Slide">
                    <img className="roadcodeImg" src={RoadCode}/>
                    <div class="overlay">
                        <div class="text">Roadcode</div>
                    </div>
                </div>
                <div className="Slide">
                    <img className="portfolioImg" src={Portfolio}/>
                    <div class="overlay">
                        <div class="text">Portfolio Website</div>
                    </div>
                </div>
                <div className="Slide">
                    <img className="Metruhnome" src={Metruhnome}/>

                    <div class="overlay">
                        <div class="text">Metruhnome</div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}