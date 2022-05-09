import React from 'react';
import {BrowserRouter, Link, Routes, Route, useNavigate} from "react-router-dom";
import About from './About';
import Home from './Home';
import Profile from './Profile';

function RouteDemo(props) {
   
    let navigate = useNavigate();
    function handleClick(){
      
       navigate("/profile");
    }
      
    return (
        <div className='App'>
                <h1>Route Demo</h1>
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li><Link to="/home">home page</Link> </li>
                            <li><Link to="/about">About Us</Link> </li>
                            <li><Link to="/profile">Profile</Link> </li>
                        </ul>
                    </nav>
                    <button onClick={handleClick}>go to profile</button>
                    <Routes>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>
                </BrowserRouter>
        </div>
    );
}

export default RouteDemo;