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
    //     window.location.href = "http://ec2-65-2-146-200.ap-south-1.compute.amazonaws.com:8080/police/challan/" + fine_no
    // }

    // function filter(){
        
    //     axios.get(`http://ec2-65-2-146-200.ap-south-1.compute.amazonaws.com:8080/police/offenses/user/${username}`)
    //     .then(res => {
    //         setOffenses(res.data);
    //     });
    // }

    useEffect(() => {
        // let username = localStorage.getItem('username');
        const username = localStorage.getItem('username');
        // vehicle_no = localStorage.getItem('police_id');
        console.log('police id ', username);
        
        axios.get(`http://ec2-65-2-146-200.ap-south-1.compute.amazonaws.com:8080/offenses/tow/${username}`)
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
                {offenses.length > 0 ? offenses.map(offense => {

                    return( 
                           
                        
                        
                    <div className='offense'>

                        

                        
                        <div className="fine-no">
                            <div className="bo">
                            <p className='fine-no-circle'>Fine-no: {offense.fine_no}</p>
                            <p><div className="name">Station Name: {offense.station_name}</div></p>
                            </div>
                            
                        </div>

                        <div className="details">
                        <div className="name">Vehicle-no: {offense.vehicle_no}</div>
                            {/*<div className="name">Offense-no: {offense.offense_no}</div>*/}
                            <div className="offense-type">Offense Place: {offense.place}</div>
                            {/*<div className="offense-type">Station: {offense.station_name}</div>*/}
                            <div className="name">Fine Amount: {offense.fine}</div>
                            
                        </div>

                        <div className="des">Description: {offense.description}</div>

                        <div className="ti">Date : {offense.time.split('T')[0]}</div>

                        {/* <div className="place-time">
                            <div className="place">
                                <i class="bi bi-geo-alt-fill"></i>
                                {offense.place}
                            </div>
                            <div className="time">
                                <i class="bi bi-calendar"></i>
                                <small>{offense.time.split('T')[0]}</small>
                            </div>
                        </div>

                        <div className="challan">
                            <button className='btn btn-outline-primary challan-link' onClick={(e) => generateChallan(offense.fine_no)} >Download</button>
                        </div> */}
                    </div>
                    )
                    }) : 
                    (<div className='no-records'>
                        No records found
                    </div>)
                }                    
                </div>

                {/* <div className="filter">
                    <h5 htmlFor="" >Filter By</h5><br></br>
                    <div className="filter-field">
                        <label htmlFor="">Name</label><br></br>
                        <input type="text" id="filter-name" onChange={filter} placeholder='Enter name'/>
                    </div>
                    <div className="filter-field">
                        <label htmlFor="">Place</label><br></br>
                        <input type="text" id="filter-place" onChange={filter} placeholder='Enter place'/>
                    
                    </div>

                    <div className="filter-field">
                        <label htmlFor="">Vehicle Number</label><br></br>
                        <input type="text" id="filter-vehicle" onChange={filter} placeholder='Enter vehicle number'/>
                    
                    </div>
                    
                    <div className="sort-by">
                        <h5 className='filter-header'>Sort by</h5>
                        <div className="criteria">
                            <input type="radio" name='sort-by' value="name" onClick={filter}/><label htmlFor="" className='sort-label'>Name</label>
                        </div>
                        <div className="criteria">
                            <input type="radio" name='sort-by' value="date" onClick={filter}/><label htmlFor="" className='sort-label'>Date</label>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        </div>
    )


}

export default Historye;