import React, {useState} from 'react';
import ToggleUser from './ToggleUser';

function DynamicContent(props) {

    const[user, setUser] = useState("usera");


    return (
        <div>
            <ToggleUser user= {user}/>
            <button onClick={()=>setUser("usera")}>User A</button>
            <button onClick={()=>setUser("userb")}>User B</button>
        </div>
    );
}

export default DynamicContent;