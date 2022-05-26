import React, { useState, useEffect } from "react";
import '../../css/public_user/PublicHome.scss';
// import Comp from "./comp";
import { Link } from 'react-router-dom';
import axios from "axios";
import './t1.png';


function PubHome() {
    let date = new Date();
    let day = date.getDate();
    let mon = date.getMonth();
    let ye = date.getFullYear();


    const [userdetails, setuserdetails] = useState([]);

    useEffect(() => {

        const username = localStorage.getItem('username');
        console.log('police id ', username);
        axios.get(`http://localhost:8080/user/${username}`)
            .then(res => {
                const userdetails = res.data[0]
                console.log(userdetails);
                // console.log(userdetails);
                setuserdetails(userdetails);
            })
    }, []);

    // let [body, setBody] = useState(null);

    return (
        <>

            <div className="q1">


                <div className="con">
                    <div className='headeruser'>
                        <div className='home'><Link to='/'>Home</Link></div>
                        <div className="head">User Complaints/Feedbacks</div>
                    </div>


                    <div className="im"><img src={require('./t1.png')} alt="" className="ima" /></div>

                    <div className="im"><img src={require('./t4.png')} alt="" className="ima1" /></div>




                    <div className="par" >" Accident brings tears, Safety Brings Cheers "</div>
                    <br />

                    <div className="new">
                        <div className="cont">
                            <div className="imag"><img src={require('./t3.jpg')} className='my-user-logo' alt="" /></div>

                            <div className="box">




                                {/*<div className="field">UserID</div><div className="usr inp">{userdetails.user_id}</div>*/}
                                {/*<br />*/}
                                <div className="field">Name </div><div className="na inp">{userdetails.name}</div>
                                <br />
                                <div className="field">Address </div><div className="addr inp">{userdetails.address}</div>
                                <br />
                                <div className="field">Vehicle No </div><div className="dat inp">{userdetails.vehicle_no}</div>
                                <br />
                                <div className="field">DL No </div><div className="dat inp">{userdetails.dl_no}</div>
                                <br />
                                <div className="field">Phone </div><div className="dat inp">{userdetails.phone}</div>

                                {/*<div className="field">Date: </div><div className="dat inp">{day}-{mon}-{ye}</div>*/}
                                <br />
                            </div>




                        </div>

                        <div className="box1">
                            <div className='histories'>
                                <div className="topic"> <Link to={'/CompPO'}>Complaint against Police Officer</Link></div>
                                {/* <div className="cap" > <a href="#userd>Complaint against userdOfficer</a></div> */}
                                <div className="topic"><Link to={'/Mal'}>Traffic System Malfunctions</Link></div>
                                <div className="topic"><Link to={'/Historye'}>Find Your Vehicle if towed</Link></div>
                            </div>

                            <div className='histories'>
                                <div className="topic"><Link to={'/History'}>Offense History</Link></div>
                                <div className="topic"><Link to={'/Complaints'}>Complaint History</Link></div>
                            </div>

                        </div>

                        {/* <div className="box2">
                <div className="cap"><Link to={'/History'}>Offense list</Link></div>
                </div> */}

                    </div>

                </div>
                {/* <div className="srr" id="userd>{getBody(body)}</div> */}

                <div className="bodyuser">

                    <div className="oi"><i className="bi bi-exclamation-triangle"></i>Something Important, have a look at this</div>
                    <br />
                    <div className="headuser">Factors which should be kept in mind to avoid road traffic injuries:-</div>

                    <ol>
                        <li>Enforcement plays an important role to the success of road safety laws</li>
                        <li>Reduce speed while driving</li>
                        <li>Increasing motorcycle crash helmet use</li>
                        <li>Stop drink and drug - driving</li>
                        <li>Increase seat-belt use</li>
                        <li>Increase child restraint use</li>
                        <li>Reduce distracted driving</li>
                        <li>Enhance public</li>
                    </ol>
                </div>


            </div>
        </>
    );
}

export default PubHome;