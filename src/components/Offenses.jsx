import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './Menu';

const Offenses = () => {

    const [offenses, setOffenses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/offenses/0868687578')
        .then(res => {
            const offenses = res.data
            // console.log(offenses);
            offenses.map(offense => {
            
                console.log(offense);
            })
            setOffenses(offenses);  
        })
    }, []);

    return (
        <div>

            <div className='user'>
                <Menu />

                <div>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Fine No</th>
                                <th>Name</th>
                                <th>Vehicle No</th>
                                <th>Place</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {offenses.map(offense => {
                                return (
                                    <tr key={offense.fine_no}>
                                        <td>{offense.fine_no}</td>
                                        <td>{offense.name}</td>
                                        <td>{offense.vehicle_no}</td>
                                        <td>{offense.place}</td>
                                        <td>{offense.time}</td>
                                    </tr>
                                );
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
                
                
            </div>
    )

}

export default Offenses;