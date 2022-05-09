import { useContext } from "react";
import React from 'react';
import { CounterContext } from "./Component1";
function Component2(props) {
    const count = useContext(CounterContext);
    console.log(count);
    return (
        <div>
            <h3>No. of items: {count}</h3>
        </div>
    );
}

export default Component2;