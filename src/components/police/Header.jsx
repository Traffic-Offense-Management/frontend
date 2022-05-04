import React from "react";
import '../../css/police/header.css'
import UserLogo from "./UserLogo";
import {Link} from "react-router-dom";



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
            <div className='mainpage text-white'>
                <Link to='/'><a href="" className='home-link navbar-brand'>Home</a></Link>
            </div>
            <h2 className='inline-block'>Traffic Offense Management</h2>
            {renderSignOut()}
        </div>
    );
}

export default Header;