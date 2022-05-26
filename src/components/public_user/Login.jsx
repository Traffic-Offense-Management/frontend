// import React from 'react';
import img1 from './icon.png';
import { Link } from 'react-router-dom';
import '../../css/public_user/login.scss';
import React, { Component, useEffect, useState } from 'react';
import {useHistory, useNavigate} from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import axios from 'axios';

function Login() {


    const navigate = useNavigate();
    
    
    function handleSubmit(e) {
        
        console.log('Form submitted');

        
        e.preventDefault()
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        let body = {
            username : username,
            password : password
        }
        console.log(body);

        localStorage.setItem('username', username);
                // localStorage.setItem('police_id', response.data.policeId);
         console.log((localStorage.getItem('username'))); 
        navigate('/PuHo')
        // navigate('/PuHo');  
        // axios.post('http://localhost:8080/police/auth', body)
        //     .then(response => {
        //         console.log(response)
        //         // alert('Login successful');
        //         localStorage.setItem('username', username);
        //         // localStorage.setItem('police_id', response.data.policeId);
        //         console.log((localStorage.getItem('username')));  
        //         // console.log((localStorage.getItem('police_id')));  
        //         navigate(`/police/profile`);
        //     }).catch(err => {
        //         alert('Invalid username or password');
        //         console.log(err.message)
        //     })
    }

    return (
        <div className="loginstyles">
            <div className="box">
                <img src={img1} />
                <div className="he">Welcome Back!</div>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="UserName" className="fo" id='username'/>
                    <input type="password" placeholder="Password" className="fo" id='password'/>
                    
                    
                    {/* <Link to="/PuHo"><button className='but' type="submit">Login</button></Link> */}

                    <input type="submit" className="btn btn-danger submit-btn" value={'Submit'} name="" id="" />

                    {/*<div className="for">Forgot password?Click here</div>*/}
                </form>
            </div>
        </div>
    );
                    

}
export default Login;
