import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import {useHistory, useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Menu from './Menu';
import '../../css/police/offense-history.css'
import Header from "./Header";


const OffenseRecords = (props) => {

    console.log(useParams());
    
    let policeId;
    const navigate = useNavigate();


    const [offenses, setOffenses] = useState([]);

    function generateChallan(fine_no) {
        window.location.href = "http://ec2-65-2-146-200.ap-south-1.compute.amazonaws.com:8080/police/challan/" + fine_no
    }

    function filter(){
        let nameFilter = document.getElementById('filter-name').value;
        let placeFilter = document.getElementById('filter-place').value;
        let vehicleNoFilter = document.getElementById('filter-vehicle').value;
        let sorts = document.getElementsByName("sort-by");
        let sortByCriteria;
        for(let i = 0; i < sorts.length; i++){
            if(sorts[i].checked){
                sortByCriteria = sorts[i].value;
                break;
            }
        }
        axios.get(`http://ec2-65-2-146-200.ap-south-1.compute.amazonaws.com:8080/police/offenses/10004?name_filter=${nameFilter}&place_filter=${placeFilter}&vehicle_no_filter=${vehicleNoFilter}&sort_by=${sortByCriteria}`)
        .then(res => {
            setOffenses(res.data);
        }).catch(err => {
            alert(err.response.data);
        });
    }

    useEffect(() => {
        let username = sessionStorage.getItem('username');
        policeId = sessionStorage.getItem('police_id');
        console.log('police id ', policeId);
        if(!policeId){
            navigate('/police/login');
        }
        axios.get(`http://ec2-65-2-146-200.ap-south-1.compute.amazonaws.com:8080/police/offenses/${policeId}`)
        .then(res => {
            const offenses = res.data
            offenses.map(offense => {            
                console.log(offense);
            })
            setOffenses(offenses);  
        })
    }, []);

    return (
        <div className=''>
            <Header></Header>
            <div className='history'>
                <Menu selected='history'/>
                <div className='offense-history'>
                <div className={'num-offenses ' + (offenses.length == 0 ? "bg-danger" : "bg-success") + ' text-white'}>
                    {offenses.length > 0 ? offenses.length : "No"} record(s) found
                </div>
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
                                <small>{offense.date.split('T')[0]}</small>
                            </div>
                        </div>

                        <div className="challan">
                            <button className='btn btn-outline-primary challan-link' onClick={(e) => generateChallan(offense.fine_no)} >Download</button>
                        </div>
                    </div>
                    )
                    })
                }                    
                </div>

                <div className="filter">
                    <h5 htmlFor="" >Filter By</h5><br></br>
                    <div className="filter-field">
                        <label htmlFor="">Name</label><br></br>
                        <input type="text" id="filter-name" onChange={filter} className='filter-input' placeholder='Enter name'/>
                    </div>
                    <div className="filter-field">
                        <label htmlFor="">Place</label><br></br>
                        <input type="text" id="filter-place" onChange={filter} className='filter-input' placeholder='Enter place'/>
                    
                    </div>

                    <div className="filter-field">
                        <label htmlFor="">Vehicle Number</label><br></br>
                        <input type="text" id="filter-vehicle" onChange={filter} className='filter-input' placeholder='Enter vehicle number'/>
                    
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
                </div>
            </div>
        </div>
    )


}

export default OffenseRecords;