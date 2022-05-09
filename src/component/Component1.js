import React, {useState, useContext, createContext} from 'react';
import Component2 from './Component2';

export const CounterContext = createContext();
function Component1(props) {
    const[count, setCount] = useState(0);

    function increment(){
        setCount(count+1);

    }
    function decrement(){
        setCount(count-1);
    }
    return (
        <CounterContext.Provider value={count}>
            <div className='App'>
            <button onClick={decrement}>Remove</button>
            <input type='number' value = {count}/>
            <button onClick={increment}>Add</button>
           <Component2/> 
           </div>
        </CounterContext.Provider>
    );
}

export default Component1;