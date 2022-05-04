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
                    This project is developed by the students of NITK Surathkal, Abhishek, Amogh and Rakshith as a part of the course project for Database Systems.
                    <br/>
                    with the aim to make traffic offense management simple and transparent for the public as well as the traffic police officers.
                </div>
            </div>
        </div>
    )
};


export default Mainpage;