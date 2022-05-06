import React from "react";
import { useState } from "react";
const MyFuncComponent = (props)=> {
    const[color, setColor] = useState("Black");

    function changeColor(e) {

        setColor(e.target.value);

    } 
    return(
        <div>
            <h2>This is from a functional component</h2>
            <p>My current state is: {props.state}</p>
            <p>My Fav color is: {color}</p>
            <button onClick={changeColor} value="Red">Red</button>
            <button onClick={changeColor} value="Blue">Blue</button>
            <button onClick={changeColor} value="Green">Green</button>
        </div>
    )
}

export {MyFuncComponent}

