import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './Menu';
import '../../css/police/offenses.css'
import Header from "./Header";

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

        <div>
            <Header></Header>
            <div className='offenses'>

                <Menu selected='offense-list'/>

                <div className='list-offense'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>Offense</th>
                            <th>Fine</th>
                        </tr>
                        </thead>

                        <tbody>
                        {offenses.map((offense, index) => {
                            return (
                                <tr key={offense.offense_no}>
                                    <td>{(index + 1) + '. ' + offense.description}</td>
                                    <td>{offense.fine}</td>
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
 
export default ListOffenses;