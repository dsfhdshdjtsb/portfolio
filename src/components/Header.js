import Typed from 'typed.js';
import React from "react";
export default function Header(){
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['CS major at Georgia Tech^5000', 'programmer^1000', 'web developer^1000', 'minecraft modder^1000'],
            typeSpeed: 50,
            loop: true
        });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return(
        <div className="Header">
            <div className="Text">
                <h1>Hey, I'm Nick Suh</h1>
                <div className="Container">
                    <span>I'm a </span><span ref={el}></span>
                </div>
                
            </div>
        </div>
    )
}