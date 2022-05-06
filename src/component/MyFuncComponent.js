import React from "react";

const MyFuncComponent = (props)=> {
    return(
        <div>
            <h2>This is from a functional component</h2>
            <p>My current state is: {props.state}</p>
        </div>
    )
}

export {MyFuncComponent}

