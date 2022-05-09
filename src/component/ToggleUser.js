import React from 'react';
import UserA from './UserA';
import UserB from './UserB';

const components = {
    usera: UserA,
    userb: UserB
};
function ToggleUser(props) {
    const SelectUser= components[props.user];
    return (
        <div>
            <SelectUser/>
        </div>
    );
}

export default ToggleUser;