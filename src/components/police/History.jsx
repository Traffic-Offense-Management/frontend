import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from './Menu';
import '../../css/police/offense-history.css'


const History = (props) => {

    console.log(useParams());
    let {policeId} = useParams(); 

    const [offenses, setOffenses] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/police/offenses/10004`)
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
        <div className='my-bg'>

            <div className='history'>
                <Menu selected='history'/>
                <div className='offense-history'>
                    {offenses.map(offense => {

                        return(
                            <div className='offense'>
                                <div className="fine-no">
                                    <p className='fine-no-circle'>{offense.fine_no}</p>
                                </div>

                                <div className="details">
                                    <div className="name">{offense.name}</div>
                                    <div className="vehicle-no"><small>{offense.vehicle_no}</small></div>
                                    <div className="offense-type">{offense.description}</div>
                                    
                                </div>

                                <div className="place-time">
                                    <div className="place">
                                        <i class="bi bi-geo-alt-fill"></i>
                                        {offense.place}
                                    </div>
                                    <div className="time">
                                        <i class="bi bi-calendar"></i>
                                        <small>{offense.time.split('T')[0]}</small>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    
                    
                </div>
            </div>
        </div>
    )


}

export default History;