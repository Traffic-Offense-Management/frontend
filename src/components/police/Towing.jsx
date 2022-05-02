import React, {Component, useEffect} from 'react';
import '../../css/police/new-offense.css'
import axios from 'axios';
import Menu from './Menu';
import OffenseDropdown from './OffensesDropdown';
import TowingOffensesDropdown from './TowingOffensesDropwdown';
import Stations from './Stations';
import Header from "./Header";
import {useNavigate} from "react-router";


const Towing = () => {

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

    function getDate() {
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
            vehicle_no : document.getElementById('vehicle-no').value,
            police_id : policeId,
            offense_no : document.getElementById('offense-no').value,
            station_id : document.getElementById('police-station-id').value,
            place : document.getElementById('place').value,
            time : getDate() + ' ' +  getTime()
        }
        console.log(body);
        axios.post('http://localhost:8080/police/towing/new', body)
            .then(response => {
                console.log(response)
                alert('Towing offense successfully registered')
            }).catch(err => {
                console.log(err)
                alert('Invalid details')
            })
    }

    return (
        <div>
            <Header></Header>
            <div className='new-offense'>
                <Menu selected='new-towing'/>
                <div className='new-offense-form'>

                    <form  onSubmit={handleSubmit}>

                        <div className='outer'>

                            <div className='inner'>
                                <div className='offense-input-field'>
                                    <div className='input-label'>
                                        <label htmlFor="">Vehicle No</label>
                                    </div>
                                    <input required type="text" name="" id="vehicle-no"
                                           className='offense-input form-control'/>
                                </div>

                                <div className='offense-input-field'>
                                    <div className='input-label'>
                                        <label htmlFor="">Date</label>
                                    </div>
                                    <input required type="date" name="" id="date" className='offense-input form-control'/>
                                </div>
                                <div className='offense-input-field'>
                                    <div className='input-label'>
                                        <label htmlFor="">Offense</label>
                                    </div>
                                    <TowingOffensesDropdown/>
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
                                        <label htmlFor="">Time</label>
                                    </div>
                                    <input required type="time" name="" id="time" className='offense-input form-control'/>
                                </div>

                                <div className='offense-input-field'>
                                    <div className='input-label'>
                                        <label htmlFor="">Police Station</label>
                                    </div>
                                    <Stations/>
                                </div>
                            </div>
                        </div>
                        <div className="submit submit-btn">
                            <input type="submit" value='Submit' className='btn btn-danger submit-btn'/>
                        </div>




                        {/*<table className='new-offense-form-table center'>*/}
                        {/*    <tbody>*/}
                        {/*    <tr>*/}
                        {/*        <td>*/}
                        {/*            <label htmlFor="">Name</label>*/}
                        {/*        </td>*/}
                        {/*        <td>*/}
                        {/*            <input required type="text" name="" id="name" className='offense-input form-control'/>*/}
                        {/*        </td>*/}
                        {/*    </tr>*/}

                        {/*    <tr>*/}

                        {/*        <td>*/}
                        {/*            <label htmlFor="">DL No</label>*/}
                        {/*        </td>*/}
                        {/*        <td>*/}
                        {/*            <input  type="text" name="" id="dl-no" className='offense-input form-control'/>*/}
                        {/*        </td>*/}
                        {/*    </tr>*/}

                        {/*    <tr>*/}

                        {/*        <td>*/}
                        {/*            <label htmlFor="">Vehicle No</label>*/}
                        {/*        </td>*/}
                        {/*        <td>*/}
                        {/*            <input required type="text" name="" id="vehicle-no" className='offense-input form-control'/>*/}
                        {/*        </td>*/}
                        {/*    </tr>*/}

                        {/*    <tr>*/}

                        {/*        <td>*/}
                        {/*            <label htmlFor="">Place</label>*/}
                        {/*        </td>*/}
                        {/*        <td>*/}
                        {/*            <input required type="text" name="" id="place" className='offense-input form-control'/>*/}
                        {/*        </td>*/}
                        {/*    </tr>*/}

                        {/*    <tr>*/}

                        {/*        <td>*/}
                        {/*            <label htmlFor="">Offense</label>*/}
                        {/*        </td>*/}
                        {/*        <td>*/}
                        {/*            <OffenseDropdown />*/}
                        {/*        </td>*/}
                        {/*    </tr>*/}
                        {/*    </tbody>*/}
                        {/*</table>*/}


                    </form>
                </div>
            </div>
        </div>


    );
    
}

 
export default Towing;