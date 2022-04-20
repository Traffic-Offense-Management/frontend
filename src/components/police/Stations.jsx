import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

const Stations = () => {


    const [policeStations, setPoliceStations] = useState([]);

    useEffect(() => {
    axios.get(`http://localhost:8080/policestations`)
        .then(res => {
            const result = res.data
            console.log(result);
            // console.log(policeDetails);
            setPoliceStations(result);  
        })
    }, []);

    return (

        <div>
            <select name="" id="police-station-id" className='towing-input form-control'>
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