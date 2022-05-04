import React from 'react';
import '../../css/public_user/comp.scss';
import axios from 'axios';

function Comp() {

    function getDateTime(){
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd
    }
    
    function handleSubmit(e) {
        console.log('Form submitted')
        e.preventDefault()
        
        let body = {
            // Police_id : document.getElementById('Police_id').value, 
            // dl_no : document.getElementById('Reciet_No').value,
            // vehicle_no : document.getElementById('vehicle-no').value,
            // police_id : 10004,
            // place : document.getElementById('place').value,
            // time : this.getDateTime(),
            // offense_no : document.getElementById('offense-no').value

            userId:'ctong0',
            // policeId:10000,
            stationId:1000,

            policeId: parseInt(document.getElementById('Police_id').value),



            description: document.getElementById('comment').value,
            status: 'Not Viewed',
            date: getDateTime()
        }
        console.log(body);
        axios.post('http://ec2-65-2-146-200.ap-south-1.compute.amazonaws.com:8080/complaints/new', body)
            .then(response => {
                console.log(response)
                alert('Offense successfully registered');

            }).catch(err => {
                console.log(err)
                alert('Invalid complaint')
            })
    }

    function alertmes(){
        alert('Your Complaint has been successfully registired.We will look into the complaint and get back to you soon')
    }
    return (<div className="con">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <div className="head">Complaint against Police</div>

        <div className="box">
            <div className="PoNa" id="poid">Police ID: <input type="text" id="Police_id" /></div>
            <div className="Re">Reciet Number: <input type="text" id='Reciet_No' /></div>
            <div className="des">Description:
                <div class="form-group">
                    <form>
                        <textarea class="form-control1" rows="8" cols="80" id="comment"></textarea>
                    </form>
                </div>
            </div>
            <div className="Pro">Attach file if any: <input className='fi' type="file" /></div>

            <div id="ab1">

                    <button type="button" class="btn btn-success" onClick={handleSubmit}>Submit</button>
                </div>
        </div>


    </div>);
}

export default Comp;