import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'
import Menu from './Menu';

const Complaints = () =>  {
    
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/complaints/gcraske2')
        .then(res => {
            const result = res.data
            console.log(result);
            setComplaints(result);  
        })
    }, []);

    return (

        <div className='user'>
            <Menu />
            
            <div className="complaints">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Complaint ID</th>
                            <th>Description</th>
                            <th>Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {complaints.map(complaint => {
                            return (
                                <tr key={complaint.complaint_id}>
                                    <td>{complaint.complaint_id}</td>
                                    <td>{complaint.description}</td>
                                    <td>{complaint.date}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}
 
export default Complaints;