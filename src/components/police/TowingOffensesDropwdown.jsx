import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import '../../css/police/towing.css'

const TowingOffensesDropdown = () => {


    const [offenses, setOffenses] = useState([]);

    let policeId;
    const navigate = useNavigate();

    useEffect(() => {

        let username = sessionStorage.getItem('username');
        policeId = sessionStorage.getItem('police_id');
        console.log('police id ', policeId);
        if(!policeId){
            navigate('/police/login');
        }
        axios.get(`http://ec2-65-2-146-200.ap-south-1.compute.amazonaws.com:8080/towing_offenses`)
            .then(res => {
                const result = res.data
                console.log(result);
                // console.log(policeDetails);
                setOffenses(result);  
            })
    }, []);

    return (

        <div>
            <select name="" id="offense-no"  className='offense-input form-control'>
                {offenses.map(offense => {
                    return (
                        <option value={offense.offense_no}>{offense.description}</option>
                    )
                })}
            </select>
            
        </div>
    )
}

export default TowingOffensesDropdown;