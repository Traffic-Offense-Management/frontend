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

                <div className="pa">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A pariatur ipsum libero totam, debitis vel aliquid nesciunt nulla ut explicabo quasi praesentium rerum est soluta, laborum assumenda magni fugiat exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, pariatur mollitia quidem maxime excepturi voluptatum nihil in dolorum amet, enim tempora. Optio adipisci rerum, officiis labore, minima totam accusamus ut aspernatur pariatur dolore autem laborum libero nisi obcaecati porro cum!</div>

            </div>
        </div>
    )
};


export default Mainpage;