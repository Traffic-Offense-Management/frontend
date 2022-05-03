import React, { Component, useEffect, useState } from 'react';
import '../../css/public_user/style3.scss';
import img2 from './icon.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useHistory, useNavigate} from 'react-router-dom'

function Singin() {

    // constructor(props){
    //     super(props);
    // }

    const navigate = useNavigate();

    function handlesubmit(event){
        event.preventDefault();

        let username = document.getElementById('userid').value

        let body={
            userid:document.getElementById('userid').value,
            name:document.getElementById('name').value,
            dlno:document.getElementById('dl').value,
            addr:document.getElementById('addr').value,
            phone:parseInt(document.getElementById('pho').value),
            vehicle_no:document.getElementById('veh').value,
            password: document.getElementById('password').value
        }
        console.log(body);  

        axios.post('http://localhost:8080/user/new',body)
        .then(res=>{
            console.log(res);
            alert("Successful!")

        })
        .catch(err=>{
            alert("Invalid details hi")
        })

        localStorage.setItem('username', username);
                // localStorage.setItem('police_id', response.data.policeId);
         console.log((localStorage.getItem('username'))); 
        navigate('/PuHo')

        
    }

    
    return (
        <div className="singinstyle">
            <div className="conta">
            <div className="box">
                <img src={img2} />
                <div className="he">Let's get you signed in</div>

                <form onSubmit={handlesubmit} >
                    <input type="text" id='userid' className="fo" placeholder="UserID" />
                    <input type="text" id='name' className="fo" placeholder="Name" />
                    <input type="text" id='dl' className="fo" placeholder="dlno" />
                    <input type="digit" id='pho' className="fo" placeholder="Phone Number" />
                    <input type="text" id='addr' className="fo" placeholder="Address" />
                    <input type="text" id='veh' className="fo" placeholder="Vehicle Number" />
                    <input type="password" id='password' className="fo" placeholder="Password" />
                    <div className="ag"> <span><input type="checkbox" /></span>I agree to the terms and conditions of the services</div>
                    
                    <input className='But' type="submit" value='Submit'/>   
                </form>

                {/* <Link to='/puHo'> */}
                {/* </Link> */}
            </div>
            </div>
        </div>
    );

}

export default Singin;