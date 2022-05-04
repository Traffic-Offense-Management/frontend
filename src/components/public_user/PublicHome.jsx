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
        axios.get(`http://ec2-65-2-146-200.ap-south-1.compute.amazonaws.com:8080/user/${username}`)
            .then(res => {
                const userdetails = res.data[0]
                console.log(userdetails.dob);
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


                <div className="im"><img src={require('./t1.png')} alt="" className="ima"/></div>




                <div className="par" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, exercitationem architecto similique porro nemo modi quam quis harum explicabo accusantium tenetur asperiores facere? Ad totam assumenda laborum provident commodi quam!</div>

                <div className="new">
                    <div className="box">
                        <div className="field">UserID: </div><div className="usr inp">{userdetails.user_id}</div>
                        <br />
                        <div className="field">Name: </div><div className="na inp">{userdetails.name}</div>
                        <br />
                        <div className="field">Address: </div><div className="addr inp">{userdetails.address}</div>
                        <br />
                        <div className="field">Date: </div><div className="dat inp">{day}-{mon}-{ye}</div>
                        <br />
                    </div>

                    <div className="box1">
                        <div className="cap"> <Link to={'/CompPO'}>Complaint against userdOfficer</Link></div>
                        {/* <div className="cap" > <a href="#userd>Complaint against userdOfficer</a></div> */}
                        <div className="mal"><Link to={'/Mal'}>Traffic System Malfunctions</Link></div>
                        <div className="oth"><Link to={'/Historye'}>Find Your Vehicle if towed</Link></div>
                        <div className="cap1"><Link to={'/History'}>Offense History</Link></div>
                    </div>

                    {/* <div className="box2">
                <div className="cap"><Link to={'/History'}>Offense list</Link></div>
                </div> */}

                </div>

            </div>
            {/* <div className="srr" id="userd>{getBody(body)}</div> */}


            </div>
        </>
    );
}

export default PubHome;