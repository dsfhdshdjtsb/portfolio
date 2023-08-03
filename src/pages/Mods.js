import React, { useEffect, useRef } from "react"
import Curseforge from "../images/Curseforge.png"
import LifestealDemo from "../images/LifestealDemo.png"

import "../style.css"
import ExplodeDemo from "../images/explodedemo.mp4"
import ProjectEntry from "../components/ProjectEntry"
import Navbar from "../components/Navbar"
export default function Mods(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div className="Mods">
        <Navbar />
            <div className="Landing">
                <img src={Curseforge} />
                <h1>Minecraft Mods</h1>
            </div>
            <ProjectEntry title="CombatEnchantments" name="Combat Enchants" downloads="200k" roles="Creator and Developer" technologies="Java, Fabric Modloader" dates="August 2021-Present" 
                desc="With over 200,000 total downloads, Combat Enchantments is my most downloaded mod and showcases my ability to successfully handle
                large, longterm projects. Written entirely in Java and utilizing the Fabric modloader, Combat Enchantments introduces more than 30 
                meticulously balanced enchantments, enhancing the game's combat system without alienating veteran players. The mod's code is publicly 
                hosted on GitHub, providing a platform for players and developers to contribute through suggestions, bug reports, and pull requests.  
                To date, there have been 10 pull requests, 17 bug reports, and a countless number of suggestions made by the community" 
                github={"https://github.com/dsfhdshdjtsb/enchantments"} youtube={"https://youtu.be/6Gmo_DYAwMw"} project="https://www.curseforge.com/minecraft/mc-mods/combat-enchantments"
            />
            <ProjectEntry title="ArmorAbilities" name="Armor Abilities" downloads="1k" roles="Creator and Developer" technologies="Java, Fabric and Forge Modloader" dates="June 2023-Present"
                desc="While Combat Enchantments merely enhances the existing combat system, Armor Abilities introduces an entirely new system of abilities
                activated through keybinds. As such, Armor Abilities is a highly technical mod, making modifications to the game's rendering system, 
                adding a new user interface, and utilizing packets to sync data between client and server. Two distinct version of the mod were created for
                each of the major modloaders (forge and fabric). Both iterations of the source code are publicly hosted on GitHub. While it may have few
                downloads now due to its young age, Armor Abilities is a project I plan to continue working on in the future."
                github={"https://github.com/dsfhdshdjtsb/ArmorAbilities"} github2={"https://github.com/dsfhdshdjtsb/ArmorAbilitesForge"} project={"https://www.curseforge.com/minecraft/mc-mods/armor-abilities"}
            />
            <iframe className="Video" width="560" height="315" src="https://www.youtube.com/embed/6Gmo_DYAwMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p className="MediaDesc">A demo of Combat Enchantments (not made by me)</p>
            <video width="320" height="240" controls>
                <source src={ExplodeDemo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p className="MediaDesc">A demo of "Explode" from Armor Abilities</p>
            <div className="Spacer"></div>
        </div>
    )
}