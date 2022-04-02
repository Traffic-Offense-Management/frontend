import React from 'react';
import '../css/style3.scss';
import img2 from './icon.png';

function Singin() {
    return (
        <div className="singinstyle">
            <div className="conta">
            <div className="box">
                <img src={img2} />
                <div className="he">Let's get you signed in</div>

                <form>
                    <input type="text" className="fo" placeholder="First Name" />
                    <input type="text" className="fo" placeholder="Last Name" />
                    <input type="email" className="fo" placeholder="email" />
                    <input type="digit" className="fo" placeholder="Phone Number" />
                    <input type="text" className="fo" placeholder="Username" />
                    <input type="password" className="fo" placeholder="Password" />
                    <div className="ag"> <span><input type="checkbox" /></span>I agree to the terms and conditions of the services</div>
                </form>

                <button type="submit">SignUp</button>
            </div>
            </div>
        </div>
    );
}

export default Singin;