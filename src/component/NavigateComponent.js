import React from 'react';
import {useNavigate} from "react-router";
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
function NavigateComponent() {
    let navigate = useNavigate();
    function handleClick() {
      navigate('/home')
    }
    return (
      <div>
        <button onClick={handleClick}>go home</button>
        <Routes>
            <Route path="/home" element={<Home/>}/>
           
         </Routes>
      </div>
       
    );
  }

export default NavigateComponent;