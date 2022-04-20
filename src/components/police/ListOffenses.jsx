import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './Menu';
import '../../css/police/offenses.css'

const ListOffenses = () => {
    

    const [offenses, setOffenses] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/offenses`)
        .then(res => {
            const result = res.data
            console.log(result);
            // console.log(policeDetails);
            setOffenses(result);  
        })
    }, []);

    return (

        <div className='offenses my-bg'>

            <Menu selected='offense-list'/>

            <div className='list-offense'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Offense No</th>
                            <th>Description</th>
                            <th>Fine / Punishment</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {offenses.map(offense => {
                            return (
                                <tr key={offense.offense_no}>
                                    <td>{offense.offense_no}</td>
                                    <td>{offense.description}</td>
                                    <td>{offense.fine}</td>
                                </tr>
                            );
                        })
                        }
                    </tbody>
                </table>
            </div>

        </div>
        
    )
}
 
export default ListOffenses;