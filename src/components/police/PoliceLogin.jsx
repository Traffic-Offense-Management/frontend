import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import {useHistory, useNavigate} from 'react-router-dom'
import {withRouter} from 'react-router-dom';

import '../../css/police/login.css';
import Header from "./Header";

const PoliceLogin = () => {   
    
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
        axios.post('http://localhost:8080/police/auth', body)
            .then(response => {
                console.log(response)
                // alert('Login successful');
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('police_id', response.data.policeId);
                console.log((sessionStorage.getItem('username')));  
                console.log((sessionStorage.getItem('police_id')));  
                navigate(`/police/dashboard`);
            }).catch(err => {
                alert('Invalid username or password');
                console.log(err.message)
            })
    }

    return (

        <div>
            <Header loginPage={true}></Header>
            <div className='login-form '>
                <form onSubmit={handleSubmit}>

                    <h4>Sign In</h4>
                    <div className="form">

                        <div className="field">
                            <label htmlFor="" className='form-label'>Username</label>
                            <input type="text" name="" id="username" className='form-control'/>
                        </div>
                        <div className="field">
                            <label htmlFor="" className='form-label'>Password</label>
                            <input type="password" name="" id="password"  className='form-control'/>
                        </div>
                    </div>

                    <button className='btn btn-danger' type='submit'>Submit</button>
                </form>
            </div>
        </div>

        
     );

    
}
 
// PoliceLoginWithRouter = withRouter(PoliceLogin);
export default (PoliceLogin);