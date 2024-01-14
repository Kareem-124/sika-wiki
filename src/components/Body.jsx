import React from "react";
import Sbody from "./Sbody";
import Ssbody from "./ssbody";

const Body = (props)=> {
    const {navButton,setNavButton} = props
    return(
    <div className="body-container">
        <h1>This is the Body </h1>
        <div className="d-flex justify-content-around">
            
            <Sbody navButton={navButton} setNavButton={setNavButton}/>
            <Ssbody/>
        </div>
    </div>       
    )
}

export default Body