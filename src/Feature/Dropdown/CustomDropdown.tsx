import React from 'react';
import Dropdown from '../../component/Dropdown/Dropdown';

const CustomDropdown = () => {
    return (
        <div>
            <h1>hello dropdown</h1>
            <Dropdown className=" min-w-max">
                <Dropdown.listItem>hello</Dropdown.listItem>
                <Dropdown.listItem>hello-2</Dropdown.listItem>
            </Dropdown>
        </div>
    );
};

export default CustomDropdown;