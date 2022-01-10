import "./Intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro({menuOpen, setMenuOpen}) {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, { showCursor: true, backDelay:1500,backSpeed:80, strings: ['Front-End'] })
    },[]);

    return (
        <div className="intro " id="intro">
                <div className={"wrapper " + (menuOpen && "active")}>
                    <h2 onClick={()=>setMenuOpen(false)}>Hola, Mi nombre es </h2>
                    <h1 onClick={()=>setMenuOpen(false)}>Lucas Cabral</h1>
                    <h3 onClick={()=>setMenuOpen(false)}>Desarrollador Web <span ref={textRef}></span></h3>
                    <a href="#acerca">
                        <img src="assets/down.svg" alt="" />
                     </a>
                </div>
        </div>
    )
}   
