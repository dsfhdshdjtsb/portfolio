import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";
import "../style.css"
import { BarLoader } from "react-spinners";

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home(){
    const [loading, setLoading] = React.useState(false)
    React.useEffect(()=>
    {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)            
        }, 1000)
        window.scrollTo(0, 0)
    }, [])

    return(
        <div>
            {loading ? (
                <div className="Loading">
                    <BarLoader
                        color={"#e1c16e"}
                        loading={loading}
                        height={10}
                        width={"90vw"}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            ) : (
            <div>
                <Header />
                <div class="Diagonal"></div>
                <About />
                <Projects />
                
            </div>
            )}
        </div>
        
    )
}