import React, { Component } from 'react';

const Menu = () => {
    
    return (
        <div>
            <div className="menu">
                <div className='menu-option'>
                    <a  href='/profile'>UserProfile</a>
                </div>
                <div className='menu-option'>
                    <a href='/offenses'>Offenses</a>
                </div>
                <div className='menu-option'>
                    <a href='/complaints'>Complaints</a>
                </div>
            </div>
        </div>
    )
}
 
export default Menu;