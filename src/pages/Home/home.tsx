import {  Menu } from "./styles";
import Typewriter from "typewriter-effect";
import React, { useState } from "react";
import Sectiont from "../../components/Section";
import Contatos from "../../components/Contatos";




const Home = () => {

    const [state] = useState({
        title: "Bem-vindo,",
        titleTwo: "A",
        titleThree: "ZETA.",
    });
    return(   
     <Menu>
     <div className="home">
        <div className="home-intro">
            <h2>
                <div className="title">{state.title}</div>
                <div className="titleTwo">{state.titleTwo}</div>
                <div className="titleThree">{state.titleThree}</div>
            </h2>
            <div className="text">
                <Typewriter
                    options={{
                        autoStart: true,
                    loop: true,
                    delay:40,
                    strings:[
                        "Se você está aqui",
                        "Chegou ao lugar certo",
                        "Aproveite."
                    ]
                }}/>
            </div>
        </div>
     </div>    
        <Sectiont/> 
        <Contatos/>
     </Menu>
    )    
}

export default Home;
