import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import '../../css/police/towing.css'

const Stations = () => {


    const [policeStations, setPoliceStations] = useState([]);

    useEffect(() => {
    axios.get(`http://ec2-65-2-146-200.ap-south-1.compute.amazonaws.com:8080/policestations`)
        .then(res => {
            const result = res.data
            console.log(result);
            // console.log(policeDetails);
            setPoliceStations(result);  
        })
    }, []);

    return (

        <div>
            <select name="" id="police-station-id" className='offense-input form-control'>
                {policeStations.map(station => {
                    return (
                        <option value={station.station_id}>{station.station_name}</option>
                    )
                })}
            </select>
            
        </div>
    )
}

export default Stations;