import React, { Component, useEffect} from 'react';
import '../../css/police/new-offense.css'
import axios from 'axios';
import Menu from './Menu';
import OffenseDropdown from './OffensesDropdown';
import { useNavigate } from 'react-router';
import Header from "./Header";


const RegisterOffence = () => {

    let policeId;
    const navigate = useNavigate();

    useEffect(() => {
        let username = sessionStorage.getItem('username');
        policeId = sessionStorage.getItem('police_id');
        console.log('police id ', policeId);
        if(!policeId){
            navigate('/police/login');
        }

        document.getElementById('date').value = getDate();
        document.getElementById('time').value = getTime();
    });

    function getDate(){
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd
    }

    function getTime(){
        const today = new Date();
        const hh = String(today.getHours()).padStart(2, '0');
        const mm = String(today.getMinutes()).padStart(2, '0'); //January is 0!
        return hh + ":" + mm;
    }
    
    function handleSubmit(event) {
        console.log('Form submitted')
        event.preventDefault()
        
        let body = {
            name : document.getElementById('name').value, 
            dl_no : document.getElementById('dl-no').value,
            vehicle_no : document.getElementById('vehicle-no').value,
            police_id : policeId,
            email : document.getElementById('email').value,
            place : document.getElementById('place').value,
            time : document.getElementById('time').value,
            date : document.getElementById('date').value,
            offense_no : document.getElementById('offense-no').value
        }
        console.log(body);
        axios.post('http://ec2-65-2-146-200.ap-south-1.compute.amazonaws.com:8080/police/offenses/new', body)
            .then(response => {
                console.log(response)
                alert('Offense successfully registered');
                navigate('/police/offenses/history');

            }).catch(err => {
                console.log(err)
                alert('Invalid complaint')
            });
    }


    return (
        <div>
            <Header></Header>
            <div className='new-offense'>
                <Menu selected='new-offense'/>
                <div className='new-offense-form'>

                    {/*<div className="head center">*/}
                    {/*    <h4>Offense Registration Form</h4>*/}
                    {/*</div>*/}

                    <form  onSubmit={handleSubmit}>

                        <div className='outer'>

                            <div className='inner'>
                                <div className='offense-input-field'>
                                    <div className='input-label'>
                                        <label htmlFor="">Name</label>
                                    </div>
                                    <input required type="text" name="" id="name"
                                           className='offense-input form-control'/>
                                </div>
                                <div className='offense-input-field'>
                                    <div className='input-label'>
                                        <label htmlFor="">Driving Licence Number</label>
                                    </div>
                                    <input type="text" name="" id="dl-no" className='offense-input form-control'/>
                                </div>
                                <div className='offense-input-field'>
                                    <div className='input-label'>
                                        <label htmlFor="">Vehicle No</label>
                                    </div>
                                    <input required type="text" name="" id="vehicle-no"
                                           className='offense-input form-control'/>
                                </div>
                                <div className='offense-input-field'>
                                    <div className='input-label'>
                                        <label htmlFor="">Offense</label>
                                    </div>
                                    <OffenseDropdown/>
                                </div>
                            </div>

                            <div className='inner'>
                                <div className='offense-input-field'>
                                    <div className='input-label'>
                                        <label htmlFor="">Place</label>
                                    </div>
                                    <input required type="text" name="" id="place" className='offense-input form-control'/>
                                </div>
                                <div className='offense-input-field'>
                                    <div className='input-label'>
                                        <label htmlFor="">Email</label>
                                    </div>
                                    <input type="email" name="" id="email" className='offense-input form-control'/>
                                </div>

                                <div className='offense-input-field'>
                                    <div className='input-label'>
                                        <label htmlFor="">Date</label>
                                    </div>
                                    <input required type="date" name="" id="date" className='offense-input form-control'/>
                                </div>
                                <div className='offense-input-field'>
                                    <div className='input-label'>
                                        <label htmlFor="">Time</label>
                                    </div>
                                    <input required type="time" name="" id="time" className='offense-input form-control'/>
                                </div>
                            </div>
                        </div>
                        <div className="submit submit-btn">
                            <input type="submit" value='Submit' className='btn btn-danger submit-btn'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        
    );
    
}

 
export default RegisterOffence;