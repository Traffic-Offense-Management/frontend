import React, { useRef } from 'react';
import '../../css/public_user/Mal.scss';
import axios from 'axios';



function Mal() {
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
            


            pincode: parseInt(document.getElementById('ar').value),

            problem: document.getElementById('comment').value,

            descript: document.getElementById('comment1').value,
            date: getDateTime()
        }
        console.log(body);
        axios.post('http://localhost:8080/publichome/malfunction', body)
            .then(response => {
                console.log(response)
                alert('Complaint successfully registered');

            }).catch(err => {
                console.log(err)
                alert('Invalid complaint')
            })
    }

    

    const v=useRef();

    function alertmessage() {
        alert('Your Query is Submitted successfully.We will get back to you soon')
        // v.current.style.display="block";
    }

    

    return (
        <>

            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
            <div className="con">
                <div className="head">Traffic System Malfunctions</div>
                <div className="box">
                    <div className="PoNa" id=''>Area Pincode: <input type="text" name="" id="ar" /> </div>
                    <div className="Re">Problem Faced from: <div class="form-group">
                        <form>
                            <textarea class="form-control1" rows="3" cols="50" id="comment"></textarea>
                        </form>
                    </div></div>
                    <div className="des">Description: <div class="form-group">
                        <form>
                            <textarea className="form-control1" rows="10" cols="80" id="comment1"></textarea>
                        </form>
                    </div></div>
                    <div className="pro">Please add photos for proof: <input type="file" name="" id="" /></div>


                    <div id="ab1">

                        <button type="button" className="btn btn-success" onClick={handleSubmit}>Submit</button>

                    </div>
                </div>

                {/* <div className="me" ref={v}>We will get back to you soon</div> */}

            </div>
        </>
    );
}

export default Mal;