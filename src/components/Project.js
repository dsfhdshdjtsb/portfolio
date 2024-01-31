import { ParallaxLayer } from "@react-spring/parallax";
import React from "react"
import { Link } from "react-router-dom";
export default function Project(props){

    const [isIntersecting, setIsIntersecting] = React.useState(false)
    const ref = React.useRef(null)
    // React.useEffect(()=>{
    //     const observer = new IntersectionObserver(([entry])=>{
    //         setIsIntersecting(entry.isIntersecting);
    //     },
    //     {
    //         rootMargin:"-100px"
    //     });
    //     console.log(isIntersecting);
    //     observer.observe(ref.current);
    //     return ()=>observer.disconnect();

    // },[isIntersecting])
    // React.useEffect(()=>{
    //     if(isIntersecting) {
    //         ref.current.querySelectorAll(".Slide").forEach((el) => {
                
    //             el.classList.add("slide-in");
    //         });
    //     }
    //     else {
    //         // ref.current.querySelectorAll(".Slide").forEach((el) => {
    //         //   el.classList.remove("slide-in");
    //         // });
    //     }
    // }, [isIntersecting])

    return(
        <main ref={ref}>
            <div className="Slide" >
                
                <Link to={props.page}>
                    <img src={props.img}/>            
                </Link>
            </div>
        </main>
        
    )
}