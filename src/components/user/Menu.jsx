import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../../css/police/menu.css'

const Menu = () => {
    
    return (
        <div>
            <div className="menu">
                <div className='menu-option'>
                    <Link to='/user/profile'>Profile</Link>
                </div>
                <div className='menu-option'>
                    <Link to='/user/offenses'>Offenses</Link>
                </div>
                <div className='menu-option'>
                    <Link to='/user/complaints'>Complaints</Link>
                </div>
            </div>
        </div>
    )
}
 
export default Menu;