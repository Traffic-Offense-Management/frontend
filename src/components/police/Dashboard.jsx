import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Menu from "./Menu";
import '../../css/police/dashboard.css'


const Dashboard = () => {

    const [dashboardDetails, setDashboardDetails] = useState([]);

    let policeId;
    const navigate = useNavigate();

    useEffect(() => {
        let username = sessionStorage.getItem('username');
        policeId = sessionStorage.getItem('police_id');
        console.log('police id ', policeId);
        if(!policeId){
            // navigate('/police/login');
        }
        axios.get(`http://ec2-65-2-146-200.ap-south-1.compute.amazonaws.com:8080/police/${policeId}/dashboard`)
            .then(res => {
                const dashboardDetails = res.data;
                console.log(dashboardDetails);
                // console.log(dashboardDetails);
                setDashboardDetails(dashboardDetails);
            })
    }, []);

    return (

        <div className="">
            <Header></Header>
            <div className='police'>

                <Menu selected="dashboard" policeId={policeId}/>

                <div className='dashboard'>
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        Welcome {dashboardDetails.name}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className='cards-with-title'>
                        <div className='cards-title'>
                            Today
                        </div>
                        <div className='dashboard-cards'>
                            <div className='dashboard-card'>
                                <div className='fig'>
                                    <i className="bi bi-clock-history dashboard-icon"></i>
                                </div>
                                <div className='info'>
                                    <h5 className=''>Offenses</h5>
                                    <div className='detail'>{dashboardDetails.num_offenses_today}</div>
                                </div>
                            </div>

                            <div className='dashboard-card'>
                                <div className='fig'>
                                    <i className="fa fa-rupee dashboard-icon"></i>
                                </div>
                                <div className='info'>
                                    <h5 className=''>Fine collected</h5>
                                    <div className='detail'>{dashboardDetails.total_fine_today ? dashboardDetails.total_fine_today : 0}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='cards-with-title'>
                        <div className='cards-title'>
                            This month
                        </div>
                        <div className='dashboard-cards'>
                            <div className='dashboard-card'>
                                <div className='fig'>
                                    <i className="bi bi-clock-history dashboard-icon"></i>
                                </div>
                                <div className='info'>
                                    <h5 className=''>Offenses</h5>
                                    <div className='detail'>{dashboardDetails.num_offenses_month}</div>
                                </div>
                            </div>

                            <div className='dashboard-card'>
                                <div className='fig'>
                                    <i className="fa fa-rupee dashboard-icon"></i>
                                </div>
                                <div className='info'>
                                    <h5 className=''>Fine collected</h5>
                                    <div className='detail'>{dashboardDetails.total_fine_month ? dashboardDetails.total_fine_month : 0}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </div>



    )
}

export default Dashboard;