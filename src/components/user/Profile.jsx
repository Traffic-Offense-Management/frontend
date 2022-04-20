import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'
import Menu from './Menu';


const Profile = () => {


    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/user/gcraske2')
        .then(res => {
            const userDetails = res.data[0]
            // console.log(userDetails);
            setUserDetails(userDetails);  
        })
    }, []);

    return (

        <div className='user'>

            <Menu />

            <div className="profile">
                <div className="profile-info">
                    <label>Username : </label>
                    <span id='username'>{userDetails.name}</span>

                </div>
                <div className="profile-info">
                    <label>Age : </label>
                    <span id='age'>{19}</span>

                </div>
                <div className="profile-info">
                    <label>DL NO : </label>
                    <span id='dlno'>{userDetails.dl_no}</span>

                </div>

                <div className="profile-info">
                    <label>Phone : </label>
                    <span id='phone'>{userDetails.phone}</span>

                </div>
            </div>

        </div>
        
    )
}

export default Profile;