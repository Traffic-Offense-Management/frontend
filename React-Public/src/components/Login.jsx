import React from 'react';
import img1 from './icon.png';
import '../css/login.scss';

function Login() {
    return (
        <div className="loginstyles">
            <div className="box">
                <img src={img1} />
                <div className="he">Welcome Back!</div>

                <form>
                    <input type="text" placeholder="UserName" className="fo" />
                    <input type="password" placeholder="Password" className="fo" />

                    <button type="submit">Login</button>

                    <div className="for">Forgot password?Click here</div>
                </form>
            </div>
        </div>
    );
}

export default Login;
