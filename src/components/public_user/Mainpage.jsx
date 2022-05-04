import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/public_user/style.scss';

function Mainpage() {
    return (
        <div className="MainpageStyle">
            <div className="box2">

                <div className="head">Traffic Offense Management</div>

                <div className="lo"><Link to="/roles"><a href="#">LOGIN</a></Link></div>
            </div>

            <nav className='navuser'>
                <div className='Li'><a href="#">Home</a></div>

                <div className='Li'><a href="#">Contact Us</a></div>
            </nav>

            <div className="box">

                <div className="con2">
                    About Us
                </div>

                <br />

                <div className="pa">
                    This projet is done by students from NITK, Department of Computer Science, Abhishek, Amogh and Rakshith.
                    <br/>
                    This project is inspired by the traffic police department which works day in and out to ensure the safety of civilians on the road.

                </div>
            </div>
        </div>
    )
};


export default Mainpage;