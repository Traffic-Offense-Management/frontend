import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'
import Menu from './Menu';
import '../../css/police/profile.css';
import logo from '../../images/police-logo.png';
import { useParams, useNavigate } from 'react-router-dom';
import Header from "./Header";

const PoliceProfile = () => {

    console.log(useParams());

    const [policeDetails, setPoliceDetails] = useState([]);

    let policeId;
    const navigate = useNavigate();

    useEffect(() => {
        let username = sessionStorage.getItem('username');
        policeId = sessionStorage.getItem('police_id');
        console.log('police id ', policeId);
        if(!policeId){
            // navigate('/police/login');
        }
        axios.get(`http://localhost:8080/police/${policeId}`)
        .then(res => {
            const policeDetails = res.data[0]
            console.log(policeDetails.dob);
            // console.log(policeDetails);
            setPoliceDetails(policeDetails);  
        })
    }, []);

    return (

        <div className="">
            <Header></Header>
            <div className='police'>

                <Menu selected="profile" policeId={policeId}/>

                <div className="profile">
                    <table className='profile-table table'>
                        <tbody>
                            <tr>
                                <td className='field'>Police Id</td>
                                <td>{policeDetails.police_id}</td>
                            </tr>
                            <tr>
                                <td className='field'>Name</td>
                                <td>{policeDetails.name}</td>
                            </tr>
                            <tr>
                                <td className='field'>Station</td>
                                <td>{policeDetails.station_name}</td>
                            </tr>
                            <tr>
                                <td className='field'>Date of birth</td>
                                <td>{policeDetails.dob ? policeDetails.dob.split('T')[0] : ""}</td>
                            </tr>
                            <tr>
                                <td className='field'>Address</td>
                                <td>{policeDetails.address}</td>
                            </tr>
                            <tr >
                                <td className='field'>Email</td>
                                <td>{policeDetails.email}</td>
                            </tr>
                            <tr >
                                <td className='field'>Phone</td>
                                <td>{policeDetails.phone_no}</td>
                            </tr>

                        </tbody>
                    </table>

                    <div>
                        <figure>
                            <img src={logo} alt="Police logo" className='police-image'/>
                        </figure>
                    </div>

                    
                    {/* <div className="profile-info">
                        <label>Police ID : </label>
                        <span id='police-id'>{policeDetails.police_id}</span>

                    </div>
                    <div className="profile-info">
                        <label>Name : </label>
                        <span id='name'>{policeDetails.name}</span>

                    </div>
                    <div className="profile-info">
                        <label>Station ID : </label>
                        <span id='station-id'>{policeDetails.station_id}</span>

                    </div>
                    <div className="profile-info">
                        <label>Date of Birth : </label>
                        <span id='dob'>{policeDetails.dob}</span>

                    </div>
                    <div className="profile-info">
                        <label>Address : </label>
                        <span id='address'>{policeDetails.address}</span>

                    </div>
                    <div className="profile-info">
                        <label>Email : </label>
                        <span id='email'>{policeDetails.email}</span>

                    </div> */}
                </div>
                
                
                
            </div>
        </div>

        
        
    )
}

export default PoliceProfile;