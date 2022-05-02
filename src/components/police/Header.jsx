import React from "react";
import '../../css/police/header.css'
import UserLogo from "./UserLogo";

const Header = (props) =>{

    function renderSignOut(){
        if(!props.loginPage){
            return (
                <UserLogo></UserLogo>
            )
        }
    }

    return (
        <div className="center heading">
            <h2 className='inline-block'>Traffic Offense Management</h2>
            {renderSignOut()}
        </div>
    );
}

export default Header;