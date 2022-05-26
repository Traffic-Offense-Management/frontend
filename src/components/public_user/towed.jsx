import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import {useHistory, useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import Menu from './Menu';
import '../../css/public_user/offense.scss';


const Historye = (props) => {

    console.log(useParams());
    
    let vehicle_no;
    const navigate = useNavigate();

    // const username = localStorage.getItem('username');

    const [offenses, setOffenses] = useState([]);

    // function generateChallan(fine_no) {
    //     window.location.href = "http://localhost:8080/police/challan/" + fine_no
    // }

    // function filter(){
        
    //     axios.get(`http://localhost:8080/police/offenses/user/${username}`)
    //     .then(res => {
    //         setOffenses(res.data);
    //     });
    // }

    useEffect(() => {
        // let username = localStorage.getItem('username');
        const username = localStorage.getItem('username');
        // vehicle_no = localStorage.getItem('police_id');
        console.log('police id ', username);
        
        axios.get(`http://localhost:8080/offenses/tow/${username}`)
        .then(res => {
            const offenses = res.data
            offenses.map(offense => {            
                console.log(offense);
            })
            setOffenses(offenses);  
        })
    }, []);

    return (
    <div className="q">
        <div className='my-bg'>

            <div className="head">Towed History</div>
            <div className='history'>
                {/* <Menu selected='history'/> */}
                <div className='offense-history'>
                <div className='num-offenses bg-light '>
                    {offenses.length > 0 ? offenses.length : "No"} record(s) found
                </div>
                {offenses.map(offense => {

                    return(
                        <div className='offense'>
                            <div className="fine-no">
                                <div className='fine-no-circle'>Fine No : {offense.fine_no}</div>
                                <div className="name">Station : {offense.station_name}</div>
                            </div>

                            <div className="details">
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

                            <div className="fine-amt">
                                <div><i className="fa fa-rupee"></i> {offense.fine}</div>
                            </div>

                        </div>
                    )})

                    // return(
                    // <div className='offense'>
                    //     <div className="fine-no">
                    //         <div className="bo">
                    //         <p className='fine-no-circle'>Fine-no: {offense.fine_no}</p>
                    //         <p className="name">Station Name: {offense.station_name}</p>
                    //         </div>
                    //     </div>
                    //
                    //     <div className="details">
                    //     <div className="name">Vehicle-no: {offense.vehicle_no}</div>
                    //         <div className="offense-type">Offense Place: {offense.place}</div>
                    //         <div className="name">Fine Amount: {offense.fine}</div>
                    //
                    //     </div>
                    //
                    //     <div className="des">Description: {offense.description}</div>
                    //
                    //     <div className="ti">Date : {offense.time.split('T')[0]}</div>
                    // </div>
                    // )
                    // }) :
                    // (<div className='no-records'>
                    //     No records found
                    // </div>)
                }                    
                </div>
            </div>
        </div>
        </div>
    )


}

export default Historye;