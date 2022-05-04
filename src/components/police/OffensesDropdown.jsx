import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

const OffensesDropdown = () => {


    const [offenses, setOffenses] = useState([]);

    useEffect(() => {
    axios.get(`http://ec2-65-2-146-200.ap-south-1.compute.amazonaws.com:8080/offenses`)
        .then(res => {
            const result = res.data
            console.log(result);
            // console.log(policeDetails);
            setOffenses(result);  
        })
    }, []);

    return (

        <div>
            <select name="" id="offense-no" className='offense-input form-control'>
                {offenses.map(offense => {
                    return (
                        <option value={offense.offense_no}>{offense.description}</option>
                    )
                })}
            </select>
            
        </div>
    )
}

export default OffensesDropdown;