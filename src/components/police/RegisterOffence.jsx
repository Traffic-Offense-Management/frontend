import React, { Component, useEffect} from 'react';
import '../../css/police/new-offense.css'
import axios from 'axios';
import Menu from './Menu';
import OffenseDropdown from './OffensesDropdown';
import { useNavigate } from 'react-router';


const RegisterOffence = () => {

    let policeId;
    const navigate = useNavigate();

    useEffect(() => {
        let username = localStorage.getItem('username');
        policeId = localStorage.getItem('police_id');
        console.log('police id ', policeId);
        if(!policeId){
            navigate('/police/login');
        }
    })
    function getDateTime(){
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd
    }
    
    function handleSubmit(event) {
        console.log('Form submitted')
        event.preventDefault()
        
        let body = {
            name : document.getElementById('name').value, 
            dl_no : document.getElementById('dl-no').value,
            vehicle_no : document.getElementById('vehicle-no').value,
            police_id : policeId,
            place : document.getElementById('place').value,
            time : getDateTime(),
            offense_no : document.getElementById('offense-no').value
        }
        console.log(body);
        axios.post('http://localhost:8080/police/offenses/new', body)
            .then(response => {
                console.log(response)
                alert('Offense successfully registered');

            }).catch(err => {
                console.log(err)
                alert('Invalid complaint')
            });
    }


    return (
        <div className='new-offense my-bg'>
            <Menu selected='new-offense'/>
            <div className='new-offense-form'>

                <div className="head center">
                    <h4>Offense Registration Form</h4>
                </div>
                
                <form  onSubmit={handleSubmit}>
    
                    <table className='new-offense-form-table'>
                        <tbody>
                            <tr>                                
                                <td>
                                    <label htmlFor="">Name</label>
                                </td>
                                <td>
                                    <input required type="text" name="" id="name" className='offense-input form-control'/>
                                </td>                            
                            </tr>
    
                            <tr>
                                
                                <td>
                                    <label htmlFor="">DL No</label>
                                </td>
                                <td>
                                    <input  type="text" name="" id="dl-no" className='offense-input form-control'/>
                                </td>                            
                            </tr>
    
                            <tr>
                                
                                <td>
                                    <label htmlFor="">Vehicle No</label>
                                </td>
                                <td>
                                    <input required type="text" name="" id="vehicle-no" className='offense-input form-control'/>
                                </td>                            
                            </tr>
    
                            <tr>
                                
                                <td>
                                    <label htmlFor="">Place</label>
                                </td>
                                <td>
                                    <input required type="text" name="" id="place" className='offense-input form-control'/>
                                </td>                            
                            </tr>

                            <tr>
                                
                                <td>
                                    <label htmlFor="">Offense</label>
                                </td>
                                <td>
                                    <OffenseDropdown />
                                    
                                </td>                            
                            </tr>
                        </tbody>
                    </table>
                    <div className="submit submit-btn">
                        <input type="submit" value='Submit' className='btn btn-danger'/>  

                    </div>
                    
                </form>
            </div>
        </div>
        
    );
    
}

 
export default RegisterOffence;